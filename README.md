# Political Atlas — The Shape of Power

**by Approaches to IAS** ([approachestoias.com](https://www.approachestoias.com)) · *for those who refused to quit.*

A cross-referenced encyclopedia of government and political thought: **266 entries** across
**56 countries**, systems of government, political mechanisms, policies, ideologies, founding
documents, concepts, events, movements, figures and institutions — every entry linked to what
it touches, every claim sourced and tiered, every dispute named rather than smoothed over.

A **fully static Next.js frontend**: every fact lives in local TypeScript data tables —
**no API calls, no backend, no database, no tracking**. Search, comparison, path-finding and
quizzes are computed in your browser.

![stack](https://img.shields.io/badge/Next.js-16-black) ![stack](https://img.shields.io/badge/TypeScript-5-blue) ![stack](https://img.shields.io/badge/deploy-Vercel--ready-teal)

## What's inside

| Section | Contents |
| --- | --- |
| **Home** | Hero search, live stat tiles, domain browser, feature cards, a daily featured cross-section, and the rotating Open Question. |
| **Explore** | Browse Domains · A to Z Index · All Systems (filterable directory of every entry) · Category pages with **Browse By** facets (world region, head of state, legislature, electoral system, freedom status, democracy band, founding era). |
| **Countries** | A mega-dropdown selector in the header — 56 countries grouped by region, one click from anywhere. India is the flagship entry with deep modules: a 36-state/UT tile map (2024 Lok Sabha verdict and Nov-2026 assembly positions), the Lok Sabha election explorer (2014–2024), the party directory and the political timeline. |
| **Entry pages** | Breadcrumbs, verification badges, attested facts with source superscripts, classification columns, **At a Past Year** time-travel for countries, outward + inward **Connections**, a Path Finder teaser, tiered **Sources**, and browser-local notes. |
| **Discover** | **Compare** any two entities side by side (shared values shaded) · **Path Finder** — the shortest chain of recorded relations between any two entries · **Trails** — eight argued routes through the collection with browser-kept progress · **Today** — the atlas calendar of national and constitutional days. |
| **Interact** | Quizzes (10 scored quizzes, difficulty and length pickers, in-browser scoring) · Open Questions · Disputed Statements · Cases · Recent Corrections · Recently Added · Campaigns · Forum · Communities · Embed a Card. |
| **About** | How This Atlas Works · Why Create an Account · News · FAQ · Subscribe · Newsletter Editions · Privacy · Terms · Copyright · Accessibility · Reviewers · Contact · Follow. |

## Design & copyright posture

- **Original design language**: ivory-paper editorial style, Fraunces + Instrument Sans,
  Approaches crimson (`#C91C1C` family) on warm ink — no third-party design assets.
- **Original prose throughout.** No passage is copied from any encyclopaedia or website;
  facts are compiled from the public reference works each entry names.
- **No party symbols or state emblems are reproduced** — they are commission-owned artworks.
- The Approaches "A" mark is recreated as inline SVG for brand consistency with the publisher.
- Independent educational project; not affiliated with any government body or platform.

## Run locally

```bash
bun install        # or: npm install / pnpm install
bun run dev        # http://localhost:3000
bun run lint
```

The whole app is served from a single route (`/`); sections are hash-routed
(`#/entry/india`, `#/compare`, `#/trail/ten-leaders`, `#/today`, …), so static hosting
needs no rewrite rules.

## Deploy to Vercel

1. Push this repository to GitHub (or use the existing remote).
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Next.js. Build command `next build`, output default — **no environment variables required**.
4. Deploy. Done — the site is fully static after build.

Or with the CLI:

```bash
npm i -g vercel
vercel --prod
```

## Editing the data

All content lives in `src/data/`:

- `countries-*.ts` — 56 country entries (six standard facts + classification extras + history snapshots)
- `systems.ts`, `mechanisms.ts`, `policies.ts`, `ideologies.ts`, `concepts.ts`,
  `documents.ts`, `institutions.ts`, `figures-a.ts`, `figures-b.ts`, `events.ts`, `movements.ts`
- `quizzes.ts`, `trails.ts`, `open-questions.ts`, `disputed.ts`, `cases.ts`, `corrections.ts`,
  `campaigns.ts`, `news.ts`, `newsletter.ts`, `communities.ts`, `forum.ts`, `calendar.ts`
- `categories.ts` — the domain map; `types.ts` — the contract; `SPEC.md` — the authoring spec

Run the validator after editing:

```bash
npx tsx scripts/validate-data.ts
```

Charts, facets, the A–Z index, search results and the relation graph are all derived from
these tables at render time.

## Tech notes

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui + framer-motion.
- Fonts are bundled locally via `@fontsource-variable/*` — **zero runtime network requests**
  (works offline once loaded).
- Hash-based routing means static hosting works with no rewrite rules.
- Display settings (text size 90–125%, system/light/dark theme) and reader notes are kept in
  the browser's local storage; nothing is ever sent anywhere.

## License

MIT — see [LICENSE](./LICENSE). Data disclaimers apply as described in the app's About section.
