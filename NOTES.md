# NOTES — open decisions + situational context

Living doc. Updated as we make calls during the 10-day build.

---

## 1. The apex domain situation (CRITICAL — decided how before Day 10)

**What's live at `staybookt.com` right now (verified 2026-06-14):**

A full polished marketing site with PRE-PIVOT positioning:
- Tagline: *"The CRM Built for Canadian Service Businesses"*
- Hero: *"Every missed call is money in your competitor's pocket."*
- Bilingual EN/FR, Canadian tax compliance (HST/GST/QST), HomeStars integration
- 5-step "Call → Lead → Estimate → Job → Invoice" walkthrough
- Tier pricing: $79 Starter / $149 Growth / $299 Scale
- Featured customers: Mike Reynolds (Toronto plumbing), Julie Lavoie (Montreal HVAC), Steve Kim (Vancouver electrical), etc.
- "Trusted by 500+ Canadian service businesses"
- Comparison pages: vs ServiceTitan, vs Jobber, vs Housecall Pro
- Vertical pages: Plumbing / HVAC / Electrical / Landscaping / Roofing / Cleaning
- Email: `hello@staybookt.ca` (note: `.ca`, not `.com`)
- Footer: "Made in Canada. © 2026 Staybookt."

**The problem:** this is the pre-pivot SaaS-positioned marketing site. The
StayBookt strategy has since pivoted to Service-as-Software (see
`staybookt-2-pivot.md` in memory). The new corp site we're building reflects
the post-pivot positioning (Pulse-led, flywheel, "we run the business" not
"we sell you software").

**Cutover plan (Cowork recommends, Jacob to approve):**

1. Build v1 of the new site at `new.staybookt.com` (staging)
2. Vet the new site with Jacob, Richard, and 3-5 trusted operators
3. On launch day, swap `staybookt.com` apex DNS to the new site
4. Add 301 redirects from all old URLs (see `DEPLOY.md`) so SEO continuity isn't
   destroyed
5. Old site (if deployed elsewhere) stays accessible at its previous Vercel/hosting
   URL as a fallback for 30 days, then sunset

**Open question for Jacob:**

- Where is the OLD site deployed? (Probably a different Vercel project, since
  this repo is new. Need to verify before cutover so we don't take it offline
  prematurely.)
- Domain registrar for `staybookt.com` apex? (Memory: GoDaddy for the Pulse
  subdomain. Apex may be the same or different.)

---

## 2. Font stack — Helvetica Neue vs. Instrument Serif

**Current state:**
- Investor site uses **Helvetica Neue** throughout (`.font-display` class).
- The standalone flywheel HTML I built uses **Instrument Serif** italic for display + Inter for body — a more "premium magazine" feel.

**Decision needed before Section 3 build:**

The corp site is going for "seemingly expensive, modern futuristic, immersive."
Helvetica Neue is clean and utilitarian but reads as more "engineer's site"
than "premium brand." Instrument Serif italic for display reads as Apple
Newsroom, Stripe Sessions, or Pitchbook-tier publication design.

**Cowork recommends:** adopt Instrument Serif for display headings (h1, h2, hero
tagline, stage names) while keeping Helvetica Neue for body, nav, UI chrome.
This is consistent with the standalone flywheel and pushes the "premium" lever
harder.

**To enable:** the `.font-serif-display` class is already in `globals.css` ready
to use. If Jacob approves, swap display headings in the hero (Day 3) and section
titles (Days 5-9) to use this class.

If Jacob prefers strict consistency with the investor site, leave it on
Helvetica Neue and update the standalone flywheel HTML to match.

---

## 3. Pulse hero — cost protection and abuse rate-limiting (Day 4 work)

Every Pulse analyze run costs ~$0.09 (per `pulse-doctrine.md`). Hero analyzer
must protect against:

- Bots / scrapers running infinite analyses
- Curious humans submitting 50 URLs in a row
- Repeat submissions of the same URL

