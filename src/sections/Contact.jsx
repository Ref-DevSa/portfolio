import { InteractiveHoverButton } from '@/components/block/interactive-hover-button'
import { person } from '@/data/content'

export function Contact() {
  const channels = [
    person.email && { label: 'Email', value: person.email, href: `mailto:${person.email}` },
    person.linkedin && { label: 'LinkedIn', value: person.linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: person.linkedin },
    { label: 'GitHub', value: person.github.replace('https://', ''), href: person.github },
  ].filter(Boolean)

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-20 overflow-hidden border-t border-line/60 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-ochre/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs tracking-widest text-ochre uppercase">Contact</p>
        <h2 id="contact-heading" className="mt-2 max-w-3xl font-display text-4xl text-paper sm:text-6xl">
          Let’s build something people can rely on.
        </h2>
        <p className="mt-5 max-w-xl text-mist">{person.lookingFor}</p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex h-full flex-col gap-1 rounded-2xl border border-line bg-night/60 p-5 transition-colors hover:border-ochre/50"
              >
                <span className="font-mono text-xs tracking-widest text-mist uppercase">{c.label}</span>
                <span className="break-all text-paper">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>

        {person.cv && (
          <div className="mt-8">
            <a href={person.cv} download className="inline-block" aria-label="Download my CV (PDF)">
              <InteractiveHoverButton tabIndex={-1} className="border-ochre/50 text-paper">
                Download CV
              </InteractiveHoverButton>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
