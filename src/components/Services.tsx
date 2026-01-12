"use client";

import { Syringe, Sparkles, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Syringe,
    title: "Botox Injections",
    description:
      "FDA-approved botox treatments for wrinkles, fine lines, and facial rejuvenation with natural-looking results.",
  },
  {
    icon: Sparkles,
    title: "Dermal Fillers",
    description:
      "Volume restoration, lip enhancement, and facial contouring using premium hyaluronic acid fillers.",
  },
  {
    icon: Heart,
    title: "Facial Aesthetics",
    description:
      "Complete facial rejuvenation treatments including skin tightening, lifting, and anti-aging procedures.",
  },
  {
    icon: Shield,
    title: "Medical-Grade Treatments",
    description:
      "Advanced aesthetic procedures including PRP therapy, chemical peels, and laser treatments.",
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className="bg-gray-50 px-6 py-20"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-gray-900"
        >
          Our Treatments
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
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
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors group-hover:bg-blue-200"
                >
                  <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </motion.div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
