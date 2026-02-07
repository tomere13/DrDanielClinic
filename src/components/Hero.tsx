"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useAccessibility } from "@/context/AccessibilityContext";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { LuxuryBloom } from "./LuxuryBloom";

export function Hero() {
  const { language } = useLanguage();
  const { hero } = language.site_content;
  const { animationsEnabled } = useAccessibility();

  // Parallax Setup
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        initial={
          animationsEnabled
            ? { scale: 1.1, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <motion.div
          className="h-full w-full"
          animate={animationsEnabled ? { scale: [1, 1.08] } : { scale: 1 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/hero2.webp"
            alt="Botox aesthetic treatment"
            fill
            priority // Keeps priority loading
            fetchPriority="high" // NEW: Tells the browser to download this before anything else
            quality={85} // Reduced from 100: 85 is the "sweet spot" for file size vs quality
            className="object-cover object-center opacity-90" // Slightly reduced opacity to let background light through
            sizes="100vw"
          />
        </motion.div>

        {/* --- MULTI-LAYER TEXT PROTECTION --- */}
        {/* 1. Global Scrim: Adds a dark film over the whole image */}
        <div className="absolute inset-0 bg-slate-900/40 z-[1]" />

        {/* 2. Top-Down Gradient: Helps navbar items and logo pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-transparent z-[2]" />

        {/* 3. Bottom-Up Gradient: Anchors the bottom content */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-[2]" />
      </motion.div>

      {/* 4. Luxury Depth Fade: Subtle transition to the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-gray-900/70 pointer-events-none z-[3]" />

      <LuxuryBloom
        color="#b7748d"
        opacity={[0, 0.3]}
        scale={[1, 1.5]}
        offset={["start start", "center center"]}
      />

      {/* --- CONTENT LAYER --- */}
      {/* 5. Direct Text Shadow: The final defense for legibility */}
      <div className="container relative z-10 mx-auto text-center drop-shadow-[0_4px_20px_rgba(0,0,0,1.0)]">
        {" "}
        <ScrollReveal animation="fade" staggerChildren={0.2} threshold={0.1}>
          <motion.div style={animationsEnabled ? { y, opacity } : {}}>
            {/* Main Title */}
            {!animationsEnabled ? (
              <h1
                id="hero-heading"
                className="mb-8 font-bold leading-tight text-white"
              >
                <span className="block text-4xl md:text-5xl lg:text-7xl">
                  {hero.title}
                </span>
                <span className="mt-4 block bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-2xl font-light text-transparent md:text-3xl lg:text-4xl">
                  {hero.subtitle}
                </span>
              </h1>
            ) : (
              <ScrollRevealItem animation="blur-in" distance={0}>
                <h1
                  id="hero-heading"
                  className="mb-6 font-bold leading-tight text-white"
                >
                  <span className="block text-4xl md:text-5xl lg:text-7xl">
                    {hero.title}
                  </span>

                  <span className="mt-4 block bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-2xl font-light text-transparent md:text-3xl lg:text-4xl">
                    {hero.subtitle}
                  </span>
                </h1>
              </ScrollRevealItem>
            )}

            {/* Description */}
            {!animationsEnabled ? (
              <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-white md:text-xl">
                {hero.description}
              </p>
            ) : (
              <ScrollRevealItem animation="slide-up" distance={20}>
                <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-white md:text-xl">
                  {hero.description}
                </p>
              </ScrollRevealItem>
            )}

            {/* CTA Button */}
            {!animationsEnabled ? (
              <button
                onClick={scrollToContact}
                className={cn(
                  "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-medium text-slate-900 shadow-2xl transition-all duration-300",
                  "hover:bg-[#f8f8f8] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)]"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {hero.button}
                </span>
              </button>
            ) : (
              <ScrollRevealItem animation="slide-up" distance={20}>
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
              </ScrollRevealItem>
            )}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
