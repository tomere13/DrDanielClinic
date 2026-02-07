"use client";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useAccessibility } from "@/context/AccessibilityContext";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { contrastMode } = useAccessibility();
  const { language, dir } = useLanguage();
  const { header } = language.site_content;
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = useCallback(
    (id: string) => {
      setIsMobileMenuOpen(false); // Close mobile menu first

      if (pathname !== "/") {
        router.push(`/#${id}`);
        return;
      }

      // Small delay to let menu close animation complete
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Get header height to offset scroll position
          const header = document.querySelector("header");
          const headerHeight = header?.offsetHeight || 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    },
    [pathname, router]
  );

  useEffect(() => {
    // If we have a hash in the URL and we're on the home page, scroll to it
    if (
      pathname === "/" &&
      typeof window !== "undefined" &&
      window.location.hash
    ) {
      const hash = window.location.hash.substring(1);
      // Wait a bit for the page to render
      setTimeout(() => scrollToSection(hash), 500);
    }
  }, [pathname, scrollToSection]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Don't hide navbar if mobile menu is open
      if (isMobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm dark:bg-slate-900/95 dark:border-gray-800"
    >
      <nav
        className="container relative mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
        aria-label="Main navigation"
        dir={dir}
      >
        {/* Mobile Menu Button - Start side */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-200 dark:hover:bg-gray-800",
            "focus-visible:outline-2 focus-visible:outline-[#b7748d]"
          )}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation - Start side */}
        <ul className="hidden gap-4 md:flex md:gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={cn(
                "text-sm font-medium text-gray-700 transition-colors hover:text-[#b7748d] dark:text-gray-200 dark:hover:text-[#b7748d]",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7748d]"
              )}
            >
              {header.about}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className={cn(
                "text-sm font-medium text-gray-700 transition-colors hover:text-[#b7748d] dark:text-gray-200 dark:hover:text-[#b7748d]",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7748d]"
              )}
            >
              {header.services}
            </button>
          </li>
          {/* Articles Link - New */}
          <li>
            <Link
              href="/articles"
              className={cn(
                "text-sm font-medium text-gray-700 transition-colors hover:text-[#b7748d] dark:text-gray-200 dark:hover:text-[#b7748d]",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7748d]"
              )}
            >
              {header.articles}
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "text-sm font-medium text-gray-700 transition-colors hover:text-[#b7748d] dark:text-gray-200 dark:hover:text-[#b7748d]",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7748d]"
              )}
            >
              {header.contact}
            </button>
          </li>
        </ul>

        {/* Logo - Center/End */}
        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#b7748d] md:static md:translate-x-0"
        >
          <div className="relative flex items-center h-10 w-auto sm:h-18">
            {/* IMAGE 1: Handles Light Mode, Yellow Mode, and White Mode */}
            <Image
              src="/logo.png"
              alt="Dr. Daniel Clinic Logo"
              width={1100}
              height={400}
              quality={100}
              priority
              className={cn(
                "h-full w-auto object-contain transition-all duration-200",
                // CRITICAL FIX: If mode is normal, hide this image in dark mode
                // so the second image can take over.
                contrastMode === "normal" && "dark:hidden"
              )}
              style={{
                filter:
                  contrastMode === "high-contrast-yellow"
                    ? "brightness(0) saturate(100%) invert(86%) sepia(90%) saturate(6000%) hue-rotate(5deg) brightness(105%) contrast(102%)"
                    : contrastMode === "high-contrast-white"
                      ? "brightness(0) invert(1)"
                      : undefined,
              }}
            />

            {/* IMAGE 2: Handles Standard System Dark Mode ONLY */}
            {/* Only render this if we are in normal mode */}
            {contrastMode === "normal" && (
              <Image
                src="/logo.png"
                alt="Dr. Daniel Clinic Logo"
                width={1100}
                height={400}
                // This image is hidden by default and only shows in dark mode
                className="h-full w-auto object-contain hidden dark:block brightness-0 invert"
                quality={100}
                priority
              />
            )}
          </div>
        </Link>
        {/* Language Switcher & Theme Toggle - End side (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 bg-white md:hidden dark:bg-slate-900 dark:border-gray-800"
          >
            <ul className="flex flex-col px-4 py-4 gap-2" dir={dir}>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`w-full rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#b7748d] active:bg-[#b7748d]/10 dark:text-gray-200 dark:hover:bg-gray-800 ${dir === "rtl" ? "text-right" : "text-left"}`}
                  type="button"
                >
                  {header.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`w-full rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#b7748d] active:bg-[#b7748d]/10 dark:text-gray-200 dark:hover:bg-gray-800 ${dir === "rtl" ? "text-right" : "text-left"}`}
                  type="button"
                >
                  {header.services}
                </button>
              </li>
              <li>
                <Link
                  href="/articles"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#b7748d] active:bg-[#b7748d]/10 dark:text-gray-200 dark:hover:bg-gray-800 ${dir === "rtl" ? "text-right" : "text-left"}`}
                >
                  {header.articles}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#b7748d] active:bg-[#b7748d]/10 dark:text-gray-200 dark:hover:bg-gray-800 ${dir === "rtl" ? "text-right" : "text-left"}`}
                  type="button"
                >
                  {header.contact}
                </button>
              </li>
              <li className="px-4 py-2 border-t border-gray-100 mt-2 dark:border-gray-800">
                <div className="flex justify-between items-center bg-gray-50 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {header.setting_preferences || "Settings"}
                  </span>
                  <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
