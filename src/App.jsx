import { MotionConfig } from 'motion/react'
import { Nav } from '@/sections/Nav'
import { Hero } from '@/sections/Hero'
import { Work } from '@/sections/Work'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'
import { person } from '@/data/content'

export default function App() {
  return (
    // Respect "reduce motion" settings for every animation on the page.
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 font-mono text-xs text-mist">
          <p>
            © {new Date().getFullYear()} {person.name}. Built with React, Tailwind and Motion.
          </p>
          <a href="#top" className="hover:text-paper">
            Back to top ↑
          </a>
        </div>
      </footer>
    </MotionConfig>
  )
}
