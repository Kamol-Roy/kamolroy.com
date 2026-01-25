# Personal Website - kamolroy.com

Next.js 16 personal site with blog, portfolio, and contact pages.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- MDX for blog posts
- Giscus for comments

## Structure

```
/app              → Pages (home, about, blog, portfolio, contact)
/components       → React components (Header, Footer, PostCard, etc.)
/content/posts    → Blog posts (MDX files)
/lib              → Utilities (posts.ts, seo.ts)
/public           → Static assets
```

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
```

## Git

Do not add "Co-Authored-By: Claude" to commits.

## Adding Blog Posts

1. Create `/content/posts/your-slug.mdx`
2. Add frontmatter:

```mdx
---
title: "Post Title"
description: "Brief description for SEO and previews"
date: "YYYY-MM-DD"
tags: ["Tag1", "Tag2"]
---

Your content here with **markdown** and MDX support.
```

3. The post auto-appears at `/blog/your-slug`

Posts are sorted by date (newest first). Tags display on the post page.
