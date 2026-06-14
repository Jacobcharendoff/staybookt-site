'use client';

const OUTCOMES = [
  { num: '01', title: 'More phone calls', body: 'Generate new leads. More calls means more optionality, and optionality is all good.' },
  { num: '02', title: 'Credibility with clients', body: 'Your closing ratios go up. You grab a bigger piece of the market pie. Customers say yes faster.' },
  { num: '03', title: 'Credibility with vendors', body: 'Better subs want to work for you, and they want less in exchange. Be the customer of choice for your vendors.' },
  { num: '04', title: 'Pricing power', body: 'Even if you don’t want to grow, quality leads are always good. Charge more for the same amount of work.' },
  { num: '05', title: 'Do more of what you like', body: 'We target the specific work you want and drive that traffic to your site. Pick what fills your day.' },
  { num: '06', title: 'Optionality to grow', body: 'Pipeline confidence makes it easier to take on a partner, add a crew, or expand to a new region.' },
  { num: '07', title: 'Less stress', body: 'If the phone is ringing and you can turn down work, you sleep better at night. Full stop.' },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-20 sm:py-28 px-6 sm:px-10 bg-bg-soft border-y border-rule">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-2">
            <p className="eyebrow-num mb-5">01 · What you get</p>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-ink">
              Seven things owners notice <span className="italic text-accent">when the site is working.</span>
            </h2>
          </div>
          <p className="text-base text-ink-soft leading-relaxed self-end">
            Most owners look at a website and see leads. The leads matter. But six other things come with them — and any one is enough on its own.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-2xl overflow-hidden">
          {OUTCOMES.map((o) => (
            <div key={o.num} className="bg-bg-soft p-7 hover:bg-paper transition-colors">
              <p className="eyebrow-num mb-3">{o.num}</p>
              <h3 className="font-display text-xl text-ink mb-2 leading-tight">{o.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
