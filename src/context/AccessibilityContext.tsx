"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type FontSize = "normal" | "large" | "extra-large";
export type ContrastMode =
  | "normal"
  | "high-contrast-yellow"
  | "high-contrast-white";

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  contrastMode: ContrastMode;
  setContrastMode: (mode: ContrastMode) => void;
  isMonochrome: boolean;
  setIsMonochrome: (active: boolean) => void;
  isStopAnimations: boolean;
  setIsStopAnimations: (active: boolean) => void;
  isHighlightLinks: boolean;
  setIsHighlightLinks: (active: boolean) => void;
  isBigCursor: boolean;
  setIsBigCursor: (active: boolean) => void;
  isTextSpacing: boolean;
  setIsTextSpacing: (active: boolean) => void;
  isDyslexicFont: boolean;
  setIsDyslexicFont: (active: boolean) => void;
  isReadingGuide: boolean;
  setIsReadingGuide: (active: boolean) => void;
  resetAll: () => void;
  animationsEnabled: boolean;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

  const [isMonochrome, setIsMonochrome] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("a11y-mono") === "true";
    return false;
  });

  const [isStopAnimations, setIsStopAnimations] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("a11y-stop-anim") === "true";
    return false;
  });

  const [isHighlightLinks, setIsHighlightLinks] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("a11y-links") === "true";
    return false;
  });

  const [isBigCursor, setIsBigCursor] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("a11y-cursor") === "true";
    return false;
  });

  const [isTextSpacing, setIsTextSpacing] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("a11y-spacing") === "true";
    return false;
  });

  const [isDyslexicFont, setIsDyslexicFont] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("a11y-dyslexic") === "true";
    return false;
  });

  const [isReadingGuide, setIsReadingGuide] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("a11y-guide") === "true";
    return false;
  });

  // Persist states
  useEffect(() => {
    localStorage.setItem("a11y-font-size", fontSize);
    document.documentElement.classList.remove(
      "font-size-normal",
      "font-size-large",
      "font-size-extra-large"
    );
    document.documentElement.classList.add(`font-size-${fontSize}`);

    // Also apply the simplified classes used in global.css if they exist
    document.body.classList.remove(
      "text-normal",
      "text-large",
      "text-extra-large"
    );
    if (fontSize !== "normal") document.body.classList.add(`text-${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("a11y-contrast", contrastMode);
    document.documentElement.classList.remove(
      "contrast-normal",
      "contrast-high-yellow",
      "contrast-high-white"
    );
    document.body.classList.remove(
      "high-contrast-yellow",
      "high-contrast-white"
    );

    if (contrastMode === "high-contrast-yellow") {
      document.documentElement.classList.add("contrast-high-yellow");
      document.body.classList.add("high-contrast-yellow");
    } else if (contrastMode === "high-contrast-white") {
      document.documentElement.classList.add("contrast-high-white");
      document.body.classList.add("high-contrast-white");
    }
  }, [contrastMode]);

  useEffect(() => {
    localStorage.setItem("a11y-mono", String(isMonochrome));
    document.body.classList.toggle("monochrome", isMonochrome);
  }, [isMonochrome]);

  useEffect(() => {
    localStorage.setItem("a11y-stop-anim", String(isStopAnimations));
    document.body.classList.toggle("stop-animations", isStopAnimations);
  }, [isStopAnimations]);

  useEffect(() => {
    localStorage.setItem("a11y-links", String(isHighlightLinks));
    document.body.classList.toggle("highlight-links", isHighlightLinks);
  }, [isHighlightLinks]);

  useEffect(() => {
    localStorage.setItem("a11y-cursor", String(isBigCursor));
    document.body.classList.toggle("big-cursor", isBigCursor);
  }, [isBigCursor]);

  useEffect(() => {
    localStorage.setItem("a11y-spacing", String(isTextSpacing));
    document.body.classList.toggle("text-spacing", isTextSpacing);
  }, [isTextSpacing]);

  useEffect(() => {
    localStorage.setItem("a11y-dyslexic", String(isDyslexicFont));
    document.body.classList.toggle("dyslexic-font", isDyslexicFont);
  }, [isDyslexicFont]);

  // Reading Guide mouse move logic
  useEffect(() => {
    if (!isReadingGuide) return;
    const handleMouseMove = (e: MouseEvent) => {
      const guide = document.getElementById("a11y-reading-guide");
      if (guide) guide.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isReadingGuide]);

  const resetAll = () => {
    setFontSize("normal");
    setContrastMode("normal");
    setIsMonochrome(false);
    setIsStopAnimations(false);
    setIsHighlightLinks(false);
    setIsBigCursor(false);
    setIsTextSpacing(false);
    setIsDyslexicFont(false);
    setIsReadingGuide(false);
  };

  return (
    <AccessibilityContext.Provider
      value={{
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
        animationsEnabled: !isStopAnimations,
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
