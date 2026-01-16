"use client";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu first

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
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
        aria-label="Main navigation"
        dir="rtl"
      >
        {/* Mobile Menu Button - Shows on left on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          )}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation - Shows on left on desktop */}
        <ul className="hidden gap-4 md:flex md:gap-8">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={cn(
                "text-sm font-medium text-gray-700 transition-colors hover:text-blue-600",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              )}
            >
              אודות
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className={cn(
                "text-sm font-medium text-gray-700 transition-colors hover:text-blue-600",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              )}
            >
              טיפולים
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "text-sm font-medium text-gray-700 transition-colors hover:text-blue-600",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              )}
            >
              צור קשר
            </button>
          </li>
        </ul>

        {/* Logo - Always on right */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <Image
            src="/logo.png"
            alt="Dr. Daniel Clinic Logo"
            width={1100}
            height={400}
            className="h-14 w-auto sm:h-20"
            quality={100}
            priority
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 bg-white md:hidden"
          >
            <ul className="flex flex-col px-4 py-4" dir="rtl">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="w-full rounded-lg px-4 py-3 text-right text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 active:bg-blue-50"
                  type="button"
                >
                  אודות
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="w-full rounded-lg px-4 py-3 text-right text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 active:bg-blue-50"
                  type="button"
                >
                  טיפולים
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full rounded-lg px-4 py-3 text-right text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 active:bg-blue-50"
                  type="button"
                >
                  צור קשר
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
