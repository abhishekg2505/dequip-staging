import HeroSection from "@/src/components/mentor/HeroSection";
import MentorDequipForm from "@/src/components/mentor/MentorDequipForm";
import MentorMessageBox from "@/src/components/mentor/MentorMessageBox";

export default function Mentor() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <MentorDequipForm />
      <MentorMessageBox />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
