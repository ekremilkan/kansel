import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Kansel Dienstleistungen | Entrümpelung, Entsorgung, Demontage & Reinigung",
  description:
    "Ihr Ansprechpartner für Entrümpelung, Entsorgung, Demontage und Reinigung in der Metropolregion Rhein-Neckar – schnell vor Ort, verbindliche Festpreise, persönlich erreichbar.",
  generator: "v0.app",
  icons: {
    icon: "/assets/kansel-logo-transparent.png",
    apple: "/assets/kansel-logo-transparent.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} bg-background`}>
      <body className="font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
