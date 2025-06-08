import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type GardenPost = CollectionEntry<'garden'>;
export type Project = CollectionEntry<'projects'>;

/**
 * Centralized data service to prevent redundant collection fetching
 * Provides cached access to content collections
 */
export class DataService {
	private static gardenCache: GardenPost[] | null = null;
	private static projectsCache: Project[] | null = null;
	private static categoriesCache: string[] | null = null;
	private static tagsCache: string[] | null = null;

	/**
	 * Get all garden posts with caching
	 */
	static async getGardenPosts(): Promise<GardenPost[]> {
		if (!this.gardenCache) {
			this.gardenCache = await getCollection('garden');
		}
		return this.gardenCache;
	}

	/**
	 * Get all projects with caching
	 */
	static async getProjects(): Promise<Project[]> {
		if (!this.projectsCache) {
			this.projectsCache = await getCollection('projects');
		}
		return this.projectsCache;
	}

	/**
	 * Get unique categories from garden posts
	 */
	static async getCategories(): Promise<string[]> {
		if (!this.categoriesCache) {
			const posts = await this.getGardenPosts();
			this.categoriesCache = [
				...new Set(posts.map((post) => post.data.category)),
			].sort();
		}
		return this.categoriesCache;
	}

	/**
	 * Get unique tags from garden posts
	 */
	static async getTags(): Promise<string[]> {
		if (!this.tagsCache) {
			const posts = await this.getGardenPosts();
			this.tagsCache = [
				...new Set(posts.flatMap((post) => post.data.tags || [])),
			].sort();
		}
		return this.tagsCache;
	}

	/**
	 * Get posts by category
	 */
	static async getPostsByCategory(category: string): Promise<GardenPost[]> {
		const posts = await this.getGardenPosts();
		return posts.filter((post) => post.data.category === category);
	}

	/**
	 * Get posts by tag
	 */
	static async getPostsByTag(tag: string): Promise<GardenPost[]> {
		const posts = await this.getGardenPosts();
		return posts.filter((post) => post.data.tags?.includes(tag));
	}

	/**
	 * Get search data for the search API
	 */
	static async getSearchData() {
		const posts = await this.getGardenPosts();
		const categories = await this.getCategories();
		const tags = await this.getTags();

		const searchData = posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			tags: post.data.tags || [],
			category: post.data.category,
			url: `/garden/${post.slug}`,
			type: 'post' as const,
		}));

		const categoryItems = categories.map((category) => ({
			title: category,
			description: `Browse all posts in ${category}`,
			url: `/category/${category}`,
			type: 'category' as const,
		}));

		const tagItems = tags.map((tag) => ({
			title: tag,
			description: `Browse all posts tagged with ${tag}`,
			url: `/tag/${tag}`,
			type: 'tag' as const,
		}));

		return [...searchData, ...categoryItems, ...tagItems];
	}

	/**
	 * Clear all caches (useful for development)
	 */
	static clearCache() {
		this.gardenCache = null;
		this.projectsCache = null;
		this.categoriesCache = null;
		this.tagsCache = null;
	}
}
