"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// 👇 ASSUMPTION: You have this context based on your previous messages.
// If you use a different hook name (e.g., useAccessibility), update this import.
import { useAccessibility } from "@/context/AccessibilityContext";

export function Hero() {
  const { language } = useLanguage();
  const { hero } = language.site_content;

  // 1. Accessibility Logic
  // We default to true if the hook isn't set up yet, to prevent crashes while you copy this.
  const { animationsEnabled } = useAccessibility();

  // 2. Parallax Setup (Optional Premium feel)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create a smooth parallax for the text
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 3. Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger text appearance
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      }, // "Luxury" ease curve
    },
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: animationsEnabled ? "smooth" : "auto",
      });
    }
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      aria-labelledby="hero-heading"
    >
      {/* --- BACKGROUND LAYER --- */}

      {/* 1. The Image with "Ken Burns" Slow Zoom */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        initial={{ scale: 1 }}
        animate={animationsEnabled ? { scale: 1.05 } : { scale: 1 }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/hero2.jpg"
          alt="Botox aesthetic treatment"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* --- DARK OVERLAY LAYERS --- */}

        {/* 1. Primary Darkening Layer: Adjust 'bg-slate-900/60' (0-100) to control overall darkness */}
        <div className="absolute inset-0 bg-slate-900/00 z-[1]" />

        {/* 2. Gradient Vignette: This keeps the center clear but darkens the top/bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/90 z-[2]" />
      </motion.div>

      {/* 2. Premium Gradient Overlay (Darker at bottom for text contrast) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/90"
        style={{ zIndex: 1 }}
      />

      {/* 3. Subtle Texture/Noise (Optional - adds 'film grain' texture for realism) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none z-[1]" />

      {/* --- CONTENT LAYER --- */}

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          variants={animationsEnabled ? containerVariants : {}}
          initial="hidden"
          animate="visible"
          style={animationsEnabled ? { y, opacity } : {}} // Parallax effect
        >
          {/* Badge / Eyebrow Text */}

          {/* Main Title */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="mb-6 font-bold leading-tight text-white"
          >
            {/* Split title for emphasis */}
            <span className="block text-4xl md:text-5xl lg:text-7xl drop-shadow-lg">
              {hero.title}
            </span>

            {/* Elegant Gradient Subtitle (Replaces Typewriter) */}
            <span className="mt-4 block bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-2xl font-light text-transparent md:text-3xl lg:text-4xl">
              {hero.subtitle}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-200/90 md:text-xl"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              onClick={scrollToContact}
              className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900 shadow-2xl transition-all duration-300",
                "hover:bg-[#f8f8f8] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)]",
                "focus:outline-none focus:ring-2 focus:ring-[#b7748d] focus:ring-offset-2 focus:ring-offset-slate-900"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                {hero.button}
                {/* Arrow Icon that slides on hover */}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>

              {/* Shimmer Effect */}
              {animationsEnabled && (
                <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-slate-200/50 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
