"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import workingImg from "@/public/working.png";

interface ProjectHeroSectionProps {
  src: StaticImageData;
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
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsLandscapeMobile(width < 1024 && width > height);
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-screen h-screen"
      style={{ clipPath: "inset(0)" }}
    >
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src={src}
          fill
          alt={alt}
          placeholder="blur"
          className="w-full h-full object-cover opacity-20 scale-100"
          style={{ objectPosition: "center 70%" }}
        />
      </div>
      <motion.div
        className={`absolute inset-0 flex z-10 pt-8 md:pt-8 ${
          isLandscapeMobile ? "items-start" : "items-end"
        }`}
      >
        <div className="content-container pb-20 md:pb-32">
          <div className="mt-6 w-48 md:w-64">
            <Image
              src={workingImg}
              alt="Working with"
              className="w-full h-auto drop-shadow-xl"
              priority
            />
          </div>
          {title && (
            <h1 className="!leading-none">
              {title.split(/(\^[^^]+\^)/g).map((segment, i) => {
                if (segment.startsWith("^") && segment.endsWith("^")) {
                  // Large text (marked with ^) - split by \n for newlines
                  const content = segment.slice(1, -1);
                  return content.split("\\n").map((line, k) => (
                    <span
                      key={`${i}-${k}`}
                      className="block !text-7xl md:!text-[10rem]"
                    >
                      {line}
                    </span>
                  ));
                }
                // Small text - split by spaces and render each word
                return segment
                  .split(" ")
                  .filter(Boolean)
                  .map((word, j) => (
                    <span
                      key={`${i}-${j}`}
                      className="block !text-3xl md:!text-5xl tracking-[0.3em] md:tracking-[0.5em]"
                    >
                      {word}
                    </span>
                  ));
              })}
            </h1>
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
