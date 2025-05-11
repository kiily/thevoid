import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import Fuse from 'fuse.js';

export const GET: APIRoute = async ({ url }) => {
	try {
		const posts = await getCollection('garden');
		const searchData = posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			tags: post.data.tags || [],
			category: post.data.category,
			url: `/garden/${post.slug}`,
			type: 'post',
		}));

		// Add categories and tags as separate searchable items
		const categories = [...new Set(posts.map((post) => post.data.category))];
		const tags = [...new Set(posts.flatMap((post) => post.data.tags || []))];

		const categoryItems = categories.map((category) => ({
			title: category,
			description: `Browse all posts in ${category}`,
			url: `/category/${category}`,
			type: 'category',
		}));

		const tagItems = tags.map((tag) => ({
			title: tag,
			description: `Browse all posts tagged with ${tag}`,
			url: `/tag/${tag}`,
			type: 'tag',
		}));

		// Combine all searchable items
		const allSearchData = [...searchData, ...categoryItems, ...tagItems];

		// Initialize Fuse instance
		const fuse = new Fuse(allSearchData, {
			keys: ['title', 'description', 'tags', 'category'],
			threshold: 0.3,
			includeScore: true,
		});

		const query = url.searchParams.get('q');
		if (!query) {
			return new Response(JSON.stringify({ results: [] }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}

		const results = fuse.search(query).slice(0, 5);
		return new Response(JSON.stringify({ results }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Search error:', error);
		return new Response(
			JSON.stringify({
				error: 'An error occurred while searching',
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}
};
