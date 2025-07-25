import HeroSection from "@/src/components/homepage/HeroSection";
import ReleasingSoon from "@/src/components/homepage/ReleasingSoon";
import SeasonOneGuests from "@/src/components/homepage/SeasonOneGuests";
import MpGrid from "@/src/components/homepage/MpGrid";
import NextGuest from "@/src/components/homepage/NextGuest";
import AboutKapil from "@/src/components/homepage/AboutKapil";
import SubscribeBanner from "@/src/components/homepage/SubscribeBanner";
import WatchItHere from "@/src/components/homepage/WatchItHere";
import PodcastList from "@/src/components/homepage/PodcastList";
import FutureConversation from "@/src/components/homepage/FutureConversation";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <FutureConversation />
      <AboutKapil />
      <SubscribeBanner />
      <ReleasingSoon />
      <WatchItHere />
      <PodcastList />
      <SeasonOneGuests />
      <MpGrid />
      <NextGuest />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
