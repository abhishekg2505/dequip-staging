import ApplyDequipForm from "@/src/components/apply/ApplyDequipForm";
import ApplyMessageBox from "@/src/components/apply/ApplyMessageBox";
import HeroSection from "@/src/components/apply/HeroSection";
import SelectionCriteria from "@/src/components/apply/SelectionCriteria";
import { applyMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: applyMetadata.title,
  metadataBase: new URL(applyMetadata.siteUrl),
  description: applyMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: applyMetadata.siteUrl,
    title: applyMetadata.title,
    description: applyMetadata.description,
    siteName: applyMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: applyMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: applyMetadata.title,
    description: applyMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
export default function Apply() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <SelectionCriteria />
      <ApplyDequipForm />
      <ApplyMessageBox />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
