import Image from "next/image";
import Hero from "./components/Hero";
import ScrollLinkSection from "./components/ScrollLinkSection";
import Navigation from "./components/navigation/Navigation";
import { NavSection } from "./components/navigation/Navigation";

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
  return (
    <main className="z-[5] bg-[#24242e]">
      <Navigation sections={navs} />

      {/* Hero + About Me Section with Background */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10">
          <Image
            src="/gallery/sky.png"
            alt="Background"
            fill
            className="object-cover object-top opacity-90"
          />
        </div>

        {/* Hero Section */}
        <Hero />

        <div id="about-me" className="flex items-start justify-center pt-8 pb-32">
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
          imageSrc="/gallery/chat.png"
          imageAlt="Gallery"
          label="View Gallery"
          objectPosition="center bottom"
        />
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full">
        <ScrollLinkSection
          href="/elgato"
          imageSrc="/projects/elgato/gato3.png"
          imageAlt="Elgato"
          label="Working with a Company"
          objectPosition="center bottom"
          mobileObjectPosition="left"
        />
        <ScrollLinkSection
          href="/quards"
          imageSrc="/covers/quards/quards.png"
          imageAlt="Quards"
          label="Working with a Startup"
        />
        <ScrollLinkSection
          href="/mascha"
          imageSrc="/covers/mascha/m3.png"
          imageAlt="Mascha"
          label="Working with an Artist"
        />
      </section>

      {/* Art Therapy */}
      <div id="art-therapy">
        <ScrollLinkSection
          href="/art-therapy"
          imageSrc="/arttherapy/fragments/pens.png"
          imageAlt="Art Therapy"
          label="EXPLORING ART THERAPY"
          objectPosition="center top"
        />
      </div>

      {/* Monkeybrain */}
      <div id="monkeybrain">
        <ScrollLinkSection
          href="/monkeybrain"
          imageSrc="/projects/MONKEYBRAIN/coverdesign.png"
          imageAlt="Monkeybrain"
          label="Monkeybrain Mag"
        />
      </div>
    </main>
  );
}
