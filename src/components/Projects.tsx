import { projects, type Project } from '../data/profile'
import { trackPointer } from '../hooks/motion'
import { ArrowUpRightIcon } from './Icons'
import { ExternalLink, Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" index={3} eyebrow="Projects" title="Things I’ve built">
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}

// The featured project stacks its screenshot full width so a whole website
// stays readable; other projects sit beside their image.
function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-reveal
      onPointerMove={trackPointer}
      className={`spotlight group grid overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_80px_-30px_rgb(var(--glow)/0.6)] ${
        project.featured ? '' : 'md:grid-cols-[1fr_1.1fr]'
      }`}
    >
      <div className={`relative overflow-hidden ${project.featured ? 'border-b border-line' : 'md:order-2'}`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={750}
          loading="lazy"
          className={`aspect-[8/5] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] ${project.featured ? '' : 'h-full'}`}
        />
        {project.featured && (
          <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white backdrop-blur">
            Featured
          </span>
        )}
      </div>
      <div className={`relative z-[2] grid content-start gap-6 p-6 sm:p-8 ${project.featured ? 'md:grid-cols-2 md:gap-10' : ''}`}>
        <div className="flex flex-col">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.kind}</p>
          <h3 className="mt-3 font-display text-3xl font-medium">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-auto flex flex-wrap gap-5 pt-6">
            {project.links.map((link) => (
              <ExternalLink
                key={link.href}
                href={link.href}
                className="group/link inline-flex items-center gap-1.5 font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                {link.label}
                <ArrowUpRightIcon className="transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </ExternalLink>
            ))}
          </div>
        </div>
        <div>
          <ul className="space-y-2 text-sm text-muted">
            {project.highlights.map((point) => (
              <li
                key={point}
                className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2.5 before:bg-accent"
              >
                {point}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
