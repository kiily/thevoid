import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://your-domain.com',
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-inter',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        display: 'swap',
        fallbacks: ['system-ui', 'sans-serif']
      },
      {
        provider: fontProviders.google(),
        name: 'Merriweather',
        cssVariable: '--font-merriweather',
        weights: [300, 400, 700],
        styles: ['normal', 'italic'],
        display: 'swap',
        fallbacks: ['Georgia', 'serif']
      }
    ]
  },
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
    sitemap()
  ]
});