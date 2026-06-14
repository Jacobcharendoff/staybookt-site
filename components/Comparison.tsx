'use client';

const ROWS = [
  { label: 'Pricing model', a: 'Monthly retainer, $5k–$15k', b: 'Hourly, $150–$300/hr', c: 'Fixed upfront + monthly + revenue share', cAccent: true },
  { label: 'Who builds it', a: 'Junior staff, partner reviews', b: 'You + your nephew', c: 'Senior partner on your file', cAccent: true },
  { label: 'Time to live', a: '8–12 weeks', b: 'Months — if it ships', c: '2–4 weeks', cAccent: true },
  { label: 'Skin in the game', a: 'None — paid regardless', b: 'You took the risk', c: 'We only earn if it produces', cAccent: true },
  { label: 'Ongoing maintenance', a: 'Extra invoice', b: 'You + your nephew, again', c: '$99/mo, included', cAccent: true },
  { label: 'Lock-in', a: '6–12 month contracts', b: 'Stuck with what you built', c: 'No long contracts', cAccent: true },
];

export default function Comparison() {
  return (
    <section id="compare" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow-num mb-5">04 · The honest comparison</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-ink mb-5">
            Three ways to solve this. <span className="italic text-accent">One that doesn’t cost a year of overhead.</span>
          </h2>
          <p className="text-base text-ink-soft leading-relaxed">
            We’re not the right call for every business. Here’s the honest comparison.
          </p>
        </div>
        <div className="hidden md:grid grid-cols-4 gap-px bg-rule border border-rule rounded-2xl overflow-hidden">
          <div className="bg-bg-soft p-5">
            <p className="eyebrow-num mb-2">Option</p>
          </div>
          <div className="bg-bg-soft p-5">
            <p className="eyebrow-num text-mute mb-2">A</p>
            <p className="font-display text-base text-ink">Marketing agency</p>
            <p className="text-xs text-mute mt-1">Partner you signed with, work by analysts</p>
          </div>
          <div className="bg-bg-soft p-5">
            <p className="eyebrow-num text-mute mb-2">B</p>
            <p className="font-display text-base text-ink">DIY / nephew</p>
            <p className="text-xs text-mute mt-1">Built once, never touched again</p>
          </div>
          <div className="bg-accent-bg p-5 border-l-2 border-accent">
            <p className="eyebrow-num mb-2">The StayBookt way</p>
            <p className="font-display text-base text-ink">StayBookt</p>
            <p className="text-xs text-accent-deep mt-1">Senior partner, pay for performance</p>
          </div>
          {ROWS.map((r, i) => (
            <>
              <div key={`${i}-l`} className="bg-paper p-5 text-xs font-semibold text-mute uppercase tracking-wider">{r.label}</div>
              <div key={`${i}-a`} className="bg-paper p-5 text-sm text-ink-soft">{r.a}</div>
              <div key={`${i}-b`} className="bg-paper p-5 text-sm text-ink-soft">{r.b}</div>
              <div key={`${i}-c`} className="bg-accent-bg p-5 text-sm text-ink font-medium border-l-2 border-accent">{r.c}</div>
            </>
          ))}
        </div>
        <div className="md:hidden space-y-4">
          {['Marketing agency', 'DIY / nephew', 'StayBookt'].map((opt, idx) => (
            <div key={opt} className={`border rounded-2xl p-6 ${idx === 2 ? 'border-accent bg-accent-bg' : 'border-rule bg-paper'}`}>
              <p className="eyebrow-num mb-2">{idx === 2 ? 'The StayBookt way' : `Option ${String.fromCharCode(65 + idx)}`}</p>
              <p className="font-display text-lg text-ink mb-4">{opt}</p>
              <dl className="space-y-3 text-sm">
                {ROWS.map((r) => (
                  <div key={r.label} className="grid grid-cols-2 gap-2">
                    <dt className="text-mute text-xs uppercase tracking-wider font-semibold pt-0.5">{r.label}</dt>
                    <dd className="text-ink-soft">{idx === 0 ? r.a : idx === 1 ? r.b : r.c}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
