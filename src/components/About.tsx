"use client";

import { Scale, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Award,
    title: "מומחיות רפואית",
    description:
      "רופאה מוסמכת המתמחה בטיפולים אסתטיים ופרוצדורות קוסמטיות מתקדמות",
  },
  {
    icon: Scale,
    title: "תוצאות טבעיות",
    description:
      "דגש על שיפורים עדינים המדגישים את היופי הטבעי תוך שמירה על תווי הפנים הייחודיים שלך",
  },
  {
    icon: Users,
    title: "יחס אישי ושקיפות",
    description: "ייעוץ מותאם אישית ותקשורת פתוחה ושקופה לכל אורך תהליך הטיפול",
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
          className="mb-12 text-center text-4xl font-bold text-[#b7748d]"
        >
          אודות קליניקת ד&quot;ר דניאל
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-700">
            כרופאה העוסקת ברפואה אסתטית ובעלת ניסיון נרחב בטיפולים קוסמטיים,
            ד&quot;ר דניאל ורשקוב מביא עמו שילוב ייחודי של מומחיות רפואית, ראייה
            אומנותית ומחויבות לתוצאות במראה טבעי
          </p>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            עם ניסיון מוכח של מטופלים ומטופלות מרוצים ותוצאות יפהפיות, ד&quot;ר
            דניאל מתאים תוכניות טיפול אישיות לפי תווי הפנים הייחודיים שלך,
            ומבטיח טיפולים אסתטיים בטוחים ואפקטיביים
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
