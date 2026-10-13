import { education, profile, skills } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering with the client in the room">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="text-base">
            <span className="text-ink">{education.degree}</span>, {education.school}, {education.year}
          </p>
        </div>

        <dl className="space-y-6" aria-label="Skills">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <dt className="text-sm font-medium text-ink">{group}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted">
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
