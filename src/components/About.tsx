"use client";

import { Scale, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useAccessibility } from "@/context/AccessibilityContext";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { LuxuryBloom } from "./LuxuryBloom";

export function About() {
  const { language, dir } = useLanguage();
  const { animationsEnabled } = useAccessibility();
  const { about_section } = language.site_content;

  const features = [
    {
      icon: Award,
      title: about_section.features[0].title,
      description: about_section.features[0].description,
    },
    {
      icon: Scale,
      title: about_section.features[1].title,
      description: about_section.features[1].description,
    },
    {
      icon: Users,
      title: about_section.features[2].title,
      description: about_section.features[2].description,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-20 dark:bg-gray-950 transition-colors duration-500"
      aria-labelledby="about-heading"
      dir={dir}
    >
      <LuxuryBloom color="#b7748d" opacity={[0, 0.2]} scale={[0.5, 1.4]} />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <ScrollReveal animation="slide-up" threshold={0.2}>
          <h2
            id="about-heading"
            className="mb-12 text-center text-4xl font-bold text-[#b7748d]"
          >
            {about_section.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={0.2} threshold={0.2}>
          <div className="mb-12 text-center">
            <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {about_section.paragraph1}
            </p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {about_section.paragraph2}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          animation="fade"
          staggerChildren={0.2}
          threshold={0.1}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollRevealItem
                key={index}
                animation="slide-up"
                distance={30}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={
                    animationsEnabled ? { scale: 1.1, rotate: 5 } : {}
                  }
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#b7748d]/20 shadow-lg"
                >
                  <Icon className="h-8 w-8 text-[#b7748d]" aria-hidden="true" />
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold text-[#b7748d]">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
