"use client";

import { motion } from "framer-motion";

type InteractionHintSize = "small" | "large";
type InteractionHintDirection = "top" | "right" | "bottom" | "left";

interface InteractionHintProps {
  text: string;
  className?: string;
  delay?: number;
  size?: InteractionHintSize;
  direction?: InteractionHintDirection;
}

export default function InteractionHint({
  text,
  className = "",
  delay = 1,
  size = "small",
  direction = "bottom",
}: InteractionHintProps) {
  const isHorizontal = direction === "left" || direction === "right";
  const containerDirectionClass = isHorizontal
    ? direction === "right"
      ? "flex-row"
      : "flex-row-reverse"
    : direction === "top"
      ? "flex-col-reverse"
      : "flex-col";
  const alignmentClass = isHorizontal ? "items-baseline" : "items-center";
  const spacingClass = isHorizontal ? "gap-2.5" : "gap-1";
  const textSizeClass =
    size === "large" ? "text-lg md:text-2xl" : "text-sm";
  const svgSizeClass =
    size === "large" ? "h-8 w-8 md:h-10 md:w-10" : "h-5 w-6";
  const rotationClass =
    direction === "top"
      ? "rotate-180"
      : direction === "right"
        ? "-rotate-90"
        : direction === "left"
          ? "rotate-90"
          : "";

  return (
    <motion.div
      className={`flex ${containerDirectionClass} ${alignmentClass} ${spacingClass} text-white/60 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <span className={`italic ${isHorizontal ? "leading-tight" : "leading-none"} ${textSizeClass}`}>
        {text}
      </span>
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className={`shrink-0 self-center text-white/60 ${svgSizeClass} ${rotationClass}`}
        aria-hidden="true"
      >
        <path
          d="M12 2 L12 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 10 L12 16 L18 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
