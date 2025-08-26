import HeroSection from "@/src/components/qnet/HeroSection";
import HowToJoin from "@/src/components/qnet/HowToJoin";
import QnetClubMember from "@/src/components/qnet/QnetClubMember";
import QnetDequipForm from "@/src/components/qnet/QnetDequipForm";
import QnetMessageBox from "@/src/components/qnet/QnetMessageBox";
import { qnetMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../public/images/quraniumPreview.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: qnetMetadata.title,
  metadataBase: new URL(qnetMetadata.siteUrl),
  description: qnetMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: qnetMetadata.siteUrl,
    title: qnetMetadata.title,
    description: qnetMetadata.description,
    siteName: qnetMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: qnetMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: qnetMetadata.title,
    description: qnetMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
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
