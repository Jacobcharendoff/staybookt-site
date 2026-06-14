interface Props { size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; onDark?: boolean; mono?: boolean; }

const sizes = { sm: 'text-lg', md: 'text-2xl', lg: 'text-4xl', xl: 'text-6xl', '2xl': 'text-7xl sm:text-8xl' };

export default function Wordmark({ size = 'md', onDark = false, mono = false }: Props) {
  const stayColor = mono ? (onDark ? 'text-white' : 'text-ink') : (onDark ? 'text-white' : 'text-ink');
  const booktColor = mono ? stayColor : 'text-accent';
  return (
    <span className={`font-display ${sizes[size]} tracking-tight inline-flex items-baseline`}>
      <span className={stayColor}>Stay</span>
      <span className={booktColor}>Bookt</span>
    </span>
  );
}
