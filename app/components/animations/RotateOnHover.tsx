"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RotateOnHoverProps {
  children: ReactNode;
  rotation?: number; // Degrees to rotate (default: 12)
  stiffness?: number; // Spring stiffness (default: 300)
  damping?: number; // Spring damping (default: 10)
  className?: string;
}

export default function RotateOnHover({
  children,
  rotation = 12,
  stiffness = 300,
  damping = 10,
  className = "",
}: RotateOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        rotate: rotation,
        transition: {
          type: "spring",
          stiffness,
          damping,
        },
      }}
      whileTap={{
        scale: 0.9,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      {children}
    </motion.div>
  );
}
