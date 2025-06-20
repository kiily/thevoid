import type { APIRoute } from 'astro';
import { SearchService } from '../../lib/search-service';

export const GET: APIRoute = async ({ url }) => {
	try {
		const query = url.searchParams.get('q');
		if (!query) {
			return new Response(JSON.stringify({ results: [] }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}

		// Use the cached search service - much faster!
		const results = await SearchService.search(query, 5);
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
