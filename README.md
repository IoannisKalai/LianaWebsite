# Liana Kalaitzoglou — Architect Portfolio

A minimal, MAIO-inspired portfolio site built with [Next.js](https://nextjs.org), React, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a project

1. **Images** — Create a folder under `public/projects/your-project-slug/` and add:
   - `cover.jpg` (or `.webp`) — thumbnail for the home grid
   - Optional gallery images (`01.jpg`, `02.jpg`, …)

2. **Metadata** — Add an entry to [`content/projects.json`](content/projects.json):

```json
{
  "slug": "your-project-slug",
  "title": "Project Title",
  "subtitle": "Typology · City, Country",
  "year": 2025,
  "coverImage": "/projects/your-project-slug/cover.jpg",
  "orientation": "vertical",
  "description": "One or two sentences describing the project.",
  "gallery": [
    "/projects/your-project-slug/cover.jpg",
    "/projects/your-project-slug/01.jpg"
  ]
}
```

Use `"orientation": "horizontal"` for wide cover images (landscape) or `"vertical"` for portrait covers — this affects the masonry grid on the home page.

3. Restart the dev server if it is running; the new project appears on the home page and at `/project/your-project-slug`.

## Editing About & contact

- **Bio sections** — Edit [`content/about.md`](content/about.md). Use `## Section title` for each block (About, Education, Experience, etc.).
- **Contact & social** — Edit [`content/site.json`](content/site.json).

## Placeholder images

SVG placeholders are generated for demo projects:

```bash
node scripts/generate-placeholders.mjs
```

Replace them with your own photography when ready.

## Deploy preview (GitHub Pages)

Pushes to `master` or `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publish a static build to GitHub Pages.

- **Preview URL:** `https://<your-github-username>.github.io/LianaWebsite/`
- **Repo:** private on GitHub; enable Pages under **Settings → Pages → Build and deployment → GitHub Actions** (done automatically on first deploy if you use `gh` setup below).
- **Local dev** uses no base path; CI sets `GITHUB_PAGES=true` so assets load under `/LianaWebsite/`.

> GitHub Pages on a **private** repository requires a [paid GitHub plan](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#limits) (Pro or higher). On the free plan, use a public repo or deploy to Vercel instead.

## Deploy to Vercel (production)

1. Push this repository to GitHub.
2. Sign in at [vercel.com](https://vercel.com) and **Import** the repository.
3. Vercel detects Next.js automatically — deploy with default settings (no `GITHUB_PAGES` env var).
4. Add a custom domain under **Project → Settings → Domains** when you have one.

## Project structure

```
app/              Pages (home, about, project detail)
components/       UI components
content/          site.json, projects.json, about.md
lib/              Data loaders and types
public/projects/  Your project images
```
