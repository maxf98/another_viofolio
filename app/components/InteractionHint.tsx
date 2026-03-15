"use client";

import { motion } from "framer-motion";

interface InteractionHintProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function InteractionHint({
  text,
  className = "",
  delay = 1,
}: InteractionHintProps) {
  return (
    <motion.div
      className={`flex flex-col items-center text-white/60 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <span className="italic text-sm">{text}</span>
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="text-white/60"
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
