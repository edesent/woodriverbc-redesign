# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## After-push protocol — DO NOT SKIP

Vercel runs `next build` (including strict TypeScript) on every push to `main`. **The build can fail even when your edit looked fine locally, and when it does, Vercel silently keeps the previous build live** — your change will appear to "404" or just not take effect, and the pastor will think you broke the site.

After **every** push:

1. Call the `check_deploy_status` tool (or run `vercel ls` if you have CLI access) to wait for Vercel to finish.
2. If status is `Ready`: confirm to the pastor what shipped and that it's now live.
3. If status is `Error`: read the build log, identify the failing file and line, fix it, and push again. Repeat until `Ready`. **Do not report the change as live until status is `Ready`.**

Treat a failed deploy the same as a runtime crash — your work isn't done.

## Two failure classes that bite this codebase repeatedly

- **Strict TypeScript at build time.** A page renders `data.someField` while `someField` was just removed from the data file — locally it might render blank or show `undefined`, but on Vercel `next build` fails the type-check and rolls back. Whenever you change a data shape (add/remove a property on an object literal, change a type, rename a key) grep the codebase for callers before pushing.
- **Next.js 16 conventions.** Dynamic page `params` and `searchParams` are `Promise<…>` and must be `await`ed. `generateMetadata` is `async`. `<Image>` remote hosts must be in `next.config.ts`. Tailwind v4 has no `tailwind.config.js` — theme tokens live in `globals.css` under `@theme`.

See `README.md` for the per-repo stack snapshot and project conventions.
