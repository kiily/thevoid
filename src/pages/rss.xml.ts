import rss from '@astrojs/rss';
import { DataService } from '../lib/data-service';
import type { APIContext } from 'astro';

export const prerender = true;

export async function GET(context: APIContext) {
	const posts = await DataService.getGardenPosts();

	const sortedPosts = posts.sort(
		(a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
	);

	return rss({
		title: 'The Void — Garden',
		description: 'A digital garden by Miguel Marin Vermelho. Essays and reflections on Buddhist philosophy, meditation, neuroscience, deep work, and more.',
		site: context.site ?? 'https://thevoid.garden',
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/garden/${post.slug}/`,
			categories: [
				...(post.data.category ? [post.data.category] : []),
				...(post.data.tags ?? []),
			],
		})),
		customData: `<language>en</language>`,
	});
}
