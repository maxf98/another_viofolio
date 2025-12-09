"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

interface PagePreviewProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  size?: "normal" | "large"; // normal = h-96 (384px), large = h-[32rem] (512px)
  imageOpacity?: number; // 0-100, default 100
  imagePosition?: "center" | "top" | "bottom" | string; // default center, or custom like "center 20%"
  stickyTitle?: boolean; // if true, title sticks to bottom of viewport while scrolling
}

export default function PagePreview({
  title,
  href,
  imageSrc,
  imageAlt,
  size = "normal",
  imageOpacity = 100,
  imagePosition = "center",
  stickyTitle = false,
}: PagePreviewProps) {
  const heightClass = size === "large" ? "h-[700px]" : "h-128";
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll progress drives a soft parallax shift for the preview image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxDistance = size === "large" ? 300 : 150;
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [-parallaxDistance, parallaxDistance]
  );
  const ctaContainerVariants = {
    rest: { x: 0 },
    hover: { x: 4 },
    tap: { x: 2 },
  };
  const ctaTextVariants = {
    rest: { x: 0 },
    hover: { x: 12 },
    tap: { x: 6 },
  };

  return (
    <div className={`relative w-full ${heightClass}`} ref={cardRef}>
      {/* Mobile: entire preview is tappable */}
      <Link
        href={href}
        className="absolute inset-0 md:pointer-events-none"
        aria-label={`Open ${title}`}
      >
        <motion.div
          className="h-full overflow-hidden shadow-lg transition-shadow bg-body"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Image container */}
          <motion.div
            className="relative h-full w-full overflow-hidden bg-body"
            style={{ y: parallaxY }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              priority={true}
              fill
              className="object-cover"
              style={{
                opacity: imageOpacity / 100,
                objectPosition:
                  imagePosition === "top"
                    ? "top"
                    : imagePosition === "bottom"
                    ? "bottom"
                    : imagePosition === "center"
                    ? "center"
                    : imagePosition,
              }}
            />
          </motion.div>
        </motion.div>
      </Link>

      {/* Title - either sticky (sticks to viewport) or absolute (fixed in corner) */}
      <div
        className={`${
          stickyTitle
            ? "sticky top-[calc(100vh-5rem)]"
            : "absolute bottom-4 right-0"
        } z-10 flex justify-end px-4 pointer-events-none`}
      >
        {/* Desktop: clickable */}
        <Link
          href={href}
          className="hidden md:block pointer-events-auto"
          aria-label={`Open ${title}`}
        >
          <motion.div
            className="flex items-center gap-6 rounded-full px-10 py-6 text-4xl font-semibold uppercase tracking-wide text-white"
            variants={ctaContainerVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            <motion.span
              variants={ctaTextVariants}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {title}
            </motion.span>
            <FaArrowRight aria-hidden className="text-5xl" />
          </motion.div>
        </Link>

        {/* Mobile: non-clickable visual */}
        <div className="block md:hidden">
          <div className="flex items-center gap-6 rounded-full px-10 py-6 text-4xl font-semibold uppercase tracking-wide text-white">
            <span>{title}</span>
            <FaArrowRight aria-hidden className="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
