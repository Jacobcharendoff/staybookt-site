'use client';
import { useState, useEffect } from 'react';
import Wordmark from './Wordmark';

const SECTIONS = [
  { href: '#flywheel', label: 'Flywheel' },
  { href: '#day', label: 'A week' },
  { href: '#proof', label: 'Proof' },
  { href: '#stack', label: 'Stack' },
];

const CAL_LINK = 'https://cal.com/jacobcharendoff/staybookt';

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-divider/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between gap-6">
        <a href="#hero" className="flex items-center gap-3" aria-label="StayBookt — home">
          <Wordmark size="sm" onDark />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="text-[11px] tracking-[0.18em] uppercase font-semibold px-3 py-2 rounded-md transition-colors text-platinum-soft hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#close"
            className="text-[11px] tracking-[0.18em] uppercase font-semibold px-3 py-2 rounded-md text-platinum-soft hover:text-white transition-colors"
          >
            Text Pulse
          </a>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-elec hover:bg-elec-light text-ink text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Book 30 min
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-divider/50 bg-ink/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {SECTIONS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wider uppercase font-semibold py-2 text-platinum hover:text-white"
              >
                {s.label}
              </a>
            ))}
            <a
              href="#close"
              onClick={() => setOpen(false)}
              className="mt-2 border border-divider text-platinum text-sm font-semibold px-4 py-3 rounded-lg text-center"
            >
              Text Pulse
            </a>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-elec text-ink text-sm font-bold px-4 py-3 rounded-lg text-center"
            >
              Book 30 min
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
