# Johnlien Falculan — Portfolio

Next.js (App Router) + Tailwind CSS v4 + TypeScript.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit

| What | File |
|---|---|
| Your name, bio, email, links, experience | `src/content/profile.ts` |
| Case studies (home page rows + `/work/<slug>` pages) | `src/content/projects.ts` |
| Colors and fonts (design tokens) | `src/app/globals.css` (`@theme` block) |
| Hero (selection frame + redline annotation) | `src/components/Hero.tsx` |
| Home page layout | `src/app/page.tsx` |
| Case study page layout | `src/app/work/[slug]/page.tsx` |

Search the project for `TODO` to find every placeholder you still need to write.

## Adding images

1. Export screens from Figma (2x PNG or WebP).
2. Put them in `public/work/<slug>/`, e.g. `public/work/gabaysakuna/cover.png`.
3. Reference them in `projects.ts`:

```ts
cover: { src: "/work/gabaysakuna/cover.png", alt: "GabaySakuna incident report flow on mobile" },
```

Sections take an optional `image` the same way.

## Deploy (free)

1. Push this folder to a GitHub repo.
2. Go to vercel.com, import the repo, and click Deploy. No settings needed.
3. Add your custom domain under Project → Settings → Domains.
