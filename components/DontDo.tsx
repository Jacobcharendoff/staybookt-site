'use client';

const ITEMS = [
  { title: 'Mass-produced template sites', body: 'Wix, Squarespace clones, AI-generated single-pagers. If a template solves your problem, take that route and save the money.' },
  { title: 'Paid ads management', body: 'We don’t run Google Ads or Meta Ads. We focus on organic and direct. Pair us with a paid-media specialist if you want both.' },
  { title: 'Long lock-in contracts', body: 'No 6- or 12-month minimums. The site stays yours, the engagement is month-to-month. If we stop earning the work, you stop paying.' },
  { title: 'Procurement-team enterprise sales', body: 'Best fit is the owner who answers their own phone. If your decision lives in a 6-week RFP cycle, we’re not your shop.' },
];

export default function DontDo() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow-num mb-5">06 · What we don’t do</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl leading-[1.05] tracking-[-0.02em] text-ink mb-5">
            We’re not for everyone. <span className="italic text-accent">Here’s what to call someone else for.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ITEMS.map((i) => (
            <div key={i.title} className="bg-paper border border-rule rounded-2xl p-7">
              <h3 className="font-display text-lg text-ink mb-2">{i.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
