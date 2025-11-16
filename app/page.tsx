import Hero from "./components/Hero";
import PagePreview from "./components/PagePreview";
import ScrollNav, { ScrollNavSection } from "./components/ScrollNav";

const navs: ScrollNavSection[] = [
  {
    id: "gallery",
    label: "gallery",
  },
  {
    id: "elgato",
    label: "elgato",
  },
  {
    id: "quards",
    label: "quards",
  },
  {
    id: "mascha",
    label: "mascha",
  },
  {
    id: "monkeybrain",
    label: "monkeybrain",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollNav sections={navs} />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section className="w-full py-20">
        <div className="flex flex-col gap-16">
          {/* Gallery */}
          <div id="gallery">
            <PagePreview
              title="Gallery"
              href="/gallery"
              imageSrc="/covers/gallery/4.png"
              size="large"
            />
          </div>

          {/* Elgato */}
          <div id="elgato">
            <PagePreview
              title="Working with a Company"
              href="/elgato"
              imageSrc="/projects/elgato/front1.png"
              size="normal"
            />
          </div>

          {/* Quards */}
          <div id="quards">
            <PagePreview
              title="Working with a Startup"
              href="/quards"
              imageSrc="/covers/quards/quards.png"
              size="normal"
            />
          </div>

          {/* Mascha */}
          <div id="mascha">
            <PagePreview
              title="Working with an Artist"
              href="/mascha"
              imageSrc="/covers/mascha/mash.png"
              size="normal"
            />
          </div>

          {/* Monkeybrain */}
          <div id="monkeybrain">
            <PagePreview
              title="Monkeybrain"
              href="/monkeybrain"
              imageSrc="/projects/MONKEYBRAIN/pages/monkeybrain.jpg"
              size="normal"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
