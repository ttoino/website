# AGENTS.md

Personal website built with SvelteKit 5, deployed to Cloudflare Pages.

## Development Environment

**Nix flake required.** The `.envrc` enables it automatically with direnv. If not using direnv:

```bash
nix develop
```

The flake provides Node.js and corepack (for pnpm). Playwright browsers are managed via Nix overlay—do not download them manually.

## Package Management

**Always use pnpm.** The project locks to `pnpm@10.9.0` via `packageManager` field.

```bash
# Install dependencies
pnpm install

# Never use npm or yarn
```

## Common Commands

```bash
# Dev server
pnpm run dev

# Type check (runs svelte-kit sync first)
pnpm run check

# Lint and format
pnpm run lint          # Check
pnpm run lint:fix      # Fix issues
pnpm run format        # Check
pnpm run format:fix    # Fix issues

# Build for production (includes sitemap generation)
pnpm run build

# Preview production build locally
pnpm run preview

# Deploy to Cloudflare Pages
pnpm run deploy
```

## Code Generation

```bash
# Generate Cloudflare types from wrangler config
pnpm run gen:cf-types

# Generate project screenshots (requires working project URLs)
pnpm run gen:images

# Run all generators
pnpm run gen
```

**Important:** `gen:images` uses Playwright to screenshot live project URLs. It skips projects that already have images in `src/lib/images/projects/`. Delete existing images to regenerate.

## CI Pipeline Order

GitHub Actions runs checks in this order:

1. `format` – Prettier formatting
2. `lint` – ESLint with TypeScript and Svelte
3. `typecheck` (`pnpm run check`) – Svelte type checking
4. `build` – Production build

All checks use `--frozen-lockfile` for reproducible installs.

## Architecture Notes

**SvelteKit with Cloudflare Pages adapter.** Key configuration:

- `svelte.config.js`: Cloudflare adapter excludes all routes except `/sitemap.xml` from edge functions
- `wrangler.jsonc`: Deploys from `.svelte-kit/cloudflare`
- `vite.config.ts`: Uses `enhancedImages()`, `sveltekit()`, `svg()`, and Tailwind v4

**Project structure:**

- `src/routes/` – SvelteKit pages (`+page.svelte`, `+layout.svelte`, etc.)
- `src/lib/` – Components, utilities, and data
    - `projects.ts` – Project metadata (edit here to add/modify projects)
    - `images/projects/` – Generated project screenshots
- `scripts/` – Build utilities (image generation)
- `static/` – Static assets

**Images:** Uses `@sveltejs/enhanced-img` for optimized images. Project screenshots are generated via Playwright and stored in `src/lib/images/projects/{projectId}/` (or `{projectId}/light/` and `{projectId}/dark/` for themed projects).

## Style Conventions

**ESLint:** TypeScript strict mode, Svelte all rules enabled, plus Perfectionist for alphabetical sorting of imports/exports/objects. Key exceptions:

- `svelte/block-lang` requires `<script lang="ts">`
- `svelte/no-inline-styles` is off
- Perfectionist sorts most constructs alphabetically with `@sort` comment support for partitions

**Prettier:** 4-space indentation, double quotes, trailing commas. Svelte files use the Svelte parser.

## Adding a Project

1. Add project data to `src/lib/projects.ts`
2. Create image generation code in `scripts/gen-images.ts` if screenshots needed
3. Run `pnpm run gen:images` to generate screenshots
4. Build and verify: `pnpm run build && pnpm run preview`

## Deployment

Cloudflare Pages via Wrangler. Requires Cloudflare authentication. Build output goes to `.svelte-kit/cloudflare/`.

```bash
# Deploy (builds then deploys)
pnpm run deploy
```

**Sitemap:** Auto-generated post-build by `svelte-sitemap` from config in `svelte-sitemap.config.ts`.
