# The Political Atlas of India — by Approaches to IAS

An interactive, exam-oriented atlas of Indian politics for **approachestoias.com** (UPSC
preparation platform). A **fully static Next.js frontend**: every fact lives in local
TypeScript data tables — **no API calls, no backend, no database, no tracking**.

![stack](https://img.shields.io/badge/Next.js-16-black) ![stack](https://img.shields.io/badge/TypeScript-5-blue) ![stack](https://img.shields.io/badge/deploy-Vercel-ready-teal)

## What's inside

| Section | Contents |
| --- | --- |
| **The Map** | 36 states & UTs as interactive tiles — colour by the 2024 Lok Sabha verdict or by who governs each assembly (Nov 2026). Click any tile for seats, alliance split, ruling party/CM and a "UPSC lens" note. |
| **Election Explorer** | Party-wise seats & vote shares for Lok Sabha 2014 / 2019 / 2024, plus the full state-wise alliance table for 2024 (NDA 293 · INDIA 234 · Others 16 = 543, exact sums). |
| **Party Directory** | 6 national parties + ~24 regional parties: founders, founding years, bases, current footprint. |
| **Polity Notes** | 34 exam-calibrated notes on Articles, Schedules, Amendments, doctrines and institutions — each with a prelims pointer. |
| **Timeline** | Milestones from 1950-52 (Constitution, first general election) through the Emergency, Mandal, GST and the 2026 state verdicts. |
| **Practice Quiz** | 18 original UPSC-style MCQs with explanations, shuffled each attempt, scored in-browser. |
| **Compare** | Any two states side by side. |

## Design & copyright posture

- Original design language (ivory-paper editorial style, Fraunces + Instrument Sans, saffron/ink palette) — no third-party design assets.
- Election results, constitutional articles and historical events are **facts** (compiled from publicly available ECI declared results and assembly verdicts up to May 2026; positions stated "as of November 2026").
- **Party symbols are not reproduced** — they are ECI-owned artworks. Colour chips stand in for identity.
- Independent educational project; not affiliated with any government body or other platform.

## Run locally

```bash
bun install        # or: npm install / pnpm install
bun run dev        # http://localhost:3000
bun run lint
```

The whole app is served from a single route (`/`); sections are hash-routed
(`#/map`, `#/elections/2024`, `#/polity`, `#/quiz`, `#/compare`, …).

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

- `states.ts` — 36 state/UT entries (map grid positions, LS 2024 alliance splits, assembly status, notes)
- `elections.ts` — party tables for 2014 / 2019 / 2024
- `parties.ts`, `timeline.ts`, `polity.ts`, `quiz.ts`

Update after each election and the whole atlas follows — charts, map colours and
tables are derived from these tables at render time.

## Tech notes

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui + framer-motion.
- Fonts are bundled locally via `@fontsource-variable/*` — **zero runtime network requests** (works offline once loaded).
- Hash-based routing means static hosting works with no rewrite rules.

## License

MIT — see [LICENSE](./LICENSE). Data disclaimers apply as described in the app's About section.
