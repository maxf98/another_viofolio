"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import LocalNav from "@/app/components/navigation/LocalNav";
import { NavSection } from "@/app/components/navigation/LocalNav";
import { useLoadState } from "@/app/context/LoadContext";
import AboutMeSection from "./AboutMeSection";
import CTAButton from "@/app/components/CTAButton";
import FixedBackgroundImage from "@/app/components/FixedBackgroundImage";
import { HomeTextProvider, useHomeText } from "@/app/translations/home";
import { PreviewCard } from "@/app/components/PreviewCard";
import { combinedProjectCards } from "./projectCards";

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
      label: t.aboutButton,
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

  return (
    <main className="z-[5] bg-[#24242e]">
      <LocalNav sections={navs} />

      {/* Hero Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        {/* Fixed background for Hero */}
        <motion.div
          className="fixed -z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: state.allLettersReady && heroBackgroundLoaded ? 0.9 : 0,
          }}
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
          <div
            className="relative overflow-hidden"
            style={{ clipPath: "inset(0)" }}
          >
            <div
              id="about-me"
              className="relative min-h-screen"
              style={{ clipPath: "inset(0)" }}
            >
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
              <div className="absolute inset-0 flex items-center justify-center translate-y-6 md:translate-y-10">
                <AboutMeSection />
              </div>
            </div>

            {/* Combined Projects Section */}
            <div
              id="gallery"
              className="relative min-h-screen overflow-hidden bg-[#24242e] md:h-[100vh]"
              style={{ clipPath: "inset(0)" }}
            >
              <FixedBackgroundImage
                src="/colors.png"
                opacity={0.45}
                objectPosition="center"
              />
              <div className="grid w-full grid-cols-2 auto-rows-[34svh] gap-px p-0 max-md:landscape:auto-rows-[46svh] md:h-full md:grid-cols-3 md:grid-rows-2 md:auto-rows-auto">
                {combinedProjectCards.map((card) => {
                  const isActive =
                    !supportsHover && activeMobileCard === card.href;
                  return (
                    <PreviewCard
                      key={card.href}
                      card={card}
                      viewProjectHint={t.viewProjectHint}
                      isActive={isActive}
                      onActivate={() => setActiveMobileCard(card.href)}
                      supportsHover={supportsHover}
                      variant="home"
                    />
                  );
                })}
              </div>
            </div>

            {/* Footer CTA Section */}
            <section
              className="relative py-32 md:py-48 px-8 overflow-hidden"
              style={{ clipPath: "inset(0)" }}
            >
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

                <p className="text-[var(--color-text-muted)] text-[length:var(--text-body-lg)] md:text-[length:var(--text-heading-sm)] max-w-xl mx-auto leading-[var(--leading-body)] mb-8">
                  {t.ctaDescription}
                </p>

                <div className="mt-6 flex justify-center">
                  <CTAButton
                    href="mailto:vio@vioseum.art"
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
