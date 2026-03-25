import { DataService } from '../lib/data-service';

export const prerender = true;

export async function GET() {
	const posts = await DataService.getGardenPosts();

	const nodes = posts.map((post) => ({
		id: post.slug,
		title: post.data.title,
		description: post.data.description,
		url: `https://thevoid.garden/garden/${post.slug}/`,
		category: post.data.category,
		tags: post.data.tags ?? [],
		lang: post.data.lang ?? 'en',
		publishDate: post.data.publishDate.toISOString().split('T')[0],
		...(post.data.updateDate
			? { updateDate: post.data.updateDate.toISOString().split('T')[0] }
			: {}),
	}));

	const edges = posts.flatMap((post) =>
		(post.data.connections ?? []).map((conn) => ({
			from: post.slug,
			to: conn.url,
			label: conn.title,
		})),
	);

	const graph = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'The Void — Content Graph',
		description: 'Knowledge graph of garden posts and their connections',
		url: 'https://thevoid.garden/content-graph.json',
		author: {
			'@type': 'Person',
			'@id': 'https://thevoid.garden/#person',
			name: 'Miguel Marin Vermelho',
		},
		numberOfItems: nodes.length,
		nodes,
		edges,
	};

	return new Response(JSON.stringify(graph, null, 2), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
}
