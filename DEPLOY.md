# Deploy

## Environments

- **Staging:** `new.staybookt.com` — first deploy lands here. noindex / nofollow until cutover.
- **Production:** `staybookt.com` apex — replaces the existing pre-pivot marketing site at launch.

## Env vars

| Variable | Purpose | Where set |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Used in metadata + canonical | Vercel project (staging + prod) |
| `PULSE_API_BASE` | Pulse Railway base URL (e.g. `https://staybookt-pulse-production.up.railway.app`) | Vercel project, NOT public |
| `PULSE_WEB_KEY` | Token gating Pulse `/api/analyze` | Vercel project, NOT public — rotates per `pulse-doctrine.md` |
| `PULSE_DAILY_CAP_USD` | Soft cap on hero analyses per UTC day | Vercel project |

The Pulse key is only used in the Next.js route handler `/api/analyze` (Day 4)
which proxies to the Pulse Railway endpoint. Never exposed to the client.

## First-time setup

1. Push this repo to a new GitHub repo under the `staybookt` org
   (recommended name: `staybookt-site`)
2. Connect Vercel to the repo
3. Set env vars above in Vercel
4. First deploy → Vercel gives you a `.vercel.app` URL
5. Add a Vercel domain: `new.staybookt.com`
6. In the DNS provider for `staybookt.com` (verify which: per
   `staybookt-infra-migration-pending.md` Pulse uses GoDaddy; apex may differ),
   add a CNAME record: `new` → `cname.vercel-dns.com`
7. Wait for DNS propagation, verify HTTPS cert provisioned

## Cutover from staging to apex (Day 10)

When v1 is signed off, swap `staybookt.com` apex from the existing site to this one.

### Pre-cutover checklist

- [ ] Hero analyzer works end-to-end on 5 sample inputs (URL, name+city, photo)
- [ ] Flywheel + leak indicator carries correctly from Section 1
- [ ] Day-in-the-life scrubber feels smooth on a real iPhone
- [ ] Proof section numbers verified against TCE source data
- [ ] Stack section logos all loading
- [ ] Two-door CTAs both work (Text Pulse + Cal.com)
- [ ] Lighthouse: Performance 95+, Accessibility 95+, Best Practices 95+, SEO 95+
- [ ] No client-side errors in console on real devices
- [ ] OG image + Twitter card render correctly
- [ ] `robots` flipped to `{ index: true, follow: true }` in `app/layout.tsx`
- [ ] Sitemap + robots.txt deployed
- [ ] 301 redirects defined for old site URLs (see below)
- [ ] Copy passed through `human-voice` skill

### SEO continuity — 301 redirects from the old site

The old `staybookt.com` has URLs that may rank. Add `redirects()` in `next.config.ts`
mapping each to the closest equivalent on the new site:

```ts
async redirects() {
  return [
    { source: '/pricing', destination: '/#close', permanent: true },
    { source: '/switch', destination: '/#flywheel', permanent: true },
    { source: '/automations', destination: '/#day', permanent: true },
    { source: '/plumbing', destination: '/', permanent: true },
    { source: '/hvac', destination: '/', permanent: true },
    { source: '/electrical', destination: '/', permanent: true },
    { source: '/landscaping', destination: '/', permanent: true },
    { source: '/roofing', destination: '/', permanent: true },
    { source: '/cleaning', destination: '/', permanent: true },
    { source: '/vs-servicetitan', destination: '/', permanent: true },
    { source: '/vs-jobber', destination: '/', permanent: true },
    { source: '/vs-housecall-pro', destination: '/', permanent: true },
    { source: '/about', destination: '/', permanent: true },
    { source: '/contact', destination: '/#close', permanent: true },
  ];
}
```

(List sourced from the live old site's footer + nav, verified June 14, 2026.)

### Cutover steps

1. In Vercel: add `staybookt.com` as a domain on this project
2. In DNS provider: update apex A record (or ALIAS/ANAME) to Vercel
   - Current value: whatever the old site is on (likely separate Vercel project)
   - New value: per Vercel's instructions for apex domains
3. Wait for DNS propagation (5-60 min typically)
4. Verify HTTPS cert provisioned for apex
5. Verify the homepage loads from `staybookt.com`
6. Verify the 301 redirects fire on the legacy URLs
7. Verify Google can crawl the new site (`robots: { index: true, follow: true }`)
8. Submit updated sitemap in Google Search Console
9. Monitor 404s for first 7 days and add redirects as needed

### Rollback plan

If something is catastrophically wrong on launch day:
- Revert the apex DNS change to point back at the old site
- The old site is presumably still deployed somewhere (verify location before cutover)
- This site stays at `new.staybookt.com` for further work

## Performance budget

- Page weight (initial): < 200 KB transferred
- Time to interactive: < 1.5s on mid-tier mobile / 4G
- Lighthouse Performance: 95+

If a section breaks budget, lazy-load it (`next/dynamic` with `ssr: false` for client-only).
