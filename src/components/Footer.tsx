"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { LuxuryBloom } from "./LuxuryBloom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, dir } = useLanguage();
  const { footer } = language.site_content;

  return (
    <footer
      className="relative border-t border-[#6b4259] dark:border-gray-800 bg-[#3b2330] dark:bg-slate-900 px-6 py-12 text-white overflow-hidden transition-colors duration-500"
      dir={dir}
    >
      <LuxuryBloom
        color="#b7748d"
        opacity={[0, 0.1]}
        scale={[0.8, 1.2]}
        offset={["start end", "end end"]}
      />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-[#d4a5b8]" aria-hidden="true" />
          <span className="text-xl font-bold">{footer.clinic_name}</span>
        </div>

        <div className="mb-6 text-center text-gray-300">
          <p className="mb-2 font-medium">{footer.tagline1}</p>
          <p className="text-sm">{footer.tagline2}</p>
        </div>

        <div className="border-t border-[#6b4259] pt-6 text-center text-sm text-gray-300">
          <div className="mb-3 flex justify-center flex-wrap gap-4">
            <Link
              href="/accessibility"
              className="text-[#d4a5b8] hover:text-[#e5c4d3] hover:underline transition-colors"
            >
              {footer.accessibility_statement}
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/privacy"
              className="text-[#d4a5b8] hover:text-[#e5c4d3] hover:underline transition-colors"
            >
              {language.site_content.privacy_page.title}
            </Link>
          </div>
          <p>
            &copy; {currentYear} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
