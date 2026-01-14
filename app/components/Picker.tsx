"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PickerProps {
  src: string;
  alt: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
  animatesScale: boolean;
}

/**
 * Reusable picker component with standardized selection animations
 * Animates opacity and scale when selected/deselected
 */
export default function Picker({
  src,
  alt,
  isSelected,
  onClick,
  className = "w-[clamp(48px,18vw,96px)] h-[clamp(48px,18vw,96px)] shrink-0",
  animatesScale = false,
}: PickerProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden ${className}`}
      animate={{
        scale: isSelected ? 1 : animatesScale ? 0.6 : 0.9,
        opacity: isSelected ? 1 : 0.6,
      }}
      whileHover={{
        scale: isSelected ? 1.05 : animatesScale ? 0.7 : 0.95,
        opacity: 1,
      }}
      whileTap={{
        scale: animatesScale ? 0.65 : 0.85,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <Image src={src} alt={alt} fill className="object-contain" />
    </motion.button>
  );
}
