"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Accessibility, X, Type, Contrast, Move } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    reduceMotion,
    setReduceMotion,
  } = useAccessibility();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full sm:bottom-6 sm:left-6 sm:h-14 sm:w-14",
          "bg-[#b7748d] text-white shadow-lg transition-all hover:bg-[#a0647a]",
          "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#b7748d]"
        )}
        aria-label={
          isOpen ? "Close accessibility menu" : "Open accessibility menu"
        }
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        {isOpen ? (
          <X size={20} className="sm:h-6 sm:w-6" />
        ) : (
          <Accessibility size={20} className="sm:h-6 sm:w-6" />
        )}
      </button>

      {/* Accessibility Menu Panel */}
      {isOpen && (
        <div
          id="accessibility-menu"
          role="dialog"
          aria-labelledby="a11y-menu-title"
          className={cn(
            "fixed bottom-20 left-4 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-lg bg-white p-4 shadow-2xl sm:bottom-24 sm:left-6 sm:w-80 sm:p-6",
            "border border-gray-200"
          )}
        >
          <h2
            id="a11y-menu-title"
            className="mb-4 text-xl font-bold text-gray-900"
          >
            Accessibility Options
          </h2>

          {/* Font Size Control */}
          <section className="mb-6">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Type size={18} aria-hidden="true" />
              Text Size
            </h3>
            <div
              className="flex gap-2"
              role="group"
              aria-label="Font size options"
            >
              <button
                onClick={() => setFontSize("normal")}
                className={cn(
                  "flex-1 rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                  fontSize === "normal"
                    ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669]"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                )}
                aria-pressed={fontSize === "normal"}
              >
                1x
              </button>
              <button
                onClick={() => setFontSize("large")}
                className={cn(
                  "flex-1 rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                  fontSize === "large"
                    ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669]"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                )}
                aria-pressed={fontSize === "large"}
              >
                1.25x
              </button>
              <button
                onClick={() => setFontSize("extra-large")}
                className={cn(
                  "flex-1 rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                  fontSize === "extra-large"
                    ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669]"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                )}
                aria-pressed={fontSize === "extra-large"}
              >
                1.5x
              </button>
            </div>
          </section>

          {/* Contrast Mode Control */}
          <section className="mb-6">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Contrast size={18} aria-hidden="true" />
              Contrast Mode
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setContrastMode("normal")}
                className={cn(
                  "w-full rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors",
                  contrastMode === "normal"
                    ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669]"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                )}
                aria-pressed={contrastMode === "normal"}
              >
                Normal Contrast
              </button>
              <button
                onClick={() => setContrastMode("high-contrast-yellow")}
                className={cn(
                  "w-full rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors",
                  contrastMode === "high-contrast-yellow"
                    ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669]"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                )}
                aria-pressed={contrastMode === "high-contrast-yellow"}
              >
                High Contrast (Yellow on Black)
              </button>
              <button
                onClick={() => setContrastMode("high-contrast-white")}
                className={cn(
                  "w-full rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors",
                  contrastMode === "high-contrast-white"
                    ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669]"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                )}
                aria-pressed={contrastMode === "high-contrast-white"}
              >
                High Contrast (White on Black)
              </button>
            </div>
          </section>

          {/* Reduce Motion Toggle */}
          <section>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Move size={18} aria-hidden="true" />
              Motion Preference
            </h3>
            <button
              onClick={() => setReduceMotion(!reduceMotion)}
              className={cn(
                "w-full rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors",
                reduceMotion
                  ? "border-[#b7748d] bg-[#b7748d]/10 text-[#8b5669]"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              )}
              role="switch"
              aria-checked={reduceMotion}
            >
              {reduceMotion ? "Reduced Motion: ON" : "Reduce Motion"}
            </button>
          </section>
        </div>
      )}

      {/* Overlay for closing menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
