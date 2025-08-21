import HeroSection from "@/src/components/mentor/HeroSection";
import MentorDequipForm from "@/src/components/mentor/MentorDequipForm";

export default function Mentor() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <MentorDequipForm />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
