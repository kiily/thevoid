import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { DataService } from '../lib/data-service';
import Fuse from 'fuse.js';

export const server = {
	search: defineAction({
		input: z.object({
			q: z.string().min(1, 'Search query is required'),
			limit: z.number().default(8),
			types: z.array(z.enum(['post', 'category', 'tag'])).optional(),
			exact: z.boolean().default(false),
			contentFilter: z
				.enum(['all', 'garden-only', 'projects-only'])
				.default('all'),
		}),
		handler: async (input) => {
			const {
				q: query,
				limit,
				types: includeTypes,
				exact: exactMatch,
				contentFilter,
			} = input;

			console.log('🔍 Search Action:', {
				query,
				limit,
				includeTypes,
				exactMatch,
				contentFilter,
			});

			try {
				// Get search data
				const posts = await DataService.getGardenPosts();
				const projects = await DataService.getProjects();
				const categories = await DataService.getCategories();
				const tags = await DataService.getTags();

				// Build search items based on content filter
				let searchItems = [];

				// Add garden posts if not filtered out
				if (contentFilter === 'all' || contentFilter === 'garden-only') {
					searchItems.push(
						...posts.map((post) => ({
							title: post.data.title,
							description: post.data.description,
							url: `/garden/${post.slug}`,
							type: 'post' as const,
							category: post.data.category,
							tags: post.data.tags || [],
							content: `${post.data.title} ${post.data.description} ${
								post.data.category
							} ${(post.data.tags || []).join(' ')}`,
						}))
					);
				}

				// Add projects if not filtered out
				if (contentFilter === 'all' || contentFilter === 'projects-only') {
					searchItems.push(
						...projects.map((project) => ({
							title: project.data.title,
							description: project.data.description,
							url: `/projects/${project.slug}`,
							type: 'post' as const,
							category: 'Projects',
							tags: project.data.tags || [],
							content: `${project.data.title} ${
								project.data.description
							} Projects ${(project.data.tags || []).join(' ')}`,
						}))
					);
				}

				// Add categories and tags only if showing all content (not filtered)
				if (contentFilter === 'all') {
					searchItems.push(
						// Categories
						...categories.map((category) => ({
							title: category,
							description: `Browse all posts in ${category}`,
							url: `/category/${category}`,
							type: 'category' as const,
							category: undefined,
							tags: [],
							content: `${category} category browse posts`,
						})),

						// Tags
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

				console.log(
					`🔍 Built ${searchItems.length} search items (filter: ${contentFilter})`
				);

				// Configure Fuse.js
				const fuseOptions = {
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
					useExtendedSearch: true,
				};

				// Create Fuse instance and search
				const fuse = new Fuse(searchItems, fuseOptions);

				// Prepare search query
				let searchQuery = query.trim();
				if (exactMatch && !searchQuery.startsWith('"')) {
					searchQuery = `"${searchQuery}"`;
				}

				console.log('🔍 Performing search for:', searchQuery);
				let results = fuse.search(searchQuery);

				// Filter by type if specified
				if (includeTypes && includeTypes.length > 0) {
					results = results.filter((result) =>
						includeTypes.includes(result.item.type)
					);
				}

				// Sort by score (lower is better in Fuse.js)
				results.sort((a, b) => (a.score || 0) - (b.score || 0));

				const limitedResults = results.slice(0, limit);
				console.log(
					`✅ Found ${results.length} results, returning ${limitedResults.length}`
				);

				// Format results
				const formattedResults = limitedResults.map((result) => ({
					item: result.item,
					score: result.score,
					matches: result.matches ? [...result.matches] : undefined,
				}));

				return {
					results: formattedResults,
					meta: {
						query,
						total: results.length,
						limit,
						types: includeTypes,
						exact: exactMatch,
						contentFilter,
					},
				};
			} catch (error) {
				console.error('❌ Search Action error:', error);
				throw error;
			}
		},
	}),

	searchSuggestions: defineAction({
		input: z.object({
			q: z.string().min(1, 'Query is required'),
			limit: z.number().default(5),
		}),
		handler: async (input) => {
			const { q: query, limit } = input;

			console.log('🔍 Suggestions Action:', { query, limit });

			try {
				// Get search data
				const posts = await DataService.getGardenPosts();
				const projects = await DataService.getProjects();

				// Build simple items for suggestions
				const items = [
					...posts.map((post) => post.data.title),
					...projects.map((project) => project.data.title),
				];

				// Simple fuzzy matching for suggestions
				const suggestions = items
					.filter((title) => title.toLowerCase().includes(query.toLowerCase()))
					.slice(0, limit);

				return { suggestions };
			} catch (error) {
				console.error('❌ Suggestions Action error:', error);
				throw error;
			}
		},
	}),
};
