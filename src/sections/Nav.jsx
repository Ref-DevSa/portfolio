import { person } from '@/data/content'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/75 backdrop-blur-md">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-night focus:px-3 focus:py-2"
      >
        Skip to work
      </a>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-2xl text-paper" aria-label={`${person.name}, back to top`}>
          {person.initials}
          <span className="text-ochre">.</span>
        </a>
        <ul className="flex items-center gap-1 text-sm sm:gap-2">
          {links.map((l) => (
            <li key={l.href} className={l.href === '#skills' ? 'hidden sm:block' : undefined}>
              <a href={l.href} className="rounded-full px-3 py-2 text-mist transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
