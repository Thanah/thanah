import { education, profile, skills } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" index={1} eyebrow="About" title="Engineering with the client in the room">
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
    </Section>
  )
}
