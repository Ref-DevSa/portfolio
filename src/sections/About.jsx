import { TracingBeam } from '@/components/ui/tracing-beam'
import { about, journey, person } from '@/data/content'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 border-y border-line/60 bg-night/30 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs tracking-widest text-ochre uppercase">About</p>
          <h2 id="about-heading" className="mt-2 font-display text-4xl text-paper sm:text-5xl">
            People first, then pixels.
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-mist">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="rounded-xl border border-ochre/30 bg-ochre/5 p-4 text-paper">{person.lookingFor}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-8 font-mono text-xs tracking-widest text-mist uppercase">My journey</h3>
          <TracingBeam className="px-2">
            <ol className="flex flex-col gap-12 pl-6 md:pl-2">
              {journey.map((step) => (
                <li key={step.title}>
                  <p className="font-mono text-xs text-ochre">{step.when}</p>
                  <h4 className="mt-1 font-display text-2xl text-paper">{step.title}</h4>
                  <p className="mt-2 text-mist">{step.text}</p>
                </li>
              ))}
            </ol>
          </TracingBeam>
        </div>
      </div>
    </section>
  )
}
