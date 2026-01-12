import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Daniel Clinic - Expert Botox & Aesthetic Treatments | Beer Sheva",
  description:
    "Professional botox and aesthetic treatments by Dr. Daniel Vershkov. Expert injections, dermal fillers, and cosmetic procedures in Beer Sheva.",
  keywords: [
    "botox",
    "dermal fillers",
    "aesthetic treatments",
    "cosmetic injections",
    "Dr. Daniel",
    "Beer Sheva",
    "anti-aging",
    "facial aesthetics",
    "cosmetic treatments",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AccessibilityProvider>{children}</AccessibilityProvider>
      </body>
    </html>
  );
}
