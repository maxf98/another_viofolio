"use client";

import { useEffect, useState } from "react";
import {
  PreviewCard,
  type PreviewCardData,
} from "@/app/components/PreviewCard";
import { useLang } from "@/app/context/LanguageContext";
import { globalNavText } from "@/app/translations/globalNav";

const SECTION_HINT_IMAGES: Record<string, { imageSrc: string; key: keyof typeof import("@/app/translations/globalNav").globalNavText.en.sections }> = {
  "/illustrated-photography": { imageSrc: "/gallery/sun.png", key: "illustratedPhotography" },
  "/art-therapy": { imageSrc: "/gallery/blowout.png", key: "analogue" },
  "/monkeybrain": { imageSrc: "/projects/MONKEYBRAIN/pages/monkeybrain.png", key: "monkeybrain" },
  "/elgato": { imageSrc: "/projects/elgato/front1.png", key: "elgato" },
  "/quards": { imageSrc: "/projects/quards/featureArtNoBG.webp", key: "quards" },
  "/mascha": { imageSrc: "/covers/mascha/m3.webp", key: "mascha" },
};

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
  const { lang } = useLang();
  const t = globalNavText[lang];
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

  const cards: PreviewCardData[] = Object.entries(SECTION_HINT_IMAGES)
    .filter(([href]) => href !== currentHref)
    .map(([href, { imageSrc, key }]) => {
      const section = t.sections[key];
      return {
        href,
        image: imageSrc,
        alt: section.label,
        title: section.label,
        description: section.description,
      };
    });

  return (
    <section className="not-prose relative pb-8 pt-16">
      <div
        className={`max-w-7xl mx-auto px-4 ${centered ? "lg:px-8" : "lg:pl-32 lg:pr-8"}`}
      >
        <div className="mb-8 text-center">
          <div className="text-[var(--color-label)] text-[length:var(--text-body)] md:text-[length:var(--text-body-lg)] uppercase tracking-[var(--tracking-wide)] font-[var(--weight-heading)]">
            {t.goTo}
          </div>
        </div>
        <div
          className={`grid grid-flow-col auto-cols-[74%] gap-3 overflow-x-auto pb-2 snap-x snap-mandatory landscape:auto-cols-[46%] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-5 lg:gap-3 lg:overflow-visible lg:pb-0 lg:snap-none ${
            centered ? "lg:mx-auto lg:w-fit" : ""
          }`}
        >
          {cards.map((card) => {
            const isActive = !supportsHover && activeMobileCard === card.href;
            return (
              <PreviewCard
                key={card.href}
                card={card}
                viewProjectHint={t.viewProject}
                isActive={isActive}
                onActivate={() => setActiveMobileCard(card.href)}
                supportsHover={supportsHover}
                className={`min-w-0 snap-start aspect-[4/3] landscape:aspect-[3/2] ${centered ? "lg:w-[204px]" : ""}`}
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
