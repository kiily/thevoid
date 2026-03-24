# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server (localhost:4321)
npm run build        # Production build
npm run preview      # Preview production build
```

No test runner is configured. No linting scripts exist beyond TypeScript strict mode via `astro check` (built into the Astro CLI).

## Architecture Overview

This is a **personal digital garden / portfolio** built with Astro 5 + Tailwind CSS, deployed on Vercel.

### Content Collections (`src/content/`)

Two content collections defined in `src/content/config.ts` with Zod schemas:

- **garden** — MDX blog posts with `title`, `description`, `publishDate`, `category`, optional `tags[]`, `image`, and `connections[]` (related links)
- **projects** — Portfolio entries with rich metadata: `status` enum, `techStack`, `features`, `challenges`, `learnings`, `gallery`

### Data Layer (`src/lib/data-service.ts`)

Centralized cached data fetching. Always use `DataService` methods instead of calling `getCollection()` directly — it provides in-memory caching and helper methods for filtering by category/tag and generating search indexes.

### Layouts

- `Layout.astro` — Root layout: Header, theme toggle, Vercel analytics, view transitions
- `PostLayout.astro` — Wraps Layout; adds post metadata, tag links, "Connected Notes" footer
- `ProjectLayout.astro` — Wraps Layout; project-specific metadata

### Routing

File-based static routing via `getStaticPaths()`:
- `/garden/[...slug]` — Individual blog posts
- `/garden/[...page]` — Paginated listing
- `/tag/[tag]` — Posts by tag
- `/category/[category]` — Posts by category
- `/projects/[...slug]` — Individual project pages

### Theme System

Dark/light mode via CSS custom properties + Tailwind's `dark:` variant. Theme state stored in `localStorage`, loaded via an inline preload script in `Layout.astro` to prevent flash. Semantic utility classes (`.text-body`, `.text-body-strong`, `.text-muted`, `.text-label`) are defined globally.

**Custom color palette** — defined in `tailwind.config.mjs` under the "garden" namespace. Always use these semantic tokens rather than raw Tailwind colors.

### Key Conventions

- **No `@apply` directive** — use Tailwind utility classes directly or scoped `<style>` blocks
- **Images** — always use Astro's `<Image>` component for optimization
- **Client hydration** — use `client:*` directives sparingly; most components are static `.astro` files. Reserve `client:load` / `client:visible` for genuinely interactive components (Search, TextCycler, ThemeToggle)
- **Fonts** — three Google fonts loaded via Astro's experimental font API: Inter (UI), Source Serif 4 (body), Cormorant Garamond (display). Reference via CSS variables `--font-inter`, `--font-source-serif-4`, `--font-cormorant-garamond`
- **Special large pages** (`heart-sutra.astro`, `focus-and-flow.astro`, `b-30.astro`) — self-contained pages with inline styles and content; treat carefully as they are large files
