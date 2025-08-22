import HeroSection from "@/src/components/partner/HeroSection";
import PartnerDequipForm from "@/src/components/partner/PartnerDequipForm";
import PartnerMessageBox from "@/src/components/partner/PartnerMessageBox";

export default function Partner() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <PartnerDequipForm />
      <PartnerMessageBox />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
