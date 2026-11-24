import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight-new'
import { FlipText } from '@/components/block/flip-text'
import { person, projects } from '@/data/content'

// Ochre light instead of the default cold blue.
const ochre = (a, b) =>
  `radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(39, 67%, 70%, ${a}) 0, hsla(39, 67%, 55%, ${b}) 50%, hsla(39, 67%, 45%, 0) 80%)`

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}

export function Hero() {
  const live = projects.filter((p) => p.live).length
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <Spotlight
        gradientFirst={ochre(0.09, 0.025)}
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(39, 67%, 70%, .05) 0, hsla(39, 67%, 55%, .015) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(155, 40%, 50%, .04) 0, hsla(155, 40%, 40%, .01) 80%, transparent 100%)"
      />
      {/* A faint horizon line: the one "midnight" flourish. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ochre/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-night/60 px-3 py-1 font-mono text-xs tracking-wide text-mist"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-leaf opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-leaf" />
          </span>
          Open to work · {person.location}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl font-display text-4xl leading-[1.08] text-paper sm:text-6xl"
        >
          {person.headline}
        </motion.h1>

        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="mt-6 max-w-2xl text-lg text-mist">
          <p>
            <span className="sr-only">{person.name}, {person.role}. </span>
            <span aria-hidden="true" className="font-semibold text-ochre">
              {person.name}, <FlipText className="text-ochre" duration={3} loop>{person.role}</FlipText>.
            </span>{' '}
            {person.intro}
          </p>
        </motion.div>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ochre px-6 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            See my work <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-full border border-line px-6 font-semibold text-paper transition-colors hover:border-ochre/60"
          >
            Get in touch
          </a>
          <span className="font-mono text-xs text-mist">
            {projects.length} projects · {live} live
          </span>
        </motion.div>
      </div>
    </section>
  )
}
