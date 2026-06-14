'use client';
import { motion } from 'framer-motion';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  onDark?: boolean;
  animate?: boolean;
  mono?: boolean;
  live?: boolean;
}

const sizes = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-5xl',
  xl: 'text-7xl',
  '2xl': 'text-8xl sm:text-9xl',
};

/**
 * Wordmark — "StayBookt" with the cool-only gradient sweep on the "Bookt" half.
 * Lifted verbatim from the investor site for visual continuity.
 *
 * Props:
 *  - size:  sm | md | lg | xl | 2xl
 *  - onDark: when true (default), "Stay" renders white. When false, ink.
 *  - animate: stagger reveal on mount (used in hero)
 *  - mono:  collapse to one color (used in compact contexts)
 *  - live:  animate the gradient (heartbeat sweep) — for hero use
 */
export default function Wordmark({
  size = 'md',
  onDark = true,
  animate = false,
  mono = false,
  live = false,
}: Props) {
  const sweep = ['#06B6D4', '#10B981', '#10B981', '#14B8A6', '#2563EB'];
  const baseColor = onDark ? 'text-white' : 'text-ink';

  // Live mode renders the whole Bookt as one gradient text instead of per-letter
  if (live && !mono) {
    return (
      <span className={`font-display ${sizes[size]} tracking-tight inline-flex items-baseline`}>
        <span className={baseColor}>Stay</span>
        <span className="wordmark-gradient-live">Bookt</span>
      </span>
    );
  }

  return (
    <span className={`font-display ${sizes[size]} tracking-tight inline-flex items-baseline`}>
      <span className={baseColor}>Stay</span>
      {'Bookt'.split('').map((letter, i) => {
        const color = mono ? undefined : sweep[i];
        const className = mono ? baseColor : '';
        return animate ? (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={className}
            style={color ? { color } : undefined}
          >
            {letter}
          </motion.span>
        ) : (
          <span key={i} className={className} style={color ? { color } : undefined}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}
