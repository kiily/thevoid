import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [
    mdx(),
    tailwind(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});