// astro.config.mjs — the main settings file for your site.
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Change this to your real domain once you have one.
  site: 'https://example.com',

  // MDX = Markdown that can also use components (like <Figure />).
  integrations: [mdx()],

  markdown: {
    // Syntax highlighting for code blocks. Try other themes later:
    // 'github-light', 'dracula', 'nord', 'one-dark-pro', ...
    shikiConfig: { theme: 'github-dark' },
  },
});
