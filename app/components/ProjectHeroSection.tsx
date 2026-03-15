"use client";

import { useRef } from "react";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import FixedBackgroundImage from "./FixedBackgroundImage";

interface ProjectHeroSectionProps {
  src: StaticImageData;
  alt: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  noBackground?: boolean;
}

export default function ProjectHeroSection({
  src,
  alt,
  title,
  description,
  children,
  noBackground = false,
}: ProjectHeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroRef}
      className="relative w-screen min-h-screen"
      style={noBackground ? undefined : { clipPath: "inset(0)" }}
    >
      {!noBackground && (
        <FixedBackgroundImage
          src={src}
          alt={alt}
          opacity={0.2}
          objectPosition="center 70%"
          imageClassName="w-full h-full object-cover scale-100"
          quality={60}
          priority
        />
      )}
      <motion.div className="relative z-10 flex min-h-screen flex-col">
        <div className="h-20 md:h-24 shrink-0" />
        <div className="content-container mt-auto pb-20 md:pb-32">
          <div className="-mb-1 md:-mb-2 text-white/90 !text-base md:!text-xl tracking-[0.32em] uppercase font-semibold">
            Working With
          </div>
          {title && (
            <h1 className="!leading-none !text-7xl md:!text-[10rem]">{title}</h1>
          )}
          {description && (
            <p className="text-sm md:text-base mt-4 max-w-2xl">{description}</p>
          )}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
