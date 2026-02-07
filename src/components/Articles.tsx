"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowLeft, ArrowRight } from "lucide-react";

export function Articles() {
  const { language, dir } = useLanguage();
  const { articles } = language;
  const { site_content } = language;

  // Show only first 3 articles
  const recentArticles = articles.slice(0, 3);

  return (
    <section
      id="articles"
      className="py-24 bg-white dark:bg-gray-950"
      dir={dir}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100">
            {site_content.header.articles}
          </h2>
          <div className="mx-auto h-1 w-20 bg-[#b7748d]"></div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {recentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col overflow-hidden rounded-xl bg-slate-50 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#b7748d]/10 text-[#b7748d] group-hover:bg-[#b7748d] group-hover:text-white transition-colors">
                  <FileText size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[#b7748d] transition-colors line-clamp-2 dark:text-gray-100">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-gray-500 line-clamp-2 dark:text-gray-400">
                  {article.subtitle}
                </p>
                <p className="mb-6 flex-grow text-gray-600 line-clamp-3 leading-relaxed text-sm dark:text-gray-300">
                  {article.content}
                </p>

                <Link
                  href={`/articles/${article.id}`}
                  className="mt-auto inline-flex items-center gap-2 font-semibold text-[#b7748d] hover:text-[#9e5f76] transition-colors group/link text-sm"
                >
                  {site_content.articles_section?.read_article ||
                    "Read Article"}
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

        <div className="text-center">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-full bg-[#b7748d] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[#9e5f76] hover:shadow-lg hover:-translate-y-0.5"
          >
            {site_content.articles_section?.view_all || "View All Articles"}
          </Link>
        </div>
      </div>
    </section>
  );
}
