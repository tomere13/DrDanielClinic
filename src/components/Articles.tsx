"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { LuxuryBloom } from "./LuxuryBloom";

interface Article {
  id: string | number;
  title: string;
  subtitle: string;
}

export function Articles() {
  const { language, dir } = useLanguage();
  const { articles_section } = language.site_content;
  const articles = language.articles as Article[];

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

        <ScrollReveal
          animation="fade"
          staggerChildren={0.1}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
        >
          {articles?.slice(0, 2).map((article: Article) => (
            <ScrollRevealItem key={article.id} animation="slide-up">
              <Link
                href={`/articles/${article.id}`}
                className="group block h-full"
              >
                <article className="flex h-full flex-col rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all hover:border-[#b7748d]/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-800/50">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#b7748d] dark:text-white">
                    {article.title}
                  </h3>
                  <p className="flex-grow text-gray-600 dark:text-gray-300">
                    {article.subtitle}
                  </p>
                  <div className="mt-6 flex items-center font-medium text-[#b7748d]">
                    <span className="group-hover:underline">
                      {articles_section.read_article}
                    </span>
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180" : ""}`}
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
                  </div>
                </article>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        <ScrollReveal
          animation="slide-up"
          delay={0.4}
          className="mt-12 text-center"
        >
          <Link
            href="/articles"
            className="inline-flex items-center rounded-full bg-[#b7748d] px-8 py-3 font-semibold text-white transition-all hover:bg-[#a0647a] hover:shadow-lg"
          >
            {articles_section.view_all}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
