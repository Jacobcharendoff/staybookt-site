'use client';
import { useEffect, useState, useRef } from 'react';

const METRICS = [
  { label: 'Leads / month', before: 8, after: 40, suffix: '', color: '#06B6D4' },
  { label: 'Google reviews', before: 3, after: 52, suffix: '', color: '#2563EB' },
  { label: 'Owner admin hrs / wk', before: 15, after: 2, suffix: '', color: '#10B981', invert: true },
  { label: 'Booked revenue / mo', before: 18.4, after: 64.2, suffix: 'K', prefix: '$', color: '#14B8A6' },
];

function Counter({ value, prefix = '', suffix = '', duration = 1400 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(value * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setN(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);

  const display = Number.isInteger(value) ? Math.round(n) : n.toFixed(1);
  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="relative py-24 sm:py-32 px-6 sm:px-12 border-t border-divider/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-5">Pilot 1 · 4-truck electrician, southern Ontario</p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.02] mb-6">
            Day 0 to Day 90. <span className="text-platinum-soft">Same business. Same owner.</span>
          </h2>
          <p className="text-base sm:text-lg text-platinum-soft max-w-2xl mx-auto leading-relaxed">Anonymized but unedited. Same business pre-engagement and 90 days into the operating cycle.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {METRICS.map((m) => {
            const delta = m.invert ? `−${(((m.before - m.after) / m.before) * 100).toFixed(0)}%` : `+${(((m.after - m.before) / m.before) * 100).toFixed(0)}%`;
            return (
              <div key={m.label} className="bg-ink-soft/40 border border-divider/60 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: m.color }} />
                <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-mute-dark mb-3">{m.label}</p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-display text-4xl text-white">
                    <Counter value={m.after} prefix={m.prefix} suffix={m.suffix} />
                  </span>
                </div>
                <p className="text-xs text-mute">
                  was <span className="text-platinum-soft">{m.prefix || ''}{m.before}{m.suffix || ''}</span> · <span className="font-bold" style={{ color: m.color }}>{delta}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-leak/5 border border-leak/20 rounded-2xl p-7">
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-leak mb-3">Day 0</p>
            <h3 className="font-display text-2xl text-white mb-4 leading-tight">The leak</h3>
            <ul className="space-y-2.5 text-sm text-platinum-soft">
              <li className="flex gap-3"><span className="text-leak mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>40% of after-hours calls going to voicemail</span></li>
              <li className="flex gap-3"><span className="text-leak mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>No website form. Customers had to find a phone number on Facebook</span></li>
              <li className="flex gap-3"><span className="text-leak mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>Quotes sent and forgotten. No 24h / 72h cadence</span></li>
              <li className="flex gap-3"><span className="text-leak mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>3 Google reviews. Competitors had 40+</span></li>
              <li className="flex gap-3"><span className="text-leak mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>15 hours / week of owner admin time</span></li>
            </ul>
          </div>
          <div className="bg-hvac/5 border border-hvac/20 rounded-2xl p-7">
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-hvac mb-3">Day 90</p>
            <h3 className="font-display text-2xl text-white mb-4 leading-tight">The engine</h3>
            <ul className="space-y-2.5 text-sm text-platinum-soft">
              <li className="flex gap-3"><span className="text-hvac mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>Missed-call SMS recovery: zero unreturned after-hours leads</span></li>
              <li className="flex gap-3"><span className="text-hvac mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>New site live, sticky call bar, form on every page</span></li>
              <li className="flex gap-3"><span className="text-hvac mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>Auto-cadence on every quote at 24h, 72h, 7d</span></li>
              <li className="flex gap-3"><span className="text-hvac mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>52 Google reviews, average rating 4.9</span></li>
              <li className="flex gap-3"><span className="text-hvac mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" /><span>Owner admin down to under 2 hours / week</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
