"use client";

import Image from "next/image";
import Link from "next/link";

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

  return (
    <section className="not-prose relative pb-8 pt-16">
      <div className={`max-w-7xl mx-auto px-4 ${centered ? "md:px-8" : "md:pl-32 md:pr-8"}`}>
        <div className="mb-8 text-center">
          <div className="text-white/75 text-base md:text-xl uppercase tracking-[0.2em] md:tracking-[0.25em] font-semibold">
            Go To
          </div>
        </div>
        <div className={`grid grid-flow-col auto-cols-[78%] sm:auto-cols-[46%] gap-3 overflow-x-auto pb-2 snap-x snap-mandatory md:grid-flow-row md:auto-cols-auto md:grid-cols-5 md:overflow-visible md:pb-0 md:snap-none md:gap-4 ${centered ? "md:w-fit md:mx-auto" : ""}`}>
          {otherSections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group block no-underline min-w-0 snap-start ${centered ? "md:w-[220px]" : ""}`}
            >
              <div
                className={`relative w-full aspect-[4/3] overflow-hidden rounded-lg transition-transform duration-300 md:group-hover:scale-[1.1] ${
                  transparentCards ? "bg-[#151821]" : "bg-[#1f1f29]"
                }`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.label}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    transparentCards
                      ? "opacity-100 md:group-hover:opacity-100 md:group-hover:scale-105"
                      : "opacity-90 md:opacity-95 md:group-hover:opacity-40 md:group-hover:scale-105"
                  }`}
                  sizes="(min-width: 1280px) 16vw, (min-width: 768px) 19vw, (min-width: 640px) 44vw, 76vw"
                />
                {!transparentCards && (
                  <div className="absolute inset-0 bg-[#1a1a1f]/35 md:group-hover:bg-[#1a1a1f]/50 transition-colors duration-300" />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-3.5">
                  <div className="text-base md:text-base font-semibold text-white uppercase tracking-[0.04em] md:group-hover:tracking-[0.06em] transition-all duration-300 leading-tight">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm md:text-sm text-white/85 leading-snug opacity-100 max-h-16 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-16 transition-all duration-300 overflow-hidden">
                    {item.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
