import { profile } from '../data/profile'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/60 bg-bg/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-lg font-medium tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex gap-4 text-sm text-muted sm:gap-7">
            {nav.map((item) => (
              <li key={item.href} className={item.href === '#experience' ? 'hidden sm:block' : undefined}>
                <a href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
