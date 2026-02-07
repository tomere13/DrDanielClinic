"use client";

import { motion, useReducedMotion, Variants, Variant } from "framer-motion";
import { useAccessibility } from "@/context/AccessibilityContext";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "scale-in"
    | "blur-in";
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  distance = 30,
  className = "",
  staggerChildren = 0,
  once = true,
}: ScrollRevealProps) {
  const { animationsEnabled } = useAccessibility();
  const prefersReducedMotion = useReducedMotion();

  // Disable animations if user turned them off in widget or system settings
  const shouldAnimate = animationsEnabled && !prefersReducedMotion;

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = (): Variants => {
    const hidden: Variant = { opacity: 0 };
    const visible: Variant = {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth ease
        staggerChildren: staggerChildren > 0 ? staggerChildren : undefined,
      },
    };

    switch (animation) {
      case "slide-up":
        hidden.y = distance;
        visible.y = 0;
        break;
      case "slide-down":
        hidden.y = -distance;
        visible.y = 0;
        break;
      case "slide-left":
        hidden.x = distance;
        visible.x = 0;
        break;
      case "slide-right":
        hidden.x = -distance;
        visible.x = 0;
        break;
      case "scale-in":
        hidden.scale = 0.95;
        visible.scale = 1;
        break;
      case "blur-in":
        hidden.filter = "blur(10px)";
        visible.filter = "none";
        break;
      case "fade":
      default:
        break;
    }

    return { hidden, visible };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  animation = "slide-up",
  distance = 20,
  className = "",
}: {
  children: React.ReactNode;
  animation?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "scale-in"
    | "blur-in";
  distance?: number;
  className?: string;
}) {
  const { animationsEnabled } = useAccessibility();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animationsEnabled && !prefersReducedMotion;

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  const hidden: Variant = { opacity: 0 };
  const visible: Variant = {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  };

  switch (animation) {
    case "slide-up":
      hidden.y = distance;
      visible.y = 0;
      break;
    case "slide-down":
      hidden.y = -distance;
      visible.y = 0;
      break;
    case "slide-left":
      hidden.x = distance;
      visible.x = 0;
      break;
    case "slide-right":
      hidden.x = -distance;
      visible.x = 0;
      break;
    case "scale-in":
      hidden.scale = 0.95;
      visible.scale = 1;
      break;
    case "blur-in":
      hidden.filter = "blur(8px)";
      visible.filter = "none";
      break;
  }

  return (
    <motion.div variants={{ hidden, visible }} className={className}>
      {children}
    </motion.div>
  );
}
