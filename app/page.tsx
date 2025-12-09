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
          My personal style leans toward mixed media and surrealism — merging
          photography with drawing and digital editing to create imaginative,
          atmospheric worlds.
        </TextBlock>
        <PagePreview
          title="Gallery"
          href="/gallery"
          imageSrc="/covers/gallery/4.png"
          size="normal"
        />
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-body">
        <TextBlock>
          In my design work, I combine the project vision with my
          narrative-building approach and my skills in Adobe Creative Cloud.
          I’ve had the opportunity to work on projects with creative freedom,
          shaping small imaginative worlds built around their themes.
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
            imageSrc="/covers/mascha/m3.png"
            size="normal"
          />
        </div>
      </section>

      {/* Art Therapy */}
      <div id="art-therapy" className="bg-body">
        <TextBlock>
          Starting my{" "}
          <span className="text-[2em] leading-none align-baseline">
            Art Therapy
          </span>{" "}
          Practitioner training at Campus Naturalis in Munich has led me back to
          traditional mediums and invited a more introspective, exploratory
          approach to my creativity.
        </TextBlock>

        <PagePreview
          title="Analogue Experimentations"
          href="/art-therapy"
          imageSrc="/covers/arttherapy.png"
          size="normal"
        />
      </div>

      {/* Monkeybrain */}
      <div id="monkeybrain">
        <TextBlock>
          For my Bachelor thesis in Graphic Design and Art Direction at NABA
          Milano, I created a magazine exploring inner worlds, and mental health
          themes through visual design, combining my interests in art as a form
          of communication, and art as personal expression.
        </TextBlock>
        <Monkeybrain />
      </div>

      <div id="wrap-up">
        <TextBlock>Check out my socials!</TextBlock>
      </div>
    </main>
  );
}
