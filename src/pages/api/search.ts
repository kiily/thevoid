import type { APIRoute } from 'astro';
import { DataService } from '../../lib/data-service';
import Fuse from 'fuse.js';

export const GET: APIRoute = async ({ url }) => {
	try {
		// Use the centralized data service instead of fetching collections directly
		const allSearchData = await DataService.getSearchData();

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
