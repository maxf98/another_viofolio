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

// Static imports for ScrollLinkSection images
import coverNoPeople from "../public/coverNoPeople.png";
import chatImg from "../public/gallery/chat.webp";
import elgatoImg from "../public/projects/elgato/gato3.png";
import quardsImg from "../public/covers/quards/quards.png";
import maschaImg from "../public/covers/mascha/m3.png";

const navs: NavSection[] = [
  {
    id: "about-me",
    label: "about me",
    src: "/icons/bout-icon.png",
  },
  {
    id: "gallery",
    label: "personal archive",
    src: "/icons/drawing.png",
  },
  {
    id: "elgato-project",
    label: "elgato",
    src: "/icons/sd.png",
  },
  {
    id: "quards-project",
    label: "quards",
    src: "/icons/q1.png",
  },
  {
    id: "mascha-project",
    label: "mascha",
    src: "/icons/pink.png",
  },
];

export default function Home() {
  const { state } = useLoadState();

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
              src={coverNoPeople}
              alt="Background"
              fill
              placeholder="blur"
              className="object-cover object-bottom"
            />
          )}
        </motion.div>
        {/* Dark overlay for Hero */}
        <div className="fixed inset-0 -z-[5] bg-[#1a1a1f]/60 pointer-events-none" />
        {/* Hero Section */}
        <Hero />

        {/* About Me Section - Always visible */}
        <div id="about-me" className="w-full">
          <AboutMeSection isOpen={true} onClose={() => {}} />
        </div>
      </div>

      {/* Cover to hide fixed background when scrolling to other sections */}
      <div className="relative bg-[#24242e]" style={{ clipPath: "inset(0)" }}>

        {/* Gallery */}
        <div id="gallery">
          <ScrollLinkSection
            href="/gallery"
            imageSrc={chatImg}
            imageAlt="Gallery"
            label="Personal Archive"
            description="A collection of personal projects and explorations"
            objectPosition="center bottom"
            imageOpacity={100}
            darkOverlay={false}
            textColor="text-white"
          />
        </div>

        {/* Projects Section */}
        <section id="projects" className="w-full">
          <div id="elgato-project">
            <ScrollLinkSection
              href="/elgato"
              imageSrc={elgatoImg}
              imageAlt="Elgato"
              label="Working with a Company"
              description="Custom designs and illustrations for Elgato"
              objectPosition="center bottom"
              mobileObjectPosition="left"
            />
          </div>
          <div id="quards-project">
            <ScrollLinkSection
              href="/quards"
              imageSrc={quardsImg}
              imageAlt="Quards"
              label="Working with a Startup"
              description="Branding and app design for Quards"
            />
          </div>
          <div id="mascha-project">
            <ScrollLinkSection
              href="/mascha"
              imageSrc={maschaImg}
              imageAlt="Mascha"
              label="Working with an Artist"
              description="Album artwork and visuals for Mascha"
            />
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="relative py-32 md:py-48 px-8 overflow-hidden">
          {/* Decorative background elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-[#F5E6A3]/10 blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-[#D4B8E0]/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B8E0C8]/5 blur-3xl" />
          </motion.div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl md:text-6xl font-black mb-6"
                style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}
              >
                <span className="text-[#F5E6A3]">Interested</span>{' '}
                <span className="text-white">in</span>{' '}
                <span className="text-[#D4B8E0]">Working</span>{' '}
                <span className="text-[#B8E0C8]">Together?</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re looking for illustration, branding, or creative direction—let&apos;s explore how we can bring your vision to life.
              </p>
            </motion.div>

            <CTAButton href="mailto:hello@vio.art">
              Get in Touch
            </CTAButton>
          </div>
        </section>

      </div>
    </main>
  );
}
