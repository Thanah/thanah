import { photos } from '../data/photos'
import { education, profile, skills } from '../data/profile'
import { ArrowUpRightIcon } from './Icons'
import { PhotoCaption, PhotoImg } from './Photo'
import { ExternalLink, Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering with the client in the room">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div data-reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="flex items-center gap-3 pt-2 text-base">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Education</span>
            <span>
              <span className="text-ink">{education.degree}</span>, {education.school}, {education.year}
            </span>
          </p>
        </div>

        <dl data-reveal className="space-y-6" aria-label="Skills">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <dt className="font-mono text-xs uppercase tracking-widest text-ink">{group}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <OffTheClock />
      <Now />
    </Section>
  )
}

function OffTheClock() {
  const { title, body, links } = profile.offTheClock
  return (
    <div data-reveal className="mt-20 grid items-center gap-10 md:grid-cols-[2fr_3fr]">
      <figure className="mx-auto w-full max-w-sm">
        <div className="glow-frame">
          <PhotoImg
            photo={photos.me}
            sizes="(min-width: 768px) 384px, 90vw"
            className="block aspect-[4/5] w-full rounded-[calc(1.25rem-1px)] object-cover"
          />
        </div>
        <figcaption>
          <PhotoCaption photo={photos.me} className="mt-4 text-muted" />
        </figcaption>
      </figure>
      <div>
        <h3 className="font-display text-3xl font-medium">{title}</h3>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
          {body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-5">
          {links.map((link) => (
            <ExternalLink
              key={link.href}
              href={link.href}
              className="group/link inline-flex items-center gap-1.5 font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              {link.label}
              <ArrowUpRightIcon className="transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  )
}

// A dated "now" snapshot. Unfilled entries are skipped rather than shown empty.
function Now() {
  const items = profile.now.items.filter((item) => item.text)
  if (items.length === 0) return null
  return (
    <div data-reveal className="mt-20 rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl font-medium">Now</h3>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Updated {profile.now.updated}</p>
      </div>
      <dl className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-xs uppercase tracking-widest text-accent">{item.label}</dt>
            <dd className="mt-1 leading-relaxed text-muted">{item.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
