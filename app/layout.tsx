import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.humaconsulting.com.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HUMA Consulting | Technology Recruitment & HR Consulting in Vietnam",
    template: "%s | HUMA Consulting",
  },
  description:
    "HUMA Consulting helps organizations build high-performing technology teams through specialized IT recruitment, HR consulting, and technology services across Vietnam.",
  keywords: [
    "HUMA Consulting",
    "IT recruitment Vietnam",
    "technology recruitment",
    "HR consulting",
    "talent acquisition Vietnam",
    "tech headhunter Vietnam",
  ],
  authors: [{ name: "HUMA Consulting" }],
  openGraph: {
    title: "HUMA Consulting | People. Technology. Growth.",
    description:
      "Specialized technology recruitment and HR consulting partner helping organizations hire faster, build stronger teams, and grow sustainably.",
    url: siteUrl,
    siteName: "HUMA Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HUMA Consulting | People. Technology. Growth.",
    description:
      "Specialized technology recruitment and HR consulting partner in Vietnam.",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
