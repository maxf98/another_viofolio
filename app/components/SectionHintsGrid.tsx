"use client";

import { useEffect, useState } from "react";
import {
  PreviewCard,
  type PreviewCardData,
} from "@/app/components/PreviewCard";

interface SectionHintItem {
  href: string;
  label: string;
  imageSrc: string;
  description: string;
}

const ALL_SECTION_HINTS: SectionHintItem[] = [
  {
    href: "/elgato",
    label: "Elgato",
    imageSrc: "/projects/elgato/front1.png",
    description: "Product customisation and brand illustration",
  },
  {
    href: "/quards",
    label: "Quards",
    imageSrc: "/projects/quards/featureArtNoBG.webp",
    description: "App design and visual identity",
  },
  {
    href: "/mascha",
    label: "Mascha",
    imageSrc: "/covers/mascha/m3.webp",
    description: "Album artwork and visual storytelling",
  },
  {
    href: "/gallery/illustrated-photography",
    label: "Digital Explorations",
    imageSrc: "/gallery/sun.png",
    description: "Digital image-making and narrative scenes",
  },
  {
    href: "/gallery/art-therapy",
    label: "Analogue",
    imageSrc: "/gallery/blowout.png",
    description: "Process-driven experiments and material play",
  },
  {
    href: "/gallery/monkeybrain",
    label: "Monkeybrain Mag",
    imageSrc: "/projects/MONKEYBRAIN/pages/monkeybrain.png",
    description: "Bachelor thesis magazine in mixed media",
  },
];

interface SectionHintsGridProps {
  currentHref: string;
  transparentCards?: boolean;
  centered?: boolean;
}

export default function SectionHintsGrid({
  currentHref,
  transparentCards = false,
  centered = true,
}: SectionHintsGridProps) {
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setSupportsHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const currentIndex = ALL_SECTION_HINTS.findIndex((item) => item.href === currentHref);
  const orderedSections =
    currentIndex === -1
      ? ALL_SECTION_HINTS
      : [
          ...ALL_SECTION_HINTS.slice(currentIndex + 1),
          ...ALL_SECTION_HINTS.slice(0, currentIndex),
          ALL_SECTION_HINTS[currentIndex],
        ];
  const otherSections = orderedSections.filter((item) => item.href !== currentHref);
  const cards: PreviewCardData[] = otherSections.map((item) => ({
    href: item.href,
    image: item.imageSrc,
    alt: item.label,
    title: item.label,
    description: item.description,
  }));

  return (
    <section className="not-prose relative pb-8 pt-16">
      <div className={`max-w-7xl mx-auto px-4 ${centered ? "md:px-8" : "md:pl-32 md:pr-8"}`}>
        <div className="mb-8 text-center">
          <div className="text-white/75 text-base md:text-xl uppercase tracking-[0.2em] md:tracking-[0.25em] font-semibold">
            Go To
          </div>
        </div>
        <div
          className={`grid grid-flow-col auto-cols-[74%] gap-3 overflow-x-auto pb-2 snap-x snap-mandatory sm:auto-cols-[42%] md:grid-flow-row md:auto-cols-auto md:grid-cols-5 md:gap-3 md:overflow-visible md:pb-0 md:snap-none ${
            centered ? "md:mx-auto md:w-fit" : ""
          }`}
        >
          {cards.map((card) => {
            const isActive = !supportsHover && activeMobileCard === card.href;
            return (
              <PreviewCard
                key={card.href}
                card={card}
                viewProjectHint="Go to"
                isActive={isActive}
                onActivate={() => setActiveMobileCard(card.href)}
                supportsHover={supportsHover}
                className={`min-w-0 snap-start aspect-[4/3] ${centered ? "md:w-[204px]" : ""}`}
                variant="sectionHint"
                transparent={transparentCards}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
