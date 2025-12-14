"use client";

import { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ScrollLinkSectionProps {
  href: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  label: string;
  height?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
}

export default function ScrollLinkSection({
  href,
  imageSrc,
  imageAlt,
  label,
  height = "h-[150vh]",
  objectPosition = "center",
  mobileObjectPosition,
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
              style={{ objectPosition }}
            />
          </>
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href={href}
          className="px-8 py-6 md:px-16 md:py-12 text-center text-5xl md:text-7xl font-semibold text-white uppercase tracking-[0.05em] hover:tracking-[-0.02em] transition-[letter-spacing] duration-300 ease-out"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
          }}
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
