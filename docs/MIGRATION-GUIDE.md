# Migration guide — from island to React components

Every route already renders identically as an **island** (original body HTML +
scripts). This guide shows how to graduate a page into real, translated React
components, and how to add or change pages.

## Route map (legacy file → route)

`i18n-extraction/route-map.json` has the full list. Summary:

| Legacy file | Route |
| --- | --- |
| `GenuDo.html` | `/` |
| `who-is-genu.html` | `/who-is-genu` |
| `ai-employees.html`, `knowledge.html`, `models.html`, `pipelines.html`, `stages.html`, `followups.html`, `channels.html`, `contacts.html`, `analytics.html`, `integrations.html`, `product.html`, `api-mcp.html` | `/<name>` |
| `sol-*.html` | `/sol-*` |
| `ind-*.html` | `/ind-*` |
| `use-cases`, `customers`, `pricing`, `contact`, `security`, `api-docs`, `changelog`, `blog` | `/<name>` |
| `blog-<slug>.html` | `/blog/<slug>` |

> The chrome links already point at these clean routes. If you prefer different
> slugs (e.g. `/solutions/sales-agent`), rename the folder in
> `src/app/[locale]/` and update the `href`s in `SiteNav.tsx` / `SiteFooter.tsx`.

## Anatomy of an island page

```tsx
import html from '@/legacy-html/pipelines';
import LegacyScripts from '@/components/LegacyScripts';
// <div dangerouslySetInnerHTML={{__html: html}} /> + <LegacyScripts .../>
```

- The HTML string is in `src/legacy-html/pipelines.ts`.
- The scripts array lists the behavior files the page needs (`/js/*`, `/genu/genu-robot.js`).

## Converting a page body to components (recommended flow)

Do it **section by section** so you can diff against the live island at every step.

1. **Pick a section** (e.g. the hero). Open the matching
   `legacy-source/website/<page>.html` and copy the section's markup.
2. **Create a component** in `src/components/<page>/Hero.tsx`. Paste the markup as
   JSX:
   - `class=` → `className=`, `for=` → `htmlFor=`, `style="a:b"` → `style={{ a: 'b' }}`.
   - Self-close void tags (`<img />`, `<br />`).
   - Keep the **same class names** — the global CSS styles them unchanged.
   - Replace `<img src="/genu/x.svg">` with `<img src="/genu/x.svg">` (already
     absolute) or migrate to `next/image` later.
3. **Externalize copy to i18n.** Replace visible text with `t('...')` using keys
   from `messages/en.json`. Add the matching Arabic to `messages/ar.json`
   (see `I18N-TRANSLATION.md`). Use the string inventory
   `i18n-extraction/strings.en.json` as your checklist for the page.
4. **Port behavior.** If the section relied on a legacy script, reimplement that
   slice as a `useEffect`/handler in a client component, then **remove that
   script** from the page's `<LegacyScripts scripts={[…]}>` list once nothing
   else needs it. For the mascot, drop in `<GenuRobot .../>`.
5. **Swap it in.** Replace that part of the island with your component. The
   simplest pattern is to stop rendering the island once the whole page is
   componentized:

```tsx
export default async function PipelinesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <PipelinesHero />
      <PipelinesFeatures />
      {/* … */}
    </main>
  );
}
```

6. **Delete** the page's `legacy-html/<page>.ts` and its `LegacyScripts` when the
   page is fully React. Move the page-scoped `<style>` (if any) into a CSS module
   or a scoped block.

### RTL while you componentize

Write **new** components with CSS logical properties (`margin-inline`,
`padding-inline`, `inset-inline-start`, `text-align: start`) so they mirror
automatically under `[dir="rtl"]`. Avoid hard `left/right` and negative
`letter-spacing` (bad for Arabic).

## Adding a brand-new page

```
src/app/[locale]/<route>/page.tsx     # server component
src/components/<route>/…               # its sections
```
Add its nav/footer links (with a `terms.*` label) in `SiteNav.tsx` / `SiteFooter.tsx`,
and its strings to both message catalogs.

## Editing the shared nav / footer

`src/components/SiteNav.tsx` and `SiteFooter.tsx` are the single source of truth
(they replace the old `site-chrome.js`). Labels are `t('terms.*')` / `t('nav.*')`
/ `t('footer.*')`. Icons are inline SVG path strings at the top of `SiteNav.tsx`.

## Images

Global image optimization is off (`next.config.mjs`) so static `<img>` paths
render 1:1. When you componentize, you may switch to `next/image` per image for
optimization — set width/height and verify the layout is unchanged.

## Regenerating an island (if you re-export from the legacy source)

The islands were produced by: take `<body>` inner HTML + page-scoped `<style>`,
strip `<script>` and the `data-site-nav`/`data-site-footer` placeholders, rewrite
asset paths to absolute and `*.html` links to clean routes. Keep that recipe if
you script re-exports.
