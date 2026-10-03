// content.config.ts — tells Astro where your posts live and what
// info every post must have at the top (its "frontmatter").
// If a post is missing a title or has a bad date, the build will
// stop and tell you exactly which file is wrong.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // Every .md or .mdx file in src/content/posts is a post.
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),           // write it like 2026-10-02
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), // true = hidden from the site
  }),
});

export const collections = { posts };
