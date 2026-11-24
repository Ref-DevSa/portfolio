// All the words on the site live here, so content can change without
// touching the design. Anything set to null is hidden until it's filled in.

export const person = {
  name: 'Refilwe Segoe',
  initials: 'RS',
  role: 'Full-stack developer',
  // TODO(Refilwe): confirm or rewrite in your own words.
  headline: 'I build calm, trustworthy web apps for everyday South African problems.',
  intro:
    'From funeral cover that families can actually claim, to a diabetes diary that works on any phone, I like turning messy, high-stakes situations into simple screens people can rely on.',
  location: 'Pretoria, South Africa',
  lookingFor: 'Looking for a junior full-stack or front-end developer role where I can ship real features and keep learning.',
  email: 'ref.devsa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/refilwe-segoe-08451a13',
  github: 'https://github.com/Ref-DevSa',
  cv: '/Refilwe-Segoe-CV.pdf',
}

export const about = [
  "I'm a full-stack developer who trained through Zaio and Melsoft Academy. I care about the people on the other side of the screen: a grieving family, a newly diagnosed patient, a volunteer at a community centre.",
  'That means I start with the problem and the data rules, build test-first, and only then make it beautiful. Security is part of the design, not an afterthought: row-level security, least-privilege keys and honest copy.',
]

/** Capstone first, then team project, then best individual builds. */
export const projects = [
  {
    slug: 'lefa',
    name: 'Lefa',
    tagline: 'A family insurance vault so funeral cover is never lost.',
    kind: 'Capstone · solo',
    featured: true,
    image: '/projects/lefa.png',
    problem:
      'South Africans hold 17 million funeral policies, yet billions in benefits go unclaimed and 8.7 million policies lapsed in 2025. Families often don’t know which policies exist or how to claim in time for a funeral.',
    role: 'Solo: product, database design, API, front end, tests and deployment.',
    highlights: [
      'Row Level Security: each family sees only its own policies, proven by 34 database tests',
      'Role-based access (member / broker / admin) that users can’t grant themselves',
      'Vault totals in exact cents, next-debit reminder and lapse warnings',
    ],
    stack: ['React 19', 'Tailwind 4', 'TanStack Query', 'Express 5', 'Supabase', 'PostgreSQL', 'Jest', 'GitHub Actions'],
    live: 'https://lefa-nine.vercel.app',
    repo: 'https://github.com/Ref-DevSa/lefa',
  },
  {
    slug: 'diabetes-companion',
    name: 'Diabetes Companion SA',
    tagline: 'A mobile-first companion for South Africans living with Type 2 diabetes.',
    kind: 'Individual build',
    image: '/projects/diabetes-companion.png',
    problem:
      'People newly diagnosed with Type 2 diabetes get little practical support between clinic visits, and most apps aren’t written for South Africa (mmol/L, local resources, data costs).',
    role: 'Solo: requirements, design, front end, database and accessibility testing.',
    highlights: [
      'Glucose diary in mmol/L, daily care checklist and a learning centre',
      'Public guides for family members, no account needed',
      'Accessibility checked with Playwright + axe-core',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind 4', 'react-i18next', 'Supabase', 'Vitest', 'Playwright'],
    live: 'https://diabetes-companion-sa.vercel.app',
    repo: 'https://github.com/Ref-DevSa/diabetes-companion-sa',
  },
  {
    slug: 'riverside',
    name: 'Riverside Community Hub',
    tagline: 'A community centre site with a facilities catalogue and online donations.',
    kind: 'Group project',
    image: null, // add a screenshot once it's deployed
    problem: 'A community organisation needed one place to show its facilities and accept donations online.',
    role: 'Group project. I built and committed the codebase: React + TypeScript setup and routing, the Supabase facilities and donations tables, every page (catalogue, details, donations, 404) and their loading and error states.',
    highlights: ['Facilities catalogue with detail pages, loading and error states', 'Validated donation form stored in Supabase', '37 commits, from project setup to documentation'],
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Supabase'],
    live: null,
    repo: 'https://github.com/Ref-DevSa/riverside-community-hub',
  },
  {
    slug: 'pulse',
    name: 'Pulse',
    tagline: 'A live world snapshot: earthquakes and weather from public APIs.',
    kind: 'Group project',
    image: null, // add a screenshot once it's deployed
    problem: 'Live data is scattered across many public APIs; Pulse brings earthquakes and weather into one dashboard.',
    role: 'Group project. I built and committed the data pipeline and dashboard: fetching and transforming USGS earthquake data, the Supabase schema, Open-Meteo weather and the front end.',
    highlights: ['Real-time USGS earthquake and Open-Meteo data', 'Selected snapshots stored in Supabase'],
    stack: ['React', 'JavaScript', 'REST APIs', 'Supabase'],
    live: null,
    repo: 'https://github.com/Ref-DevSa/Pulse',
  },
  {
    slug: 'taskforge',
    name: 'TaskForge API',
    tagline: 'A REST API for tasks with persistent storage and central error handling.',
    kind: 'Individual build',
    image: null,
    apiPreview: true,
    problem: 'A clean, well-structured backend foundation: CRUD, middleware and errors done properly.',
    role: 'Solo: API design and implementation.',
    highlights: ['CRUD with async file persistence', 'Middleware and centralised error handling'],
    stack: ['Node.js', 'Express', 'JavaScript'],
    live: null,
    repo: 'https://github.com/Ref-DevSa/taskforge-api',
  },
]

export const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React Router', 'TanStack Query', 'HTML & CSS'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'zod validation'],
  Data: ['Supabase', 'PostgreSQL', 'Row Level Security', 'SQL migrations', 'MongoDB / Mongoose'],
  Quality: ['Jest', 'Vitest', 'React Testing Library', 'Supertest', 'pgTAP', 'Playwright', 'Accessibility'],
  Tools: ['Git & GitHub', 'GitHub Actions CI', 'Vercel', 'Render', 'Figma / Stitch'],
}

/** Grounded in the repo history; edit freely. */
export const journey = [
  {
    when: '2025',
    title: 'Foundations at Zaio',
    text: 'HTML, CSS and JavaScript by rebuilding real products: Netflix, Airbnb, Amazon and Instagram layouts.',
  },
  {
    when: 'Early 2026',
    title: 'Melsoft Academy: JavaScript to React',
    text: 'DOM, OOP, async JavaScript, then React with hooks and TypeScript. Built a habit tracker and a project dashboard.',
  },
  {
    when: 'Mid 2026',
    title: 'Backend and data',
    text: 'Node.js and Express REST APIs, MongoDB, then Supabase with PostgreSQL. Built TaskForge, Pulse and the Riverside team project.',
  },
  {
    when: 'Late 2026',
    title: 'Shipping real products',
    text: 'Diabetes Companion SA, then the Lefa capstone: test-first, secured with Row Level Security and deployed with CI.',
  },
]
