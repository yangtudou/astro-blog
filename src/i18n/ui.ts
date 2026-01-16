import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  tags: string
  about: string
  toc: string
  poetry: string
}

export const ui: Record<Language, Translation> = {
  zh: {
    title: '言之有文',
    subtitle: '言之无文，行而不远。',
    description: '学着数字化自己的生活。',
    posts: '文章',
    tags: '标签',
    about: '关于',
    toc: '目录',
    poetry: '诗文',
  },
}
