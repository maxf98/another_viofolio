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

interface PreviewCardProps {
  card: PreviewCardData;
  viewProjectHint: string;
  isActive: boolean;
  onActivate: () => void;
  supportsHover: boolean;
  cardClassName: string;
  titleClassName: string;
  titleSlotClassName: string;
  textWrapClassName: string;
  textSafetyZoneClassName: string;
}

export function PreviewCard({
  card,
  viewProjectHint,
  isActive,
  onActivate,
  supportsHover,
  cardClassName,
  titleClassName,
  titleSlotClassName,
  textWrapClassName,
  textSafetyZoneClassName,
}: PreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showActive = isActive || (supportsHover && isHovered);

  return (
    <Link
      href={card.href}
      className="group block no-underline"
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
      <div className={cardClassName}>
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className={`object-cover transition-all duration-500 ${
            isActive
              ? "opacity-40 scale-105"
              : "opacity-78 group-hover:opacity-40 group-hover:scale-105"
          }`}
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isActive
              ? "bg-[#1a1a1f]/12"
              : "bg-[#1a1a1f]/18 group-hover:bg-[#1a1a1f]/12"
          }`}
        />
        <div
          className={`absolute right-3 top-3 z-20 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 ${
            isActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          {viewProjectHint}
        </div>
        <div className={textSafetyZoneClassName} />
        <div className={textWrapClassName}>
          <div className={titleSlotClassName}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={titleClassName}
            >
              {showActive && card.defaultTitle
                ? card.title
                : card.defaultTitle || card.title}
            </motion.h3>
          </div>
          <AnimatePresence>
            {showActive && (
              <motion.p
                initial={{ opacity: 0, maxHeight: 0, marginTop: 0 }}
                animate={{ opacity: 1, maxHeight: 64, marginTop: 4 }}
                exit={{ opacity: 0, maxHeight: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-20 line-clamp-2 text-sm md:text-base text-white/85 leading-tight overflow-hidden"
              >
                {card.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
}

interface PreviewCardsGridProps {
  cards: PreviewCardData[];
  viewProjectHint: string;
  activeMobileCard: string | null;
  setActiveMobileCard: (href: string) => void;
  supportsHover: boolean;
  gridClassName: string;
  cardClassName: string;
  titleClassName: string;
  titleSlotClassName: string;
  textWrapClassName: string;
  textSafetyZoneClassName: string;
}

export function PreviewCardsGrid({
  cards,
  viewProjectHint,
  activeMobileCard,
  setActiveMobileCard,
  supportsHover,
  gridClassName,
  cardClassName,
  titleClassName,
  titleSlotClassName,
  textWrapClassName,
  textSafetyZoneClassName,
}: PreviewCardsGridProps) {
  return (
    <div className={gridClassName}>
      {cards.map((card) => {
        const isActive = !supportsHover && activeMobileCard === card.href;
        return (
          <PreviewCard
            key={card.href}
            card={card}
            viewProjectHint={viewProjectHint}
            isActive={isActive}
            onActivate={() => setActiveMobileCard(card.href)}
            supportsHover={supportsHover}
            cardClassName={cardClassName}
            titleClassName={titleClassName}
            titleSlotClassName={titleSlotClassName}
            textWrapClassName={textWrapClassName}
            textSafetyZoneClassName={textSafetyZoneClassName}
          />
        );
      })}
    </div>
  );
}
