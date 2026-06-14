'use client';

const BEATS = [
  { day: 'Monday', time: '6:42 am', color: '#06B6D4', title: 'Brief lands in the owner’s inbox', body: 'Last week at a glance. Leads, bookings, revenue, missed-call recovery rate. Read in 90 seconds with coffee.', iconPath: 'M3 12h18M3 6h18M3 18h12' },
  { day: 'Tuesday', time: '8:14 pm', color: '#0EA5E9', title: 'After-hours call gets recovered', body: 'Missed-call SMS goes out automatically. Lead replies with a time. Booked before you finish dinner.', iconPath: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z' },
  { day: 'Wednesday', time: '11:03 am', color: '#10B981', title: 'New 5-star review captured', body: 'Finished a job at 10:30. Pre-built post-job message goes out. Review on Google by 11. Featured automatically.', iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z' },
  { day: 'Thursday', time: '3:30 pm', color: '#14B8A6', title: 'Quote follow-up fires at 72 hours', body: 'Quote sent Monday hasn’t closed. Pulse triggers the 72h nudge. Customer replies "yes, send the deposit link."', iconPath: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
  { day: 'Friday', time: '4:48 pm', color: '#2563EB', title: 'Weekly roll-up lands', body: '+14 leads. +9 booked. +3 reviews. $18,400 in new revenue. Owner gets it as a one-pager before he leaves site.', iconPath: 'M18 20V10M12 20V4M6 20v-6' },
  { day: 'Sunday', time: '—', color: '#4F46E5', title: 'Owner takes the day off', body: 'The engine runs. Missed-call recovery still answers. Quotes still follow up. Reviews still come in. Sunday is yours again.', iconPath: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' },
];

export default function DayInLife() {
  return (
    <section id="day" className="relative py-24 sm:py-32 px-6 sm:px-12 border-t border-divider/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-elec font-semibold mb-5">A week with StayBookt</p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.02] mb-6">
            What it feels like <span className="text-platinum-soft">to own a business that runs itself.</span>
          </h2>
          <p className="text-base sm:text-lg text-platinum-soft max-w-2xl mx-auto leading-relaxed">
            A real week. Six beats. The engine does the work. You do the work that actually pays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BEATS.map((b) => (
            <div key={b.day} className="bg-ink-soft/40 border border-divider/60 rounded-2xl p-6 hover-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: b.color }} />
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: b.color }}>{b.day}</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-mute-dark font-mono">{b.time}</span>
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: b.color + '15', color: b.color }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d={b.iconPath} />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white mb-2 leading-tight">{b.title}</h3>
              <p className="text-sm text-platinum-soft leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
