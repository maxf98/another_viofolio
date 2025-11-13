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
}

export default function PagePreview({
  title,
  href,
  imageSrc,
  imageAlt,
  size = "normal",
}: PagePreviewProps) {
  const heightClass = size === "large" ? "h-196" : "h-128";
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
    <div className="relative w-full">
      <motion.div
        ref={cardRef}
        className="overflow-hidden shadow-lg transition-shadow"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image container with fixed height */}
        <motion.div
          className={`relative ${heightClass} w-full overflow-hidden bg-gray-100`}
          style={{ y: parallaxY }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500"
          />
        </motion.div>
      </motion.div>

      <Link
        href={href}
        className="absolute bottom-4 right-4 block"
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
    </div>
  );
}
