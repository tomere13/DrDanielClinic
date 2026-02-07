import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
});

import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://drdaniel-clinic.com"),
  title:
    "ד״ר דניאל ורשקוב - בוטוקס וטיפולים אסתטיים בבאר שבע | קליניקת ד״ר דניאל",
  description:
    "קליניקת ד״ר דניאל - טיפולי בוטוקס, חומרי מילוי והזרקות אסתטיות בבאר שבע. ד״ר דניאל ורשקוב - מומחה לרפואה אסתטית עם תוצאות טבעיות ומקצועיות. קביעת תור: 054-818-5506",
  keywords: [
    "בוטוקס באר שבע",
    "חומרי מילוי באר שבע",
    "ד״ר דניאל ורשקוב",
    "רפואה אסתטית באר שבע",
    "הזרקות בוטוקס",
    "חומצה היאלורונית",
    "פיסול פנים",
    "טיפולים אסתטיים",
    "קליניקת אסתטיקה באר שבע",
    "אנטי אייג׳ינג",
    "botox beer sheva",
    "Dr Daniel Vershkov",
    "aesthetic clinic",
  ],
  authors: [{ name: "Dr. Daniel Vershkov" }],
  creator: "Dr. Daniel Vershkov",
  publisher: "Dr. Daniel Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ד״ר דניאל ורשקוב - בוטוקס וטיפולים אסתטיים בבאר שבע",
    description:
      "קליניקת ד״ר דניאל - מומחה לטיפולי בוטוקס, חומרי מילוי ורפואה אסתטית בבאר שבע. תוצאות טבעיות ומקצועיות.",
    url: "https://drdaniel-clinic.com",
    siteName: "קליניקת ד״ר דניאל",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 630,
        alt: "קליניקת ד״ר דניאל - Dr. Daniel Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ד״ר דניאל ורשקוב - בוטוקס וטיפולים אסתטיים בבאר שבע",
    description: "מומחה לטיפולי בוטוקס, חומרי מילוי ורפואה אסתטית בבאר שבע",
    images: ["/social.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "j54EhQJ8xIut6CY_rIpYtkEfNkxW7jwGa9A37j0SbNo",
  },
  icons: {
    icon: [
      { url: "/favicon-premium.png", type: "image/png" },
      { url: "/favicon-premium.png", sizes: "any" },
    ],
    apple: "/favicon-premium.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body className={`${assistant.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <AccessibilityProvider>
              {children}
              <CookieConsent />
            </AccessibilityProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
