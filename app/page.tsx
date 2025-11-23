import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Monkeybrain from "./components/monkeybrain/monkeybrain";
import MonkeybrainSBG from "./components/monkeybrain/MonkeybrainSBG";
import PagePreview from "./components/PagePreview";
import ScrollNav, { ScrollNavSection } from "./components/ScrollNav";
import TextBlock from "./components/TextBlock";

const navs: ScrollNavSection[] = [
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
    <main>
      <ScrollNav sections={navs} />

      {/* Hero Section */}
      <Hero />

      <div id="about-me">
        <AboutMe />
      </div>

      {/* Gallery */}
      <div id="gallery">
        <PagePreview
          title="Gallery"
          href="/gallery"
          imageSrc="/covers/gallery/4.png"
          size="large"
        />
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-body">
        <TextBlock>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
          voluptates possimus enim explicabo excepturi ipsam sint sequi
          similique ipsum debitis itaque dicta, rem blanditiis quidem culpa
          accusantium laboriosam quaerat.
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
            imageSrc="/covers/mascha/mascha-cd.png"
            size="normal"
          />
        </div>
      </section>
      {/* Monkeybrain */}

      <div id="monkeybrain">
        <TextBlock>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
          voluptates possimus enim explicabo excepturi ipsam sint sequi
          similique ipsum debitis itaque dicta, rem blanditiis quidem culpa
          accusantium laboriosam quaerat.
        </TextBlock>
        <Monkeybrain />
      </div>

      <div id="art-therapy bg-body">
        <TextBlock>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
          voluptates possimus enim explicabo excepturi ipsam sint sequi
          similique ipsum debitis itaque dicta, rem blanditiis quidem culpa
          accusantium laboriosam quaerat.
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
