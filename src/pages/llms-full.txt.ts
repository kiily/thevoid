import { DataService } from '../lib/data-service';

export const prerender = true;

export async function GET() {
	const posts = await DataService.getGardenPosts();
	const projects = await DataService.getProjects();

	const sortedPosts = posts.sort(
		(a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
	);

	const postLines = sortedPosts
		.map((post) => {
			const lang = post.data.lang ? ` [${post.data.lang}]` : '';
			const tags = post.data.tags?.length ? ` — ${post.data.tags.slice(0, 4).join(', ')}` : '';
			return `- [${post.data.title}${lang}](https://thevoid.garden/garden/${post.id}) — ${post.data.description}${tags}`;
		})
		.join('\n');

	const projectLines = projects
		.map((p) => `- **${p.data.title}** (${p.data.status}) — ${p.data.description}`)
		.join('\n');

	const content = `# The Void — Full LLM Context

## Site Identity

- **Name:** The Void
- **Author:** Miguel Marin Vermelho
- **URL:** https://thevoid.garden/
- **Description:** Personal digital garden and portfolio — a contemplative, multilingual space exploring Buddhism, meditation, neuroscience, software engineering, and human connection.
- **Languages used in content:** English, Portuguese, Spanish, French, Japanese

---

## Architecture

**Framework:** Astro 5 (static site generation; one dynamic SSR route for search)
**Package manager:** Bun
**Styling:** Tailwind CSS 3 — custom \`garden\` colour namespace; no \`@apply\`
**Content:** MDX via \`@astrojs/mdx\` with Zod-validated content collections
**Search:** Fuse.js (fuzzy, weighted) via \`/api/search\` endpoint
**Deployment:** Vercel with Analytics and Speed Insights

---

## Garden Posts (${sortedPosts.length} total)

${postLines}

---

## Projects (${projects.length} total)

${projectLines}

---

## Author Profile

**Miguel Marin Vermelho**
Polyglot biologist turned software engineer. CTO at FLOWN.

Languages: English, Portuguese, Spanish, French, Luxembourgish, Japanese

Technology expertise: TypeScript, React, Next.js, Node.js, Astro, PostgreSQL, Docker

---

## Key Conventions for AI Assistance

1. Use \`DataService\` — never \`getCollection()\` directly
2. Use Astro's \`<Image>\` component for all images
3. Use \`garden-*\` colour tokens, not raw Tailwind colours
4. No \`@apply\` — Tailwind utilities directly or scoped \`<style>\` blocks
5. Large special pages (\`heart-sutra.astro\`, \`focus-and-flow.astro\`, \`b-30.astro\`) use inline styles — treat with care
`;

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
