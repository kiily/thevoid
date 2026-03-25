---
date: 2026-03-25
topic: seo-geo-audit
focus: SEO/GEO audit — thevoid.garden personal digital garden / portfolio
---

# Ideation: SEO & GEO Audit — thevoid.garden

## Codebase Context

**Project shape:** Astro 5 SSG + TypeScript + Tailwind CSS, deployed on Vercel. ~50 MDX garden posts, 7 project entries. Two content collections: `garden` (blog) and `projects` (portfolio). `DataService` wraps `getCollection()` with in-memory caching. `Layout.astro` owns all `<head>` meta; `PostLayout` and `ProjectLayout` delegate to it.

**What exists (good foundation):**
- Open Graph: `og:title/description/image/url/type/site_name/locale`, `article:published_time/author` all present
- Twitter Card: `summary_large_image` with full tag set
- `@astrojs/sitemap` integration installed and active
- `llms.txt` + `llms-full.txt` authored (shows GEO awareness)
- `<link rel="canonical">` generated on all pages
- `remarkToc` + `rehypeSlug` + `rehypeAutolinkHeadings` for deep-linkable headings
- Content schema includes `updateDate`, `connections[]`, `category`, `tags`
- Vercel Analytics + Speed Insights for Core Web Vitals

**Critical SEO bugs:**
- `site` in `astro.config.mjs` AND `siteUrl` in `Layout.astro` both hardcode `https://thevoid-five.vercel.app/` — ALL canonical URLs, OG URLs, and the generated sitemap point to the staging domain, not `thevoid.garden`
- `llms.txt`/`llms-full.txt` live at project root, not in `public/` — they are **never served** and unreachable at `https://thevoid.garden/llms.txt`
- No `robots.txt` — no crawl directives, no sitemap pointer
- No RSS feed
- No JSON-LD structured data anywhere
- `<html lang>` hardcoded `"en"` — ~10 Portuguese-language posts misdeclared
- Single static `og-image.jpg` shared by all ~50 posts lacking a frontmatter image
- `updateDate` frontmatter field exists but never reaches the sitemap `<lastmod>`

## Ranked Ideas

### 1. Fix Canonical Site URL + Env-Gate
**Description:** Change `site` in `astro.config.mjs` and `siteUrl` in `Layout.astro` from `thevoid-five.vercel.app` to `https://thevoid.garden`. Extract to a `SITE_URL` environment variable so Vercel staging auto-uses preview URLs and production always uses the real domain.

**Rationale:** Every SEO investment downstream is wasted until this is fixed. The sitemap, every canonical tag, every OG URL, and `llms-full.txt` all currently advertise the staging domain. Google will consolidate authority on the staging URL, not `thevoid.garden`. This is a prerequisite for all other ideas.

**Downsides:** None — one-line fix with environment variable pattern.

**Confidence:** 99%
**Complexity:** Low
**Status:** Unexplored

---

### 2. Crawl Infrastructure Bundle
**Description:** Three items forming the "crawl contract": (a) Add `public/robots.txt` pointing to `https://thevoid.garden/sitemap-index.xml`, allowlisting AI crawlers (GPTBot, ClaudeBot, PerplexityBot). (b) Move `llms.txt`/`llms-full.txt` from project root into `public/` so they are served at the canonical paths. (c) Configure `@astrojs/sitemap` with a `serialize` callback that injects `<lastmod>` from `updateDate ?? publishDate`.

**Rationale:** Three individually small fixes that together establish the authoritative crawl contract. robots.txt tells crawlers where to go; llms.txt tells AI systems what the site contains; sitemap lastmod tells crawlers what's been updated. None exists in a working state today.

**Downsides:** Sitemap serialize callback requires a small build-time URL→frontmatter mapping.

**Confidence:** 97%
**Complexity:** Low
**Status:** Unexplored

---

### 3. Auto-Generated llms.txt with Full Post Index
**Description:** Convert `llms.txt` and `llms-full.txt` from manually-authored static files into Astro page endpoints (`src/pages/llms.txt.ts`, `src/pages/llms-full.txt.ts`) generated at build time from `DataService.getGardenPosts()`. Each post gets its own entry with slug, title, description, category, tags, language, and canonical URL. Preserve the hand-crafted prose sections (author bio, intro) while generating the post listing programmatically. Add `## Navigation` and `## Key Topics` sections.

**Rationale:** Manually-authored files drift immediately. At 50+ posts, a machine-generated full index makes the site's content graph legible to AI crawlers in one HTTP request — the GEO equivalent of a sitemap. Every new post automatically appears in the index at next deploy.

**Downsides:** Requires merging static prose and dynamic content in the endpoint; hand-crafted sections need a template approach.

**Confidence:** 92%
**Complexity:** Low–Medium
**Status:** Unexplored

---

### 4. JSON-LD Structured Data Suite
**Description:** Inject `<script type="application/ld+json">` in three places: (a) `Layout.astro` — `WebSite` schema with `SearchAction`; (b) `PostLayout.astro` — `Article` schema with `author`, `datePublished`, `dateModified` (from `updateDate`), `image`, `keywords` from tags, `mainEntityOfPage`; (c) Homepage `index.astro` — `Person` schema with `name`, `url`, `jobTitle`, `sameAs` (GitHub, LinkedIn, etc.).

