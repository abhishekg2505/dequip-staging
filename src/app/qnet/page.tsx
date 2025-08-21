import HeroSection from "@/src/components/qnet/HeroSection";
import HowToJoin from "@/src/components/qnet/HowToJoin";
import QnetClubMember from "@/src/components/qnet/QnetClubMember";
import QnetDequipForm from "@/src/components/qnet/QnetDequipForm";
import QnetMessageBox from "@/src/components/qnet/QnetMessageBox";

export default function Apply() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <QnetClubMember />
      <HowToJoin />
      <QnetDequipForm />
      <QnetMessageBox />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
