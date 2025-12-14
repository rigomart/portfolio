# Repository Guidelines

This repo hosts an Astro + TypeScript app managed with Bun and styled via Tailwind CSS v4. Use the pointers below to ship small, reviewable changes quickly.

## Project Structure & Modules
- `src/pages/`: File-based routing. `src/pages/index.astro` is the home page.
- `src/layouts/`: Shared layout shells (e.g. `BaseLayout.astro`).
- `src/components/`: Reusable UI components (`*.astro`).
- `src/styles/global.css`: Tailwind directives and theme tokens. Keep shared styles here.
- `public/`: Static assets served at the root.
- `biome.json`: Lint/format config (double quotes, space indentation, organizes imports). `astro.config.mjs` and `tsconfig.json` hold framework/tooling settings.

## Build, Test, and Development Commands
```sh
bun install          # install deps (preferred package manager)
bun run dev          # start local dev server
bun run build        # production build
bun run preview      # preview the built app
bun run lint         # Biome lint/format (run after every code edit)
bun run check-types  # TypeScript typecheck
```

## Coding Style & Naming Conventions
- TypeScript throughout; prefer `.astro` components and keep pages static by default.
- Only add client-side JS/hydration when needed (e.g. `client:load`, `client:visible`).
- Components and files use PascalCase for reusable UI components under `src/components/`.
- 2-space indentation, double quotes, trailing commas normalized by Biome. Keep imports minimal; unused imports will be removed.
- Tailwind utilities live in templates; avoid ad-hoc CSS unless global. Keep shared styles in `src/styles/global.css`.

## Commit & Pull Request Guidelines
- Follow the existing Conventional Commit style (`feat:`, `chore:`, `refactor:`) seen in git history.
- Ensure `bun run lint` passes before requesting review; avoid committing generated artifacts.

## Agent Checklist
- Run `bun run lint` after every code change; fix or explain any findings.
- Update `README.md` when you adjust project structure, workflows, or setup steps in a meaningful way.
- Keep diffs small and scoped to one concern to ease reviews.
