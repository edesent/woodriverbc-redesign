# Wood River Baptist Church — Redesign

A Next.js redesign of [woodriverbc.org](https://www.woodriverbc.org), living next to the production WordPress site until the church is ready to cut over.

- **Preview:** https://woodriverbc-redesign.vercel.app
- **Repo:** `edesent/woodriverbc-redesign` — pushes to `main` auto-deploy to Vercel in ~30 seconds

---

## Quick start

```bash
git clone https://github.com/edesent/woodriverbc-redesign.git
cd woodriverbc-redesign
npm install
npm run dev          # http://localhost:3000
```

No env vars, no database — the site is fully static and renders from a single TypeScript data file.

```bash
npm run build        # production build (matches Vercel CI)
npm run lint         # eslint
```

---

## Stack

| | |
| --- | --- |
| Next.js | **16.2.4** — App Router, Server Components by default |
| React | 19 |
| Tailwind | **v4** — CSS-first, no `tailwind.config.js` |
| Icons | `lucide-react` |
| Fonts | Libre Baskerville (serif) + Source Sans 3 (sans) via `next/font` |
| Hosting | Vercel (auto-deploy on push to `main`) |

---

## Project structure

```
src/
  app/
    [[...slug]]/page.tsx   # SINGLE catch-all route — renders every page
    layout.tsx             # root layout, header + footer
    globals.css            # all styles + CSS variables (no Tailwind config file)
    icon.png               # favicon (Next.js convention)
    apple-icon.png         # iOS touch icon
    sitemap.ts             # /sitemap.xml
    robots.ts              # /robots.txt
  components/
    Header.tsx             # sticky header with mobile menu
    Footer.tsx
  lib/
    site.ts                # ★ all content — name, nav, services, events, page text
public/
  woodriver/               # church photos and logos
  wood-river-baptist-church.jpg   # hero background
```

### The data-driven catch-all

`[[...slug]]/page.tsx` is a single optional catch-all that handles every URL. The page function reads the slug, looks it up in `src/lib/site.ts`, and renders the matching component.

**To add a new page, you don't create a new route folder** — you add an entry to `textPages` (or `aliases`) in `site.ts`. The catch-all renders it with the `TextPage` component. This keeps content, nav, and routing in one file and makes the site editable from ChatGPT or any non-technical surface.

The route already follows Next.js 16 async-params conventions:

```ts
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const key = routeKey(await params);
  if (key === "home") return <HomePage />;
  if (key === "services") redirect("/#services");
  // ...
}
```

Match that shape when extending.

---

## Design system

Color tokens live in `src/app/globals.css` under `:root`. Use them via `var(--name)` — never hard-code hex.

| Token | Hex | Used for |
| --- | --- | --- |
| `--pine-dark` | `#082c36` | Header top strip, hero bg, footer |
| `--pine` | `#0e4750` | Secondary surfaces, callouts |
| `--gold` | `#5bdae1` | **Brand teal** — primary buttons, hero accents |
| `--copper` | `#2a8a91` | Medium teal — eyebrows, dates, meta |
| `--cranberry` | `#1a3d5c` | Deep navy — events band, form CTAs |
| `--mist` | `#e1f4f5` | Light teal tint — services band, hover |
| `--paper` | `#fbfaf6` | Page background |
| `--ink` | `#0f2227` | Body text |
| `--muted` | `#5f6d70` | Secondary text |

iOS theme color (`viewport.themeColor`) is set to `#5bdae1`.

### Layout patterns

- `.section` — standard 1320px content container, 82px vertical padding
- Full-bleed colored band: set `max-width: none` on the section and constrain children with `> * { max-width: 1320px; margin: 0 auto }` (see `.events-preview`, `.pastor-band`)
- `.button.primary` — teal CTA; `.button.secondary` — outlined

---

## Assets

- **Photos:** `public/woodriver/` at full size — Next.js `<Image>` optimizes on serve.
- **Crosses logo** — the brand mark. Variants:
  - `public/woodriver/wood-riverctosses.png` — original brown line art on transparent
  - `public/woodriver/wood-riverctosses-tight.png` — tight-cropped brown (header)
  - `public/woodriver/wood-riverctosses-teal.png` — full-size teal (footer)
  - `src/app/icon.png` / `apple-icon.png` — tight-cropped teal favicons

Tight-cropped variants were generated with a one-off PIL script that finds the alpha bounding box and re-centers it on a square canvas. If you need a new variant, run a similar script on the source.

---

## Deployment

Every push to `main` triggers a Vercel production deploy in ~30 seconds. There is no staging branch — preview deploys come from PRs.

If a build fails, Vercel keeps the previous version live and the failed deploy shows in the dashboard. **The site does not roll forward to a broken build**, so a TypeScript error or runtime crash will silently look like "my edit didn't appear" — always check Vercel logs when in doubt.

---

## For AI editors (ChatGPT, Claude, etc.)

This README is the source of truth for AI-driven edits; the equivalent `AGENTS.md` isn't loaded by every AI tooling surface.

**Next.js 16 conventions that bite:**

- `params` is a `Promise` — always `await` it before reading.
- `searchParams` is also a Promise.
- `generateMetadata` is async and receives async params.
- `<Image>` remote hosts must be allow-listed in `next.config.ts` under `images.remotePatterns`.
- Tailwind v4 — there is **no** `tailwind.config.js`. Theme is in `globals.css`. Don't generate a config file.
- `viewport.themeColor` lives in a separate `export const viewport` (moved out of `metadata` in Next 15+).

**Editing safely:**

- Prefer targeted edits over full-file rewrites.
- A "new page" is almost certainly an entry in `src/lib/site.ts`, not a new route folder.
- TypeScript is strict; `next build` fails on any type error.

---

## Repo conventions

- Default branch is `main`. Every push ships.
- Commit messages: short, focused on the *why*. The diff already shows the what.
- Don't commit `.env*`, `.vercel/`, `node_modules/`, `tsconfig.tsbuildinfo`.
- Photos go under `public/<descriptive-name>.<ext>` at full size.
