# StayBookt corporate site v1

The Pulse-led experiential demo site. Built to replace the existing
`staybookt.com` (which currently shows pre-pivot positioning — see
`NOTES.md` for the cutover plan).

## Stack

- Next.js 16.2.6 (App Router) · React 19.2.4
- Tailwind v4 (`@import "tailwindcss"`)
- Framer Motion 12
- Helvetica Neue (with Inter fallback)
- Brand tokens lifted verbatim from `staybookt-investor/app/globals.css`
- Vercel for hosting
- Pulse API (`/api/analyze` on Railway) powers the hero

## Local dev

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

See `DEPLOY.md` for the staging→apex cutover plan. Short version:
- Staging: `new.staybookt.com`
- Production: `staybookt.com` apex (replaces existing site at launch)

## Sections (to be built Days 3-10)

1. **Hero — Live Pulse analyzer** (Days 3-4) — the moment
2. **Flywheel** (Day 5) — operating system, with leak indicator carried from hero
3. **Day in the life** (Day 6) — scroll-driven scrubber
4. **Proof** (Day 7) — anonymized TCE case + counters
5. **Stack** (Day 8) — node graph of tools
6. **Two-door close** (Day 9) — Text Pulse + Book a call

Day 10: QA, perf, copy polish, cutover.

## Reuse map (do not rebuild)

| Asset | Source |
|---|---|
| Brand color tokens | `staybookt-investor/app/globals.css` |
| `FlywheelOS.tsx` | `staybookt-investor/components/FlywheelOS.tsx` (extend with leak indicator) |
| `Wordmark.tsx` | Lifted in `/components/Wordmark.tsx` (extended with `live` prop) |
| `TopNav.tsx` | Lifted in `/components/TopNav.tsx` (rewired for single-page anchors) |
| Pulse `/api/analyze` | Railway `staybookt-pulse-production` |
| Standalone flywheel HTML | `outputs/staybookt-flywheel.html` (reference for leak-pulse mechanic) |
| Day-90 proof targets | Stage `proof` field in `FlywheelOS.tsx` |
| TCE photos / case data | `outputs/tce-photos/`, `outputs/tce-richard-update/` (anonymize for Proof section) |

## Build plan

See `outputs/staybookt-corp-site-build-plan.md` (one level up).
