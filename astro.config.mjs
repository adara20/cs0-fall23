import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkDeflist from 'remark-deflist';

export default defineConfig({
  site: 'https://cs100.org',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkDeflist],
  },
  server: {
    host: '0.0.0.0',
  },
});
