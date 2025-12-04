"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative overflow-hidden w-full">
      <motion.div style={{ y }}>
        <Image src={src} alt={alt} width={width} height={height} />
      </motion.div>
    </div>
  );
}
