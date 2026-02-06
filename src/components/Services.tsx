"use client";

import { Syringe, Sparkles, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/context/LanguageContext";

export function Services() {
  const { ref, isVisible } = useScrollAnimation();
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
      ref={ref}
      className="bg-gray-50 px-6 py-20"
      aria-labelledby="services-heading"
      dir={dir}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-[#b7748d]"
        >
          {services_section.heading}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all text-start"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#b7748d]/20 transition-colors group-hover:bg-[#b7748d]/30 ${
                    dir === "rtl" ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <Icon className="h-6 w-6 text-[#b7748d]" aria-hidden="true" />
                </motion.div>
                <h3 className="mb-3 text-xl font-semibold text-[#b7748d] text-start">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-start">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
