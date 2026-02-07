"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const { language, dir } = useLanguage();
  const { cookie_consent } = language.site_content;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          dir={dir}
        >
          <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-900/5 sm:flex sm:items-center sm:gap-8 sm:p-8 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
            {/* Icon & Text */}
            <div className="flex items-start gap-4 sm:items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b7748d]/10 text-[#b7748d] dark:bg-[#b7748d]/20">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                  {cookie_consent?.message ||
                    "We use cookies to enhance user experience."}{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#b7748d] hover:underline hover:text-[#9e5f76] transition-colors whitespace-nowrap"
                  >
                    {cookie_consent?.privacy_link_text || "Privacy Policy"}
                  </Link>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-4 sm:mt-0 sm:shrink-0">
              <button
                onClick={handleAccept}
                className={cn(
                  "flex-1 rounded-full bg-[#b7748d] px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#9e5f76] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7748d]",
                  "active:scale-95"
                )}
              >
                {cookie_consent?.accept_button || "Accept"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
