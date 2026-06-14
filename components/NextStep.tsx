'use client';
import Wordmark from './Wordmark';

export default function NextStep() {
  return (
    <section id="next-step" className="py-20 sm:py-28 px-6 sm:px-10 bg-ink text-bg">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-accent-soft font-semibold mb-6">Next step</p>
        <h2 className="font-serif-display text-5xl sm:text-7xl leading-[1.02] tracking-[-0.02em] mb-7 text-bg">
          Conviction in your pipeline. <span className="italic text-accent-soft">Less stress at night.</span>
        </h2>
        <p className="text-base sm:text-lg text-bg/70 leading-relaxed max-w-2xl mx-auto mb-12">
          30 minutes, no cost, no obligation. We’ll tell you whether StayBookt is the right fit, or refer you to someone who is.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
          <a href="https://cal.com/jacobcharendoff/staybookt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-bg text-ink font-semibold px-7 py-4 rounded-lg hover:bg-accent-soft transition-colors">
            Book a 30-min intro call <span>→</span>
          </a>
          <a href="sms:+16474908937" className="inline-flex items-center gap-2 text-bg font-semibold px-7 py-4 rounded-lg border border-bg/30 hover:border-bg transition-colors">
            Or text Pulse · (647) 490-8937
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-12 border-t border-bg/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Wordmark size="sm" onDark />
            <span className="text-xs text-bg/60">· Newmarket, ON · © 2026</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-bg/60">
            <a href="https://www.topchoiceelectrical.com" target="_blank" rel="noopener noreferrer" className="hover:text-bg transition-colors">topchoiceelectrical.com</a>
            <a href="https://www.xnlhr.com" target="_blank" rel="noopener noreferrer" className="hover:text-bg transition-colors">xnlhr.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
