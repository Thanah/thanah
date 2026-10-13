import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { ExternalLink, Section } from './Section'

const year = new Date().getFullYear()

export function Contact() {
  return (
    <>
      <Section id="contact" eyebrow="Contact" title="Let’s talk">
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-muted">
            Whether it’s a role, a project, or a question about something here, email is the best way to reach me.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-3 font-display text-2xl font-medium underline decoration-accent decoration-2 underline-offset-8 hover:text-accent sm:text-3xl"
          >
            <MailIcon className="text-accent" width={26} height={26} />
            {profile.email}
          </a>
          <div className="mt-10 flex gap-6 text-muted">
            <ExternalLink href={profile.links.linkedin} className="inline-flex items-center gap-2 hover:text-ink">
              <LinkedInIcon /> LinkedIn
            </ExternalLink>
            <ExternalLink href={profile.links.github} className="inline-flex items-center gap-2 hover:text-ink">
              <GitHubIcon /> GitHub
            </ExternalLink>
          </div>
        </div>
      </Section>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-4 py-8 text-sm text-muted sm:px-6">
          <p>
            © {year} {profile.name}
          </p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  )
}
