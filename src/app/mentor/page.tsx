import HeroSection from "@/src/components/mentor/HeroSection";
import MentorDequipForm from "@/src/components/mentor/MentorDequipForm";
import MentorMessageBox from "@/src/components/mentor/MentorMessageBox";
import { mentorMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: mentorMetadata.title,
  metadataBase: new URL(mentorMetadata.siteUrl),
  description: mentorMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: mentorMetadata.siteUrl,
    title: mentorMetadata.title,
    description: mentorMetadata.description,
    siteName: mentorMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: mentorMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: mentorMetadata.title,
    description: mentorMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
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
