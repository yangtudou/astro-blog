import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const talkCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./talks" }),
  // 修改这里：增加 { image } 参数
  schema: ({ image }) => z.object({
    title: z.string(),
    tag: z.string().optional(),
    // 修改这里：使用 image() 校验器
    cover: image(), 
    publishDate: z.date(),
    excerpt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'post': postCollection,
  'talk': talkCollection,
};