'use client';

const PRACTICES = [
  {
    num: '01',
    label: 'Practice one',
    title: 'Marketing-firm-grade websites',
    line: 'Built for owner-operated service businesses.',
    body: 'A site that ranks, converts, and tells your story the way it deserves to be told. Local SEO, Google Business Profile rebuild, tap-to-call sticky bars, quote forms on every page, testimonials, real photography of real work.',
    bullets: ['Custom site, not a template', 'Google Business Profile rebuild', 'Local SEO + citations', 'Reviews + photo galleries', 'Tap-to-call, quote form, sticky bars'],
    price: 'From $1,500',
    timing: 'Live in 2 to 4 weeks',
  },
  {
    num: '02',
    label: 'Practice two',
    title: 'The operating platform',
    line: 'The back office, automated.',
    body: 'A 24/7 contact center, quoting tool, online booking, customer appointment reminders, automated Google review solicitation, CRM that talks to your phone, QuickBooks integration, daily “work to do” dashboard. The phone rings and the work gets done.',
    bullets: ['24/7 contact center', 'Quoting tool with follow-up', 'Online booking + appt reminders', 'Automated review requests', 'CRM, QuickBooks, calendar all wired'],
    price: 'On request',
    timing: 'Layered in after the site goes live',
  },
  {
    num: '03',
    label: 'Practice three',
    title: 'Pulse intelligence',
    line: 'Know what’s working. Know what to fix next.',
    body: 'Our internal diagnostic that runs your site and your competitors’ sites against fourteen live signals. Tells you where you’re leaking, where you’re winning, and what to ship next. Text any URL to +1 647-490-8937 and see for yourself.',
    bullets: ['14+ live signals', 'Mobile PageSpeed, GBP, SERP rank', 'Keyword gap vs. competitors', 'Review velocity', 'Conversion path scoring'],
    price: 'Included for clients',
    timing: 'Runs in ~90 seconds',
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow-num mb-5">02 · What we build</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-ink mb-5">
            Three practices. <span className="italic text-accent">One senior team on every file.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            We start with the website, layer in the platform, and run Pulse underneath. One partner stays on your file from intake through year three.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRACTICES.map((p) => (
            <div key={p.num} className="bg-paper border border-rule rounded-2xl p-7 hover-lift">
              <p className="eyebrow-num mb-3">{p.num} · {p.label}</p>
              <h3 className="font-serif-display text-2xl text-ink leading-tight mb-1">{p.title}</h3>
              <p className="text-sm text-accent italic mb-5">{p.line}</p>
              <p className="text-sm text-ink-soft leading-relaxed mb-6">{p.body}</p>
              <ul className="space-y-2 mb-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-rule flex items-center justify-between text-xs">
                <span className="font-semibold text-ink">{p.price}</span>
                <span className="text-mute">{p.timing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
