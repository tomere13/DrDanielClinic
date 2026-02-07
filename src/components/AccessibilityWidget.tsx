"use client";

import { useAccessibility, ContrastMode } from "@/context/AccessibilityContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  Accessibility,
  X,
  Type,
  Contrast,
  Check,
  RotateCcw,
  MousePointer2,
  Eye,
  PlayCircle,
  Link as LinkIcon,
  AlignLeft,
  Highlighter,
} from "lucide-react";
import { useState, useEffect, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export function AccessibilityWidget() {
  // 1. All Hooks must be declared at the top level
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const {
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    isMonochrome,
    setIsMonochrome,
    isStopAnimations,
    setIsStopAnimations,
    isHighlightLinks,
    setIsHighlightLinks,
    isBigCursor,
    setIsBigCursor,
    isTextSpacing,
    setIsTextSpacing,
    isDyslexicFont,
    setIsDyslexicFont,
    isReadingGuide,
    setIsReadingGuide,
    resetAll,
  } = useAccessibility();

  const { language, dir } = useLanguage();
  const t = language.site_content.accessibility_widget;

  // 2. Effects

  // Reading Guide Logic (Must be BEFORE the 'if (!mounted)' return)
  useEffect(() => {
    if (!isReadingGuide) return;
    const moveGuide = (e: MouseEvent) => {
      const guide = document.getElementById("a11y-reading-guide");
      if (guide) guide.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", moveGuide);
    return () => window.removeEventListener("mousemove", moveGuide);
  }, [isReadingGuide]);

  // 3. Conditional Return (Must be AFTER all hooks)
  if (!mounted) return null;

  // 4. Component Logic
  const tools = [
    {
      id: "links",
      label: t.highlight_links || "Highlight Links",
      icon: <LinkIcon size={18} />,
      active: isHighlightLinks,
      toggle: setIsHighlightLinks,
    },
    {
      id: "anim",
      label: t.stop_animations || "Stop Animations",
      icon: <PlayCircle size={18} />,
      active: isStopAnimations,
      toggle: setIsStopAnimations,
    },
    {
      id: "mono",
      label: t.monochrome || "Monochrome",
      icon: <Eye size={18} />,
      active: isMonochrome,
      toggle: setIsMonochrome,
    },
    {
      id: "cursor",
      label: t.big_cursor || "Big Cursor",
      icon: <MousePointer2 size={18} />,
      active: isBigCursor,
      toggle: setIsBigCursor,
    },
    {
      id: "spacing",
      label: t.text_spacing || "Text Spacing",
      icon: <AlignLeft size={18} />,
      active: isTextSpacing,
      toggle: setIsTextSpacing,
    },
    {
      id: "dyslexic",
      label: t.dyslexia_font || "Dyslexia Font",
      icon: <Type size={18} />,
      active: isDyslexicFont,
      toggle: setIsDyslexicFont,
    },
    {
      id: "guide",
      label: t.reading_guide || "Reading Guide",
      icon: <Highlighter size={18} />,
      active: isReadingGuide,
      toggle: setIsReadingGuide,
    },
  ];

  return (
    <>
      {/* 1. Skip to Content (Law Requirement) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#b7748d] focus:p-4 focus:text-white focus:rounded-lg focus:shadow-xl"
      >
        {t.skip_to_content || "Skip to Content"}
      </a>

      {/* 2. Monochrome Overlay */}
      {isMonochrome && (
        <div
          className="pointer-events-none fixed inset-0 z-[9990] bg-white/0 backdrop-grayscale"
          aria-hidden="true"
        />
      )}

      {/* 3. Reading Guide */}
      {isReadingGuide && (
        <div
          id="a11y-reading-guide"
          className="pointer-events-none fixed left-0 z-[9999] h-2 w-full bg-[#b7748d]/40 shadow-[0_0_15px_rgba(183,116,141,0.5)] transition-all duration-75 ease-out"
        />
      )}

      {/* 4. Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-5 left-5 z-[10000] flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ease-out hover:scale-110 active:scale-95",
          "bg-gradient-to-br from-[#b7748d] to-[#8f5269] text-white",
          "border-2 border-white/20 ring-4 ring-black/5 hover:shadow-[#b7748d]/40",
          isOpen && "rotate-90"
        )}
        aria-label={isOpen ? t.toggle_close_label : t.toggle_open_label}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Accessibility size={26} />}
      </button>

      {/* 5. Menu */}
      <div
        id="accessibility-menu"
        dir={dir}
        className={cn(
          "fixed bottom-24 left-5 z-[10000] w-[calc(100vw-2.5rem)] max-w-[360px] origin-bottom-left overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ease-in-out",
          "border border-white/20 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 dark:border-white/10",
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 translate-y-4"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-5 pb-4 dark:border-gray-800">
          <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            <Accessibility size={20} className="text-[#b7748d]" />
            {t.title}
          </h2>
          <button
            onClick={resetAll}
            className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#b7748d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7748d] rounded px-1"
          >
            <RotateCcw size={14} />
            {t.reset || "Reset"}
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto space-y-6 p-5 custom-scrollbar">
          {/* Text Size */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              <Type size={14} /> {t.text_size_title}
            </h3>
            <div className="flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
              {(["normal", "large", "extra-large"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={cn(
                    "flex-1 rounded-lg py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7748d]",
                    fontSize === size
                      ? "bg-white text-[#b7748d] shadow-sm dark:bg-gray-700"
                      : "text-gray-500 dark:text-gray-400"
                  )}
                >
                  {size === "normal"
                    ? t.text_size_normal || "A"
                    : size === "large"
                      ? t.text_size_large || "A+"
                      : t.text_size_huge || "A++"}
                </button>
              ))}
            </div>
          </section>

          {/* Tools Grid */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              <Eye size={14} /> {t.visual_tools_title || "Tools"}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => tool.toggle(!tool.active)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-2 rounded-xl border p-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7748d]",
                    tool.active
                      ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669] ring-1 ring-[#b7748d] dark:text-[#d4a5b8]"
                      : "border-gray-100 bg-white text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                  )}
                >
                  {tool.icon}
                  <span className="text-[11px] font-bold leading-tight">
                    {tool.label}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Contrast */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              <Contrast size={14} /> {t.contrast_title}
            </h3>
            <div className="grid gap-2">
              {[
                { id: "normal", label: t.contrast_normal },
                { id: "high-contrast-yellow", label: t.contrast_high_yellow },
                { id: "high-contrast-white", label: t.contrast_high_white },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setContrastMode(item.id as ContrastMode)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7748d]",
                    contrastMode === item.id
                      ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669] dark:text-[#d4a5b8]"
                      : "border-gray-100 bg-white text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                  )}
                >
                  <span>{item.label}</span>
                  {contrastMode === item.id && <Check size={16} />}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
