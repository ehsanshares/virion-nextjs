# Virion — Next.js 16 Fintech & SaaS Template

A production-ready fintech / SaaS template built on **Next.js 16** (App Router) +
**React 19** + **TypeScript**. 41 pages, no CMS or backend required.

Full documentation is in `documentation/index.html` (in the download).

## Approach

The template reuses its **original hand-crafted stylesheet**
(`public/assets/css/styles.css` + `fonts.css`) and reproduces the original markup
and class names inside React components, so the design is pixel-faithful and there's
no utility-framework or build-time CSS pipeline to learn.

- **Styling** — the original `styles.css` is linked from the root layout. Brand
  colors, fonts, type scale and spacing are CSS custom properties in the `:root`
  block of that file; change them once to re-theme the whole site. All assets live
  under `public/assets/`.
- **Interactivity** — `src/components/virion-scripts.tsx` is a single client
  component handling the mobile nav, Pages dropdown, pricing/blog tabs, FAQ
  accordion, localStorage cart, checkout, marquees, scroll-reveal and demo forms.
- **Layout** — `src/app/layout.tsx` provides the shared `<Header>`, `<Footer>` and
  the linked stylesheet; each route under `src/app/` renders its own content.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
npm run start    # serve the production build
npm run typecheck
```

## Editing content

- **Blog & integrations** — MDX collections in `src/content/blog/*.mdx` and
  `src/content/integrations/*.mdx` (frontmatter + Markdown body). Add a file to
  publish a new entry; the listing and `[slug]` detail routes pick it up
  automatically (loader in `src/lib/content.ts`).
- **Products** — `src/content/products.json` (drives `/product/<handle>` + cart).
- **Static pages** — edit text and `<img>` sources directly in
  `src/app/<route>/page.tsx`.
- **Theme** — edit the CSS custom properties at the top of
  `public/assets/css/styles.css`.
- **Header / footer** — shared, edited once in `src/components/layout/`.

## Structure

```
src/
  app/                 one folder per route (page.tsx)
    layout.tsx         shared shell: stylesheet link, Header, Footer, scripts
    not-found.tsx      404 boundary
  components/
    layout/            header.tsx, footer.tsx
    virion-scripts.tsx client interaction layer
public/
  assets/css|fonts|images   original template assets
```
