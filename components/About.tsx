'use client';

const TEAM = [
  {
    name: 'Jacob Charendoff',
    role: 'Co-founder · Engineering + product',
    body: 'Builds the websites, runs the platform, ships the Pulse intelligence layer. Background in operations and software for owner-operated businesses. Toronto.',
  },
  {
    name: 'Richard Roos, CPA',
    role: 'Co-founder · Business development + client success',
    body: 'Twenty-plus years in finance and operations across multiple sectors. The senior voice on your engagement and the partner you call when something matters. Newmarket.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-10 bg-bg-soft border-y border-rule">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow-num mb-5">07 · The team</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-ink mb-5">
            Two partners. <span className="italic text-accent">Both on your file.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            No agencies-of-record, no offshore sub-contracted writing, no junior staff making decisions about your business. The person you sign with is the person on your file.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TEAM.map((p) => (
            <div key={p.name} className="bg-paper border border-rule rounded-2xl p-8">
              <p className="eyebrow-num mb-3">{p.role}</p>
              <h3 className="font-serif-display text-3xl text-ink leading-tight mb-4">{p.name}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
