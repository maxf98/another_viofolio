"use client";

import React from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  href?: string;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  size?: "sm" | "md" | "lg";
  blobIntensity?: "low" | "medium" | "high";
}

const sizeStyles = {
  sm: "px-6 py-3 text-sm",
  md: "px-10 py-5 text-base",
  lg: "px-12 py-6 text-lg",
};

const blobShapes = {
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

export default function CTAButton({
  href,
  onClick,
  children,
  className = "",
  bgColor = "#7a9b76",
  borderColor = "#000",
  textColor = "text-white",
  size = "lg",
  blobIntensity = "medium",
}: CTAButtonProps) {
  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick, type: "button" as const };
  const blobShape = blobShapes[blobIntensity];

  return (
    <Component
      {...props}
      className={`group relative inline-flex items-center justify-center font-semibold ${textColor} ${sizeStyles[size]} ${className}`}
      style={{
        borderRadius: blobShape.default,
        background: bgColor,
        border: `4px solid ${borderColor}`,
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
