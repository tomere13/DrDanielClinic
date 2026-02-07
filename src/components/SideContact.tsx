"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useAccessibility } from "@/context/AccessibilityContext";
import {
  Phone,
  X,
  MessageCircle,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 1. Fix "Unexpected any" by defining a proper interface
interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onClick: () => void;
  colorClass: string;
  // Passing animationsEnabled down if needed for the arrow,
  // though we handle most via parent or simple CSS checks
  animationsEnabled: boolean;
}

export function SideContact() {
  const { language, dir } = useLanguage();
  const { animationsEnabled } = useAccessibility();
  const router = useRouter();
  const pathname = usePathname();
  const { side_contact, contact_section } = language.site_content;
  const tContact = contact_section.contact_methods;
  const [isOpen, setIsOpen] = useState(false);

  const handleContactFormClick = () => {
    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
    }
    setIsOpen(false);
  };

  const isRtl = dir === "rtl";
  const rotationClass = isRtl ? "rotate-90" : "-rotate-90";

  // Helper to strip animations if disabled
  const transitionSpring = animationsEnabled
    ? ({ type: "spring", damping: 25, stiffness: 300 } as const)
    : ({ duration: 0 } as const);

  const transitionHover = animationsEnabled
    ? ({ duration: 0.4, ease: "easeOut" } as const)
    : ({ duration: 0 } as const);

  return (
    <div
      className={cn(
        "fixed top-1/2 z-50 -translate-y-1/2 hidden md:flex items-center isolate",
        isRtl ? "left-4" : "right-4"
      )}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* --- CLOSED STATE --- */
          <motion.button
            key="trigger"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            // Only scale on hover if animations are enabled
            whileHover={
              animationsEnabled
                ? { scale: 1.05, transition: transitionHover }
                : {}
            }
            whileTap={animationsEnabled ? { scale: 0.95 } : {}}
            onClick={() => setIsOpen(true)}
            transition={animationsEnabled ? {} : { duration: 0 }}
            className={cn(
              "group relative flex flex-col items-center justify-center overflow-hidden rounded-full bg-gray-900 shadow-2xl dark:bg-white",
              "transition-colors duration-500 ease-out hover:bg-black dark:hover:bg-gray-100",
              "w-12 h-12 md:w-12 md:h-auto md:py-8 md:min-h-[200px] md:gap-16"
            )}
          >
            {/* Top Indicator - Hidden on mobile */}
            <span className="relative hidden md:flex h-3 w-3 shrink-0">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full rounded-full bg-[#b7748d] opacity-75",
                  animationsEnabled ? "animate-ping" : ""
                )}
              ></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#b7748d]"></span>
            </span>

            {/* LABEL - Hidden on mobile */}
            <div
              className={cn(
                "hidden md:flex items-center justify-center my-2",
                rotationClass
              )}
            >
              <span className="whitespace-nowrap text-xs font-black uppercase tracking-[0.25em] text-white dark:text-gray-900">
                {side_contact.button_label}
              </span>
            </div>

            {/* Bottom Icon */}
            <div className="relative z-10 shrink-0">
              <Phone
                size={20}
                className={cn(
                  "text-white transition-transform duration-500 ease-out dark:text-gray-900",
                  animationsEnabled ? "group-hover:rotate-12" : ""
                )}
              />
            </div>

            {/* Gradient Overlay */}
            {animationsEnabled && (
              <div className="absolute inset-0 bg-gradient-to-b from-[#b7748d]/0 via-[#b7748d]/0 to-[#b7748d]/20 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none" />
            )}
          </motion.button>
        ) : (
          /* --- OPEN STATE --- */
          <motion.div
            key="popup"
            initial={
              animationsEnabled
                ? { opacity: 0, x: isRtl ? -20 : 20, scale: 0.95 }
                : { opacity: 1, x: 0, scale: 1 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={
              animationsEnabled
                ? { opacity: 0, x: isRtl ? -20 : 20, scale: 0.95 }
                : { opacity: 0 }
            }
            transition={transitionSpring}
            className="relative w-[calc(100vw-2rem)] max-w-[22rem] rounded-[2rem] md:rounded-[2.5rem] border border-white/20 bg-white/90 p-5 md:p-6 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/90"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between pl-2 pr-2">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                  {side_contact.title}
                </h3>
                <div className="mt-1 md:mt-2 h-1 w-10 rounded-full bg-[#b7748d]" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="group flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <X
                  size={20}
                  className={cn(
                    "text-gray-500 transition-transform duration-500 ease-out dark:text-gray-400",
                    animationsEnabled ? "group-hover:rotate-90" : ""
                  )}
                />
              </button>
            </div>

            {/* List */}
            <div className="flex flex-col gap-3">
              <ContactItem
                animationsEnabled={animationsEnabled}
                icon={<MessageCircle size={22} />}
                label="WhatsApp"
                value={tContact.whatsapp.number}
                onClick={() =>
                  window.open(
                    `https://wa.me/972${tContact.whatsapp.number.replace(/-/g, "").substring(1)}`,
                    "_blank"
                  )
                }
                colorClass="text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400"
              />
              <ContactItem
                animationsEnabled={animationsEnabled}
                icon={<Phone size={22} />}
                label={side_contact.phone}
                value={tContact.phone.number}
                onClick={() =>
                  (window.location.href = `tel:${tContact.phone.number}`)
                }
                colorClass="text-[#b7748d] bg-[#b7748d]/10 dark:text-[#f0aabf]"
              />
              <ContactItem
                animationsEnabled={animationsEnabled}
                icon={<MessageSquare size={22} />}
                label={side_contact.contact}
                value={side_contact.contact_value}
                onClick={handleContactFormClick}
                colorClass="text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sub-component with strict typing
function ContactItem({
  icon,
  label,
  value,
  onClick,
  colorClass,
  animationsEnabled,
}: ContactItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-center gap-5 overflow-hidden rounded-[1.5rem] bg-white p-4 text-start shadow-sm ring-1 ring-gray-100 dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10",
        // Conditional transition classes
        animationsEnabled
          ? "transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none"
          : ""
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
          colorClass,
          animationsEnabled
            ? "transition-transform duration-500 ease-out group-hover:scale-110"
            : ""
        )}
      >
        {icon}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:group-hover:text-gray-300",
            animationsEnabled
              ? "transition-colors duration-300 group-hover:text-gray-500"
              : ""
          )}
        >
          {label}
        </span>
        <span className="truncate text-base font-bold text-gray-900 dark:text-white">
          {value}
        </span>
      </div>

      <div
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 rtl:right-auto rtl:left-4 rtl:flip-x",
          animationsEnabled
            ? "translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 rtl:-translate-x-4 rtl:group-hover:translate-x-0"
            : "opacity-0 group-hover:opacity-100"
        )}
      >
        <ArrowUpRight size={20} className="text-gray-300 dark:text-gray-600" />
      </div>
    </button>
  );
}
