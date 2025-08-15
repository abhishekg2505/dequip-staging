import HeroSection from "@/src/components/qnet/HeroSection";
import QnetDequipForm from "@/src/components/qnet/QnetDequipForm";

export default function Apply() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <QnetDequipForm />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
