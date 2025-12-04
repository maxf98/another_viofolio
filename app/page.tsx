import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Monkeybrain from "./components/monkeybrain/monkeybrain";
import PagePreview from "./components/PagePreview";
import Navigation from "./components/navigation/Navigation";
import { NavSection } from "./components/navigation/Navigation";
import TextBlock from "./components/TextBlock";

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
    id: "monkeybrain",
    label: "monkeybrain",
  },
  {
    id: "art-therapy",
    label: "art-therapy",
  },
];

export default function Home() {
  return (
    <main className="z-[5]">
      <Navigation sections={navs} />

      {/* Hero Section */}
      <Hero />

      <div id="about-me">
        <AboutMe />
      </div>

      {/* Gallery */}
      <div id="gallery">
        <TextBlock>
          My personal style leans toward mixed media and surrealism. I often
          begin with my own photographs and merge them with drawing and digital
          editing in Photoshop and Procreate. This combination of techniques
          allows me to create imaginative, atmospheric worlds, that sometimes
          are rooted in real elements, and other times built entirely from
          imagination.
        </TextBlock>
        <PagePreview
          title="Gallery"
          href="/gallery"
          imageSrc="/covers/gallery/4.png"
          size="large"
        />
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-body">
        <TextBlock>
          My client projects cover a broad spectrum, continually shaping and
          expanding my visual approach. They range from precise graphic design
          tasks to projects that invite more artistic freedom. With my visual
          communication skills and high proficiency in Adobe programs, I tailor
          each project to its unique creative needs.
        </TextBlock>
        <div className="flex flex-col gap-16">
          {/* Elgato */}
          <PagePreview
            title="Working with a Company"
            href="/elgato"
            imageSrc="/projects/elgato/front1.png"
            size="normal"
          />

          {/* Quards */}
          <PagePreview
            title="Working with a Startup"
            href="/quards"
            imageSrc="/covers/quards/quards.png"
            size="normal"
          />

          {/* Mascha */}
          <PagePreview
            title="Working with an Artist"
            href="/mascha"
            imageSrc="/covers/mascha/mascha 2.png"
            size="normal"
          />
        </div>
      </section>
      {/* Monkeybrain */}

      <div id="monkeybrain">
        <TextBlock>
          For my Bachelor thesis in Graphic Design and Art Direction at NABA
          Milano, I created an inner-worlds magazine called Monkeybrain. It
          became a space where I could bring all my passions together, visually
          expressing the inner world and the concepts behind it, exploring
          themes connected to psychology, and shaping everything into a complete
          and cohesive graphic project.
        </TextBlock>
        <Monkeybrain />
      </div>

      <div id="art-therapy" className="bg-body">
        <TextBlock>
          In June 2025, my journey led me to begin my Art Therapy Practitioner
          training at Campus Naturalis in Munich - exploring various realms of
          art and creativity. Returning to traditional mediums and hands-on
          processes has created a space for deeper exploration—where imagination
          meets emotion, and where small creative experiments can grow into
          meaningful inner work.
        </TextBlock>

        <PagePreview
          title="Art Therapy"
          href="/gallery"
          imageSrc="/covers/arttherapy.png"
          size="normal"
        />
      </div>

      <div id="wrap-up">
        <TextBlock>Check out my socials!</TextBlock>
      </div>
    </main>
  );
}
