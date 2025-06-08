import Fuse, { type IFuseOptions } from 'fuse.js';
import { DataService } from './data-service';

export interface SearchItem {
	title: string;
	description: string;
	url: string;
	type: 'post' | 'category' | 'tag';
	tags?: string[];
	category?: string;
}

export interface SearchResult {
	item: SearchItem;
	score?: number;
}

/**
 * Search service with cached Fuse.js index for optimal performance
 * Prevents rebuilding search index on every request
 */
export class SearchService {
	private static searchIndex: Fuse<SearchItem> | null = null;
	private static isInitializing = false;
	private static initializationPromise: Promise<Fuse<SearchItem>> | null = null;

	/**
	 * Fuse.js configuration optimized for digital garden content
	 */
	private static readonly FUSE_OPTIONS: IFuseOptions<SearchItem> = {
		keys: [
			{ name: 'title', weight: 0.4 }, // Title has highest weight
			{ name: 'description', weight: 0.3 }, // Description is important
			{ name: 'tags', weight: 0.2 }, // Tags are relevant
			{ name: 'category', weight: 0.1 }, // Category has lowest weight
		],
		threshold: 0.3, // Balance between fuzzy and exact matching
		includeScore: true, // Include relevance scores
		minMatchCharLength: 2, // Minimum 2 characters for matching
		ignoreLocation: true, // Search entire text, not just beginning
	};

	/**
	 * Get or create the cached search index
	 */
	private static async getSearchIndex(): Promise<Fuse<SearchItem>> {
		// Return cached index if available
		if (this.searchIndex) {
			return this.searchIndex;
		}

		// If already initializing, wait for that process
		if (this.isInitializing && this.initializationPromise) {
			return this.initializationPromise;
		}

		// Start initialization
		this.isInitializing = true;
		this.initializationPromise = this.initializeSearchIndex();

		try {
			this.searchIndex = await this.initializationPromise;
			return this.searchIndex;
		} finally {
			this.isInitializing = false;
			this.initializationPromise = null;
		}
	}

	/**
	 * Initialize the search index with all searchable content
	 */
	private static async initializeSearchIndex(): Promise<Fuse<SearchItem>> {
		try {
			console.log('🔍 Initializing search index...');
			const startTime = Date.now();

			// Get all search data from DataService
			const searchData = await DataService.getSearchData();

			// Create and configure Fuse instance
			const fuse = new Fuse(searchData, this.FUSE_OPTIONS);

			const endTime = Date.now();
			console.log(
				`✅ Search index initialized in ${endTime - startTime}ms with ${
					searchData.length
				} items`
			);

			return fuse;
		} catch (error) {
			console.error('❌ Failed to initialize search index:', error);
			throw error;
		}
	}

	/**
	 * Perform a search query
	 * @param query - Search query string
	 * @param limit - Maximum number of results (default: 5)
	 */
	static async search(
		query: string,
		limit: number = 5
	): Promise<SearchResult[]> {
		if (!query || query.trim().length < 2) {
			return [];
		}

		try {
			const searchIndex = await this.getSearchIndex();
			const results = searchIndex.search(query.trim()).slice(0, limit);

			return results.map((result) => ({
				item: result.item,
				score: result.score,
			}));
		} catch (error) {
			console.error('Search error:', error);
			throw error;
		}
	}

	/**
	 * Get search suggestions based on partial query
	 * @param query - Partial search query
	 * @param limit - Maximum number of suggestions (default: 3)
	 */
	static async getSuggestions(
		query: string,
		limit: number = 3
	): Promise<string[]> {
		if (!query || query.trim().length < 1) {
			return [];
		}

		try {
			const searchIndex = await this.getSearchIndex();
			const results = searchIndex.search(query.trim()).slice(0, limit * 2);

			// Extract unique titles as suggestions
			const suggestions = [
				...new Set(results.map((result) => result.item.title)),
			].slice(0, limit);

			return suggestions;
		} catch (error) {
			console.error('Suggestions error:', error);
			return [];
		}
	}

	/**
	 * Clear the search index cache (useful for development/testing)
	 */
	static clearCache(): void {
		this.searchIndex = null;
		this.isInitializing = false;
		this.initializationPromise = null;
		console.log('🗑️ Search index cache cleared');
	}

	/**
	 * Refresh the search index (useful when content changes)
	 */
	static async refresh(): Promise<void> {
		this.clearCache();
		await this.getSearchIndex();
		console.log('🔄 Search index refreshed');
	}

	/**
	 * Get cache statistics for monitoring
	 */
	static getCacheStats() {
		return {
			isCached: !!this.searchIndex,
			isInitializing: this.isInitializing,
			cacheTime: this.searchIndex ? new Date().toISOString() : null,
		};
	}
}
