import AboutQuranium from "@/src/components/about/AboutQuranium";
import DequipDecoded from "@/src/components/about/DequipDecoded";
import HeroSection from "@/src/components/about/HeroSection";
import PeopleBehindDequip from "@/src/components/about/PeopleBehindDequip";

export default function About() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <PeopleBehindDequip />
      <DequipDecoded />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
