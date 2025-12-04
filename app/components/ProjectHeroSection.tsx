"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectHeroSectionProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export default function ProjectHeroSection({
  src,
  alt,
  title,
  description,
}: ProjectHeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={heroRef}
      className="relative mb-32 w-screen h-screen overflow-hidden"
    >
      <div className="absolute bottom-20 left-32 right-32 z-10">
        <h1 className="!text-8xl">{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <motion.div
        style={{
          y,
          mask: `linear-gradient(to top,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.013) 8.1%,
            rgba(255,255,255,0.049) 15.5%,
            rgba(255,255,255,0.104) 22.5%,
            rgba(255,255,255,0.175) 29%,
            rgba(255,255,255,0.259) 35.3%,
            rgba(255,255,255,0.352) 41.2%,
            rgba(255,255,255,0.45) 47.1%,
            rgba(255,255,255,0.55) 52.9%,
            rgba(255,255,255,0.648) 58.8%,
            rgba(255,255,255,0.741) 64.7%,
            rgba(255,255,255,0.825) 71%,
            rgba(255,255,255,0.896) 77.5%,
            rgba(255,255,255,0.951) 84.5%,
            rgba(255,255,255,0.987) 91.9%,
            rgba(255,255,255,1) 100%
          )`,
          WebkitMask: `linear-gradient(to top,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.013) 8.1%,
            rgba(255,255,255,0.049) 15.5%,
            rgba(255,255,255,0.104) 22.5%,
            rgba(255,255,255,0.175) 29%,
            rgba(255,255,255,0.259) 35.3%,
            rgba(255,255,255,0.352) 41.2%,
            rgba(255,255,255,0.45) 47.1%,
            rgba(255,255,255,0.55) 52.9%,
            rgba(255,255,255,0.648) 58.8%,
            rgba(255,255,255,0.741) 64.7%,
            rgba(255,255,255,0.825) 71%,
            rgba(255,255,255,0.896) 77.5%,
            rgba(255,255,255,0.951) 84.5%,
            rgba(255,255,255,0.987) 91.9%,
            rgba(255,255,255,1) 100%
          )`,
        }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={src}
          fill
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
