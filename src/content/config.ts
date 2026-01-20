// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // 表示这是Markdown/MDX内容
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // 支持字符串自动转换为日期对象
    description: z.string().optional(),
    author: z.string().default('匿名'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false), // 草稿标记
  }),
});

export const collections = {
  'blog': blogCollection, // 'blog' 对应 src/content/blog/ 目录
};