"use client";

import { Syringe, Sparkles, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { LuxuryBloom } from "./LuxuryBloom";

export function Services() {
  const { language, dir } = useLanguage();
  const { services_section } = language.site_content;

  const servicesList = [
    {
      icon: Syringe,
      title: services_section.services[0].title,
      description: services_section.services[0].description,
    },
    {
      icon: Sparkles,
      title: services_section.services[1].title,
      description: services_section.services[1].description,
    },
    {
      icon: Heart,
      title: services_section.services[2].title,
      description: services_section.services[2].description,
    },
    {
      icon: Shield,
      title: services_section.services[3].title,
      description: services_section.services[3].description,
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-white px-6 py-20 dark:bg-gray-900 overflow-hidden"
      aria-labelledby="services-heading"
      dir={dir}
    >
      <LuxuryBloom color="#b7748d" opacity={[0, 0.25]} scale={[0.7, 1.2]} />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <ScrollReveal animation="slide-up">
          <h2
            id="services-heading"
            className="mb-12 text-center text-4xl font-bold text-[#b7748d]"
          >
            {services_section.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal
          animation="fade"
          staggerChildren={0.15}
          className="grid gap-8 md:grid-cols-2"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollRevealItem
                key={index}
                animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                distance={40}
              >
                <motion.article
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className="group h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all text-start dark:bg-gray-800 dark:border-gray-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#b7748d]/20 transition-colors group-hover:bg-[#b7748d]/30 ${
                      dir === "rtl" ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <Icon
                      className="h-6 w-6 text-[#b7748d]"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-semibold text-[#b7748d] text-start">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-start dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.article>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
