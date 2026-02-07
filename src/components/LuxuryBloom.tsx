"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

interface LuxuryBloomProps {
  color?: string;
  opacity?: [number, number];
  scale?: [number, number];
  offset?: string[];
}

export function LuxuryBloom({
  color = "#b7748d",
  opacity = [0, 0.4], // Increased max opacity
  scale = [0.8, 1.5], // Increased max scale
  offset = ["start end", "end start"],
}: LuxuryBloomProps) {
  const { animationsEnabled } = useAccessibility();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as NonNullable<Parameters<typeof useScroll>[0]>["offset"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  const bloomOpacity = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0, opacity[1], 0]
  );
  const bloomScale = useTransform(smoothProgress, [0, 1], scale);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {animationsEnabled && (
        <motion.div
          style={{
            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
            opacity: bloomOpacity,
            scale: bloomScale,
            willChange: "transform, opacity",
          }}
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none"
        />
      )}
    </div>
  );
}
