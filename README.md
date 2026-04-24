# toino.pt

Personal portfolio website showcasing my projects, skills, and experience. Built with SvelteKit and deployed to Cloudflare Workers.

![Homepage screenshot](src/lib/images/projects/website/light/0.png#gh-light-mode-only)
![Homepage screenshot](src/lib/images/projects/website/dark/0.png#gh-dark-mode-only)

## Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) 5
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

## Features

- **Project Showcase** — Browse projects with filtering by tags and technologies, sorting by date or name
- **Responsive Design** — Optimized for all screen sizes, from mobile to desktop
- **Dark/Light Mode** — Automatic theme detection with support for themed project screenshots
- **Optimized Images** — Responsive images with AVIF/WebP/JPEG fallbacks via [`@sveltejs/enhanced-img`](https://kit.svelte.dev/docs/images)
- **Smooth Transitions** — Animated page transitions and project grid animations
- **SEO** — Auto-generated sitemap and meta tags

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

## Deployment

The site is deployed to Cloudflare Workers using Wrangler. Static assets are served via [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).

```bash
pnpm run deploy
```
