import { photos } from '../data/photos'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { PhotoBackdrop, PhotoCaption } from './Photo'
import { ExternalLink, Section } from './Section'

const year = new Date().getFullYear()

export function Contact() {
  return (
    <>
      <Section id="contact" eyebrow="Contact" title="Let’s talk">
        <div data-reveal className="glow-frame">
          <div className="relative isolate overflow-hidden rounded-[calc(1.25rem-1px)] bg-surface px-6 py-12 sm:px-12 sm:py-16">
            <PhotoBackdrop photo={photos.contact} strong />
            <div className="aurora opacity-40" aria-hidden="true">
              <span />
              <span />
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink/85">{profile.contact.blurb}</p>
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
            <PhotoCaption photo={photos.contact} label="Background photo" className="mt-12 text-muted" />
          </div>
        </div>
      </Section>
      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink">Colophon</h2>
            <p className="mt-3 max-w-xl leading-relaxed">
              The landscape photos are mine. The site is built with React, TypeScript, Tailwind CSS and Vite, and the
              text is set in Fraunces and Inter. Its tests fail the build if an image loses its alt text, an external
              link stops opening safely, or a phone number slips in.{' '}
              <ExternalLink href={profile.links.source} className="text-ink underline decoration-accent underline-offset-4 hover:text-accent">
                Source on GitHub
              </ExternalLink>
              .
            </p>
          </div>
          <p className="font-mono text-xs md:text-right">
            © {year} {profile.name}
          </p>
        </div>
      </footer>
    </>
  )
}
