"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles, Gift } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { promoConfig } from "@/config/promo";

interface PromoItem {
  title: string;
  description: string;
  cta_whatsapp: string;
  dismiss: string;
}

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { language, dir } = useLanguage();
  const promo = (language as unknown as { promo: Record<string, PromoItem> })
    .promo;

  useEffect(() => {
    if (!promoConfig.isActive) return;

    // Check if user has already dismissed this specific promo type
    const dismissedKey = `promo_dismissed_${promoConfig.type}`;
    const isDismissed = localStorage.getItem(dismissedKey);

    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, promoConfig.delay);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    const dismissedKey = `promo_dismissed_${promoConfig.type}`;
    localStorage.setItem(dismissedKey, "true");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/972548185506", "_blank");
  };

  if (!promo || !isVisible) return null;

  const currentPromo = promo[promoConfig.type];
  if (!currentPromo) return null;

  // Icon selection based on type
  const getIcon = () => {
    switch (promoConfig.type) {
      case "valentine":
        return (
          <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
        );
      case "newYear":
        return <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />;
      default:
        return <Gift className="w-8 h-8 text-[#b7748d] animate-bounce" />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-8 md:right-8 z-50 max-w-lg md:max-w-md w-auto md:w-[400px]"
          dir={dir}
        >
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-[#b7748d]/20 overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b7748d] via-[#d4a5b8] to-[#b7748d]" />
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#b7748d]/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#b7748d]/5 rounded-full blur-2xl" />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 md:top-3 md:right-3 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-gray-500 transition-colors z-10"
              aria-label="Close promotion"
            >
              <X size={16} className="md:w-[18px] md:h-[18px]" />
            </button>

            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 p-2 md:p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                    {getIcon()}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 leading-tight">
                    {currentPromo.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {currentPromo.description}
                  </p>

                  <div className="flex flex-col xs:flex-row gap-2 md:gap-3 mt-1 md:mt-2">
                    <button
                      onClick={handleWhatsApp}
                      className="flex-1 px-3 md:px-4 py-2 md:py-2.5 bg-[#b7748d] hover:bg-[#a05d76] text-white text-xs md:text-sm font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg active:scale-95 transform duration-100 text-center"
                    >
                      {currentPromo.cta_whatsapp}
                    </button>
                    <button
                      onClick={handleDismiss}
                      className="flex-shrink-0 px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      {currentPromo.dismiss}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
