import Wordmark from '@/components/Wordmark';
import { TopNav } from '@/components/TopNav';

/**
 * Day 1 deliverable per build plan: brand-locked placeholder. Beautiful and
 * on-brand even at "hello world" stage — so anyone who hits the staging URL
 * sees credibility, not broken stuff.
 *
 * Rendered statically (no framer-motion mount animation) after production
 * diagnostic showed the framer-motion mount fade-in could freeze mid-animation
 * on React 19 + Next 16 + Framer Motion 12. Above-the-fold must render fully
 * visible immediately. Surgical motion can be added back later (whileInView,
 * hover interactions, scroll-driven sections — not mount fades).
 *
 * Sections to be built in sequence (Days 3-10):
 *   #hero      — Live Pulse analyzer (Days 3-4) — THE moment.
 *   #flywheel  — Interactive flywheel + leak indicator (Day 5)
 *   #day       — Day-in-the-life scrubber (Day 6)
 *   #proof     — Anonymized TCE case + animated counters (Day 7)
 *   #stack     — Tool node-graph (Day 8)
 *   #close     — Two-door close (Day 9)
 */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink overflow-hidden">
      <TopNav />

      {/* Ambient atmosphere — radial gradients + orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(37,99,235,0.06),transparent_60%)]" />
        <div className="orb bg-elec/30 w-[500px] h-[500px] -top-32 -left-32" />
        <div className="orb bg-plumb/20 w-[600px] h-[600px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* Day-1 placeholder hero — brand-locked, fully static */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
        <div className="max-w-3xl text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-elec mr-3 align-middle animate-pulse" />
            v1 in development · staging build
          </p>

          <div className="mb-10">
            <Wordmark size="2xl" onDark live />
          </div>

          <h1 className="font-display text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.05] mb-6 mobile-text-balance">
            The operating layer for service businesses.
          </h1>

          <p className="text-lg sm:text-xl text-platinum-soft leading-relaxed max-w-2xl mx-auto mb-12">
            A new staybookt.com is coming. Pulse identifies your leak. The team ships the fix.
            The flywheel compounds. Watch this space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="sms:+16474908937"
              className="hero-cta inline-flex items-center gap-3 text-sm font-semibold border border-white/30 hover:border-white/0 text-white px-7 py-3.5 rounded-xl transition-all"
            >
              <span className="relative z-10">Text Pulse: +1 647-490-8937</span>
              <span className="relative z-10">→</span>
            </a>
            <a
              href="https://cal.com/jacobcharendoff/staybookt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold text-platinum-soft hover:text-white transition-colors px-4 py-3.5"
            >
              <span>Or book a 30-min walkthrough</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <div className="absolute bottom-12 text-[10px] tracking-[0.3em] uppercase text-mute-dark font-semibold flex items-center gap-3">
          <span className="w-8 h-px bg-mute-dark/40" />
          <span>v1 launch · 10 working days</span>
          <span className="w-8 h-px bg-mute-dark/40" />
        </div>
      </section>

      {/* Future section placeholders — anchor targets for nav links */}
      <section id="flywheel" aria-hidden className="h-0" />
      <section id="day" aria-hidden className="h-0" />
      <section id="proof" aria-hidden className="h-0" />
      <section id="stack" aria-hidden className="h-0" />
      <section id="close" aria-hidden className="h-0" />
    </main>
  );
}
