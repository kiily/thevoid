import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://thevoid.garden/',

  // Enable prefetch for View Transitions to preload linked pages
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },

  fonts: [
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-inter',
        weights: [400, 500, 600, 700, 800],
        styles: ['normal'],
        display: 'swap',
        fallbacks: ['system-ui', 'sans-serif']
      },
      {
        provider: fontProviders.google(),
        name: 'Source Serif 4',
        cssVariable: '--font-source-serif-4',
        weights: [300, 400, 500, 600, 700],
        styles: ['normal', 'italic'],
        display: 'swap',
        fallbacks: ['Georgia', 'serif']
      },
      {
        provider: fontProviders.google(),
        name: 'Cormorant Garamond',
        cssVariable: '--font-cormorant-garamond',
        weights: [400, 500, 600],
        styles: ['normal', 'italic'],
        display: 'swap',
        fallbacks: ['Georgia', 'serif']
      }
  ],

  integrations: [
    mdx({
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      shikiConfig: {
        theme: 'github-light',
        wrap: true
      }
    }),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/b-30'),
      serialize(item) {
        if (item.url.includes('/garden/') || item.url.includes('/projects/')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (item.url.endsWith('thevoid.garden/')) {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        return item;
      }
    })
  ],

  adapter: vercel(),

  vite: {
    server: {
      watch: {
        ignored: ['**/.vercel/**']
      }
    }
  }
});