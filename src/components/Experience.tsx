import { experience } from '../data/profile'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" index={2} eyebrow="Experience" title="Where I’ve worked">
      {/* Timeline: a fading wine line with a glowing node per employer. */}
      <ol className="relative space-y-14 before:absolute before:bottom-0 before:left-[5px] before:top-2 before:w-px before:bg-linear-to-b before:from-accent before:via-line before:to-transparent">
        {experience.map((job, i) => (
          <li key={job.company} data-reveal className="relative grid gap-4 pl-10 md:grid-cols-[13rem_1fr] md:gap-10">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-2 size-[11px] rounded-full border-2 border-bg ${
                i === 0 ? 'bg-accent shadow-[0_0_0_4px_rgb(var(--glow)/0.25),0_0_24px_rgb(var(--glow)/0.9)]' : 'bg-line'
              }`}
            />
            <div>
              <h3 className="font-display text-2xl font-medium">{job.company}</h3>
              <p className="mt-1 text-sm text-muted">{job.location}</p>
            </div>
            <div>
              <ul className="space-y-2">
                {job.roles.map((role) => (
                  <li key={role.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="font-medium">{role.title}</span>
                    <span className="font-mono text-xs tabular-nums text-muted">
                      {role.start} – {role.end}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-3 text-muted">
                {job.highlights.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent"
                  >
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
