import ApplyDequipForm from "@/src/components/apply/ApplyDequipForm";
import HeroSection from "@/src/components/apply/HeroSection";
import SelectionCriteria from "@/src/components/apply/SelectionCriteria";

export default function Apply() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <SelectionCriteria />
      <ApplyDequipForm />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
