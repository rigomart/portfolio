# Repository Guidelines

This repo hosts a Next.js 16 + TypeScript app managed with Bun and styled via Tailwind CSS v4. Use the pointers below to ship small, reviewable changes quickly.

## Project Structure & Modules
- `src/app/`: App Router entry. `layout.tsx` sets global fonts and metadata; `page.tsx` holds the main page. Extend by adding new route folders under `src/app/<route>/`.
- `src/app/globals.css`: Tailwind directives and theme tokens. Keep shared styles here.
- `public/`: Static assets served at the root.
- `biome.json`: Lint/format config (double quotes, space indentation, organizes imports). `next.config.ts`, `tsconfig.json`, and `postcss.config.mjs` hold framework/tooling settings.

## Build, Test, and Development Commands
```sh
bun install          # install deps (preferred package manager)
bun run dev          # start local dev server
bun run build        # production build
bun run start        # serve the built app
bun run lint         # Biome lint/format (run after every code edit)
```

## Coding Style & Naming Conventions
- TypeScript throughout; favor React Server Components unless client features are required.
- Components and files use PascalCase for React components, kebab/pascal route folders per Next.js conventions.
- 2-space indentation, double quotes, trailing commas normalized by Biome. Keep imports minimal; unused imports will be removed.
- Tailwind utilities live in JSX; avoid ad-hoc CSS unless global. Co-locate UI logic near route folders to keep `src/app` tidy.

## Testing Guidelines
- No automated tests are configured yet. For new features, add lightweight coverage (e.g., React Testing Library + Vitest or Playwright) and place specs alongside code (`*.test.tsx`) or under `src/__tests__/`.
- Until test tooling is added, perform manual QA via `bun run dev`, exercising new routes/components. Document manual steps in PRs when tests are absent.

## Commit & Pull Request Guidelines
- Follow the existing Conventional Commit style (`feat:`, `chore:`, `refactor:`) seen in git history.
- Each PR should include a short summary, linked issue (if any), screenshots/GIFs for UI changes, and a note on testing performed.
- Ensure `bun run lint` passes before requesting review; avoid committing generated artifacts.

## Agent Checklist
- Run `bun run lint` after every code change; fix or explain any findings.
- Update `README.md` when you adjust project structure, workflows, or setup steps in a meaningful way.
- Keep diffs small and scoped to one concern to ease reviews.
