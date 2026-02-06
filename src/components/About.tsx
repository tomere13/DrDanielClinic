"use client";

import { Scale, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { ref, isVisible } = useScrollAnimation();
  const { language } = useLanguage();
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
      ref={ref}
      className="bg-white px-6 py-20"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-[#b7748d]"
        >
          {about_section.heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-700">
            {about_section.paragraph1}
          </p>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            {about_section.paragraph2}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#b7748d]/20 shadow-lg"
                >
                  <Icon className="h-8 w-8 text-[#b7748d]" aria-hidden="true" />
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold text-[#b7748d]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
