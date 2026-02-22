import type { APIRoute } from 'astro';
import { DataService } from '../../lib/data-service';
import Fuse from 'fuse.js';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const query = url.searchParams.get('q') || '';
	const limit = Number(url.searchParams.get('limit') || '12');
	const contentFilter = (url.searchParams.get('filter') || 'all') as
		| 'all'
		| 'garden-only'
		| 'projects-only';

	if (!query.trim()) {
		return new Response(
			JSON.stringify({ results: [], meta: { query: '', total: 0 } }),
			{ headers: { 'Content-Type': 'application/json' } }
		);
	}

	const posts = await DataService.getGardenPosts();
	const projects = await DataService.getProjects();
	const categories = await DataService.getCategories();
	const tags = await DataService.getTags();

	let searchItems: {
		title: string;
		description: string;
		url: string;
		type: 'post' | 'category' | 'tag';
		category: string | undefined;
		tags: string[];
		content: string;
	}[] = [];

	if (contentFilter === 'all' || contentFilter === 'garden-only') {
		searchItems.push(
			...posts.map((post) => ({
				title: post.data.title,
				description: post.data.description,
				url: `/garden/${post.slug}`,
				type: 'post' as const,
				category: post.data.category,
				tags: post.data.tags || [],
				content: `${post.data.title} ${post.data.description} ${post.data.category} ${(post.data.tags || []).join(' ')}`,
			}))
		);
	}

	if (contentFilter === 'all' || contentFilter === 'projects-only') {
		searchItems.push(
			...projects.map((project) => ({
				title: project.data.title,
				description: project.data.description,
				url: `/projects/${project.slug}`,
				type: 'post' as const,
				category: 'Projects',
				tags: project.data.tags || [],
				content: `${project.data.title} ${project.data.description} Projects ${(project.data.tags || []).join(' ')}`,
			}))
		);
	}

	if (contentFilter === 'all') {
		searchItems.push(
			...categories.map((category) => ({
				title: category,
				description: `Browse all posts in ${category}`,
				url: `/category/${category}`,
				type: 'category' as const,
				category: undefined,
				tags: [],
				content: `${category} category browse posts`,
			})),
			...tags.map((tag) => ({
				title: tag,
				description: `Browse all posts tagged with ${tag}`,
				url: `/tag/${tag}`,
				type: 'tag' as const,
				category: undefined,
				tags: [],
				content: `${tag} tag browse posts`,
			}))
		);
	}

	const fuse = new Fuse(searchItems, {
		keys: [
			{ name: 'title', weight: 0.4 },
			{ name: 'description', weight: 0.3 },
			{ name: 'category', weight: 0.15 },
			{ name: 'tags', weight: 0.1 },
			{ name: 'content', weight: 0.05 },
		],
		threshold: 0.4,
		includeScore: true,
		includeMatches: true,
		minMatchCharLength: 2,
		ignoreLocation: true,
		findAllMatches: true,
	});

	const results = fuse.search(query.trim()).sort(
		(a, b) => (a.score || 0) - (b.score || 0)
	);
	const limitedResults = results.slice(0, limit);

	const formattedResults = limitedResults.map((result) => ({
		item: result.item,
		score: result.score,
	}));

	return new Response(
		JSON.stringify({
			results: formattedResults,
			meta: { query, total: results.length, limit, contentFilter },
		}),
		{ headers: { 'Content-Type': 'application/json' } }
	);
};
