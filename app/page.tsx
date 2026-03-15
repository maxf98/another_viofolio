"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import LocalNav from "@/app/components/navigation/LocalNav";
import { NavSection } from "@/app/components/navigation/LocalNav";
import { useLoadState } from "./context/LoadContext";
import AboutMeSection from "./components/AboutMeSection";
import CTAButton from "./components/CTAButton";
import FixedBackgroundImage from "./components/FixedBackgroundImage";
import { HomeTextProvider, useHomeText } from "./translations/home";
import { PreviewCardsGrid } from "./components/PreviewCard";

function HomeInner() {
  const { state } = useLoadState();
  const t = useHomeText();
  const [heroBackgroundLoaded, setHeroBackgroundLoaded] = useState(false);
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);
  const [supportsHover, setSupportsHover] = useState(true);
  const deferredSectionsReady = state.allLettersReady;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setSupportsHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const navs: NavSection[] = [
    {
      id: "about-me",
      label: "About me",
    },
    {
      id: "gallery",
      label: t.navGallery,
    },
    {
      id: "elgato-project",
      label: t.navElgato,
    },
    {
      id: "quards-project",
      label: t.navQuards,
    },
    {
      id: "mascha-project",
      label: t.navMascha,
    },
  ];

  const previewGridClass =
    "w-full h-full grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-px p-0";
  const previewCardClass =
    "relative w-full h-full overflow-hidden bg-[#1f1f29]";
  const previewTitleClass =
    "relative z-10 inline-block w-full line-clamp-2 origin-left text-sm md:text-base font-semibold text-white uppercase tracking-[0.04em] group-hover:tracking-[0.06em] group-hover:scale-110 transition-all duration-300 leading-tight";
  const previewTitleSlotClass = "relative min-h-[2.4rem] md:min-h-[2.8rem]";
  const previewTextWrapClass =
    "absolute bottom-0 left-0 right-0 px-3 md:px-4 pb-4 md:pb-5 pt-4 md:pt-5 flex flex-col justify-end";
  const previewTextSafetyZoneClass =
    "absolute inset-x-0 bottom-0 h-24 md:h-28 pointer-events-none bg-gradient-to-t from-[#111318]/80 via-[#111318]/45 to-transparent";
  const showcaseSectionClass = "relative min-h-[100vh] flex items-center justify-center py-12 md:py-14";
  const showcaseContentClass =
    "content-container flex flex-col items-center gap-8 md:gap-12 max-lg:landscape:w-full max-lg:landscape:max-w-[96vw]";

  const personalArchiveCards = [
    {
      href: "/gallery/illustrated-photography",
      image: "/gallery/sun.png",
      alt: "Digital Explorations",
      title: "Digital Explorations",
      description: "Digital image-making and narrative scenes",
    },
    {
      href: "/gallery/art-therapy",
      image: "/gallery/blowout.png",
      alt: "Analogue Explorations",
      title: "Analogue Explorations",
      description: "Process-driven experiments and material play",
    },
    {
      href: "/gallery/monkeybrain",
      image: "/projects/MONKEYBRAIN/pages/monkeybrain.png",
      alt: "Monkeybrain Magazine",
      title: "Monkeybrain Magazine",
      description: "Bachelor thesis magazine in mixed media",
    },
  ];

  const workingCards = [
    {
      href: "/elgato",
      image: "/projects/elgato/front1.png",
      alt: "Elgato background preview",
      defaultTitle: "Working with a company",
      title: "Working with Elgato",
      description: "Product customisation and brand illustration",
    },
    {
      href: "/quards",
      image: "/projects/quards/featureArtNoBG.webp",
      alt: "Quards background preview",
      defaultTitle: "Working with a startup",
      title: "Working with Quards",
      description: "App design and visual identity",
    },
    {
      href: "/mascha",
      image: "/covers/mascha/m3.webp",
      alt: "Mascha background preview",
      defaultTitle: "Working with an artist",
      title: "Working with Mascha",
      description: "Album artwork and visual storytelling",
    },
  ];
  const combinedProjectCards = [...personalArchiveCards, ...workingCards];

  return (
    <main className="z-[5] bg-[#24242e]">
      <LocalNav sections={navs} />

      {/* Hero Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        {/* Fixed background for Hero */}
        <motion.div
          className="fixed -z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: state.allLettersReady && heroBackgroundLoaded ? 0.9 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            transform: "translate3d(0, 0, 0)",
            left: 0,
            right: 0,
            top: 0,
            width: "100vw",
            height: "110lvh",
          }}
        >
          {state.allLettersReady && (
            <Image
              src="/gallery/nobody.png"
              alt="Background"
              fill
              className="object-cover"
              style={{ objectPosition: "center 70%" }}
              onLoad={() => setHeroBackgroundLoaded(true)}
            />
          )}
        </motion.div>
        {/* Dark overlay for Hero (local to hero area) */}
        <div className="absolute inset-0 -z-[5] bg-[#1a1a1f]/10 pointer-events-none" />
        <div className="absolute inset-0 -z-[5] bg-[#0d5f63]/18 pointer-events-none" />
        {/* Hero Section */}
        <div className="relative z-[2]">
          <Hero />
        </div>
        {/* Transparent fade handled by masked hero background */}
      </div>

      {deferredSectionsReady && (
        <>
          {/* About Me Section on Gallery Background */}
          <div className="relative overflow-hidden" style={{ clipPath: "inset(0)" }}>
            <div id="about-me" className="relative min-h-[115vh]" style={{ clipPath: "inset(0)" }}>
              <FixedBackgroundImage
                src="/gallery/looking.webp"
                alt="Gallery"
                opacity={0.9}
                objectPosition="center 70%"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 -z-[5] pointer-events-none bg-[#1a1a1f]/10" />
              <div className="absolute inset-0 -z-[5] pointer-events-none bg-[#0d5f63]/18" />
              <div className="absolute inset-0 flex items-center justify-center translate-y-16 md:translate-y-24">
                <AboutMeSection />
              </div>
            </div>

            {/* Combined Projects Section */}
            <div
              id="gallery"
              className="relative h-[100vh] overflow-hidden bg-[#24242e]"
              style={{ clipPath: "inset(0)" }}
            >
              <FixedBackgroundImage
                src="/colors.png"
                opacity={0.45}
                objectPosition="center"
              />
              <PreviewCardsGrid
                cards={combinedProjectCards}
                viewProjectHint={t.viewProjectHint}
                activeMobileCard={activeMobileCard}
                setActiveMobileCard={setActiveMobileCard}
                supportsHover={supportsHover}
                gridClassName={previewGridClass}
                cardClassName={previewCardClass}
                titleClassName={previewTitleClass}
                titleSlotClassName={previewTitleSlotClass}
                textWrapClassName={previewTextWrapClass}
                textSafetyZoneClassName={previewTextSafetyZoneClass}
              />
            </div>

            {/* Footer CTA Section */}
            <section className="relative py-32 md:py-48 px-8 overflow-hidden" style={{ clipPath: "inset(0)" }}>
              <FixedBackgroundImage
                src="/gallery/ship.webp"
                alt="Background"
                objectPosition="center bottom"
                containerClassName="-z-10"
              >
                <div className="absolute inset-0 bg-[#1a1a1f]/60" />
              </FixedBackgroundImage>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col items-center gap-4 mb-8"
                >
                  <Image
                    src="/lets.webp"
                    alt="Let's create together"
                    width={1200}
                    height={300}
                    className="w-full max-w-3xl h-auto object-contain max-lg:landscape:w-[86%] mx-auto"
                    loading="eager"
                  />
                </motion.div>

                <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
                  Open for freelance projects, collaborations, and creative
                  adventures.
                </p>

                <div className="mt-6 flex justify-center">
                  <CTAButton
                    href="mailto:hello@vio.art"
                    bgColor="#ffffff"
                    textColor="text-[#10363a]"
                    bgOpacity={0.98}
                  >
                    {t.ctaLabel}
                  </CTAButton>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <HomeTextProvider>
      <HomeInner />
    </HomeTextProvider>
  );
}
