"use client";

import { Scale, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Award,
    title: "Medical Expertise",
    description:
      "Licensed physician specializing in aesthetic treatments and cosmetic procedures.",
  },
  {
    icon: Scale,
    title: "Natural Results",
    description:
      "Focus on subtle enhancements that preserve your unique features and natural beauty.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description:
      "Personalized consultations and transparent communication throughout your treatment.",
  },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation();

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
          className="mb-12 text-center text-4xl font-bold text-gray-900"
        >
          About Dr. Daniel Clinic
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-700">
            As a licensed aesthetic physician with extensive experience in
            cosmetic procedures, Dr. Daniel Vershkov brings a combination of
            medical expertise, artistic vision, and dedication to natural-looking
            results.
          </p>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            With a track record of satisfied patients and beautiful outcomes, Dr.
            Daniel provides personalized treatment plans tailored to your unique
            features, ensuring safe and effective aesthetic enhancements.
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
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 shadow-lg"
                >
                  <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
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
