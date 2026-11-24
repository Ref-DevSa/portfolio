# Refilwe Segoe · Portfolio

> I build calm, trustworthy web apps for everyday South African problems.

My personal portfolio: who I am, the projects I'm proudest of (starting with my capstone, **Lefa**), my toolkit, and how to reach me.

**Live:** https://refilwe-segoe.vercel.app

## What's inside

| Section | What it shows |
|---|---|
| **Hero** | Who I am and what I build, with a soft ochre spotlight |
| **Work** | Capstone first (Lefa), then group projects and my best individual builds. Each has a screenshot, the problem, my role, the stack, and live + GitHub links |
| **About** | How I work, plus a scroll-traced timeline of my journey (Zaio → Melsoft Academy → shipping real products) |
| **Skills** | A draggable strip of my toolkit and the grouped list |
| **Contact** | Email, LinkedIn, GitHub and CV download |

## Design

- **Midnight + ochre.** Deep ink background (`#0B0F1A`), warm ochre accent (`#D9A441`) and Lefa green for tags. One warm accent instead of neon gradients.
- **Type:** Fraunces (headings) and Manrope (body), with JetBrains Mono for small labels.
- **Texture:** a subtle film grain over the page, and one spotlight in the hero.
- **Motion with a purpose:** project screenshots tilt toward the cursor, the journey line draws as you scroll, sections fade in once. Everything respects "reduce motion".
- **Accessible:** semantic headings and landmarks, visible focus, decorative effects hidden from screen readers, and it's responsive down to 360 px with no sideways scrolling.

## Tech stack

- React 19 + Vite
- Tailwind CSS 4
- Motion (animations)
- UI components, adapted to the midnight palette:
  - [Aceternity UI](https://ui.aceternity.com): Spotlight, 3D Card, Tracing Beam
  - [Obsidian UI](https://www.obsidianui.dev) (MIT): Flip Text, Draggable Marquee (GSAP), Interactive Hover Button

All words live in [`src/data/content.js`](src/data/content.js), so content changes never touch the layout.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Project structure

```text
src/
  data/content.js        # all text: projects, skills, journey, contact
  sections/              # Nav, Hero, Work, About, Skills, Contact
  components/ui|block/   # Aceternity / Obsidian components (adapted)
  index.css              # theme tokens, grain, animations
public/projects/         # project screenshots
```

## Contact

GitHub: [@Ref-DevSa](https://github.com/Ref-DevSa)
