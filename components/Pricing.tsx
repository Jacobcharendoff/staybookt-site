'use client';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 px-6 sm:px-10 bg-bg-soft border-y border-rule">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow-num mb-5">05 · Pricing</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-ink mb-5">
            Pay-for-performance. <span className="italic text-accent">We win when you do.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            We recover a fraction of our costs upfront and bet on our ability to deliver. Full cost and profit only come if we grow your revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-paper border border-rule rounded-2xl p-7">
            <p className="eyebrow-num mb-3">01 · Upfront commitment</p>
            <p className="font-serif-display text-5xl text-ink leading-none mb-2">$1,500<span className="text-2xl text-mute">–$2,500</span></p>
            <p className="text-sm text-mute mb-5">One-time, due at kickoff</p>
            <p className="text-sm text-ink-soft leading-relaxed">Covers the build cost. A serious-but-low entry point to get a marketing-firm-grade website live in 2 to 4 weeks.</p>
          </div>
          <div className="bg-paper border border-rule rounded-2xl p-7">
            <p className="eyebrow-num mb-3">02 · Maintenance</p>
            <p className="font-serif-display text-5xl text-ink leading-none mb-2">$99<span className="text-2xl text-mute">/mo</span></p>
            <p className="text-sm text-mute mb-5">Month-to-month, cancel anytime</p>
            <p className="text-sm text-ink-soft leading-relaxed">Hosting, security, content updates, Google updates, monthly performance review. No surprise invoices.</p>
          </div>
          <div className="bg-accent-bg border border-accent rounded-2xl p-7 relative">
            <div className="absolute -top-3 left-7 bg-accent text-bg text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full">Where we make our money</div>
            <p className="eyebrow-num mb-3">03 · Performance fee</p>
            <p className="font-serif-display text-5xl text-ink leading-none mb-2">3<span className="text-2xl text-mute">–5%</span></p>
            <p className="text-sm text-mute mb-5">Of new business sourced through the site</p>
            <p className="text-sm text-ink-soft leading-relaxed">We track every web-sourced lead from form, call, or email. You pay only on revenue we measurably brought in.</p>
          </div>
        </div>
        <div className="bg-paper border border-rule rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <p className="font-serif-display text-2xl text-ink leading-tight mb-2">Want it in writing for your business?</p>
            <p className="text-sm text-ink-soft">Book a 30-min intro and we’ll send you a written proposal in 48 hours.</p>
          </div>
          <a href="https://cal.com/jacobcharendoff/staybookt" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap">
            Book a call →
          </a>
        </div>
      </div>
    </section>
  );
}
