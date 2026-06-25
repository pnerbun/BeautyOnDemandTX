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
`app/gallery/page.tsx` reads all `.jpg`/`.jpeg` files from `public/gallery/` at request time using `fs.readdirSync`, then **`.sort()` alphabetically**. No image manifest — adding a photo to that folder is all that's needed.

Two consequences worth knowing before touching gallery files:
- **Filenames encode grouping.** Photos are named `wedding-NN-{subject}-nn.jpg` (plus a `bridal-hairstyle-detail-*` set). The alphabetical sort is what keeps each wedding's photos contiguous on the page, so keep the `wedding-NN` prefix when adding/renaming.
- **Three home components hardcode specific gallery filenames** as background/preview images: `components/home/Hero.tsx`, `components/home/ContactCTA.tsx`, and the `previewPhotos` array in `components/home/GalleryPreview.tsx`. Renaming or removing a gallery file means updating these references in lockstep, or those images 404. `app/gallery/page.tsx` itself is dynamic and never needs updating.

### City landing pages
Local-SEO pages live at `/locations/<city>`, served by the single dynamic route `app/locations/[city]/page.tsx` (one template) driven entirely by the `cities` data array in `lib/locations.ts`. Each `City` object carries its own copy, venue list, travel note, meta title/description, and nearby towns; the page emits per-city `Service` + `BreadcrumbList` JSON-LD.

`lib/locations.ts` is the single source of truth — **add a city by appending one object to the array** and the page, sitemap, footer, and About service-area section all pick it up automatically via the exported `cities` / `citySlugs` / `getCity()`. The footer (`components/layout/Footer.tsx`) and About page import `cities` for internal links, and `app/sitemap.ts` imports `citySlugs`.

### Services page
Pricing, travel-fee tiers, and the booking/cancellation policy on `app/services/page.tsx` are plain data arrays (`pricing`, `travelFees`, `policies`) declared at the top of the file — edit those rather than the JSX. Travel fees are a flat schedule by distance from Rockwall; the city pages reference this schedule rather than quoting per-booking.

### Favicon / icons
`app/icon.png` (512×512 RGBA PNG) is the primary favicon — Next.js auto-generates the `<link rel="icon">` tag. `app/apple-icon.png` (180×180) handles iOS. There is no `favicon.ico` in `app/` — it was removed because Next.js's ICO decoder required RGBA format that conflicted with PIL output.

### Environment variables
Defined in `.env.local` (not committed):
- `RESEND_API_KEY` — Resend API key
- `CONTACT_EMAIL` — destination for contact form inquiries
- `PEXELS_API_KEY` — used by the blog-generator agent, not by the Next.js app itself

### SEO
- Page titles use keyword-first format: `"Wedding Hair & Makeup Rockwall TX | Beauty on Demand"`. The root layout sets a title `template` of `"%s | Beauty on Demand"`, so per-page `title` strings should omit the brand suffix.
- Sitemap/robots use Next's **native metadata routes** (`app/sitemap.ts` / `app/robots.ts`) — **not** `next-sitemap`, despite what the parent project brief lists. `sitemap.ts` is `async` and builds its URL list from the static pages plus `citySlugs` (locations) and `getAllPosts()` (blog), so new cities and posts appear automatically.
- Homepage (`app/page.tsx`) contains a `BeautySalon` JSON-LD schema block with structured `areaServed` and `hasOfferCatalog`
- Blog posts and city pages use `generateMetadata` for per-page `<title>` / `<meta name="description">`
