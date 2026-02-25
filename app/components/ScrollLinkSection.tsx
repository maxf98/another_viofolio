"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ScrollLinkSectionProps {
  href: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  label: string;
  description?: string;
  height?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  imageOpacity?: number;
  darkOverlay?: boolean;
  textColor?: string;
  overlayImage?: StaticImageData | string;
  overlayImageAlt?: string;
  secondaryImage?: StaticImageData | string;
  secondaryImageAlt?: string;
  overlayColor?: string;
  overlayOpacity?: number; // 0-100
  overlayBlendMode?: React.CSSProperties["mixBlendMode"];
}

export default function ScrollLinkSection({
  href,
  imageSrc,
  imageAlt,
  label,
  description,
  height = "h-[150vh]",
  objectPosition = "center",
  mobileObjectPosition,
  imageOpacity = 60,
  darkOverlay = false,
  textColor = "text-white",
  overlayImage,
  overlayImageAlt,
  secondaryImage,
  secondaryImageAlt,
  overlayColor = "",
  overlayOpacity = 0,
  overlayBlendMode = "normal",
}: ScrollLinkSectionProps) {
  return (
    <div
      className={`relative ${height} w-full overflow-hidden`}
      style={{ clipPath: "inset(0)" }}
    >
      <div
        className="fixed -z-10 pointer-events-none"
        style={{
          left: 0,
          right: 0,
          top: 0,
          width: "100vw",
          height: "100lvh",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {/* Mobile image */}
        {mobileObjectPosition && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={2000}
            height={2000}
            loading="eager"
            fetchPriority="high"
            className={`object-cover object-${mobileObjectPosition} md:hidden absolute`}
            style={{
              opacity: imageOpacity / 100,
              top: 0,
              left: 0,
              width: "100vw",
              height: "110lvh",
            }}
          />
        )}
        {/* Desktop image (or only image if no mobileObjectPosition) */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={2000}
          height={2000}
          loading="eager"
          fetchPriority="high"
          className={`object-cover ${mobileObjectPosition ? "hidden md:block" : ""} absolute`}
          style={{
            objectPosition,
            opacity: imageOpacity / 100,
            top: 0,
            left: 0,
            width: "100vw",
            height: "110lvh",
          }}
        />
        {/* Custom overlay tint above images */}
        {overlayOpacity > 0 && overlayColor && (
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity / 100,
              mixBlendMode: overlayBlendMode,
            }}
          />
        )}
        {/* Dark overlay */}
        {darkOverlay && (
          <div className="absolute inset-0 z-[3] bg-[#1a1a1f]/60" />
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center h-full px-0 md:px-4">
        <Link href={href} className="group">
          {overlayImage ? (
            <motion.div
              className="relative flex flex-col items-center gap-4 w-72 md:w-[26rem]"
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <Image
                src={overlayImage}
                alt={overlayImageAlt ?? label}
                width={2048}
                height={2048}
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
              />
              {secondaryImage && (
                <Image
                  src={secondaryImage}
                  alt={
                    secondaryImageAlt ?? `${overlayImageAlt ?? label} secondary`
                  }
                  width={2000}
                  height={500}
                  loading="eager"
                  fetchPriority="high"
                  className="w-10/12 md:w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
                />
              )}
            </motion.div>
          ) : (
            <div className="relative px-8 py-6 md:px-16 md:py-12 text-center">
              <span
                className={`relative text-5xl md:text-7xl font-black ${textColor} uppercase tracking-[0.05em] group-hover:tracking-[-0.02em] transition-[letter-spacing] duration-300 ease-out block`}
                style={{
                  textShadow:
                    "4px 4px 0 rgba(0,0,0,0.5), 8px 8px 16px rgba(0,0,0,0.3)",
                }}
              >
                {label}
              </span>
              {description && (
                <span
                  className={`relative ${textColor} opacity-80 text-lg md:text-xl font-bold normal-case tracking-normal block mt-3`}
                >
                  {description}
                </span>
              )}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
