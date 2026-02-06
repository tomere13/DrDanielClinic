"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Share2, ArrowUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const params = useParams();
  const { language, languageCode, dir } = useLanguage();
  const { articles } = language;

  // Find the article
  const articleId = params?.id as string;
  const article = articles.find((a) => a.id === articleId);

  // If we can't find it immediately, it might be due to language switch or hydration.
  // But if it's truly invalid, we should ideally show 404.
  // For Client Components, notFound() might not work as expected during render if data is client-side.
  // We'll show a "Not Found" UI instead.

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50" dir={dir}>
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <Link href="/articles" className="text-[#b7748d] hover:underline">
              Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50" dir={dir}>
      <Header />

      <main className="flex-grow pt-40 pb-16">
        <article className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8 mt-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#b7748d] transition-colors"
            >
              {dir === "rtl" ? (
                <ArrowRight size={16} />
              ) : (
                <ArrowLeft size={16} />
              )}
              {languageCode === "en" || languageCode === "ru"
                ? "Back to Articles"
                : "חזרה למאמרים"}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="mb-8 border-b border-gray-200 pb-8">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                {article.subtitle}
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-lg prose-slate max-w-none text-gray-800 leading-relaxed">
              {article.content.split("\n").map((paragraph, idx) =>
                paragraph.trim() ? (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ) : (
                  <br key={idx} />
                )
              )}
            </div>

            {/* Footer / CTA usually here */}
            <div className="mt-12 border-t border-gray-200 pt-8 flex justify-between items-center">
              <Link
                href="/articles"
                className="font-medium text-[#b7748d] hover:text-[#9e5f76] transition-colors"
              >
                {languageCode === "en" || languageCode === "ru"
                  ? "Read more articles"
                  : "קרא מאמרים נוספים"}
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
