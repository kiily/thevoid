/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly PUBLIC_POSTHOG_KEY: string;
	readonly PUBLIC_POSTHOG_HOST: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// PostHog global types
declare global {
	interface Window {
		posthog: {
			init(key: string, options?: any): void;
			identify(distinctId: string, properties?: Record<string, any>): void;
			capture(event: string, properties?: Record<string, any>): void;
			isFeatureEnabled(flag: string): boolean;
			getFeatureFlag(flag: string): string | boolean;
			reset(): void;
		};
	}
}

export {};
