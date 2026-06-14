'use client';
import Wordmark from './Wordmark';

export default function Close() {
  return (
    <section id="close" className="relative py-24 sm:py-32 px-6 sm:px-12 border-t border-divider/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-5">Two doors</p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.02] mb-6">Pick one.</h2>
          <p className="text-base sm:text-lg text-platinum-soft max-w-2xl mx-auto leading-relaxed">
            You’ve seen the wheel and the engine. The fastest way to know if this is for you is to use it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          <a href="sms:+16474908937" className="group relative bg-ink-soft/40 border border-divider/60 rounded-2xl p-8 hover-lift block" style={{ borderColor: 'rgba(6,182,212,0.3)' }}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-elec" />
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-elec mb-4">Low commitment</p>
            <h3 className="font-display text-3xl sm:text-4xl text-white mb-3 leading-tight">Text Pulse</h3>
            <p className="text-base text-platinum-soft mb-6 leading-relaxed">
              Text any business URL to <span className="text-white font-mono">+1 647-490-8937</span>. Pulse runs the same
              analysis you saw at the top, sends a PDF brief back in about 90 seconds.
            </p>
            <div className="bg-ink/60 rounded-lg p-4 mb-6 border border-divider/60 font-mono text-sm">
              <p className="text-mute-dark">To: <span className="text-elec">+1 647-490-8937</span></p>
              <p className="text-platinum mt-2">yourbusiness.com</p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-elec group-hover:gap-3 transition-all">
              <span>Open Messages</span><span>→</span>
            </div>
          </a>

          <a href="https://cal.com/jacobcharendoff/staybookt" target="_blank" rel="noopener noreferrer" className="group relative bg-ink-soft/40 border border-divider/60 rounded-2xl p-8 hover-lift block" style={{ borderColor: 'rgba(79,70,229,0.3)' }}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-elec-accent" />
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-platinum-soft mb-4">Higher commitment</p>
            <h3 className="font-display text-3xl sm:text-4xl text-white mb-3 leading-tight">Book a walkthrough</h3>
            <p className="text-base text-platinum-soft mb-6 leading-relaxed">
              30 minutes with Jacob. We walk your business through the flywheel live, show you what we’d ship in the first 30 days, and talk performance terms.
            </p>
            <div className="bg-ink/60 rounded-lg p-4 mb-6 border border-divider/60">
              <p className="text-[10px] tracking-[0.2em] uppercase text-mute-dark font-semibold mb-2">What we cover</p>
              <ul className="text-xs text-platinum-soft space-y-1">
                <li>· Your specific leak + the fix path</li>
                <li>· Foundation buildout timeline</li>
                <li>· Performance-aligned pricing</li>
              </ul>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
              <span>Pick a time</span><span>→</span>
            </div>
          </a>
        </div>

        <div className="text-center mb-12">
          <p className="text-sm text-mute leading-relaxed max-w-2xl mx-auto">
            Performance-aligned engagements. We win when you do. No long contracts.<br />
            Based in Toronto, working with service businesses across North America.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-divider/40">
          <Wordmark size="sm" onDark />
          <p className="text-[10px] tracking-[0.25em] uppercase text-mute-dark font-semibold">
            © 2026 StayBookt · Made in Toronto
          </p>
        </div>
      </div>
    </section>
  );
}
