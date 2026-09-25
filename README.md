# Ankita Bhagawati — Portfolio

Next.js (App Router) implementation of the one-page portfolio / consultation-booking
site designed in Claude Design. Source design: `project/Ankita Portfolio.dc.html`
(see `../README.md`, `../chats/chat1.md` for the design brief and history).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

- **Contact form**: wired to Formspree via `NEXT_PUBLIC_FORMSPREE_FORM_ID` in
  `.env.local` (already set to the live form `mvzezgvr`, from
  `https://formspree.io/f/mvzezgvr`). `.env.local` is gitignored, so when
  deploying (Vercel, etc.) add this as an environment variable in the hosting
  dashboard too. Without it, the form shows the "email me directly" fallback.
- **Booking**: uses the official `@calcom/embed-react` inline widget, pointed
  at `calLink: "ankita-bhagawati/quick-call"` in `lib/site-config.ts` (i.e.
  `https://cal.com/ankita-bhagawati/quick-call`). Update `calLink` there if
  the event link changes.
- **Analytics**: Google Analytics 4 (`G-H14T3EY2XR`) and Microsoft Clarity
  (`ynuf625ijn`), IDs set in `components/Analytics.tsx`. They only load on the
  live Vercel deployment (`NEXT_PUBLIC_VERCEL_ENV === "production"`, set by
  Vercel automatically), not in local dev or preview deploys. GA4 also gets
  two custom events from `components/Analytics.tsx`: `section_time` (seconds
  spent on each `section[id]`) and `ui_click` (every link/button click, with
  the section it was in).
- **Domain / SEO**: the live domain is `siteUrl` in `lib/site-config.ts`. It
  drives the og:image URL, canonical link, `sitemap.xml` and `robots.txt`.
- **Mascot ("mini witty")**: `public/mascot/` (don't edit those files) is
  embedded by `components/FloatingMascot.tsx`, which also turns on
  drag-to-rotate from outside the iframe.
- **Photos**: `assets/images/hero-placeholder.webp`, `about-placeholder.webp`,
  and `footer-placeholder.webp` are generic placeholder illustrations, not real
  photos. Swap them for real photos (same filenames, or update the imports in
  `components/Hero.tsx`, `About.tsx`, `Footer.tsx`).

## Content

All copy (stats, approach steps, skills, projects, testimonials, FAQs, socials)
lives in `lib/site-config.ts` — edit there rather than in the components.

## Structure

- `app/layout.tsx` — fonts (Anton / Archivo / Caveat) and page metadata
- `app/page.tsx` — assembles the page sections
- `components/` — one component per section (Header, Hero, Approach, About,
  Work, Mentoring, Testimonials, Faq, Booking, Footer)
- `lib/site-config.ts` — all content and theme values

## Notes on the source design

The exported `.dc.html` file was missing the footer's large "final visual
statement" email display — the CSS class and size prop for it survived, but
the markup itself was dropped somewhere in the design tool's editing history.
It's reconstructed here in `components/Footer.tsx` per the original brief and
chat transcript (capped at `clamp(32px, 6.5vw, 92px)`, matching the removed
`footerEmailSize` control).
