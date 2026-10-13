import { projects, type Project } from '../data/profile'
import { ArrowUpRightIcon } from './Icons'
import { ExternalLink, Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I’ve built">
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
      className={`grid overflow-hidden rounded-2xl border border-line bg-surface ${
        project.featured ? '' : 'md:grid-cols-[1fr_1.1fr]'
      }`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={750}
        loading="lazy"
        className={`aspect-[8/5] w-full object-cover object-top ${project.featured ? 'border-b border-line' : 'h-full md:order-2'}`}
      />
      <div className={`grid gap-6 p-6 sm:p-8 ${project.featured ? 'md:grid-cols-2 md:gap-10' : ''}`}>
        <div className="flex flex-col">
          <p className="text-sm text-accent">{project.kind}</p>
          <h3 className="mt-2 font-display text-2xl font-medium">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-auto flex flex-wrap gap-5 pt-6">
            {project.links.map((link) => (
              <ExternalLink
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                {link.label}
                <ArrowUpRightIcon />
              </ExternalLink>
            ))}
          </div>
        </div>
        <div>
          <ul className="space-y-2 text-sm text-muted">
            {project.highlights.map((point) => (
              <li key={point} className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:size-1 before:rounded-full before:bg-accent">
                {point}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
