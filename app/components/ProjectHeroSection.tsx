"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectHeroSectionProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function ProjectHeroSection({
  src,
  alt,
  title,
  description,
  children,
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
      className="relative w-screen h-screen overflow-hidden"
    >
      <div className="absolute inset-0 flex items-end z-10">
        <div className="content-container pb-20 md:pb-32">
          <h1 className="!leading-none">
            {title.split(/(\^[^^]+\^)/g).map((segment, i) => {
              if (segment.startsWith("^") && segment.endsWith("^")) {
                // Large text (marked with ^) - split by \n for newlines
                const content = segment.slice(1, -1);
                return content.split("\\n").map((line, k) => (
                  <span key={`${i}-${k}`} className="block !text-7xl md:!text-[10rem]">
                    {line}
                  </span>
                ));
              }
              // Small text - split by spaces and render each word
              return segment.split(" ").filter(Boolean).map((word, j) => (
                <span
                  key={`${i}-${j}`}
                  className="block !text-3xl md:!text-5xl tracking-[0.3em] md:tracking-[0.5em]"
                >
                  {word}
                </span>
              ));
            })}
          </h1>
          {description && <p className="text-sm md:text-base mt-4 max-w-2xl">{description}</p>}
          {children}
        </div>
      </div>
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={src}
          fill
          alt={alt}
          className="w-full h-full object-cover opacity-20 scale-100"
          style={{ objectPosition: "center 70%" }}
        />
      </motion.div>
    </div>
  );
}
