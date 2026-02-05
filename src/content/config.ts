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
  // 使用 Content Layer API 时不能设置 type
  loader: glob({ 
    pattern: 'TalkList.yaml', 
    base: "./talks" 
  }),
  // ✅ 核心修复：定义 schema 为数组，包裹原有的对象结构
  schema: ({ image }) => z.array(
    z.object({
      title: z.string(),
      cover: image(),
      publishDate: z.coerce.date(),
      excerpt: z.string().optional(),
      draft: z.boolean().optional().default(false),
      /** 正文对齐：left 左对齐，center 居中。不填默认 left */
      align: z.enum(['left', 'center']).optional().default('left'),
    })
  ),
});

export const collections = {
  'post': postCollection,
  'talk': talkCollection,
};