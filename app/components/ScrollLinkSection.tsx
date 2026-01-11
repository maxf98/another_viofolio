"use client";

import { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ScrollLinkSectionProps {
  href: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  label: string;
  description?: string;
  height?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  imageOpacity?: number;
  darkOverlay?: boolean;
  textColor?: string;
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
}: ScrollLinkSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Preload image when section is 1.5 viewports away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative ${height} w-full`}
      style={{ clipPath: "inset(0)" }}
    >
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {shouldLoad && (
          <>
            {/* Mobile image */}
            {mobileObjectPosition && (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                placeholder="blur"
                className={`object-cover object-${mobileObjectPosition} md:hidden`}
                style={{ opacity: imageOpacity / 100 }}
              />
            )}
            {/* Desktop image (or only image if no mobileObjectPosition) */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              placeholder="blur"
              className={`object-cover ${
                mobileObjectPosition ? "hidden md:block" : ""
              }`}
              style={{ objectPosition, opacity: imageOpacity / 100 }}
            />
            {/* Dark overlay */}
            {darkOverlay && (
              <div className="absolute inset-0 bg-[#1a1a1f]/60" />
            )}
          </>
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center h-full px-0 md:px-4">
        <Link
          href={href}
          className="group"
        >
          <div className="relative px-8 py-6 md:px-16 md:py-12 text-center">
            <span
              className={`relative text-5xl md:text-7xl font-black ${textColor} uppercase tracking-[0.05em] group-hover:tracking-[-0.02em] transition-[letter-spacing] duration-300 ease-out block`}
              style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.5), 8px 8px 16px rgba(0,0,0,0.3)' }}
            >
              {label}
            </span>
            {description && (
              <span className={`relative ${textColor} opacity-80 text-lg md:text-xl font-bold normal-case tracking-normal block mt-3`}>
                {description}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
