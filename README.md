# Virion

Fintech / SaaS template, converted from the static HTML template to **Next.js 16**
(App Router) + **React 19** + **TypeScript**. All 41 pages.

## Approach

This is a faithful port: it reuses the template's **original stylesheet**
(`public/assets/css/styles.css` + `fonts.css`) unchanged, and reproduces the
original markup and class names inside React components so the pages match the
source pixel-for-pixel.

- **Styling** — the original `styles.css` is linked from the root layout; no
  styles were rewritten. All assets live under `public/assets/` exactly as the
  template shipped them, so the CSS's relative `url(...)` references resolve.
- **Interactivity** — `src/components/virion-scripts.tsx` ports the template's
  `main.js` (mobile nav, Pages dropdown, pricing/blog tabs, FAQ accordion,
  localStorage cart, checkout, marquees, scroll-reveal, demo forms) into a single
  client-side mount effect. It drives the original markup/classes unchanged.
- **Layout** — `src/app/layout.tsx` provides the shared `<Header>`, `<Footer>`,
  page decoration and the linked stylesheet; each route renders its own content.
- **Routing** — clean App Router paths (e.g. `blog-*.html` → `/blog/<slug>`,
  `integration-*.html` → `/integration/<slug>`, `product-*.html` →
  `/product/<handle>`, `contact-us` → `/contact`, `sign-up` → `/signup`).

## Regenerating pages

Page components are generated from the source HTML by a converter, so a markup
change is a re-run, not a hand edit:

```bash
node scripts/convert-all.mjs   # rewrites every src/app/**/page.tsx from source
```

The script extracts each page's content (between the header and footer, which the
layout provides), rewrites links to clean routes, normalises asset paths, and
converts HTML attributes to their JSX equivalents.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
npm run typecheck
```

## Structure

```
src/
  app/                 one folder per route, page.tsx generated from source HTML
  components/
    layout/            header, footer (original markup)
    virion-scripts.tsx client interaction layer (ported from main.js)
scripts/
  convert-all.mjs      HTML → JSX page generator
public/
  assets/css|fonts|images   original template assets, unchanged
```
