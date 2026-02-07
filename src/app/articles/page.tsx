"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ArticlesPage() {
  const { language, dir } = useLanguage();
  const { articles } = language;
  const { site_content } = language;

  return (
    <div
      className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900"
      dir={dir}
    >
      <Header />

      <main className="flex-grow pt-40 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              {site_content.header.articles}
            </h1>
            <div className="mx-auto h-1 w-20 bg-[#b7748d]"></div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl border border-gray-100 dark:bg-gray-900 dark:border-gray-800"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#b7748d]/10 text-[#b7748d] group-hover:bg-[#b7748d] group-hover:text-white transition-colors dark:bg-[#b7748d]/20">
                    <FileText size={24} />
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[#b7748d] transition-colors dark:text-gray-100">
                    {article.title}
                  </h2>
                  <h3 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {article.subtitle}
                  </h3>
                  <p className="mb-6 flex-grow text-gray-600 line-clamp-3 leading-relaxed dark:text-gray-300">
                    {article.content}
                  </p>

                  <Link
                    href={`/articles/${article.id}`}
                    className="mt-auto inline-flex items-center gap-2 font-semibold text-[#b7748d] hover:text-[#9e5f76] transition-colors group/link"
                  >
                    {site_content.articles_section?.read_article ||
                      "Read Article"}
                    {/* Note: Ideally add 'read_more' to json, but simple conditional covers it for now or hardcode based on direction */}
                    {dir === "rtl" ? (
                      <ArrowLeft
                        size={16}
                        className="transition-transform group-hover/link:-translate-x-1"
                      />
                    ) : (
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    )}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
