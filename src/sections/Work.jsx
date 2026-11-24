import { motion } from 'motion/react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { projects } from '@/data/content'
import { cn } from '@/lib/utils'

function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Screenshot in a minimal browser frame; a typographic stand-in if there's no image. */
function Shot({ project, className }) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-line bg-ink shadow-2xl shadow-black/40', className)}>
      <div className="flex items-center gap-1.5 border-b border-line bg-night px-3 py-2" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate font-mono text-[11px] text-mist">
          {project.live ? project.live.replace('https://', '') : project.repo.replace('https://github.com/', 'github.com/')}
        </span>
      </div>
      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      ) : project.apiPreview ? (
        <div className="grid aspect-[16/10] w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#1a2337,transparent_60%)]">
          <pre className="font-mono text-sm leading-relaxed text-mist" aria-label={`${project.name} is an API, so there's no screen to show`}>
            <span className="text-leaf">GET</span> /api/tasks{'\n'}
            <span className="text-ochre">200</span> {'{ "tasks": [ … ] }'}
          </pre>
        </div>
      ) : (
        <div className="grid aspect-[16/10] w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#1a2337,transparent_60%)]">
          <span className="font-display text-5xl text-line" aria-hidden="true">
            {project.name}
          </span>
        </div>
      )}
    </div>
  )
}

function Links({ project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ochre px-5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          Live site <span aria-hidden="true">↗</span>
          <span className="sr-only">for {project.name} (opens in a new tab)</span>
        </a>
      )}
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold text-paper transition-colors hover:border-ochre/60"
      >
        Code <span aria-hidden="true">↗</span>
        <span className="sr-only">for {project.name} on GitHub (opens in a new tab)</span>
      </a>
    </div>
  )
}

function Stack({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {items.map((s) => (
        <li key={s} className="rounded-full border border-leaf/30 bg-leaf/10 px-2.5 py-0.5 font-mono text-xs text-[#9fd3bd]">
          {s}
        </li>
      ))}
    </ul>
  )
}

function Featured({ project }) {
  return (
    <Reveal>
      <article aria-labelledby={`${project.slug}-title`} className="grid min-w-0 items-center gap-10 rounded-3xl border border-line bg-night/60 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
        <CardContainer containerClassName="py-0" className="w-full">
          <CardBody className="h-auto w-full">
            <CardItem translateZ={40} className="w-full">
              <Shot project={project} />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className="flex min-w-0 flex-col gap-5">
          <p className="font-mono text-xs tracking-widest text-ochre uppercase">{project.kind}</p>
          <h3 id={`${project.slug}-title`} className="font-display text-4xl text-paper">
            {project.name}
          </h3>
          <p className="text-lg text-paper/90">{project.tagline}</p>
          <dl className="flex flex-col gap-3 text-sm">
            <div>
              <dt className="font-semibold text-paper">The problem</dt>
              <dd className="text-mist">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-paper">My role</dt>
              <dd className="text-mist">{project.role}</dd>
            </div>
          </dl>
          <ul className="flex flex-col gap-1.5 text-sm text-mist">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden="true" className="text-ochre">→</span>
                {h}
              </li>
            ))}
          </ul>
          <Stack items={project.stack} />
          <Links project={project} />
        </div>
      </article>
    </Reveal>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08} className="h-full min-w-0">
      <article
        aria-labelledby={`${project.slug}-title`}
        className="group flex h-full min-w-0 flex-col gap-5 rounded-2xl border border-line bg-night/50 p-5 transition-colors hover:border-ochre/40"
      >
        <Shot project={project} className="transition-transform duration-500 group-hover:-translate-y-1" />
        <div className="flex flex-1 flex-col gap-3">
          <p className="font-mono text-xs tracking-widest text-mist uppercase">{project.kind}</p>
          <h3 id={`${project.slug}-title`} className="font-display text-2xl text-paper">
            {project.name}
          </h3>
          <p className="text-paper/85">{project.tagline}</p>
          <p className="text-sm text-mist">
            <span className="font-semibold text-paper">Problem: </span>
            {project.problem}
          </p>
          <p className="text-sm text-mist">
            <span className="font-semibold text-paper">Role: </span>
            {project.role}
          </p>
          <div className="mt-auto flex flex-col gap-4 pt-2">
            <Stack items={project.stack} />
            <Links project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Work() {
  const [featured, ...rest] = projects
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-widest text-ochre uppercase">Selected work</p>
          <h2 id="work-heading" className="mt-2 font-display text-4xl text-paper sm:text-5xl">
            Things I’ve built
          </h2>
        </div>
        <p className="max-w-sm text-mist">Real problems, shipped with tests. Each one is live or on GitHub.</p>
      </div>
      <Featured project={featured} />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
