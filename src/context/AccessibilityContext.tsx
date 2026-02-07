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
  const [hasMounted, setHasMounted] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [contrastMode, setContrastMode] = useState<ContrastMode>("normal");
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isStopAnimations, setIsStopAnimations] = useState(false);
  const [isHighlightLinks, setIsHighlightLinks] = useState(false);
  const [isBigCursor, setIsBigCursor] = useState(false);
  const [isTextSpacing, setIsTextSpacing] = useState(false);
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const [isReadingGuide, setIsReadingGuide] = useState(false);

  // Load preferences from localStorage after mount
  useEffect(() => {
    // Wrap in setTimeout to avoid "cascading renders" lint error
    // and ensure this stays on the client.
    const timer = setTimeout(() => {
      setHasMounted(true);
      if (typeof window !== "undefined") {
        const savedFontSize = localStorage.getItem("a11y-font-size");
        if (savedFontSize) setFontSize(savedFontSize as FontSize);

        const savedContrast = localStorage.getItem("a11y-contrast");
        if (savedContrast) setContrastMode(savedContrast as ContrastMode);

        setIsMonochrome(localStorage.getItem("a11y-mono") === "true");
        setIsStopAnimations(localStorage.getItem("a11y-stop-anim") === "true");
        setIsHighlightLinks(localStorage.getItem("a11y-links") === "true");
        setIsBigCursor(localStorage.getItem("a11y-cursor") === "true");
        setIsTextSpacing(localStorage.getItem("a11y-spacing") === "true");
        setIsDyslexicFont(localStorage.getItem("a11y-dyslexic") === "true");
        setIsReadingGuide(localStorage.getItem("a11y-guide") === "true");
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Persist states
  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("a11y-font-size", fontSize);
    document.documentElement.classList.remove(
      "font-size-normal",
      "font-size-large",
      "font-size-extra-large"
    );
    document.documentElement.classList.add(`font-size-${fontSize}`);

    document.body.classList.remove(
      "text-normal",
      "text-large",
      "text-extra-large"
    );
    if (fontSize !== "normal") document.body.classList.add(`text-${fontSize}`);
  }, [fontSize, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
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
  }, [contrastMode, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("a11y-mono", String(isMonochrome));
    document.body.classList.toggle("monochrome", isMonochrome);
  }, [isMonochrome, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("a11y-stop-anim", String(isStopAnimations));
    document.body.classList.toggle("stop-animations", isStopAnimations);
  }, [isStopAnimations, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("a11y-links", String(isHighlightLinks));
    document.body.classList.toggle("highlight-links", isHighlightLinks);
  }, [isHighlightLinks, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("a11y-cursor", String(isBigCursor));
    document.body.classList.toggle("big-cursor", isBigCursor);
  }, [isBigCursor, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("a11y-spacing", String(isTextSpacing));
    document.body.classList.toggle("text-spacing", isTextSpacing);
  }, [isTextSpacing, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem("a11y-dyslexic", String(isDyslexicFont));
    document.body.classList.toggle("dyslexic-font", isDyslexicFont);
  }, [isDyslexicFont, hasMounted]);

  // Reading Guide mouse move logic
  useEffect(() => {
    if (!isReadingGuide || !hasMounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      const guide = document.getElementById("a11y-reading-guide");
      if (guide) guide.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isReadingGuide, hasMounted]);

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
        // SSR-safe: During hydration, animations should be enabled to match server HTML.
        animationsEnabled: hasMounted ? !isStopAnimations : true,
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
