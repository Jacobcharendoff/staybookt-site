import { TopNav } from '@/components/TopNav';
import Hero from '@/components/Hero';
import Outcomes from '@/components/Outcomes';
import WhatWeBuild from '@/components/WhatWeBuild';
import OurWork from '@/components/OurWork';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import DontDo from '@/components/DontDo';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import NextStep from '@/components/NextStep';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <TopNav />
      <Hero />
      <Outcomes />
      <WhatWeBuild />
      <OurWork />
      <Comparison />
      <Pricing />
      <DontDo />
      <About />
      <FAQ />
      <NextStep />
    </main>
  );
}
