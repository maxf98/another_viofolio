import Hero from "./components/Hero";
import ScrollLinkSection from "./components/ScrollLinkSection";
import ScrollSection from "./components/ScrollSection";
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
    <main className="z-[5]">
      <Navigation sections={navs} />

      {/* Hero Section */}
      <Hero />

      <div id="about-me">
        <ScrollSection title="" backgroundImage="/me-cover.png">
          <p className="absolute inset-0 flex items-center justify-center text-lg md:text-xl max-w-2xl mx-auto text-white text-center px-6">
            Hey, I&apos;m Vio, an artist based in Munich, Germany. I create work
            that blends illustration, visual communication, and intuitive,
            process-driven art. I&apos;m deeply passionate about visual
            expression, world-building, and storytelling, and I&apos;m currently
            exploring these interests through my career in Graphic Design and
            Illustration as well as my studies in art therapy.
          </p>
        </ScrollSection>
      </div>

      {/* Gallery */}
      <div id="gallery">
        <ScrollLinkSection
          href="/gallery"
          imageSrc="/covers/gallery/4.png"
          imageAlt="Gallery"
          label="View Gallery"
        />
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full">
        <ScrollLinkSection
          href="/elgato"
          imageSrc="/projects/elgato/front1.png"
          imageAlt="Elgato"
          label="Working with a Company"
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
          imageSrc="/covers/arttherapy.png"
          imageAlt="Art Therapy"
          label="Analogue Experimentations"
        />
      </div>

      {/* Monkeybrain */}
      <div id="monkeybrain">
        <ScrollLinkSection
          href="/monkeybrain"
          imageSrc="/projects/MONKEYBRAIN/monkeybrain.png"
          imageAlt="Monkeybrain"
          label="Monkeybrain"
        />
      </div>
    </main>
  );
}
