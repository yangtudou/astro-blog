import { defineCollection, z } from 'astro:content';

// post 目录下的 md 文件
// 顶部信息预设
// 需要注意必填，这里默认必填  title 、publishDate
const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});


export const collections = {
  'post': postCollection,
};