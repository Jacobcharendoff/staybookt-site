import { TopNav } from '@/components/TopNav';
import Hero from '@/components/Hero';
import Flywheel from '@/components/Flywheel';
import DayInLife from '@/components/DayInLife';
import Proof from '@/components/Proof';
import Stack from '@/components/Stack';
import Close from '@/components/Close';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink overflow-hidden">
      <TopNav />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(37,99,235,0.05),transparent_60%)]" />
        <div className="orb bg-elec/20 w-[500px] h-[500px] -top-32 -left-32" />
        <div className="orb bg-plumb/15 w-[600px] h-[600px] bottom-[-200px] right-[-200px]" />
      </div>
      <Hero />
      <Flywheel />
      <DayInLife />
      <Proof />
      <Stack />
      <Close />
    </main>
  );
}
