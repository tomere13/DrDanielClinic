"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Expert Botox & Aesthetic Treatments";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Speed of typing

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 animate-gradient-x" />

      {/* Floating shapes for depth */}
      <div className="absolute left-10 top-20 h-64 w-64 animate-float rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 animate-float-delayed rounded-full bg-slate-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto text-center">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Dr. Daniel Clinic
          <span className="mt-2 block text-3xl text-blue-300 md:text-4xl lg:text-5xl">
            {typedText}
            <span className="animate-blink">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          Professional aesthetic treatments with precision, care, and
          natural-looking results. Your beauty goals deserve expert attention.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className={cn(
            "inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white",
            "shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700",
            "animate-pulse-slow",
            "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          )}
        >
          Book Consultation
        </motion.button>
      </div>
    </section>
  );
}
