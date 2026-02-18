"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface BreathingImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function BreathingImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: BreathingImageProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.06],
        rotate: [0, 2],
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    </motion.div>
  );
}
