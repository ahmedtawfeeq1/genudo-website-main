# GenuDo Website — Next.js (App Router) + i18n (EN / AR)

Production scaffold of the GenuDo marketing site, refactored from the original
static HTML/CSS/JS into a **standard Next.js App Router** project with reusable
React chrome and **next-intl** internationalization (English + Modern Standard
Arabic, full RTL).

> **Golden rule honored:** the rendered UI is the *same* site you approved. The
> original stylesheets are reused **verbatim**, and every page's markup + behavior
> is preserved. Nothing was visually redesigned during the refactor.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000  → redirects to /en
```

- English: `http://localhost:3000/en`
- Arabic (RTL): `http://localhost:3000/ar`

```bash
npm run build && npm run start   # production build
```

Requires Node 18.18+ (Node 20 LTS recommended).

---

## What's in the box

| Area | Status |
| --- | --- |
| Next.js 15 App Router + TypeScript | ✅ configured |
| next-intl, locale routing `/en` `/ar`, RTL, Tajawal Arabic font | ✅ wired |
| Global styling (original CSS, reused verbatim) | ✅ imported in the root layout |
| Shared chrome — `SiteNav`, `SiteFooter`, `LocaleSwitcher` (real React + i18n) | ✅ built |
| `GenuRobot` React wrapper for the animated mascot | ✅ built |
| **All 38 routes** render end-to-end (island bootstrap, pixel-identical) | ✅ generated |
| Homepage + Who-is-GENU | ✅ hand-authored reference pages |
| i18n message catalogs (`messages/en.json`, `messages/ar.json`) | ✅ shared UI + home + who-is-genu fully translated (MSA) |
| Full EN string inventory for the remaining page bodies | ✅ `i18n-extraction/strings.en.json` (3,429 strings) |
| Original source (HTML/CSS/JS) | ✅ `legacy-source/` |
| Docs | ✅ `docs/` |

**Two migration layers, on purpose:**

1. **React chrome + i18n** — the nav, footer, language switcher and mascot are
   real, reusable, translated React components. This is the target state.
2. **Page-body islands** — each page's original markup is server-rendered as-is
   and its original animation scripts are mounted after paint, so the site is
   live and identical *today*. You then convert each page body into React
   components section-by-section (see `docs/MIGRATION-GUIDE.md`). This is the
   standard "strangler-fig" migration — ship first, refactor incrementally.

---

## Project structure

```
genudo-web/
├─ messages/                 # i18n catalogs — en.json, ar.json
├─ public/                   # static assets served at the site root
│  ├─ genu/                  #   mascot SVGs, logos, genu-robot.js/.css
│  ├─ logos/ assets/ channels/ shots/
│  └─ js/                    #   original behavior scripts (hero, site2, …)
├─ src/
│  ├─ app/[locale]/          # App Router — one folder per route
│  │  ├─ layout.tsx          #   <html lang dir> + fonts + CSS + <SiteNav/><SiteFooter/>
│  │  ├─ page.tsx            #   HOME (reference conversion)
│  │  ├─ who-is-genu/page.tsx#   reference conversion (animated scene)
│  │  └─ <route>/page.tsx    #   36 generated island routes
│  ├─ components/            # SiteNav, SiteFooter, LocaleSwitcher, GenuRobot,
│  │                         # LegacyScripts, BodyNav
│  ├─ i18n/                  # routing.ts, request.ts, navigation.ts
│  ├─ legacy-html/           # server-rendered page-body strings (per route)
│  ├─ middleware.ts          # locale negotiation + redirects
│  └─ styles/                # the ORIGINAL stylesheets, verbatim + chrome.css + rtl.css
├─ legacy-source/website/    # the complete original site (source of truth)
├─ i18n-extraction/          # strings.en.json (worklist) + route-map.json
└─ docs/                     # ARCHITECTURE, MIGRATION-GUIDE, I18N-TRANSLATION
```

---

## Read next

- **`docs/ARCHITECTURE.md`** — why it's built this way, how each layer works.
- **`docs/MIGRATION-GUIDE.md`** — how to turn an island page into React components; route map; adding pages.
- **`docs/I18N-TRANSLATION.md`** — the message system, RTL rules, the Arabic (MSA) glossary + style guide, and the workflow to finish translating every page.

---

## Notes / known limitations

- `legacy-source/website/_ref/` (12 MB of bundled real-product screens) was **excluded** from this package to keep it lean. It is not needed to run the site.
- Island pages mount their original scripts client-side; page bodies are static
  React-inert HTML until you componentize them. Inline `<script>` logic that was
  embedded in a page (rare) is not carried over — see the migration guide.
- The brand name renders as **GENU / GenuDo** in English and **جينـو / جينـو دو**
  in Arabic (note the tatweel `ـ` after the nūn). This is enforced in the catalogs.
