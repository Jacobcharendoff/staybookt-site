# StayBookt corp site — operating context for AI assistants

Read this before working in this repo.

## What this site is

The Pulse-led experiential demo site that REPLACES the existing
`staybookt.com` (pre-pivot SaaS positioning, see `NOTES.md`). Single
page, 6 sections, built in 10 working days.

## Visitor experience flow

1. Land → wonder (hero input draws attention in <5s)
2. Type → engagement (cursor, focus, anticipation)
3. Submit → revelation (live Pulse analysis appears)
4. Scroll → understanding (flywheel + day-in-life + proof + stack)
5. Decision → conversion (Text Pulse or Book a call)

## Non-negotiables

- Time to interactive < 1.5s on mid-tier mobile
- Page weight < 200KB initial
- Lighthouse 95+ across the board
- Motion respects `prefers-reduced-motion`
- 90% of hero inputs produce a valid Pulse analysis
- Copy passes the `human-voice` skill

## Don't reinvent

These already exist — copy from them:
- Brand tokens: `staybookt-investor/app/globals.css`
- Wordmark: `components/Wordmark.tsx` (mirror with extensions)
- TopNav: `components/TopNav.tsx` (extend for single-page anchors)
- FlywheelOS: `staybookt-investor/components/FlywheelOS.tsx`
- Pulse `/api/analyze`: Railway, gated by `PULSE_WEB_KEY`
- Standalone flywheel reference: `outputs/staybookt-flywheel.html`

## Code style

- TypeScript strict
- Functional components only
- `'use client'` at the top of files that need interactivity
- Framer Motion for animation, not CSS keyframes (except where defined in `globals.css`)
- Tailwind utilities first, custom CSS only for ambient effects + animations
- Components live in `/components/`, not nested

## What to flag to Jacob (not assume)

- Copy changes
- Pricing changes
- TCE / customer name decisions
- Anything that touches the apex DNS
- Pulse cost cap adjustments
- Cutover scheduling

## What to do without asking

- Wire up new sections per the build plan
- Optimize performance
- Fix accessibility issues
- Lint + format
- Polish micro-animations
- Mobile responsiveness fixes
