import HeroSection from "@/src/components/partner/HeroSection";
import PartnerDequipForm from "@/src/components/partner/PartnerDequipForm";
import PartnerMessageBox from "@/src/components/partner/PartnerMessageBox";
import { partnerMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../public/images/quraniumPreview.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: partnerMetadata.title,
  metadataBase: new URL(partnerMetadata.siteUrl),
  description: partnerMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: partnerMetadata.siteUrl,
    title: partnerMetadata.title,
    description: partnerMetadata.description,
    siteName: partnerMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: partnerMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: partnerMetadata.title,
    description: partnerMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
export default function Partner() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <PartnerDequipForm />
      <PartnerMessageBox />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
