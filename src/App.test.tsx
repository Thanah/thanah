import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { profile, projects } from './data/profile'

describe('App', () => {
  it('introduces Thanah with name, role and clearance', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(screen.getAllByText(profile.role).length).toBeGreaterThan(0)
    expect(screen.getByText(profile.clearance)).toBeInTheDocument()
  })

  it('links every nav item to a section that exists', () => {
    const { container } = render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of within(nav).getAllByRole('link')) {
      const id = link.getAttribute('href')!.slice(1)
      expect(container.querySelector(`#${id}`), `#${id}`).not.toBeNull()
    }
  })

  it('uses the professional email for every mailto link', () => {
    const { container } = render(<App />)
    const mailtos = container.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]')
    expect(mailtos.length).toBeGreaterThan(0)
    for (const link of mailtos) expect(link.href).toBe('mailto:thanah.rav@gmail.com')
  })

  it('opens external links safely in a new tab', () => {
    const { container } = render(<App />)
    const external = container.querySelectorAll<HTMLAnchorElement>('a[href^="http"]')
    expect(external.length).toBeGreaterThan(0)
    for (const link of external) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link.rel).toContain('noopener')
    }
  })

  it('gives every project a link or screenshots to look at', () => {
    render(<App />)
    for (const project of projects) {
      const card = screen.getByRole('heading', { level: 3, name: project.name }).closest('article')!
      const ways = within(card).queryAllByRole('link').length + within(card).queryAllByRole('button').length
      expect(ways, project.name).toBeGreaterThan(0)
    }
  })

  it('opens a gallery screenshot full size', () => {
    render(<App />)
    const project = projects.find((p) => p.gallery)!
    const shot = project.gallery![0]
    fireEvent.click(screen.getByRole('button', { name: `View ${shot.caption} screenshot full size` }))
    expect(screen.getAllByAltText(shot.alt).some((img) => img.getAttribute('src') === shot.src)).toBe(true)
  })

  it('never publishes a phone number', () => {
    const { container } = render(<App />)
    expect(container.textContent).not.toMatch(/\d{3}[-.\s)]+\d{3}[-.\s]+\d{4}/)
    expect(container.querySelector('a[href^="tel:"]')).toBeNull()
  })

  it('gives every image alt text', () => {
    render(<App />)
    for (const img of screen.getAllByRole('img')) expect(img).toHaveAccessibleName()
  })
})
