'use client';
import { useState } from 'react';

type Stage = {
  id: string;
  num: string;
  name: string;
  line: string;
  color: string;
  group: string;
  ships: string[];
  tools: string[];
  proofLabel: string;
  proofValue: string;
};

const STAGES: Stage[] = [
  { id: 'find', num: '01', name: 'FIND', line: 'Get the right phone ringing.', color: '#06B6D4', group: 'DEMAND', ships: ['Custom-built local site', 'Google Business Profile rebuild', 'Local SEO + 25 citations', 'Monthly content cadence'], tools: ['GitHub', 'Vercel', 'GBP', 'Local SEO'], proofLabel: 'Pilot 1 target · day 90', proofValue: 'Top 3 local pack rank for core money keyword.' },
  { id: 'capture', num: '02', name: 'CAPTURE', line: 'Never miss a lead.', color: '#0EA5E9', group: 'DEMAND', ships: ['Tap-to-call sticky bar', 'Callback form on every page', 'Missed-call SMS recovery', 'After-hours alert system', 'AI voice agent for off-hours'], tools: ['Twilio', 'CallRail', 'ElevenLabs', 'OpenAI'], proofLabel: 'Pilot 1 target · day 90', proofValue: 'After-hours voicemail rate to zero.' },
  { id: 'quote', num: '03', name: 'QUOTE', line: 'Turn calls into bookings.', color: '#10B981', group: 'EXECUTION', ships: ['On-site quote workflow', '24h / 72h / 7d follow-up cadence', 'Self-booking + calendar sync', 'Lost-quote reason capture'], tools: ['Calendly', 'Google Cal', 'Square', 'HubSpot'], proofLabel: 'Pilot 1 target · day 90', proofValue: 'Zero stale quotes. Same-day first follow-up.' },
  { id: 'deliver', num: '04', name: 'DELIVER', line: 'Run the work and the back office.', color: '#059669', group: 'EXECUTION', ships: ['Scheduling + dispatch', 'Invoicing + QuickBooks sync', 'Customer pre-arrival SMS', 'Field management', 'Compliance + permits'], tools: ['QuickBooks', 'Field Mgmt', 'Twilio SMS'], proofLabel: 'Pilot 1 target · day 90', proofValue: 'Owner admin: 15hr/wk down to under 2hr/wk.' },
  { id: 'measure', num: '05', name: 'MEASURE', line: 'Understand the business.', color: '#14B8A6', group: 'COMPOUNDING', ships: ['Monday brief in the owner’s inbox', 'Live KPI dashboard', 'Monthly board-style review', 'Lead source attribution', 'AI business intelligence layer'], tools: ['Custom Dashboard', 'StayBookt BI', 'Supabase'], proofLabel: 'Pilot 1 cadence', proofValue: 'First Monday brief lands the week the engine activates.' },
  { id: 'reputation', num: '06', name: 'REPUTATION', line: 'Build the brand.', color: '#2563EB', group: 'COMPOUNDING', ships: ['Post-job review request automation', 'Review-of-the-week feature', 'Photo-led case studies', 'Press + directory listings'], tools: ['Twilio', 'Mailchimp', 'GBP'], proofLabel: 'Pilot 1 target · day 90', proofValue: 'Google reviews from 3 to 50+ in 90 days.' },
  { id: 'referral', num: '07', name: 'REFERRAL', line: 'Turn 1 into 3.', color: '#4F46E5', group: 'COMPOUNDING', ships: ['Referral incentive program', 'Annual maintenance reminders', 'Quarterly check-in cadence', 'Past-customer DB activation'], tools: ['HubSpot', 'Supabase', 'Mailchimp'], proofLabel: 'Pilot 1 target · year 1', proofValue: 'Referrals as dominant lead source by Q4.' },
];

const SIZE = 520;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R_INNER = 110;
const R_OUTER = 220;
const GAP = 0.02;
const SEG = (Math.PI * 2) / STAGES.length;

