"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
  /** Override the --button-color token */
  bgColor?: string;
  textColor?: string;
  size?: "sm" | "md" | "lg";
  /** Override the --button-blobbiness token (low | medium | high) */
  blobIntensity?: "low" | "medium" | "high";
  /** Override the --button-opacity token (0–1) */
  bgOpacity?: number;
}

const sizeStyles = {
  sm: "px-6 py-3 text-sm",
  md: "px-10 py-5 text-base",
  lg: "px-12 py-6 text-lg",
};

const blobShapes: Record<string, { default: string; hover: string }> = {
  low: {
    default: "58% 42% 52% 48% / 53% 47% 53% 47%",
    hover: "52% 48% 48% 52% / 57% 46% 54% 43%",
  },
  medium: {
    default: "63% 37% 54% 46% / 55% 48% 52% 45%",
    hover: "54% 46% 48% 52% / 62% 44% 56% 38%",
  },
  high: {
    default: "71% 29% 63% 37% / 64% 53% 47% 36%",
    hover: "43% 57% 38% 62% / 71% 29% 71% 29%",
  },
};

function hexToRgba(hex: string, opacity: number) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function CTAButton({
  href,
  onClick,
  children,
  className = "",
  bgColor,
  textColor = "text-white",
  size = "lg",
  blobIntensity,
  bgOpacity,
}: CTAButtonProps) {
  const ref = useRef<HTMLElement>(null);
  // Read CSS token defaults once on mount
  const [tokenColor, setTokenColor] = useState("#b89fd4");
  const [tokenOpacity, setTokenOpacity] = useState(0.35);
  const [tokenBlobbiness, setTokenBlobbiness] = useState<"low" | "medium" | "high">("medium");

  useEffect(() => {
    if (!ref.current) return;
    const styles = getComputedStyle(ref.current);
    const color = styles.getPropertyValue("--button-color").trim();
    const opacity = parseFloat(styles.getPropertyValue("--button-opacity").trim());
    const blob = styles.getPropertyValue("--button-blobbiness").trim() as "low" | "medium" | "high";
    if (color) setTokenColor(color);
    if (!isNaN(opacity)) setTokenOpacity(opacity);
    if (blob && blob in blobShapes) setTokenBlobbiness(blob);
  }, []);

  const resolvedColor = bgColor ?? tokenColor;
  const resolvedOpacity = bgOpacity ?? tokenOpacity;
  const resolvedBlobbiness = blobIntensity ?? tokenBlobbiness;
  const blobShape = blobShapes[resolvedBlobbiness] ?? blobShapes.medium;

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick, type: "button" as const };

  return (
    <Component
      {...props}
      ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
      className={`group relative inline-flex items-center justify-center font-semibold ${textColor} ${sizeStyles[size]} ${className}`}
      style={{
        borderRadius: blobShape.default,
        background: hexToRgba(resolvedColor, resolvedOpacity),
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
      }}
      whileHover={{
        scale: 1.08,
        rotate: 2,
        borderRadius: blobShape.hover,
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
      }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
