"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type FontSize = "normal" | "large" | "extra-large";
type ContrastMode = "normal" | "high-contrast-yellow" | "high-contrast-white";

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  contrastMode: ContrastMode;
  setContrastMode: (mode: ContrastMode) => void;
  reduceMotion: boolean;
  setReduceMotion: (reduce: boolean) => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize state with lazy initialization from localStorage
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("a11y-font-size");
      return (saved as FontSize) || "normal";
    }
    return "normal";
  });

  const [contrastMode, setContrastMode] = useState<ContrastMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("a11y-contrast");
      return (saved as ContrastMode) || "normal";
    }
    return "normal";
  });

  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("a11y-reduce-motion");
      return saved === "true";
    }
    return false;
  });

  // Persist and apply font size
  useEffect(() => {
    localStorage.setItem("a11y-font-size", fontSize);
    document.documentElement.classList.remove(
      "font-size-normal",
      "font-size-large",
      "font-size-extra-large"
    );
    document.documentElement.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  // Persist and apply contrast mode
  useEffect(() => {
    localStorage.setItem("a11y-contrast", contrastMode);
    document.documentElement.classList.remove(
      "contrast-normal",
      "contrast-high-yellow",
      "contrast-high-white"
    );
    document.documentElement.classList.add(
      contrastMode === "high-contrast-yellow"
        ? "contrast-high-yellow"
        : contrastMode === "high-contrast-white"
          ? "contrast-high-white"
          : "contrast-normal"
    );
  }, [contrastMode]);

  // Persist and apply motion preference
  useEffect(() => {
    localStorage.setItem("a11y-reduce-motion", String(reduceMotion));
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
  }, [reduceMotion]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        contrastMode,
        setContrastMode,
        reduceMotion,
        setReduceMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );
  }
  return context;
}
