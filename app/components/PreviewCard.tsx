"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface PreviewCardData {
  href: string;
  image: string;
  alt: string;
  title: string;
  defaultTitle?: string;
  description: string;
}

type PreviewCardVariant = "home" | "sectionHint";

interface PreviewCardProps {
  card: PreviewCardData;
  viewProjectHint: string;
  isActive: boolean;
  onActivate: () => void;
  supportsHover: boolean;
  className?: string;
  variant: PreviewCardVariant;
  transparent?: boolean;
}

export function PreviewCard({
  card,
  viewProjectHint,
  isActive,
  onActivate,
  supportsHover,
  className,
  variant,
  transparent = false,
}: PreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showActive = isActive || (supportsHover && isHovered);
  const isSectionHint = variant === "sectionHint";

  return (
    <Link
      href={card.href}
      className={`group block no-underline ${className ?? ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(event) => {
        if (supportsHover) return;
        if (!isActive) {
          event.preventDefault();
          onActivate();
        }
      }}
    >
      <div
        className={`relative h-full w-full overflow-hidden ${
          isSectionHint ? "rounded-lg" : ""
        } ${isSectionHint && transparent ? "bg-[#151821]" : "bg-[#1f1f29]"}`}
      >
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className={`object-cover transition-all duration-500 ${
            isActive
              ? "opacity-40 scale-105"
              : "opacity-78 group-hover:opacity-40 group-hover:scale-105"
          }`}
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 44vw, 76vw"
        />
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isActive
              ? "bg-[#1a1a1f]/12"
              : "bg-[#1a1a1f]/18 group-hover:bg-[#1a1a1f]/12"
          }`}
        />
        <div
          className={`absolute right-3 top-3 z-20 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 md:text-xs ${
            isActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          {viewProjectHint}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-28 pointer-events-none bg-gradient-to-t from-[#111318]/80 via-[#111318]/45 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-3 md:p-4">
          <div className="relative min-h-[2.2rem] md:min-h-[2.6rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative z-10 inline-block w-full line-clamp-2 origin-left text-white uppercase tracking-[0.04em] leading-tight transition-all duration-300 group-hover:scale-110 group-hover:tracking-[0.06em] ${
                isSectionHint
                  ? "text-sm font-bold md:text-[15px]"
                  : "text-sm font-semibold md:text-base"
              }`}
            >
              {showActive && card.defaultTitle
                ? card.title
                : card.defaultTitle || card.title}
            </motion.div>
          </div>
          <AnimatePresence>
            {showActive && (
              <motion.div
                initial={{ opacity: 0, maxHeight: 0, marginTop: 0 }}
                animate={{ opacity: 1, maxHeight: 64, marginTop: 4 }}
                exit={{ opacity: 0, maxHeight: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className={`relative z-20 line-clamp-2 text-white/85 leading-tight overflow-hidden ${
                  isSectionHint ? "text-xs md:text-sm" : "text-sm md:text-base"
                }`}
              >
                {card.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
}
