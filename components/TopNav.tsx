'use client';
import { useState, useEffect } from 'react';
import Wordmark from './Wordmark';

const SECTIONS = [
  { href: '#what-we-build', label: 'What we build' },
  { href: '#our-work', label: 'Our work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-rule' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="StayBookt — home">
          <Wordmark size="sm" />
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="text-xs font-medium px-3 py-2 rounded-md transition-colors text-ink-soft hover:text-ink">{s.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="sms:+16474908937" className="text-xs font-medium px-3 py-2 rounded-md text-ink-soft hover:text-ink transition-colors">Text Pulse</a>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">Book a call</a>
        </div>
        <button className="md:hidden text-ink p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-rule bg-bg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
            {SECTIONS.map((s) => (
              <a key={s.href} href={s.href} onClick={() => setOpen(false)} className="text-sm font-medium py-2 text-ink-soft">{s.label}</a>
            ))}
            <a href="sms:+16474908937" onClick={() => setOpen(false)} className="btn-secondary text-sm mt-2 justify-center">Text Pulse</a>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm justify-center">Book a call</a>
          </div>
        </nav>
      )}
    </header>
  );
}
