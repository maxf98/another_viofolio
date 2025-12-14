"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ScrollLinkSection from "./components/ScrollLinkSection";
import Navigation from "./components/navigation/Navigation";
import { NavSection } from "./components/navigation/Navigation";
import { useLoadState } from "./context/LoadContext";

// Static imports for ScrollLinkSection images
import chatImg from "../public/gallery/chat.png";
import elgatoImg from "../public/projects/elgato/gato3.png";
import quardsImg from "../public/covers/quards/quards.png";
import maschaImg from "../public/covers/mascha/m3.png";
import artTherapyImg from "../public/arttherapy/fragments/pens.png";
import monkeybrainImg from "../public/projects/MONKEYBRAIN/coverdesign.png";

const navs: NavSection[] = [
  {
    id: "about-me",
    label: "about me",
  },
  {
    id: "gallery",
    label: "gallery",
  },
  {
    id: "projects",
    label: "projects",
  },
  {
    id: "art-therapy",
    label: "art-therapy",
  },
  {
    id: "monkeybrain",
    label: "monkeybrain",
  },
];

export default function Home() {
  const { state } = useLoadState();

  return (
    <main className="z-[5] bg-[#24242e]">
      <Navigation sections={navs} />

      {/* Hero + About Me Section with Background */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <motion.div
          className="fixed inset-0 -z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: state.allLettersReady ? 0.9 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Only start loading background after letters are ready */}
          {state.allLettersReady && (
            <Image
              src={chatImg}
              alt="Background"
              fill
              placeholder="blur"
              className="object-cover object-top"
            />
          )}
        </motion.div>

        {/* Hero Section */}
        <Hero />

        <div
          id="about-me"
          className="flex items-start justify-center pt-8 pb-32"
        >
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white text-center px-6">
            Hey, I&apos;m Vio, an artist based in Munich, Germany. I create work
            that blends illustration, visual communication, and intuitive,
            process-driven art. I&apos;m deeply passionate about visual
            expression, world-building, and storytelling, and I&apos;m currently
            exploring these interests through my career in Graphic Design and
            Illustration as well as my studies in art therapy.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div id="gallery">
        <ScrollLinkSection
          href="/gallery"
          imageSrc={chatImg}
          imageAlt="Gallery"
          label="View Gallery"
          objectPosition="center bottom"
        />
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full">
        <ScrollLinkSection
          href="/elgato"
          imageSrc={elgatoImg}
          imageAlt="Elgato"
          label="Working with a Company"
          objectPosition="center bottom"
          mobileObjectPosition="left"
        />
        <ScrollLinkSection
          href="/quards"
          imageSrc={quardsImg}
          imageAlt="Quards"
          label="Working with a Startup"
        />
        <ScrollLinkSection
          href="/mascha"
          imageSrc={maschaImg}
          imageAlt="Mascha"
          label="Working with an Artist"
        />
      </section>

      {/* Art Therapy */}
      <div id="art-therapy">
        <ScrollLinkSection
          href="/art-therapy"
          imageSrc={artTherapyImg}
          imageAlt="Art Therapy"
          label="EXPLORING ART THERAPY"
          objectPosition="center top"
        />
      </div>

      {/* Monkeybrain */}
      <div id="monkeybrain">
        <ScrollLinkSection
          href="/monkeybrain"
          imageSrc={monkeybrainImg}
          imageAlt="Monkeybrain"
          label="Monkeybrain Mag"
        />
      </div>
    </main>
  );
}
