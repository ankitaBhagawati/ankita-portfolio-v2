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
