# Wood River Baptist Church Redesign

Standalone redesign for Wood River Baptist Church (existing site: <https://www.woodriverbc.org>).

- Preview: <https://woodriverbc-redesign.vercel.app>
- Repo: `edesent/woodriverbc-redesign` — deploys to Vercel automatically on push to `main`.

## For AI editors (ChatGPT, Claude, etc.) — read this before editing

This project's conventions differ from older Next.js documentation. **Following an out-of-date pattern will fail the production build and the site will silently roll back to a previous deploy** — meaning your edit appears to "404" or simply not happen.

### Stack snapshot

| Thing | Version / Setting |
| --- | --- |
| Next.js | **16.2.4** (App Router, Server Components by default) |
| React | 19 |
| Tailwind | **v4** (CSS-first config in `src/app/globals.css`, no `tailwind.config.js`) |
| TypeScript | strict — `next build` fails on any type error |
| Hosting | Vercel — push to `main` triggers a production deploy in ~30s |

### Routing model — single catch-all

This site uses a single optional catch-all `src/app/[[...slug]]/page.tsx` driven by `src/lib/site.ts`. Every "page" you see on the live site is a key in that data file. To add a new page, **don't create a new route folder** — add a new entry to the site data and the catch-all renders it.

The existing `[[...slug]]` route already follows the correct Next.js 16 async-params pattern:

```ts
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const key = routeKey(await params);
}
```

Match that shape when extending the route.

### Other Next.js 16 conventions

1. **`searchParams` is also a Promise.**
2. **`generateMetadata` is async** and receives async params.
3. **`<Image>` remote hosts must be allow-listed** in `next.config.ts` under `images.remotePatterns`.
4. **Tailwind v4** — no `tailwind.config.js`. Theme tokens live in `src/app/globals.css` under `@theme`.

### Editing safely

- For any change to an existing file, prefer a targeted edit. Don't rewrite the whole file unless you're truly rewriting it end-to-end.
- Before pushing, mentally trace the change against the conventions above. If you can't, **don't push** — the type-check will fail on Vercel and silently keep the old build live.

## Commands

```bash
npm run dev    # local dev server (http://localhost:3000)
npm run build  # production build — same type-check Vercel runs
npm run lint
```

## Repo conventions

- Default branch is `main`. Every push to `main` ships to production.
- Commits should describe the *why*, briefly.
- Photos go under `public/<descriptive-name>.<ext>` at full size — don't compress or resize.
