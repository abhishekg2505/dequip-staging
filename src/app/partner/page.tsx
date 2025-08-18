import HeroSection from "@/src/components/partner/HeroSection";
import PartnerDequipForm from "@/src/components/partner/PartnerDequipForm";

export default function Partner() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <PartnerDequipForm />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
