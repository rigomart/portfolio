# Maintenance mode

The site currently serves a single maintenance notice. No portfolio content,
data or images are included in the build.

## How it works

- `src/layouts/MaintenanceLayout.astro` is the notice. It is standalone: no
  global styles, no `src/data` imports, no remote fonts, no components from
  the portfolio.
- `src/pages/index.astro` and `src/pages/404.astro` both render it, so every
  route resolves to the notice rather than a broken page.
- The real homepage is still in the repo, moved out of routing behind an
  underscore prefix: `src/pages/_index.astro`. Astro ignores
  underscore-prefixed entries in `src/pages`, so it is not built and not
  served. Everything under `src/components`, `src/data` and `src/assets` is
  untouched, and is simply never imported while the notice is live.
- `public/robots.txt` is set to `Disallow: /` and `public/sitemap.xml` was
  removed so the notice is not indexed in place of the site.

## Restoring the site

```sh
git rm src/pages/index.astro src/pages/404.astro
git mv src/pages/_index.astro src/pages/index.astro
git checkout <last-good-commit> -- public/robots.txt public/sitemap.xml
rm src/layouts/MaintenanceLayout.astro MAINTENANCE.md
```

Then `bun run build` and redeploy.
