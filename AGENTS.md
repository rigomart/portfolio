# Repository Guidelines

This repo hosts an Astro + TypeScript app managed with Bun and styled with Tailwind CSS v4.

## Project Structure

- `src/pages/`: File-based routing. `src/pages/index.astro` is the home page.
- `src/layouts/`: Shared layout shells (e.g. `BaseLayout.astro`).
- `src/components/`: Reusable UI components (`*.astro`).
- `src/components/icons/`: Icon-only components in PascalCase.
- `src/data/index.ts`: Centralized data exports and TypeScript type definitions.
- `src/styles/global.css`: Tailwind directives, theme tokens, and custom CSS animations.
- `public/`: Static assets served at the root.

## Build & Development Commands

```sh
bun install          # install deps (preferred package manager)
bun run dev          # start local dev server
bun run build        # production build
bun run preview      # preview the built app
bun run lint         # oxlint with auto-fix (run after every code edit)
bun run check-types  # TypeScript typecheck
```

## Coding Style

### TypeScript & Astro

- TypeScript throughout; prefer `.astro` components and keep pages static by default.
- Define TypeScript interfaces/types in `src/data/index.ts` before the data exports that use them.
- Use `interface` for object shapes, `type` for unions/literals/aliases.
- Components and files use PascalCase (`ProjectCard.astro`).
- Icon components in `src/components/icons/` use PascalCase and contain minimal logic.

### Formatting

- 2-space indentation, double quotes for strings, trailing commas where appropriate.
- Keep imports minimal and at the top; oxlint will auto-organize.
- Relative imports use `../` pattern from `src/` (e.g. `import { projects } from "../data"`).
- Path alias `@/*` is available but relative imports are preferred for clarity.

### Client-Side JavaScript

- Only add client-side JS/hydration when explicitly needed.
- Use Astro client directives sparingly: `client:load`, `client:visible`, `client:idle`.
- Prefer server-side rendering and static HTML generation where possible.

### Tailwind CSS v4

- Tailwind utilities live in templates; avoid ad-hoc CSS unless global.
- Use single quotes for HTML attribute values (e.g. `class='flex gap-4'`).
- Custom animations and tokens go in `src/styles/global.css`.
- Theme tokens defined as CSS custom properties in `:root`, exposed via `@theme inline`.
- Responsive design: mobile-first, use `sm:`, `md:`, `lg:` prefixes.
- Animation delays use inline styles: `style={`animation-delay: ${delay}ms`}`.

### Data Structure Patterns

- Types are exported alongside data: `export type Project = { ... }` then `export const projects: Project[] = [...]`.
- Data arrays should be typed with their interface definitions.
- Nested objects use explicit typing (e.g. `links: { repo: string; demo: string }`).

### Component Patterns

- Props interface: `type Props = { propName: type }` at top of frontmatter.
- Destructure Astro.props immediately: `const { prop } = Astro.props`.
- Use conditional rendering with `&&` or ternary operators for optional content.
- Map over arrays directly in template, not in frontmatter.
- Extract helper functions to frontmatter when logic is reusable (e.g. `getLevelColor`).
- Skeleton components for loading states: `GithubActivitySkeleton.astro` pattern.

### Error Handling

- Use try/catch for external API calls (e.g. GitHubActivity.astro:20-40).
- Provide graceful fallbacks that preserve layout instead of crashing (empty arrays, defaults).
- Log errors to console for debugging while maintaining UI stability.

### Naming Conventions

- Components: PascalCase (`ProjectCard.astro`, `GithubActivity.astro`).
- Props interfaces: PascalCase starting with `Props` or domain names (`interface Props`, `interface Project`).
- Variables/Functions: camelCase (`getLevelColor`, `socialLinks`).
- CSS custom properties: kebab-case with prefix (`--font-open-sans`, `--color-background`).
- Tailwind class attributes: single quotes, space-separated.

## Agent Checklist

- Run `bun run lint` after every code change; fix or explain any findings.
- Run `bun run check-types` when adding or modifying TypeScript definitions.
- Update `README.md` only when adjusting project structure, workflows, or setup meaningfully.
- Use existing component patterns as templates when adding new UI elements.
- Keep data modifications in `src/data/index.ts`, component updates separate.
- DO NOT run the dev environment; assume it's running in an external terminal.
