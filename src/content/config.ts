import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  // 移除 type: 'content'，改用 loader
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'post': postCollection,
};