export default function Flywheel() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [leakIdx] = useState(1);

  const seg = (i: number) => {
    const start = -Math.PI / 2 + SEG * i + GAP;
    const end = -Math.PI / 2 + SEG * (i + 1) - GAP;
    const x1 = CX + R_OUTER * Math.cos(start), y1 = CY + R_OUTER * Math.sin(start);
    const x2 = CX + R_OUTER * Math.cos(end), y2 = CY + R_OUTER * Math.sin(end);
    const x3 = CX + R_INNER * Math.cos(end), y3 = CY + R_INNER * Math.sin(end);
    const x4 = CX + R_INNER * Math.cos(start), y4 = CY + R_INNER * Math.sin(start);
    return `M ${x1} ${y1} A ${R_OUTER} ${R_OUTER} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${R_INNER} ${R_INNER} 0 0 0 ${x4} ${y4} Z`;
  };
  const labelPos = (i: number) => {
    const mid = -Math.PI / 2 + SEG * i + SEG / 2;
    const rMid = (R_INNER + R_OUTER) / 2;
    return { x: CX + rMid * Math.cos(mid), y: CY + rMid * Math.sin(mid) };
  };

  const s = STAGES[activeIdx];

  return (
    <section id="flywheel" className="relative py-24 sm:py-32 px-6 sm:px-12 border-t border-divider/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-5">Operating cycle</p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.02] mb-6">
            Seven stages. <span className="text-platinum-soft">One weekly rhythm.</span>
          </h2>
          <p className="text-base sm:text-lg text-platinum-soft max-w-2xl mx-auto leading-relaxed">
            Pulse identifies your leak. The wheel shows what we ship at each stage. Click any segment to see what we'd build for you.
            <span className="text-leak font-semibold"> The pulsing red is where we'd start.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full max-w-[520px] mx-auto aspect-square">
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-full">
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.18)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                </radialGradient>
              </defs>
              <circle cx={CX} cy={CY} r={R_INNER + 50} fill="url(#hubGlow)" />

              {STAGES.map((st, i) => {
                const active = i === activeIdx;
                const isLeak = i === leakIdx;
                return (
                  <g key={st.id} onClick={() => setActiveIdx(i)} className="cursor-pointer">
                    <path
                      d={seg(i)}
                      fill={isLeak && !active ? '#EF4444' : st.color}
                      fillOpacity={active ? 0.34 : isLeak ? 0.22 : 0.07}
                      stroke={isLeak && !active ? '#EF4444' : st.color}
                      strokeOpacity={active ? 1 : isLeak ? 0.8 : 0.3}
                      strokeWidth={active ? 2 : 1}
                      className={isLeak && !active ? 'leak-pulse' : ''}
                      style={{ transition: 'fill-opacity 0.35s ease, stroke-opacity 0.35s ease' }}
                    />
                    <text x={labelPos(i).x} y={labelPos(i).y - 4} textAnchor="middle" fill={active ? st.color : 'rgba(255,255,255,0.62)'} fontWeight={700} fontSize={12} letterSpacing="0.18em" style={{ pointerEvents: 'none', userSelect: 'none' }}>{st.name}</text>
                    <text x={labelPos(i).x} y={labelPos(i).y + 11} textAnchor="middle" fill={active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.32)'} fontWeight={500} fontSize={9} letterSpacing="0.2em" style={{ pointerEvents: 'none', userSelect: 'none' }}>{st.num}</text>
                  </g>
                );
              })}

              <circle cx={CX} cy={CY} r={R_INNER - 6} fill="#050811" />
              <circle cx={CX} cy={CY} r={R_INNER - 6} fill="none" stroke={s.color} strokeWidth={1.5} strokeOpacity={0.55} />
              <text x={CX} y={CY - 30} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={9} fontWeight={700} letterSpacing="0.3em">STAGE</text>
              <text x={CX} y={CY + 14} textAnchor="middle" fill="white" fontSize={50} fontWeight={700} fontFamily="'Helvetica Neue', sans-serif">{s.num}</text>
              <text x={CX} y={CY + 36} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={10} fontWeight={600} letterSpacing="0.25em">/ 07</text>
              <text x={CX} y={CY + 56} textAnchor="middle" fill={s.color} fontSize={9} fontWeight={700} letterSpacing="0.3em">{s.group}</text>
            </svg>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[{ label: 'Demand', color: '#06B6D4', stages: '01 · 02' }, { label: 'Execution', color: '#10B981', stages: '03 · 04' }, { label: 'Compounding', color: '#2563EB', stages: '05 · 06 · 07' }].map((g) => (
                <div key={g.label} className="border-l-2 pl-3 py-1" style={{ borderColor: g.color }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold" style={{ color: g.color }}>{g.label}</p>
                  <p className="text-[10px] text-mute-dark font-mono mt-1">{g.stages}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink-soft/40 border border-divider/60 rounded-2xl p-6 sm:p-8 relative overflow-hidden" style={{ borderColor: s.color + '40' }}>
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: s.color }} />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute font-semibold">STAGE {s.num} / 07</span>
              <span className="w-1 h-1 rounded-full" style={{ background: s.color, opacity: 0.6 }} />
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: s.color }}>{s.group}</span>
            </div>
            <h3 className="font-display text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.02] mb-2" style={{ color: s.color }}>{s.name}</h3>
            <p className="text-xl text-platinum mb-6">{s.line}</p>

            <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-mute-dark mb-3">What we ship</p>
            <ul className="space-y-2 mb-6">
              {s.ships.map((ship) => (
                <li key={ship} className="flex items-start gap-3 text-sm text-platinum leading-snug">
                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span>{ship}</span>
                </li>
              ))}
            </ul>

            <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-mute-dark mb-3">Stack</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {s.tools.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-md bg-ink/60 border border-divider/60 text-platinum-soft font-medium">{t}</span>
              ))}
            </div>

            <div className="pt-5 border-t border-divider/60">
              <p className="text-[10px] tracking-[0.25em] uppercase font-bold mb-1" style={{ color: s.color }}>{s.proofLabel}</p>
              <p className="text-sm text-platinum">{s.proofValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
