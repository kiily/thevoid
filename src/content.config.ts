import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const garden = defineCollection({
	loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/garden' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.date(),
			updateDate: z.date().optional(),
			category: z.string(),
			tags: z.array(z.string()).optional(),
			lang: z.enum(['en', 'pt', 'es', 'fr', 'ja']).optional(),
			image: image().optional(),
			connections: z
				.array(
					z.object({
						title: z.string(),
						url: z.string(),
					})
				)
				.optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image().optional(),
		link: z.string().optional(),
		website: z.string().optional(),
		github: z.string().optional(),
		status: z.enum(['Current Project', 'Completed', 'Archived', 'In Progress']),
		startDate: z.date(),
		endDate: z.date().optional(),
		tags: z.array(z.string()),
		features: z.array(z.string()),
		techStack: z.array(
			z.object({
				category: z.string(),
				items: z.array(z.string()),
			})
		),
		challenges: z.array(z.string()).optional(),
		learnings: z.array(z.string()).optional(),
		gallery: z
			.array(
				z.object({
					image: z.string(),
					caption: z.string(),
				})
			)
			.optional(),
	}),
});

const people = defineCollection({
	loader: glob({ pattern: '**/[^_]*.yaml', base: './src/content/people' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			website: z.string().url(),
			avatar: image().optional(),
			role: z
				.enum(['creator', 'collaborator', 'inspiration', 'community'])
				.default('inspiration'),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = {
	garden,
	projects,
	people,
};
