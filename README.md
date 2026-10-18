# LiveBridge Site

Public site for LiveBridge (home, Privacy Policy, Terms), built with Astro and published on GitHub Pages.
The app itself lives in a separate, private project.

- `npm install`, then `npm run dev` to work on it, `npm run build` to check it.
- Every push to `main` is built and published by `.github/workflows/deploy.yml`.
- Pages: `src/pages/`. Shared header and footer: `src/layouts/Base.astro`. Styles: `src/styles/global.css`.
- Screenshots: `src/assets/` (optimized to WebP at build). Logo and platform icons: `public/brand/`.
