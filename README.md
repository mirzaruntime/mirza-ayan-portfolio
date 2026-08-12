# Mirza Ayan Baig — Portfolio

A premium, cinematic portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — page/section animations, magnetic buttons, scroll reveals
- **lucide-react** — icon set (GitHub/LinkedIn are custom inline SVGs, see below)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## ⚠️ Before you deploy — replace these placeholders

All personal content lives in **`lib/data.ts`**. Search that file for `PLACEHOLDER`
and fill in your real details:

| Field | Location |
|---|---|
| GitHub URL | `profile.github` |
| LinkedIn URL | `profile.linkedin` |
| Email | `profile.email` |
| Location | `profile.location` |
| Resume link | `profile.resumeUrl` (add a PDF to `/public/resume.pdf` and point to it) |
| Project live demo / GitHub links | each `Project.liveUrl` / `Project.githubUrl` |
| Testimonials | `components/sections/Testimonials.tsx` — currently honest empty-state placeholders |

Also update:
- `app/layout.tsx` — `siteUrl` constant (your real domain), and add a real `/public/og-image.png` (1200×630) for social share previews
- `app/sitemap.ts` and `app/robots.ts` — same `siteUrl` constant

No experience, education, or certificates were listed in the brief, so those
sections were intentionally left out rather than invented. Add an `Experience.tsx`
/ `Education.tsx` section under `components/sections/` (following the same
pattern as `Services.tsx`) once you have real details, then import it into
`app/page.tsx`.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, JSON-LD
  page.tsx           Assembles all sections
  globals.css        Design tokens (colors, fonts) + utility classes
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           Dynamic robots.txt
components/
  layout/            Navbar, Footer
  sections/          Hero, About, Skills, Projects, Services, Testimonials, Contact
  ui/                 Reusable primitives: MagneticButton, Reveal, SectionHeading,
                       CursorGlow, ScrollProgress, BrandIcons
lib/
  data.ts             All content — edit this file to update the site
  utils.ts            cn() classname helper
```

## Design system

- **Colors** — near-black base (`#09090B`), elevated surfaces (`#0F172A`, `#18181B`),
  electric cyan / soft blue / purple-glow accents.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows/code).
- **Signature interaction** — the hero's terminal-style role cycler (`$ AI Engineer (Aspiring)_`)
  ties the "developer" identity directly into the first thing a visitor sees, instead of a
  generic tagline.
- Respects `prefers-reduced-motion` throughout.

## Deployment

The easiest path is [Vercel](https://vercel.com):

1. Push this repo to GitHub.
2. Import it in Vercel — it will auto-detect Next.js.
3. Deploy.

Any Node-compatible host (Netlify, Railway, your own server via `npm run build && npm run start`) works too.

## Contact form

The contact form currently opens the visitor's email client via a `mailto:` link
(no backend required). To wire it to a real API route or a service like Resend/Formspree,
replace the `handleSubmit` function in `components/sections/Contact.tsx`.
