---
title: hello vitesse
publishDate: 2026-01-19
---


> 首先非常感谢作者 [antfu](https://antfu.me)

## 一切的开始

这是我转 [Vitess](https://github.com/antfu-collective/vitesse) 作为博客框架后，写下的第一行文字，也是第一篇文章。
辗转换了不少的博客框架 Hexo、Hugo、Astro，最后都会以主题不好看和自己是小白收尾，结果就是文章没写多少，总在半途而废。
偶然间翻到了一个博客 [pseudoyu](https://www.pseudoyu.com/)，觉得真好看。就去作者 Github 翻了一下，根本不知道用的什么框架
本来想着正好要学一下怎么自己写主题，就想着照抄过来吧。当然难度可想而知，就当我即将放弃的时候，居然找到了 antfu 个人的博客。
一开始是想从 Vite 开始自己部署，结果一开头连如何路由文件夹都不知道，说来是有点搞笑了。
后来直接 Clone 了 antfu 博客仓库作为开始，删删减减，才有了如今的这些内容。
但其实我也不知道大佬用的是什么框架，自己手搓版本吧，只能说大佬就是牛。

## 使用说明

就我写这篇文章的时候，只知道有一个 Astro 版本的这个主题，但是也有些 bug ，最直接的就是黑暗模式切换会频闪，
所以我才直接从仓库克隆后修改，以下是我个人的使用心路，可能存在<small>（大概率）</small>问题，希望指出和讨论。

### Front Matter

结合我看作者开源的内容以及 <div i-lineicons:typescript /> src/types.ts 文件的内容来看，有以下配置。

- `title` 标题, 可以省略
- `date` 创建时间, 可以省略
  - 2026-1-20
  - 2026-01-20T16:00:00.000+00:00
- `lang` 语言, 可以省略，也可以通过文件名直接获取
  - zh 默认语言，不会有标签
  - en 英文，会有一个 `EN` 标签
  - ja 日文，会有一个 `JP` 标签
- `art` 背景图，可以省略，这个很好玩
  - Dots 背景是动态小圆点
  - Plum 背景是一个裂纹一样
- `place` 发表地点, 可以省略
- `duration` 阅读时间, 可以省略, 其实感觉可以扩展很多...
- `recording` 会有一个影片的标签, 可以省略, 不知道干什么用

### MarkDown 语法

常用的不说了，就列一些<MarkerPattern>不常用</MarkerPattern>的吧。

#### icon

图标库来自 [icones](https://icones.js.org)

参考用法: `<div i-ic:baseline-code />`

效果: <div i-ic:baseline-code />

#### 标签用法

参考用法：

```html
<!-- Marker -->
<Marker>Marker</Marker>

<!-- MarkerCore -->
<MarkerCore>MarkerCore</MarkerCore>

<!-- MarkerPattern -->
<MarkerPattern>MarkerPattern</MarkerPattern>

<!-- MarkerTips -->
<MarkerTips>MarkerPattern</MarkerTips>
```

效果：<Marker>Marker</Marker> <MarkerCore>MarkerCore</MarkerCore> <MarkerPattern>MarkerPattern</MarkerPattern> <MarkerTips>MarkerPattern</MarkerTips>
