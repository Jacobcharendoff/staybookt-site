'use client';

const TOOLS = [
  { name: 'Twilio', cat: 'Capture · Reputation', color: '#F22F46', stages: ['CAPTURE', 'REPUTATION'] },
  { name: 'CallRail', cat: 'Capture · Attribution', color: '#0066CC', stages: ['CAPTURE'] },
  { name: 'ElevenLabs', cat: 'Capture · AI voice', color: '#7C3AED', stages: ['CAPTURE'] },
  { name: 'OpenAI', cat: 'Capture · Measure', color: '#10A37F', stages: ['CAPTURE', 'MEASURE'] },
  { name: 'Anthropic', cat: 'Measure · BI', color: '#D97757', stages: ['MEASURE'] },
  { name: 'Square', cat: 'Quote · Deliver', color: '#3E4348', stages: ['QUOTE', 'DELIVER'] },
  { name: 'Calendly', cat: 'Quote · Booking', color: '#006BFF', stages: ['QUOTE'] },
  { name: 'HubSpot', cat: 'Quote · CRM', color: '#FF7A59', stages: ['QUOTE', 'REFERRAL'] },
  { name: 'QuickBooks', cat: 'Deliver · Accounting', color: '#2CA01C', stages: ['DELIVER'] },
  { name: 'Mailchimp', cat: 'Reputation · Referral', color: '#FFE01B', stages: ['REPUTATION', 'REFERRAL'] },
  { name: 'Google Cal', cat: 'Quote · Scheduling', color: '#4285F4', stages: ['QUOTE'] },
  { name: 'GBP', cat: 'Find · Reputation', color: '#34A853', stages: ['FIND', 'REPUTATION'] },
  { name: 'Vercel', cat: 'Find · Hosting', color: '#FFFFFF', stages: ['FIND'] },
  { name: 'Supabase', cat: 'Measure · Data', color: '#3ECF8E', stages: ['MEASURE', 'REFERRAL'] },
  { name: 'GitHub', cat: 'Find · Build', color: '#FFFFFF', stages: ['FIND'] },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 px-6 sm:px-12 border-t border-divider/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-5">The stack</p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.02] mb-6">
            Best-in-class tools. <span className="text-platinum-soft">Wired into one rhythm.</span>
          </h2>
          <p className="text-base sm:text-lg text-platinum-soft max-w-2xl mx-auto leading-relaxed">
            We don't build everything from scratch. We pick the right tool for each stage and integrate them into a single operating layer that runs every week. You run the business. We run the stack.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {TOOLS.map((t) => (
            <div key={t.name} className="group bg-ink-soft/40 border border-divider/60 rounded-xl p-5 hover-lift cursor-default">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-display text-base font-bold" style={{ background: t.color + '20', color: t.color }}>
                  {t.name[0]}
                </div>
                <span className="text-[9px] tracking-[0.15em] uppercase font-bold text-mute-dark">
                  {t.stages.length}× stage{t.stages.length > 1 ? 's' : ''}
                </span>
              </div>
              <p className="font-display text-base text-white mb-1">{t.name}</p>
              <p className="text-[10px] tracking-[0.1em] uppercase text-mute font-semibold">{t.cat}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'No new vendor for you', body: 'Every tool above is in our stack. You don’t sign anything, license anything, or learn anything.' },
            { title: 'You don’t see most of them', body: 'They run quietly underneath. You see the Monday brief, the dashboard, the leads. We see the wiring.' },
            { title: 'We swap if better ships', body: 'New tool comes out that beats one of these on your stage? We swap it. Your engine improves. You don’t notice.' },
          ].map((c) => (
            <div key={c.title} className="bg-ink-soft/30 border border-divider/60 rounded-xl p-6">
              <p className="font-display text-lg text-white mb-2">{c.title}</p>
              <p className="text-sm text-platinum-soft leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
