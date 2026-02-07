"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Instagram } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function FloatingActions() {
  const { language } = useLanguage();
  const { floating_actions } = language.site_content;
  const router = useRouter();
  const pathname = usePathname();

  const openWhatsApp = () => {
    window.open("https://wa.me/972548185506", "_blank", "noopener,noreferrer");
  };

  const openLocation = () => {
    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
    }
  };

  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/dr.daniel.vershkov/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className={cn(
          "group relative flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14",
          "bg-[#25D366] text-white shadow-lg transition-all hover:bg-[#128C7E]",
          "hover:shadow-xl hover:shadow-green-500/50 animate-bounce-slow",
          "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green-500",
          "wa-float-btn"
        )}
        aria-label={floating_actions?.whatsapp_aria || "Open WhatsApp"}
        title={floating_actions?.whatsapp_label || "WhatsApp Us"}
      >
        {/* WhatsApp Official Icon */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 sm:h-7 sm:w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        {/* Tooltip - Hidden on mobile */}
        <span
          className={cn(
            "absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity sm:block",
            "group-hover:opacity-100"
          )}
        >
          {floating_actions?.whatsapp_label || "WhatsApp: +972-54-818-5506"}
        </span>
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-[#25D366] opacity-20" />
      </motion.button>

      {/* Instagram Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openInstagram}
        className={cn(
          "group relative flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14",
          "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg transition-all",
          "hover:shadow-xl hover:shadow-pink-500/50",
          "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pink-500",
          "insta-float-btn"
        )}
        aria-label={floating_actions?.instagram_aria || "Open Instagram"}
        title={floating_actions?.instagram_label || "Instagram"}
      >
        <Instagram size={20} className="sm:h-6 sm:w-6" />
        {/* Tooltip - Hidden on mobile */}
        <span
          className={cn(
            "absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity sm:block",
            "group-hover:opacity-100"
          )}
        >
          {floating_actions?.instagram_label || "Instagram"}
        </span>
      </motion.button>

      {/* Location Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openLocation}
        className={cn(
          "group relative flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14",
          "bg-red-500 text-white shadow-lg transition-all hover:bg-red-600",
          "hover:shadow-xl hover:shadow-red-500/50",
          "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-red-500",
          "loc-float-btn"
        )}
        aria-label={floating_actions?.location_aria || "Contact Us"}
        title={floating_actions?.location_label || "Contact Us"}
      >
        <MessageSquare size={20} className="sm:h-6 sm:w-6" />
        {/* Tooltip - Hidden on mobile */}
        <span
          className={cn(
            "absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity sm:block",
            "group-hover:opacity-100"
          )}
        >
          {floating_actions?.location_label || "Contact Us"}
        </span>
      </motion.button>
    </div>
  );
}
