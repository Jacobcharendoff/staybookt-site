'use client';

const CASES = [
  {
    num: '01',
    name: 'Top Choice Electrical',
    url: 'topchoiceelectrical.com',
    fullUrl: 'https://www.topchoiceelectrical.com',
    owner: 'Tim Ciszko',
    role: 'Owner & operator',
    sector: 'Residential electrical · York Region',
    location: 'Newmarket, ON',
    image: 'https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary: 'Twenty-two years on the tools, six on his own. Tim does panel upgrades, EV chargers, generators, full rewires across York Region and Simcoe County. We rebuilt his site, claimed his GBP, set up his review pipeline, and wired his quote intake.',
    outcomes: [
      { label: 'Site live in', value: '3 weeks' },
      { label: 'Service pages indexed', value: '18' },
      { label: 'Service areas live', value: '11' },
    ],
    quote: 'My old site was three pages of stock photos. Within a month of going live, homeowners were calling me by name from the site. Within two, I was turning down jobs that didn’t fit. That’s the problem you want to have.',
  },
  {
    num: '02',
    name: 'XNL HR & Communications',
    url: 'xnlhr.com',
    fullUrl: 'https://www.xnlhr.com',
    owner: 'Evert Akkerman',
    role: 'Founder · CHRL, LL.M.',
    sector: 'Fractional HR + editorial · Canada-wide',
    location: 'Newmarket, ON',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary: 'Twenty-five years in Canadian HR, twenty-five-plus bylines in Canadian HR Reporter, Municipal World, Talent Canada, Law360. We rebuilt his practice site around the two-practice model (Fractional HR + Editorial), put the testimonials and bylines on the page, and gave him a real intake funnel.',
    outcomes: [
      { label: 'Persona pages', value: '3' },
      { label: 'Testimonials live', value: '6' },
      { label: 'Published bylines on site', value: '12' },
    ],
    quote: 'The redesign told the XNL story the way I’d been trying to tell it for ten years. The first three intake calls after launch were better than the last twenty I’d taken. Same prospects, better-prepared.',
  },
];

export default function OurWork() {
  return (
    <section id="our-work" className="py-20 sm:py-28 px-6 sm:px-10 bg-bg-soft border-y border-rule">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow-num mb-5">03 · Our work</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-ink mb-5">
            Two live sites. <span className="italic text-accent">Two real owners.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            We’d rather show you the work than tell you about it. Both sites below are live, the businesses are running, and the owners answer their own phones.
          </p>
        </div>
        <div className="space-y-8">
          {CASES.map((c) => (
            <article key={c.num} className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-paper border border-rule rounded-2xl overflow-hidden">
              <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img src={c.image} alt={`${c.name} — ${c.sector}`} className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-3 p-7 sm:p-10">
                <div className="flex items-center justify-between mb-4">
                  <p className="eyebrow-num">{c.num} · Case study</p>
                  <a href={c.fullUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-accent hover:text-accent-deep transition-colors">
                    Visit live site →
                  </a>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-ink leading-tight mb-2">{c.name}</h3>
                <p className="text-sm text-accent font-medium mb-1">{c.url}</p>
                <p className="text-sm text-mute mb-5">{c.sector} · {c.location}</p>
                <p className="text-base text-ink-soft leading-relaxed mb-6">{c.summary}</p>
                <div className="grid grid-cols-3 gap-3 mb-7 pb-7 border-b border-rule">
                  {c.outcomes.map((o) => (
                    <div key={o.label}>
                      <p className="font-serif-display text-2xl text-ink leading-none mb-1">{o.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-mute font-semibold">{o.label}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-2 border-accent pl-5 mb-5">
                  <p className="font-serif-display text-lg sm:text-xl text-ink italic leading-snug">“{c.quote}”</p>
                </blockquote>
                <p className="text-sm text-ink">
                  <span className="font-semibold">{c.owner}</span> <span className="text-mute">· {c.role}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-sm text-mute mt-10">
          Two pilots active right now: CR Construction (commercial GC, Concord) and Janbar Electrical (residential, Brighton). Each will land here when they go live.
        </p>
      </div>
    </section>
  );
}
