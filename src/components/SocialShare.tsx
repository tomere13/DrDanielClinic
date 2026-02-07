"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  MessageCircle,
  Facebook,
  Send,
  Link2,
  Share2,
  Mail,
  SendHorizontal,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SocialShareProps {
  title: string;
  url?: string;
  className?: string;
}

export function SocialShare({ title, url, className }: SocialShareProps) {
  const { languageCode, dir } = useLanguage();
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const siteUrl =
        url || (typeof window !== "undefined" ? window.location.href : "");
      // Handle localhost/dev environments for sharing services that require public URLs
      const finalUrl = siteUrl.includes("localhost")
        ? "https://drdaniel-clinic.com" +
          (typeof window !== "undefined" ? window.location.pathname : "")
        : siteUrl;
      setCurrentUrl(finalUrl);
    }, 0);
    return () => clearTimeout(timer);
  }, [url]);

  const shareText = `${title}\n${currentUrl}`;

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366] hover:bg-[#128C7E]",
      href: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-[#1877F2] hover:bg-[#0d65d9]",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: "Messenger",
      icon: Send,
      color: "bg-[#0084FF] hover:bg-[#0073e6]",
      href: `fb-messenger://share/?link=${encodeURIComponent(currentUrl)}&app_id=123456789`,
      webHref: `https://www.facebook.com/dialog/send?link=${encodeURIComponent(currentUrl)}&app_id=123456789&redirect_uri=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: "Telegram",
      icon: SendHorizontal,
      color: "bg-[#0088cc] hover:bg-[#0077b5]",
      href: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-gray-600 hover:bg-gray-700",
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareText)}`,
    },
  ];

  const handleMessengerShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      const option = shareOptions.find((o) => o.name === "Messenger");
      if (option?.webHref) {
        window.open(option.webHref, "_blank", "noopener,noreferrer");
      }
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const labels = {
    he: {
      share: "שתף את המאמר",
      copy: "העתק קישור",
      copied: "הועתק!",
    },
    en: {
      share: "Share this article",
      copy: "Copy Link",
      copied: "Copied!",
    },
    ru: {
      share: "Поделиться статьей",
      copy: "Копировать ссылку",
      copied: "Скопировано!",
    },
    ar: {
      share: "شارك المقال",
      copy: "نسخ הרابط",
      copied: "تم النسخ!",
    },
  };

  const t = labels[languageCode as keyof typeof labels] || labels.en;

  return (
    <div
      className={cn(
        "flex flex-col gap-4 py-8 border-t border-gray-100 dark:border-gray-800",
        className
      )}
      dir={dir}
    >
      <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold text-start">
        <Share2 size={20} className="text-[#b7748d]" />
        <span>{t.share}</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {shareOptions.map((option) => (
          <a
            key={option.name}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={
              option.name === "Messenger" ? handleMessengerShare : undefined
            }
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition-all transform hover:scale-105 active:scale-95 shadow-sm",
              option.color
            )}
          >
            <option.icon size={18} />
            <span className="hidden sm:inline">{option.name}</span>
          </a>
        ))}

        <button
          onClick={copyToClipboard}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 shadow-sm",
            copied
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          )}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2"
              >
                <Link2 size={18} />
                <span>{t.copied}</span>
              </motion.div>
            ) : (
              <motion.div
                key="link"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2"
              >
                <Link2 size={18} />
                <span>{t.copy}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