**Rationale:** JSON-LD is the primary mechanism for AI knowledge graphs and Google rich results. Without it, every post is undifferentiated text to AI systems. With it, Miguel's identity is resolvable as an entity and every post is a citable Article with an attributed author. This directly enables rich results and AI citation authority.

**Downsides:** Schema.org vocabulary selection requires care. Needs social profile URLs to be curated. Medium implementation complexity to wire through all three layouts.

**Confidence:** 93%
**Complexity:** Medium
**Status:** Unexplored

---

### 5. Multilingual `lang` Attribute
**Description:** Add an optional `lang` field (`'en' | 'pt' | 'es' | 'fr' | 'ja'`) to the garden content schema in `config.ts`. Pass it through `PostLayout` → `Layout` and emit as `<html lang={lang}>`. Backfill the ~10 Portuguese posts already in the corpus (a-ilha.mdx, amor-de-mae.mdx, ler-e-escrever.mdx, pensamentos-sobre-o-final.mdx, etc.).

**Rationale:** The site explicitly contains Portuguese, Spanish, French, and Japanese content but all pages declare `lang="en"`. This is a WCAG Level A accessibility violation and a concrete GEO failure — Portuguese-language posts will never surface in Portuguese-language AI queries. The fix is one schema field + one prop pass + frontmatter backfill.

**Downsides:** Requires backfilling existing post frontmatter. Does not add `hreflang` (bilingual pages — more complex, not applicable here since these are separate-language posts).

**Confidence:** 90%
**Complexity:** Low
**Status:** Unexplored

---

### 6. Dynamic Per-Post OG Images
**Description:** Add a `src/pages/og/[slug].png.ts` endpoint using `@vercel/og` (Satori-based) that generates branded OG images at build time for each garden post. Template: post title (large), category + year (small), Enso SVG motif. Update `PostLayout.astro` to point `og:image` at `/og/[slug].png` instead of the static fallback or per-post frontmatter image.

**Rationale:** ~50 posts share one generic image. Every social share looks identical, eroding trust and click-through. In 2026, AI-assisted link previews (Perplexity, LinkedIn) weight OG images as content signals. The Enso SVG (`public/enso.svg`) already exists as the perfect brand motif. This compounds with every new post.

**Downsides:** Adds build dependency (`@vercel/og` / `satori` + `@resvg/resvg-js`). Font subsetting for custom fonts needs care. Most complex implementation in this list.

**Confidence:** 85%
**Complexity:** Medium–High
**Status:** Unexplored

---

### 7. /now Page + Machine-Readable Content Graph
**Description:** (a) Add a `/now` route (`src/pages/now.astro`) showing what the author is currently working on, reading, and thinking about. Add `/colophon` (site philosophy + stack). (b) Add `src/pages/content-graph.json.ts` that serializes all posts with their `connections[]` edges as a JSON-LD graph. Link it from `llms.txt` and from the Person schema `about` field.

**Rationale:** For GEO, `/now` is the single most citable "current author state" resource. AI systems asked about Miguel pull from well-structured, author-controlled pages. The content graph JSON endpoint turns the Zettelkasten-like connections[] structure into a machine-traversable knowledge graph — genuinely novel GEO signal that most sites lack.

**Downsides:** `/now` requires maintenance discipline (quarterly updates). Content graph requires connections[] to be well-curated across all posts. Two distinct features bundled together.

**Confidence:** 82%
**Complexity:** Low (/now + /colophon) + Medium (graph endpoint)
**Status:** Unexplored

---

## Rejection Summary

| # | Idea | Reason Rejected |
|---|------|-----------------|
| 1 | `twitter:site`/`twitter:creator` tags | Absorbed into JSON-LD `sameAs`; Twitter signal declining as a platform |
| 2 | `article:modified_time` OG meta | Duplicate of what JSON-LD `Article.dateModified` achieves more authoritatively |
| 3 | Thin tag/category page consolidation | Destructive change requiring data validation first; better as standalone brainstorm |
| 4 | Pillar content strategy | Content strategy, not a codebase improvement; not implementable as engineering task |
| 5 | CI/CD SEO audit workflow | Env-gating the canonical URL is simpler and achieves the same guard at source |
| 6 | Build-time content completeness validator | Good hygiene, but low SEO impact relative to the structural gaps identified |
| 7 | Keyword → concept density shift in prose | Not codebase-actionable; requires rewriting existing post content |
| 8 | `<meta name="author">` global tag | Minor signal, absorbed into JSON-LD Person schema work |

## Session Log
- 2026-03-25: Initial ideation — 40 raw ideas generated (5 agents × ~8 ideas), 20 after dedup, 7 survivors. Focus: SEO/GEO audit of thevoid.garden Astro 5 site. Critical finding: staging URL in canonical/sitemap blocks all SEO investment.
