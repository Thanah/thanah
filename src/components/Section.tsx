import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: number
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-linear-to-r from-transparent via-line to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div data-reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>{String(index).padStart(2, '0')}</span>
            <span className="h-px w-10 bg-linear-to-r from-accent to-transparent" aria-hidden="true" />
            <span className="text-muted">{eyebrow}</span>
          </p>
          <h2 id={`${id}-title`} className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

export function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
