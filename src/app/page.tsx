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
  return (
    <>
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
