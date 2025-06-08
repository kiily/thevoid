import type { APIRoute } from 'astro';
import { SearchService } from '../../lib/search-service';

export const GET: APIRoute = async ({ url }) => {
	try {
		const query = url.searchParams.get('q');
		if (!query || query.trim().length < 1) {
			return new Response(JSON.stringify({ suggestions: [] }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}

		// Get search suggestions using cached index
		const suggestions = await SearchService.getSuggestions(query.trim(), 5);

		return new Response(JSON.stringify({ suggestions }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
			},
		});
	} catch (error) {
		console.error('Suggestions API error:', error);
		return new Response(
			JSON.stringify({
				error: 'An error occurred while getting suggestions',
				suggestions: [],
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
