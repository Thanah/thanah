import headshot400 from '../assets/headshot-400.webp'
import headshot800 from '../assets/headshot-800.webp'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon, ShieldIcon } from './Icons'
import { ExternalLink } from './Section'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-20 md:grid-cols-[1fr_auto] md:pb-28">
      <div>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-ink">
            <ShieldIcon className="text-accent" />
            {profile.clearance}
          </span>
        </p>
        <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl text-accent sm:text-2xl">{profile.role}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.headline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            <MailIcon width={18} height={18} />
            Get in touch
          </a>
          <ExternalLink
            href={profile.links.linkedin}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </ExternalLink>
          <ExternalLink
            href={profile.links.github}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <GitHubIcon />
            <span className="sr-only">GitHub</span>
          </ExternalLink>
        </div>
      </div>

      <img
        src={headshot800}
        srcSet={`${headshot400} 400w, ${headshot800} 800w`}
        sizes="(min-width: 768px) 320px, 70vw"
        width={800}
        height={1000}
        alt={`Portrait of ${profile.name}`}
        className="mx-auto w-64 rounded-2xl border border-line object-cover sm:w-72 md:w-80"
        fetchPriority="high"
      />
    </section>
  )
}
