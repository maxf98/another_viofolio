"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

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
  const alignmentClass = "items-center";
  const spacingClass = "gap-1";
  const textSizeClass =
    size === "large"
      ? "text-base md:text-xl"
      : "text-[length:var(--text-indicator)] tracking-[var(--tracking-indicator)]";
  const svgSizeClass = size === "large" ? "h-6 w-6 md:h-8 md:w-8" : "h-5 w-6";
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
      className={`flex ${containerDirectionClass} ${alignmentClass} ${spacingClass} text-[var(--color-text-hint)] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <span className={`italic leading-none px-3 py-1 ${textSizeClass}`}>
        {text}
      </span>
      <FaArrowDown
        className={`text-[var(--color-text-hint)] ${svgSizeClass} ${rotationClass}`}
        aria-hidden="true"
      />
    </motion.div>
  );
}
