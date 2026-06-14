'use client';
import { useState } from 'react';

const FAQS = [
  { q: 'How much does an engagement cost?', a: 'Upfront fee of $1,500–$2,500 to ensure commitment and cover build costs. Monthly maintenance is $99 to keep the site updated and performing. We make our actual money on the performance fee — 3 to 5 percent of new business sourced through the site.' },
  { q: 'How fast can the site go live?', a: 'Two to four weeks from kickoff. Most of the time depends on how fast you can get us content — photos, services list, testimonials, geographic coverage. We move when you move.' },
  { q: 'What size business is the right fit?', a: 'Owner-operated service businesses, typically $250k to $5M revenue, where the owner still answers the phone or is one call away. If your sales process runs through procurement and RFPs, we’re not the right shop.' },
  { q: 'Do you work outside Ontario?', a: 'Headquartered in Newmarket, ON. Most work is GTA + York Region + Simcoe County. We’ll take the right files Canada-wide. Out-of-province inquiries: book a call and we’ll talk fit.' },
  { q: 'What if it doesn’t produce revenue?', a: 'You pay the $1,500–$2,500 build and the $99/mo maintenance. That’s it. The performance fee is zero. If the site doesn’t earn its keep over a year, you cancel maintenance and keep what we built.' },
  { q: 'Can I see the work first?', a: 'Two live sites — topchoiceelectrical.com and xnlhr.com. Both owners can be referenced. Call us and we’ll connect you.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="eyebrow-num mb-5">08 · Common questions</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl leading-[1.05] tracking-[-0.02em] text-ink">
            The honest answers.
          </h2>
        </div>
        <div className="border-t border-rule">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-rule">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-6 text-left flex items-center justify-between gap-6 group">
                <span className="font-display text-lg text-ink group-hover:text-accent transition-colors">{f.q}</span>
                <span className={`text-2xl text-mute flex-shrink-0 transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <p className="text-base text-ink-soft leading-relaxed pb-6 max-w-3xl">{f.a}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-mute mt-10">More questions? <a href="https://cal.com/jacobcharendoff/staybookt" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:text-accent-deep">Book a 30-min call →</a></p>
      </div>
    </section>
  );
}
