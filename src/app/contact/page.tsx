import HowToInvolved from "@/src/components/contact/HowToInvolved";
import { contactMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: contactMetadata.title,
  metadataBase: new URL(contactMetadata.siteUrl),
  description: contactMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: contactMetadata.siteUrl,
    title: contactMetadata.title,
    description: contactMetadata.description,
    siteName: contactMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: contactMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: contactMetadata.title,
    description: contactMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
export default function About() {
  return (
    <main className="flex flex-col bg-background">
      <HowToInvolved />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
