# The Void

A personal digital garden and portfolio by **Miguel Marin Vermelho** — a polyglot biologist turned software engineer and CTO at [FLOWN](https://flown.com).

Built with Astro 5, Tailwind CSS, and MDX. Deployed on Vercel.

## What's here

- **Garden** — Essays, meditations, and reflections in English, Portuguese, Spanish, French, and Japanese. Topics range from Buddhist philosophy and neuroscience to short fiction and family.
- **Projects** — A portfolio of software projects including FLOWN, a Heart Sutra digital bunkobon, and others.
- **Special pages** — Handcrafted standalone experiences: the Heart Sutra (`/heart-sutra`), a Focus & Flow bunkobon (`/focus-and-flow`), and a family tree visualisation.

## Stack

| Concern | Technology |
|---|---|
| Framework | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Content | MDX via `@astrojs/mdx` |
| Search | [Fuse.js](https://fusejs.io) |
| Data viz | [D3](https://d3js.org) + [family-chart](https://github.com/nicktrandasir/family-chart) |
| Fonts | Inter · Source Serif 4 · Cormorant Garamond |
| Deployment | [Vercel](https://vercel.com) |

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build
npm run preview   # Preview production build
```

> Uses [Bun](https://bun.sh) as the package manager. Run `bun install` if you prefer it over `npm install`.

## Project structure

```
src/
├── pages/          # File-based routing
├── content/
│   ├── garden/     # MDX blog posts (~50 posts)
│   └── projects/   # MDX project entries (6 projects)
├── components/     # 22 Astro components
├── layouts/        # Layout.astro, PostLayout.astro, ProjectLayout.astro
├── lib/
│   ├── data-service.ts   # Centralised cached data fetching (use this, not getCollection)
│   └── technologies.ts   # Tech proficiency metadata
└── features/
    └── family-tree/      # Family tree data + types
public/
├── void.svg        # Site icon
└── enso.svg        # Zen enso circle
```

## Content collections

Two collections defined with Zod schemas in `src/content/config.ts`:

- **garden** — `title`, `description`, `publishDate`, `category`, `tags[]`, `image`, `connections[]`
- **projects** — `title`, `description`, `status`, `techStack`, `features`, `challenges`, `learnings`, `gallery`

Always use `DataService` methods rather than calling `getCollection()` directly — it handles in-memory caching.

## Theme

Dark/light mode via CSS custom properties and Tailwind's `dark:` variant. Theme persisted in `localStorage`. Custom colour palette under the `garden` namespace in `tailwind.config.mjs` — always prefer these semantic tokens over raw Tailwind colours.

Three font variables: `--font-inter`, `--font-source-serif-4`, `--font-cormorant-garamond`.

## Notable conventions

- No `@apply` — use Tailwind utilities directly or scoped `<style>` blocks
- Images always use Astro's `<Image>` component
- Client hydration is minimal: only `Search`, `TextCycler`, and `ThemeToggle` use `client:*` directives
- Large self-contained pages (`heart-sutra.astro`, `focus-and-flow.astro`, `b-30.astro`) use inline styles — treat carefully
