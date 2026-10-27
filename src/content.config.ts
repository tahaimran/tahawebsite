import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One privacy policy per app, named after the app's slug in src/data/apps.ts.
const privacy = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/privacy' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { privacy };
