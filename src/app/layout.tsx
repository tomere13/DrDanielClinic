import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="he">
      <body className={`${arimo.variable} font-sans antialiased`}>
        <AccessibilityProvider>{children}</AccessibilityProvider>
      </body>
    </html>
  );
}