**Plan:**

- Cache analyses by URL for 7 days (already done on Pulse side per the v2.1 ship)
- IP rate-limit at the route handler: 3 analyses per IP per hour, 10 per day
- Friction step: require a hover-then-submit pattern (anti-bot)
- Daily cost cap (env var `PULSE_DAILY_CAP_USD`): when exceeded, serve cached
  sample analyses + a friendly "we're at capacity — text Pulse directly" CTA
- Suggested cap: $50/day = ~550 fresh analyses. Adjust based on traffic.

---

## 4. Copy ownership — who writes the words?

The Pulse-doctrine memory references the `human-voice` skill. The corp site
copy MUST sound like Jacob, not a brochure.

**Recommendation:**
- Cowork drafts each section's copy in human-voice mode
- Jacob reviews + edits before each section ships
- No section ships without Jacob's sign-off on copy

Sections requiring Jacob review:
- Hero h1 + lede + analyzer field copy (Day 3)
- Day-in-the-life narrative beats (Day 6)
- Proof framing for the TCE case (Day 7) — also needs anonymization decision
- Two-door close copy (Day 9)

---

## 5. TCE / Tim photos and case data — permission question

For Section 4 (Proof), we want to show real numbers from a real client.

**What we have in outputs:**
- `outputs/tce-photos/` — Top Choice Electrical brand photos
- `outputs/tce-richard-update/` — TCE build status doc + pages

**The decision:**
- Use anonymized framing ("a 4-truck electrician in southern Ontario") with
  real metrics — does NOT require Tim's permission, low risk
- Use TCE name + logo + photos — requires explicit permission from Tim. Higher
  trust signal but takes a conversation
- Use TCE name + anonymized metrics — middle ground, still needs permission

**Cowork recommends:** start anonymized for v1 launch. After launch, with Richard's
help, ask Tim whether he'd let us name him on the site. If yes, swap in Day 1
of v1.1.

---

## 6. Pricing — show on home or dedicated page?

Build plan v1 has pricing only at the two-door close. Old site has a full
`/pricing` page with three tiers.

**Decision:** v1 launches with NO pricing detail on the home page. The two-door
close says "Performance-aligned model. We win when you do." with a small link
to a deeper pricing page IF we build one.

**Why:** the pre-pivot pricing ($79/$149/$299 SaaS) doesn't match the
post-pivot model ($4K foundation + $1,999-$3,499/mo retainer + 10% performance).
Showing post-pivot pricing on the home page will create friction for anyone
who hasn't bought into the experiential demo first.

**Open question:** do we want a `/pricing` page at launch, or save it for v1.1?
Cowork recommends v1.1 — let the hero demo + flywheel + day-in-the-life sell
the model first, then talk price.

---

## 7. Pulse number on the close — `+1 647-490-8937`

Per `staybookt-pulse-deployed.md` this is live. Verified via the Twilio
production account (post-trial upgrade — see prior session task #9).

`sms:+16474908937` URI works on mobile (opens Messages with the number
pre-filled). On desktop, clicking copies to clipboard with a tooltip
confirmation (Day 9 implementation detail).

---

## 8. Old site — what to keep

Things from the old site worth bringing forward (or making sure are preserved):

- Email contact: `hello@staybookt.ca` (currently active — confirm this isn't
  broken by the cutover)
- CRA / compliance trust signals (Made in Canada, PIPEDA compliance) — relevant
  to keep on the new site
- The "8 automations" list — could feed into the stack section visualization
- ROI calculator concept — could be a separate `/calculator` page in v1.1

Things to consciously drop:
- The fake testimonials (Mike Reynolds etc. — those names appear synthetic;
  verify before reuse)
- The "500+ Canadian service businesses" claim — needs real data behind it
- The vs-ServiceTitan / vs-Jobber / vs-Housecall positioning — pre-pivot
  competitive framing that doesn't apply to Service-as-Software
- The SaaS pricing tiers
