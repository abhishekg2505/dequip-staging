import HeroSection from "@/src/components/homepage/HeroSection";
import WhatIsDequip from "@/src/components/homepage/WhatIsDequip";
import IncubatorSection from "@/src/components/homepage/IncubatorSection";
import DequipTimeline from "@/src/components/homepage/DequipTimeline";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <WhatIsDequip />
      <IncubatorSection />
      <DequipTimeline />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
