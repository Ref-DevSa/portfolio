import { DraggableMarquee } from '@/components/block/draggable-marquee'
import { skills } from '@/data/content'

const all = Object.values(skills).flat()

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs tracking-widest text-ochre uppercase">Skills</p>
        <h2 id="skills-heading" className="mt-2 font-display text-4xl text-paper sm:text-5xl">
          My toolkit
        </h2>
      </div>

      {/* Decorative strip (drag it); the full list below is what screen readers use. */}
      <div aria-hidden="true" className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <DraggableMarquee
          items={all.map((name) => ({ id: name, src: name }))}
          speed={0.6}
          gapClassName="gap-3"
          itemClassName=""
          label="Skills"
          renderItem={(item) => (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-night px-4 py-2 font-mono text-sm whitespace-nowrap text-paper">
              <span className="size-1.5 rounded-full bg-ochre" />
              {item.src}
            </span>
          )}
        />
      </div>

      <dl className="mx-auto mt-12 grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-2xl border border-line bg-night/50 p-5">
            <dt className="font-display text-xl text-paper">{group}</dt>
            <dd className="mt-3">
              <ul className="flex flex-col gap-1.5 text-sm text-mist">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
