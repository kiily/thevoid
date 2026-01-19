import { defineCollection, z } from 'astro:content';

const garden = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.date(),
			updateDate: z.date().optional(),
			category: z.string(),
			tags: z.array(z.string()).optional(),
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
	type: 'content',
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

export const collections = {
	garden,
	projects,
};
