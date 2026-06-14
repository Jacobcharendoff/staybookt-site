'use client';

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <p className="eyebrow-num mb-6">Newmarket, Ontario · Est. 2025</p>
            <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.02] tracking-[-0.02em] mb-7 mobile-text-balance text-ink">
              An operating layer<br />for owner-operated <span className="italic text-accent">service businesses.</span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl mb-10">
              We build the website, run the back office, and get the phone ringing. One senior partner on every file. Pay-for-performance. We only make money if you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href="https://cal.com/jacobcharendoff/staybookt" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a 30-min intro call
                <span>→</span>
              </a>
              <a href="#our-work" className="btn-secondary">See our work</a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-mute">
              <span>✓ Marketing-firm-grade websites</span>
              <span>✓ Pay-for-performance</span>
              <span>✓ No long contracts</span>
            </div>
          </div>
          <div className="lg:col-span-2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-rule shadow-xl">
              <img src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Service business owner on the job" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-paper border border-rule rounded-xl p-5 max-w-[280px] shadow-lg">
              <p className="text-xs eyebrow-num mb-2">Richard says</p>
              <p className="font-serif-display text-lg leading-snug text-ink italic">
                “Conviction in your pipeline creates less stress and allows owners to focus on great longer-term growth decisions.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
