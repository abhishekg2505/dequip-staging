import type { Metadata } from "next";
import { Staatliches, Montserrat, Open_Sans, Antonio, Anton } from "next/font/google";
import Header from "../components/common/Header";
import "./globals.css";
// import SmoothScroll from "../components/common/SmoothScroll";
import Footer from "../components/common/Footer";
import { siteMetadata } from "../constants/metadata";
import quraniumPreview from "../../public/images/quraniumPreview.png";
import Head from "next/head";
// import CustomCursor from "@/src/components/common/CustomCursor";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-staatliches",
});
const antonio = Antonio({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-antonio",
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  metadataBase: new URL(siteMetadata.siteUrl),
  description: siteMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${staatliches.variable} ${antonio.variable} ${anton.variable}`}
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:image:type" content="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-slate-950 text-white-1 antialiased font-montserrat">
        {/* <CustomCursor /> */}
        <Header />
        {/* <SmoothScroll>
          {children}
          </SmoothScroll> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
