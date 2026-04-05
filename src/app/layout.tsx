import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://africasicklecell.org'),
  title: {
    default: "Africa Sickle Cell Organisation",
    template: "%s | Africa Sickle Cell Organisation"
  },
  description: "Improving survival, health and wellbeing of sickle cell patients in rural Africa through access to comprehensive care.",
  openGraph: {
    title: "Africa Sickle Cell Organisation",
    description: "Improving survival, health and wellbeing of sickle cell patients in rural Africa.",
    url: "https://africasicklecell.org",
    siteName: "Africa Sickle Cell Organisation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Sickle Cell Organisation",
    description: "Improving survival, health and wellbeing of sickle cell patients in rural Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
