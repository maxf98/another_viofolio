"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface ScrollSectionProps {
  title: string;
  backgroundImage: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollSection({
  title,
  backgroundImage,
  children,
  className = "",
}: ScrollSectionProps) {
  return (
    <section
      className={`relative min-h-screen ${className}`}
      style={{ clipPath: "inset(0)" }}
    >
      {/* Fixed background image - stays fixed within the clipped section */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 tracking-wide">
            {title}
          </h2>
          <div className="text-white">{children}</div>
        </div>
      </div>
    </section>
  );
}
