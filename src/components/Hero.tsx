import { useRef, type CSSProperties } from 'react'
import headshot400 from '../assets/headshot-400.webp'
import headshot800 from '../assets/headshot-800.webp'
import { profile, stats } from '../data/profile'
import { useCountUp, useRotatingIndex, useTilt } from '../hooks/motion'
import { GitHubIcon, LinkedInIcon, MailIcon, ShieldIcon } from './Icons'
import { ExternalLink } from './Section'

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null)
  useTilt(photoRef)
  const roleIndex = useRotatingIndex(profile.roles.length)
  const role = profile.roles[roleIndex]

  return (
    <section id="top" className="relative isolate overflow-x-clip">
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="dot-grid" aria-hidden="true" />

      <div className="mx-auto grid max-w-5xl items-center gap-14 px-4 pb-16 pt-14 sm:px-6 sm:pt-24 md:grid-cols-[1fr_auto]">
        <div data-reveal>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted">
            <span>{profile.location}</span>
            <span aria-hidden="true" className="text-accent">
              /
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-2.5 py-1 normal-case tracking-normal text-ink backdrop-blur">
              <ShieldIcon className="text-accent" />
              {profile.clearance}
            </span>
          </p>

          <h1 className="text-gradient mt-7 pb-1 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 h-9 text-xl sm:text-2xl">
            <span className="sr-only">{profile.roles[0]}</span>
            <span aria-hidden="true" className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span key={role} className="role-in inline-block text-accent">
                {role}
              </span>
            </span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.headline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2.5 font-medium text-accent-ink shadow-[0_10px_40px_-10px_rgb(var(--glow)/0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-8px_rgb(var(--glow)/1)]"
            >
              <MailIcon width={18} height={18} />
              Get in touch
            </a>
            <ExternalLink
              href={profile.links.linkedin}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface/60 text-muted backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:text-ink"
            >
              <LinkedInIcon />
              <span className="sr-only">LinkedIn</span>
            </ExternalLink>
            <ExternalLink
              href={profile.links.github}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface/60 text-muted backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:text-ink"
            >
              <GitHubIcon />
              <span className="sr-only">GitHub</span>
            </ExternalLink>
          </div>
        </div>

        <div data-reveal style={{ '--reveal-delay': '150ms' } as CSSProperties} className="relative mx-auto">
          <div ref={photoRef} className="tilt glow-frame w-64 sm:w-72 md:w-80">
            <img
              src={headshot800}
              srcSet={`${headshot400} 400w, ${headshot800} 800w`}
              sizes="(min-width: 768px) 320px, 70vw"
              width={800}
              height={1000}
              alt={`Portrait of ${profile.name}`}
              className="block w-full rounded-[calc(1.25rem-1px)] bg-bg object-cover"
              fetchPriority="high"
            />
          </div>
          <p className="absolute -bottom-4 -left-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-sm shadow-lg backdrop-blur sm:-left-8">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.currently}
          </p>
        </div>
      </div>

      <StatsBand />
    </section>
  )
}

function StatsBand() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 md:pb-28">
      <dl
        data-reveal
        className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface/50 backdrop-blur md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <Stat key={stat.label} {...stat} className={statBorders[i]} />
        ))}
      </dl>
    </div>
  )
}

// Hairlines between cells for the 2x2 (mobile) and 1x4 (desktop) grids.
const statBorders = ['border-b border-r md:border-b-0', 'border-b md:border-b-0 md:border-r', 'border-r', '']

function Stat({ value, suffix, label, className }: { value: number; suffix: string; label: string; className: string }) {
  const { ref, value: shown } = useCountUp<HTMLElement>(value)
  return (
    <div className={`border-line p-5 sm:p-6 ${className}`}>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span ref={ref} className="font-display text-3xl font-medium tabular-nums sm:text-4xl">
          {shown}
          <span className="text-accent">{suffix}</span>
        </span>
        <span aria-hidden="true" className="mt-2 block text-sm leading-snug text-muted">{label}</span>
      </dd>
    </div>
  )
}
