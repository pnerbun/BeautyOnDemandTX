# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **AGENTS.md warning:** This project runs Next.js 16 with Turbopack. APIs and conventions differ from training data. Check `node_modules/next/dist/docs/` before writing route handlers or metadata APIs.

## Commands

All commands run from this `site/` directory.

```bash
npm run dev      # Start dev server on http://localhost:3000 (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```

There are no tests. The dev server hot-reloads code changes but requires a **full restart** (`kill $(lsof -ti:3000) && npm run dev`) when:
- Adding new files to `app/` (routes, icons, metadata files)
- Changing `.env.local`

## Architecture

### Tailwind v4
No `tailwind.config.ts` exists. All custom tokens are defined in `app/globals.css` under `@theme {}`. Custom colors (`cream`, `terracotta`, `dusty-rose`, `sage`, `charcoal`, `warm-white`) and font variables (`--font-serif`, `--font-sans`) are declared there. Prose styles for blog posts are also in `globals.css` under `.prose-blog`.

### Blog system
Blog posts are markdown files in `content/blog/`. `lib/blog.ts` parses them and serves them to the App Router pages.

Two formats are supported:
- **Legacy format** (existing posts): metadata extracted via regex from `**Meta title:**` / `**Meta description:**` lines; content starts after the second `---` separator
- **YAML frontmatter** (future posts): parsed via `gray-matter`; takes precedence if a `title` key is present

Filenames must be `YYYY-MM-DD-slug.md` for dates to parse correctly. Files with URL-encoded characters (e.g. `+`, `%28`) in their names will break `next/image` — rename them to use hyphens only.

### Email flow
`lib/send-email.ts` sends two Resend emails on each contact form submission:
1. **Inquiry email** → `CONTACT_EMAIL` env var (elizabethnerbun@gmail.com in production) — fatal if it fails
2. **Confirmation email** → the submitter's address — fire-and-forget (failure is swallowed)

Both send `from: "...@beautyondemandtx.com"`. The domain must be verified in Resend or sends will fail. During local development `CONTACT_EMAIL` can be set to the Resend account owner's email to bypass the domain restriction.

### Gallery
`app/gallery/page.tsx` reads all `.jpg`/`.jpeg` files from `public/gallery/` at request time using `fs.readdirSync`. No image manifest — adding a photo to that folder is all that's needed.

### Favicon / icons
`app/icon.png` (512×512 RGBA PNG) is the primary favicon — Next.js auto-generates the `<link rel="icon">` tag. `app/apple-icon.png` (180×180) handles iOS. There is no `favicon.ico` in `app/` — it was removed because Next.js's ICO decoder required RGBA format that conflicted with PIL output.

### Environment variables
Defined in `.env.local` (not committed):
- `RESEND_API_KEY` — Resend API key
- `CONTACT_EMAIL` — destination for contact form inquiries
- `PEXELS_API_KEY` — used by the blog-generator agent, not by the Next.js app itself

### SEO
- Page titles use keyword-first format: `"Wedding Hair & Makeup Rockwall TX | Beauty on Demand"`
- Homepage (`app/page.tsx`) contains a `BeautySalon` JSON-LD schema block with structured `areaServed` and `hasOfferCatalog`
- `app/sitemap.ts` and `app/robots.ts` are present
- Blog posts use `generateMetadata` to emit per-post `<title>` and `<meta name="description">` from the parsed markdown metadata
