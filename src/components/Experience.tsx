import { experience } from '../data/profile'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
            <div>
              <h3 className="font-display text-2xl font-medium">{job.company}</h3>
              <p className="mt-1 text-sm text-muted">{job.location}</p>
            </div>
            <div>
              <ul className="space-y-2">
                {job.roles.map((role) => (
                  <li key={role.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="font-medium">{role.title}</span>
                    <span className="text-sm tabular-nums text-muted">
                      {role.start} – {role.end}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-3 text-muted">
                {job.highlights.map((point) => (
                  <li key={point} className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-accent">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
