import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { ExternalLink, Section } from './Section'

const year = new Date().getFullYear()

export function Contact() {
  return (
    <>
      <Section id="contact" index={4} eyebrow="Contact" title="Let’s talk">
        <div data-reveal className="glow-frame">
          <div className="relative isolate overflow-hidden rounded-[calc(1.25rem-1px)] bg-surface px-6 py-12 sm:px-12 sm:py-16">
            <div className="aurora opacity-60" aria-hidden="true">
              <span />
              <span />
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Whether it’s a role, a project, or a question about something here, email is the best way to reach me.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex flex-wrap items-center gap-3 break-all font-display text-2xl font-medium underline decoration-accent decoration-2 underline-offset-8 transition hover:text-accent sm:text-4xl"
            >
              <MailIcon className="shrink-0 text-accent" width={28} height={28} />
              {profile.email}
            </a>
            <div className="mt-10 flex gap-6 text-muted">
              <ExternalLink href={profile.links.linkedin} className="inline-flex items-center gap-2 transition hover:text-ink">
                <LinkedInIcon /> LinkedIn
              </ExternalLink>
              <ExternalLink href={profile.links.github} className="inline-flex items-center gap-2 transition hover:text-ink">
                <GitHubIcon /> GitHub
              </ExternalLink>
            </div>
          </div>
        </div>
      </Section>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-4 py-8 font-mono text-xs text-muted sm:px-6">
          <p>
            © {year} {profile.name}
          </p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  )
}
