'use client';
import { useState, useRef, useEffect } from 'react';

const STAGES = ['Pulling PageSpeed', 'Checking Google Business Profile', 'Running keyword gap', 'Counting reviews vs. competitors', 'Scoring conversion paths', 'Identifying the leak'];

const MOCK = {
  default: {
    name: 'Your business', location: 'Toronto, ON', score: 62, leak: 'CAPTURE',
    leakLabel: 'After-hours calls going to voicemail',
    metrics: [
      { label: 'Mobile PageSpeed', value: '52', max: '100', target: 90, status: 'low' },
      { label: 'Google Reviews', value: '11', delta: 'vs. 47 in your category', status: 'low' },
      { label: 'Money keyword rank', value: 'Page 3', delta: 'vs. competitors at #2-4', status: 'low' },
      { label: 'Quote-form on site', value: 'None', delta: 'industry avg: 2', status: 'critical' },
    ],
  },
};

export default function Hero() {
  const [phase, setPhase] = useState<'idle' | 'analyzing' | 'result'>('idle');
  const [input, setInput] = useState('');
  const [stageIdx, setStageIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (phase !== 'analyzing') return;
    setStageIdx(0);
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      if (i >= STAGES.length) {
        clearInterval(id);
        window.setTimeout(() => setPhase('result'), 600);
        return;
      }
      setStageIdx(i);
    }, 700);
    timer.current = id;
    return () => clearInterval(id);
  }, [phase]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setPhase('analyzing');
  };

  const reset = () => {
    setPhase('idle'); setInput(''); setStageIdx(0);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const m = MOCK.default;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto w-full">
        {phase === 'idle' && (
          <>
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-6 inline-flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-elec animate-pulse" />
                Live · powered by Pulse
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.02] mb-7 mobile-text-balance">
                See where your business is leaking.
                <br />
                <span className="text-platinum-soft">In 90 seconds.</span>
              </h1>
              <p className="text-lg sm:text-xl text-platinum-soft max-w-2xl mx-auto leading-relaxed">
                Type your URL. Pulse pulls live data, runs the analysis, and shows you the single stage of your business that's losing the most revenue right now. Then we fix it.
              </p>
            </div>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
              <div className="analyzer-input rounded-2xl p-2 flex items-center gap-2">
                <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="yourbusiness.com or business name + city" className="flex-1 bg-transparent border-0 outline-none px-5 py-4 text-base sm:text-lg text-white placeholder:text-mute-dark" autoFocus />
                <button type="submit" disabled={!input.trim()} className="bg-elec hover:bg-elec-light text-ink text-sm sm:text-base font-bold px-5 sm:px-7 py-4 rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap">Run Pulse →</button>
              </div>
              <p className="text-center text-xs text-mute mt-4">No signup. No credit card. Real data from your real business.</p>
            </form>

            <div className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              {[{ label: 'Live signals', value: '14+' }, { label: 'Avg analysis time', value: '~90s' }, { label: 'Cost to you', value: '$0' }].map((s) => (
                <div key={s.label} className="border border-divider/60 rounded-xl py-5 px-4 bg-ink-soft/30">
                  <p className="font-display text-2xl sm:text-3xl text-white mb-1">{s.value}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-mute-dark font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {phase === 'analyzing' && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-6 inline-flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-elec animate-pulse" />
              Pulse running · {input}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.05] mb-10">Pulling live signals on your business.</h2>
            <div className="space-y-3 text-left bg-ink-soft/40 border border-divider/60 rounded-2xl p-6 sm:p-8">
              {STAGES.map((s, i) => (
                <div key={s} className={`flex items-center gap-4 transition-opacity duration-500 ${i <= stageIdx ? 'opacity-100' : 'opacity-30'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i < stageIdx ? 'bg-hvac/20 text-hvac border border-hvac/40' : i === stageIdx ? 'bg-elec/20 text-elec border border-elec/60 animate-pulse' : 'bg-ink border border-divider'}`}>{i < stageIdx ? '✓' : ''}</span>
                  <span className={`text-sm sm:text-base ${i === stageIdx ? 'text-white' : 'text-platinum-soft'}`}>{s}…</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {phase === 'result' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-3 inline-flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-hvac" />
                Analysis complete · {input}
              </p>
              <h2 className="font-display text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.05] mb-2">
                Your business is leaking in <span className="text-leak">{m.leak}</span>.
              </h2>
              <p className="text-base sm:text-lg text-platinum-soft max-w-xl mx-auto">{m.leakLabel}</p>
            </div>

            <div className="bg-ink-soft/40 border border-divider/60 rounded-2xl p-6 sm:p-8 mb-6">
              <div className="flex items-start gap-6 mb-7">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--elec)" strokeWidth="8" strokeDasharray={`${(m.score / 100) * 263.9} 263.9`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="font-display text-3xl text-white leading-none">{m.score}</span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-mute-dark mt-1">/ 100</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-mute-dark mb-2">Pulse Score</p>
                  <p className="text-platinum text-sm sm:text-base leading-relaxed">
                    Strong on operations and base infrastructure. <span className="text-leak font-semibold">Leaking on capture</span> — every after-hours call goes to voicemail, every web inquiry waits more than a day.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {m.metrics.map((mt) => (
                  <div key={mt.label} className={`rounded-xl border p-4 ${mt.status === 'critical' ? 'border-leak/40 bg-leak/5' : 'border-divider/60 bg-ink-soft/40'}`}>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-mute-dark font-semibold mb-2">{mt.label}</p>
                    <p className="font-display text-2xl text-white">{mt.value}</p>
                    <p className="text-xs text-mute mt-1">{mt.delta || `target ≥ ${mt.target}`}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-elec/5 border border-elec/20 rounded-2xl p-5 sm:p-6 mb-6">
              <p className="text-platinum text-sm sm:text-base">
                <span className="text-elec font-semibold">Next:</span> Scroll for the full operating cycle and the fix path. The CAPTURE leak is highlighted — that's what we'd ship first.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://cal.com/jacobcharendoff/staybookt" target="_blank" rel="noopener noreferrer" className="bg-elec hover:bg-elec-light text-ink text-sm font-bold px-6 py-3.5 rounded-xl transition-colors text-center">Walk through it with us → 30 min</a>
              <button onClick={reset} className="text-sm font-semibold text-platinum-soft hover:text-white transition-colors px-6 py-3.5 border border-divider/60 hover:border-white/30 rounded-xl">Try another business</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
