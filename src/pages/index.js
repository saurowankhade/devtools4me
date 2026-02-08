import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import DevTools4MeLanding from "@/components/LandingPage";
import MetaSEO from "@/components/MetaSEO";
import { getLandingPageSEO } from "@/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const seoData = getLandingPageSEO();
  
  return (
    <>
    <MetaSEO 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      url={seoData.url}
      ogImage={seoData.ogImage}
      jsonLD={seoData.jsonLD}
     
    />
    <DevTools4MeLanding />
    </>
 
  );
}
