"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { language, dir } = useLanguage();
  const { privacy_page } = language.site_content;

  const borderClass = dir === "rtl" ? "border-r-4" : "border-l-4";
  const listMarginClass = dir === "rtl" ? "mr-4" : "ml-4";

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <ScrollProgress />
      <Header />
      <main
        className="container mx-auto max-w-4xl px-6 pt-40 pb-12 md:pt-32 md:pb-12"
        dir={dir}
      >
        {/* Main Title */}
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          {privacy_page.title}
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed dark:text-gray-300">
          {/* Intro and Updated Date */}
          <section
            className={`bg-gray-50 p-6 rounded-lg border border-gray-100 ${borderClass} border-[#445147] dark:bg-gray-900/50 dark:border-gray-800`}
          >
            <p className="font-semibold text-[#445147] mb-4 dark:text-gray-400">
              {privacy_page.updated_at}{" "}
              {new Date().toLocaleDateString(dir === "rtl" ? "he-IL" : "en-US")}
            </p>
            <p>{privacy_page.intro}</p>
          </section>

          {/* General */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.general_title}
            </h2>
            <p>{privacy_page.general_text}</p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.collection_title}
            </h2>
            <ul
              className={`list-disc list-inside space-y-2 ${listMarginClass}`}
            >
              <li>{privacy_page.collection_list.direct}</li>
              <li>{privacy_page.collection_list.third_party}</li>
              <li>{privacy_page.collection_list.analytics}</li>
              <li>{privacy_page.collection_list.cookies}</li>
            </ul>
          </section>

          {/* Database */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.database_title}
            </h2>
            <p>{privacy_page.database_text}</p>
          </section>

          {/* Purpose of Use */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.usage_title}
            </h2>
            <p className="mb-2">{privacy_page.usage_list}</p>
          </section>

          {/* Sharing with Third Parties */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.sharing_title}
            </h2>
            <p className="mb-2">{privacy_page.sharing_text}</p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.cookies_title}
            </h2>
            <p className="mb-3">{privacy_page.cookies_text}</p>
            <div className="bg-blue-50 p-4 rounded text-sm text-blue-900 dark:bg-blue-900/20 dark:text-blue-100">
              <strong>Google Analytics</strong>
            </div>
          </section>

          {/* Information Security */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.security_title}
            </h2>
            <p>{privacy_page.security_text}</p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.rights_title}
            </h2>
            <p className="mb-2">{privacy_page.rights_text}</p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-100">
              {privacy_page.contact_title}
            </h2>
            <p>{privacy_page.contact_text}</p>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href="mailto:danielvershkov8@gmail.com"
                  className="text-[#445147] hover:underline font-medium dark:text-gray-400"
                >
                  danielvershkov8@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:054-818-5506"
                  className="text-[#445147] hover:underline font-medium dark:text-gray-400"
                  dir="ltr"
                >
                  054-818-5506
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <AccessibilityWidget />
      <FloatingActions />
    </div>
  );
}
