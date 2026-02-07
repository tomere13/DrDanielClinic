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
      className="relative border-t border-[#6b4259] dark:border-gray-800 bg-[#3b2330] dark:bg-slate-900 px-6 py-16 text-white overflow-hidden transition-colors duration-500"
      dir={dir}
    >
      <LuxuryBloom
        color="#b7748d"
        opacity={[0, 0.15]}
        scale={[0.8, 1.2]}
        offset={["start end", "end end"]}
      />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-[#d4a5b8]" aria-hidden="true" />
              <span className="text-xl font-bold">{footer.clinic_name}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {footer.tagline1}
            </p>
            <p className="text-sm text-gray-400">{footer.tagline2}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4a5b8] font-bold mb-4">
              {footer.columns.quick_links.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.quick_links.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.quick_links.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.quick_links.articles}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.quick_links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-[#d4a5b8] font-bold mb-4">
              {footer.columns.services.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/articles/botox-full-guide"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.services.botox}
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/face-sculpting"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.services.fillers}
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/biostimulators-radiesse"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.services.sculpting}
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/salmon-dna"
                  className="hover:text-white transition-colors"
                >
                  {footer.columns.services.advanced}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-[#d4a5b8] font-bold mb-4">
              {footer.columns.contact.title}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="opacity-70">
                  {footer.columns.contact.location}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="opacity-70">
                  {footer.columns.contact.phone}
                </span>
              </li>
              <li className="mt-6 flex flex-col gap-2">
                <Link
                  href="/accessibility"
                  className="text-[#d4a5b8] hover:text-[#e5c4d3] hover:underline transition-colors"
                >
                  {footer.accessibility_statement}
                </Link>
                <Link
                  href="/privacy"
                  className="text-[#d4a5b8] hover:text-[#e5c4d3] hover:underline transition-colors"
                >
                  {language.site_content.privacy_page.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6b4259] pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
