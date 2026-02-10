"use client";

import { useLanguage } from "@/context/LanguageContext";

export function JsonLd() {
  const { languageCode } = useLanguage();
  const baseUrl = "https://drdaniel-clinic.com";

  // Schema for the Medical Business (Clinic)
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${baseUrl}/#medical-business`,
    name: languageCode === "he" ? 'קליניקת ד"ר דניאל' : "Dr. Daniel Clinic",
    description:
      languageCode === "he"
        ? 'קליניקת ד"ר דניאל בבאר שבע: מומחים לבוטוקס, חומרי מילוי וטיפולים אסתטיים. תוצאות טבעיות ומקצועיות על ידי ד"ר דניאל ורשקוב.'
        : "Dr. Daniel Clinic in Be'er Sheva: Specialists in Botox, fillers, and aesthetic treatments. Natural and professional results by Dr. Daniel Vershkov.",
    image: `${baseUrl}/social.png`,
    logo: `${baseUrl}/favicon-premium.png`,
    url: baseUrl,
    telephone: "+972-54-818-5506",
    email: "danielvershkov8@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        languageCode === "he" ? "ז׳קלין כהנוב 7" : "Jacqueline Kahanoff 7",
      addressLocality: languageCode === "he" ? "באר שבע" : "Be'er Sheva",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.2518, // Approx coords for Be'er Sheva, should be specific if known
      longitude: 34.7913,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    medicalSpecialty: ["dermatology", "cosmetic surgery"], // Adjust as needed
  };

  // Schema for the Physician
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${baseUrl}/#dr-daniel`,
    name: languageCode === "he" ? 'ד"ר דניאל ורשקוב' : "Dr. Daniel Vershkov",
    url: baseUrl,
    parentOrganization: {
      "@id": `${baseUrl}/#medical-business`,
    },
    medicalSpecialty: "Aesthetic Medicine",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([medicalBusinessSchema, physicianSchema]),
      }}
    />
  );
}
