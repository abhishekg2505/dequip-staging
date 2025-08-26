import AboutQuranium from "@/src/components/about/AboutQuranium";
import DequipDecoded from "@/src/components/about/DequipDecoded";
import HeroSection from "@/src/components/about/HeroSection";
import PeopleBehindDequip from "@/src/components/about/PeopleBehindDequip";
import { aboutMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../public/images/quraniumPreview.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: aboutMetadata.title,
  metadataBase: new URL(aboutMetadata.siteUrl),
  description: aboutMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: aboutMetadata.siteUrl,
    title: aboutMetadata.title,
    description: aboutMetadata.description,
    siteName: aboutMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: aboutMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutMetadata.title,
    description: aboutMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
export default function About() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <PeopleBehindDequip />
      <DequipDecoded />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
