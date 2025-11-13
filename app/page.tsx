import Hero from "./components/Hero";
import PagePreview from "./components/PagePreview";

export default function Home() {
  return (
    <main>
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
              title="Elgato"
              href="/elgato"
              imageSrc="/covers/elgato+/3.png"
              size="large"
            />
          </div>

          {/* Quards */}
          <div id="quards">
            <PagePreview
              title="Quards"
              href="/quards"
              imageSrc="/covers/quards/quards.png"
              size="large"
            />
          </div>

          {/* Mascha */}
          <div id="mascha">
            <PagePreview
              title="Mascha"
              href="/mascha"
              imageSrc="/covers/mascha/mascha2.png"
              size="large"
            />
          </div>

          {/* Monkeybrain */}
          <div id="monkeybrain">
            <PagePreview
              title="Monkeybrain"
              href="/monkeybrain"
              imageSrc="/gallery/monkeybrain.jpg"
              size="large"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
