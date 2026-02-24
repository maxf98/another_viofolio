"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ScrollLinkSection from "./components/ScrollLinkSection";
import Navigation from "./components/navigation/Navigation";
import { NavSection } from "./components/navigation/Navigation";
import { useLoadState } from "./context/LoadContext";
import AboutMeSection from "./components/AboutMeOverlay";
import CTAButton from "./components/CTAButton";
import { HomeTextProvider, useHomeText } from "./translations/home";

function HomeInner() {
  const { state } = useLoadState();
  const t = useHomeText();
  const deferredSectionsReady = state.allLettersReady;

  const navs: NavSection[] = [
    {
      id: "gallery",
      label: t.navGallery,
      src: "/icons/bout-icon.png",
    },
    {
      id: "elgato-project",
      label: t.navElgato,
      src: "/icons/sd.png",
    },
    {
      id: "quards-project",
      label: t.navQuards,
      src: "/icons/q1.png",
    },
    {
      id: "mascha-project",
      label: t.navMascha,
      src: "/icons/pink.png",
    },
  ];

  return (
    <main className="z-[5] bg-[#24242e]">
      <Navigation sections={navs} />

      {/* Hero + About Me Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        {/* Fixed background for Hero + About Me */}
        <motion.div
          className="fixed inset-0 -z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: state.allLettersReady ? 0.6 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {state.allLettersReady && (
            <Image
              src="/coverNoPeople.webp"
              alt="Background"
              fill
              className="object-cover object-bottom"
            />
          )}
        </motion.div>
        {/* Dark overlay for Hero (local to hero area) */}
        <div className="absolute inset-0 -z-[5] bg-[#1a1a1f]/60 pointer-events-none" />
        {/* Hero Section */}
        <Hero />

        {/* About Me Section - Always visible */}
        <div id="about-me" className="w-full">
          <AboutMeSection isOpen={true} onClose={() => {}} />
        </div>
      </div>

      {deferredSectionsReady && (
        <>
          {/* Cover to hide fixed background when scrolling to other sections */}
          <div className="relative bg-[#24242e]" style={{ clipPath: "inset(0)" }}>
            {/* Gallery */}
            <div id="gallery" className="relative">
              <ScrollLinkSection
                href="/gallery"
                imageSrc="/gallery/chat.webp"
                imageAlt="Gallery"
                label="Personal Archive"
                overlayImage="/archive.webp"
                overlayImageAlt="Archive"
                objectPosition="center bottom"
                imageOpacity={100}
                darkOverlay={false}
                textColor="text-white"
                overlayColor="#1a1a1f"
                overlayOpacity={60}
              />
            </div>

            {/* Projects Section */}
            <section id="projects" className="w-full">
              <div id="elgato-project">
                <ScrollLinkSection
                  href="/elgato"
                  imageSrc="/projects/elgato/gato3.webp"
                  imageAlt="Elgato"
                  label="Working with a Company"
                  overlayImage="/working.webp"
                  overlayImageAlt="Working"
                  secondaryImage="/company.webp"
                  secondaryImageAlt="Company placeholder"
                  description="Custom designs and illustrations for Elgato"
                  objectPosition="center bottom"
                  mobileObjectPosition="left"
                  imageOpacity={100}
                  overlayColor="#1a1a1f"
                  overlayOpacity={60}
                />
              </div>
              <div id="quards-project">
                <ScrollLinkSection
                  href="/quards"
                  imageSrc="/covers/quards/quards.webp"
                  imageAlt="Quards"
                  label="Working with a Startup"
                  overlayImage="/working.webp"
                  overlayImageAlt="Working"
                  secondaryImage="/startup.webp"
                  secondaryImageAlt="Startup placeholder"
                  description="Branding and app design for Quards"
                />
              </div>
              <div id="mascha-project">
                <ScrollLinkSection
                  href="/mascha"
                  imageSrc="/covers/mascha/m3.webp"
                  imageAlt="Mascha"
                  label="Working with an Artist"
                  overlayImage="/working.webp"
                  overlayImageAlt="Working"
                  secondaryImage="/art.webp"
                  secondaryImageAlt="Art placeholder"
                  description="Album artwork and visuals for Mascha"
                />
              </div>
            </section>

            {/* Footer CTA Section */}
            <section className="relative py-32 md:py-48 px-8 overflow-hidden bg-[#1c1b1b]">
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
