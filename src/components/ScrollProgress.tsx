"use client";

import { useScrollProgress } from "@/hooks/useScrollAnimation";

export function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 h-1 bg-gradient-to-r from-[#c98799] via-[#b7748d] to-[#a0647a]"
      style={{
        width: `${scrollProgress}%`,
        transition: "width 0.1s ease-out",
        willChange: "transform",
      }}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
