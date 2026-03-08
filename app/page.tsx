"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "./components/Hero";
import LocalNav from "@/app/components/navigation/LocalNav";
import { NavSection } from "@/app/components/navigation/LocalNav";
import { useLoadState } from "./context/LoadContext";
import AboutMeSection from "./components/AboutMeSection";
import CTAButton from "./components/CTAButton";
import { HomeTextProvider, useHomeText } from "./translations/home";

function HomeInner() {
  const { state } = useLoadState();
  const t = useHomeText();
  const [heroBackgroundLoaded, setHeroBackgroundLoaded] = useState(false);
  const deferredSectionsReady = state.allLettersReady;

  const navs: NavSection[] = [
    {
      id: "about-me",
      label: "About me",
      src: "/icons/bout-icon.png",
    },
    {
      id: "gallery",
      label: t.navGallery,
      src: "/icons/drawing.png",
    },
    {
      id: "working",
      label: "Working with",
      src: "/icons/work-icon.png",
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
    "w-full md:min-w-[900px] max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4";
  const previewCardClass =
    "relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-[#1f1f29] transition-transform duration-300 group-hover:scale-[1.1]";
  const previewTitleClass =
    "text-xs md:text-sm font-semibold text-white uppercase tracking-[0.04em] group-hover:tracking-[0.06em] transition-all duration-300 leading-tight";
  const showcaseSectionClass = "relative min-h-[100vh] flex items-center justify-center py-12 md:py-14";
  const showcaseContentClass = "content-container flex flex-col items-center gap-8 md:gap-12";
  const showcaseHeaderImageClass = "w-64 md:w-80 h-auto drop-shadow-xl opacity-80";

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
      href: "/quards",
      image: "/projects/quards/featureArtNoBG.webp",
      alt: "Quards background preview",
      title: "Quards",
      defaultTitle: "A startup",
      description: "App design and visual identity",
    },
    {
      href: "/elgato",
      image: "/projects/elgato/front1.png",
      alt: "Elgato background preview",
      title: "Elgato",
      defaultTitle: "A company",
      description: "Product customisation and brand illustration",
    },
    {
      href: "/mascha",
      image: "/covers/mascha/m3.webp",
      alt: "Mascha background preview",
      title: "Mascha",
      defaultTitle: "An artist",
      description: "Album artwork and visual storytelling",
    },
  ];

  const renderPreviewCards = (
    cards: {
      href: string;
      image: string;
      alt: string;
      title: string;
      defaultTitle?: string;
      description: string;
    }[]
  ) => (
    <div className={previewGridClass}>
      {cards.map((card) => (
        <Link key={card.href} href={card.href} className="group block no-underline">
          <div className={previewCardClass}>
            <Image
              src={card.image}
              alt={card.alt}
              fill
              className="object-cover opacity-90 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-[#1a1a1f]/35 group-hover:bg-[#1a1a1f]/28 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              {card.defaultTitle ? (
                <div className="relative">
                  <h3 className={`${previewTitleClass} opacity-100 group-hover:opacity-0 transition-all duration-300`}>
                    {card.defaultTitle}
                  </h3>
                  <h3 className={`${previewTitleClass} absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                    {card.title}
                  </h3>
                </div>
              ) : (
                <h3 className={previewTitleClass}>{card.title}</h3>
              )}
              <p className="mt-1 text-[11px] md:text-xs text-white/85 leading-tight opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-300 overflow-hidden">
                {card.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <main className="z-[5] bg-[#24242e]">
      <LocalNav sections={navs} />

      {/* Hero Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        {/* Fixed background for Hero */}
        <motion.div
          className="fixed -z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: state.allLettersReady && heroBackgroundLoaded ? 0.6 : 0 }}
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
        <div className="absolute inset-0 -z-[5] bg-[#1a1a1f]/40 pointer-events-none" />
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
              <div
                className="fixed -z-10 pointer-events-none"
                style={{
                  left: 0,
                  right: 0,
                  top: 0,
                  width: "100vw",
                  height: "110lvh",
                  transform: "translate3d(0, 0, 0)",
                  opacity: 0.6,
                }}
              >
                <Image
                  src="/gallery/looking.webp"
                  alt="Gallery"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover"
                  style={{ objectPosition: "center 70%" }}
                />
              </div>
              <div className="absolute inset-0 -z-[5] pointer-events-none bg-[#1a1a1f]/40" />
              <div className="absolute inset-0 flex items-center justify-center translate-y-16 md:translate-y-24">
                <AboutMeSection />
              </div>
            </div>

            {/* Personal Archive Section */}
            <div id="gallery" className={showcaseSectionClass}>
              <div
                className="absolute inset-0 -z-10 pointer-events-none bg-cover bg-center bg-fixed opacity-60"
                style={{ backgroundImage: "url('/gallery/originals_backup/bird.png')" }}
              />
              <div className="absolute inset-0 -z-10 pointer-events-none bg-[#17181c]/24" />
              <div className={showcaseContentClass}>
                {/* Personal Archive Categories Section */}
                <Image
                  src="/archive.webp"
                  alt="Personal Archive"
                  width={400}
                  height={200}
                  className={showcaseHeaderImageClass}
                  loading="lazy"
                />
                {renderPreviewCards(personalArchiveCards)}
              </div>
            </div>

            {/* Working Section */}
            <section id="working" className={showcaseSectionClass}>
              <div
                className="absolute inset-0 -z-10 pointer-events-none bg-cover bg-center bg-fixed opacity-60"
                style={{ backgroundImage: "url('/gallery/originals_backup/bird.png')" }}
              />
              <div className="absolute inset-0 -z-10 pointer-events-none bg-[#1a1a1f]/35" />
              <div className={showcaseContentClass}>
                <Image
                  src="/working.png"
                  alt="Working with"
                  width={2048}
                  height={2048}
                  className={showcaseHeaderImageClass}
                  loading="lazy"
                />
                {renderPreviewCards(workingCards)}
              </div>
            </section>

            {/* Footer CTA Section */}
            <section className="relative py-32 md:py-48 px-8 overflow-hidden" style={{ clipPath: "inset(0)" }}>
              <div className="fixed inset-0 -z-10">
                <Image
                  src="/gallery/ship.webp"
                  alt="Background"
                  fill
                  sizes="100vw"
                  className="object-cover object-[center_bottom]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1a1a1f]/60" />
              </div>
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
                    className="w-full max-w-3xl h-auto object-contain"
                    loading="eager"
                  />
                </motion.div>

                <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
                  Open for freelance projects, collaborations, and creative
                  adventures.
                </p>

                <div className="mt-6 flex justify-center">
                  <CTAButton href="mailto:hello@vio.art">{t.ctaLabel}</CTAButton>
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
