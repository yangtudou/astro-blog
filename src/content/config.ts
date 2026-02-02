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
      publishDate: z.coerce.date(), // 自动处理 YAML 中的日期字符串
      excerpt: z.string().optional(),
      draft: z.boolean().optional().default(false),
    })
  ),
});

export const collections = {
  'post': postCollection,
  'talk': talkCollection,
};