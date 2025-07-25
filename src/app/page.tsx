import HeroSection from "@/src/components/homepage/HeroSection";
import WhatIsDequip from "@/src/components/homepage/WhatIsDequip";
import IncubatorSection from "@/src/components/homepage/IncubatorSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <WhatIsDequip />
      <IncubatorSection />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
