import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://drdaniel-clinic.com/#medicalbusiness",
        name: "קליניקת ד״ר דניאל",
        image: "https://drdaniel-clinic.com/logo.png",
        description:
          "קליניקת ד״ר דניאל מתמחה בטיפולי בוטוקס, חומרי מילוי ורפואה אסתטית בבאר שבע",
        telephone: "+972-54-818-5506",
        email: "danielvershkov8@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ז׳קלין כהנוב 7",
          addressLocality: "באר שבע",
          addressCountry: "IL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.2518,
          longitude: 34.7913,
        },
        url: "https://drdaniel-clinic.com",
        priceRange: "₪₪",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
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
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "טיפולי בוטוקס",
              description: "הזרקות בוטוקס להחלקת קמטים והצערת מראה הפנים",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "חומרי מילוי",
              description: "חומצה היאלורונית לעיצוב שפתיים ופיסול פנים",
            },
          },
        ],
      },
      {
        "@type": "Physician",
        "@id": "https://drdaniel-clinic.com/#physician",
        name: "ד״ר דניאל ורשקוב",
        jobTitle: "רופא מומחה לרפואה אסתטית",
        worksFor: {
          "@id": "https://drdaniel-clinic.com/#medicalbusiness",
        },
        telephone: "+972-54-818-5506",
        email: "danielvershkov8@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://drdaniel-clinic.com/#website",
        url: "https://drdaniel-clinic.com",
        name: "קליניקת ד״ר דניאל",
        description: "קליניקה לרפואה אסתטית בבאר שבע",
        inLanguage: "he",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://drdaniel-clinic.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ContactForm />
      </main>
      <Footer />
      <AccessibilityWidget />
      <FloatingActions />
    </>
  );
}
