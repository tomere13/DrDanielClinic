"use client";

import { useLanguage, LanguageCode } from "@/context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const languages: { code: LanguageCode; label: string; dir: "rtl" | "ltr" }[] = [
  { code: "he", label: "עברית", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export function LanguageSwitcher() {
  const { languageCode, setLanguage, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage = languages.find((lang) => lang.code === languageCode);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#b7748d] transition-colors dark:text-gray-200 dark:hover:bg-gray-800",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7748d]"
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={cn(
              "absolute top-full mt-1 min-w-[140px] rounded-lg border border-gray-200 bg-white p-1 shadow-lg dark:bg-gray-900 dark:border-gray-800",
              dir === "rtl" ? "left-0" : "right-0"
            )}
            style={{ zIndex: 50 }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                  languageCode === lang.code
                    ? "bg-[#b7748d]/10 text-[#b7748d] font-medium"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#b7748d] dark:text-gray-200 dark:hover:bg-gray-800",
                  lang.dir === "rtl"
                    ? "text-right flex-row-reverse justify-end"
                    : "text-left"
                )}
                dir={lang.dir}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
