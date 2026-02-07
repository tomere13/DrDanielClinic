"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { LuxuryBloom } from "./LuxuryBloom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Article {
  id: string | number;
  title: string;
  subtitle: string;
}

export function Articles() {
  const { language, dir } = useLanguage();
  const { articles_section } = language.site_content;
  const articles = (language.articles || []) as Article[];

  const [index, setIndex] = useState(0);

  const nextArticle = () => {
    setIndex((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  if (!articles.length) return null;

  return (
    <section
      className="relative overflow-hidden bg-white py-24 transition-colors duration-500 dark:bg-slate-900"
      dir={dir}
    >
      <LuxuryBloom color="#b7748d" opacity={[0, 0.2]} scale={[0.6, 1.3]} />
      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal animation="slide-up">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#b7748d]">
            {articles_section.title}
          </h2>
        </ScrollReveal>

        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 md:-left-12">
            <button
              onClick={nextArticle}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-[#b7748d] hover:text-white dark:bg-slate-800/90 dark:text-white dark:hover:bg-[#b7748d]"
              aria-label="Previous article"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 md:-right-12">
            <button
              onClick={prevArticle}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-[#b7748d] hover:text-white dark:bg-slate-800/90 dark:text-white dark:hover:bg-[#b7748d]"
              aria-label="Next article"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={articles[index]?.id}
                initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <Link
                  href={`/articles/${articles[index]?.id}`}
                  className="group block"
                >
                  <article className="flex min-h-[280px] flex-col rounded-3xl border border-[#b7748d]/10 bg-gray-50 p-8 shadow-sm transition-all hover:border-[#b7748d]/30 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-800/50 lg:p-12">
                    <h3 className="mb-6 text-3xl font-bold text-gray-900 transition-colors group-hover:text-[#b7748d] dark:text-white lg:text-4xl text-start">
                      {articles[index]?.title}
                    </h3>
                    <p className="flex-grow text-xl leading-relaxed text-gray-600 dark:text-gray-300 text-start">
                      {articles[index]?.subtitle}
                    </p>
                    <div className="mt-10 flex items-center font-bold text-[#b7748d]">
                      <span className="text-lg group-hover:underline">
                        {articles_section.read_article}
                      </span>
                      <ChevronRight
                        className={`ml-2 h-6 w-6 transition-transform group-hover:translate-x-2 ${dir === "rtl" ? "rotate-180" : ""}`}
                      />
                    </div>
                  </article>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="mt-10 flex justify-center gap-3">
            {articles.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 transition-all duration-300 rounded-full ${
                  index === i
                    ? "w-10 bg-[#b7748d]"
                    : "w-2.5 bg-gray-300 hover:bg-[#b7748d]/50 dark:bg-gray-700"
                }`}
                aria-label={`Go to article ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal
          animation="slide-up"
          delay={0.4}
          className="mt-16 text-center"
        >
          <Link
            href="/articles"
            className="inline-flex items-center rounded-full bg-[#b7748d] px-10 py-4 text-lg font-bold text-white transition-all hover:bg-[#a0647a] hover:shadow-xl active:scale-95"
          >
            {articles_section.view_all}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
