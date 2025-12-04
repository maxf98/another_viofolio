"use client";

import Image from "next/image";
import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";

const navs: NavSection[] = [
  {
    id: "breathe",
    src: "/projects/mascha/breathe/6.png",
  },
  {
    id: "kundalini",
    src: "/projects/mascha/kundalini/kundalini.png",
  },
  {
    id: "feelloved",
    src: "/projects/mascha/loved/feelloved-cover.png",
  },
];

export default function Page() {
  return (
    <div>
      <Navigation sections={navs} />

      <ProjectHeroSection
        src="/projects/mascha/breathe/6.png"
        alt="Mascha Breathe"
        title="Working with Mascha"
        description="I collaborated with Mascha, an artist and musician to bring the vision behind her music to life through my mixed media style. Together, we created three album covers, each aiming to capture the essence and emotion of her album. For these project, I used AI-generated elements as building blocks, combining them with her portrait in a collage and painting over the composition to blend everything into a single, cohesive visual story."
      />

      <div id="breathe" className="content-container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/projects/mascha/breathe/text.png"
            alt="Mascha Breathe"
            className="object-contain"
            width={400}
            height={200}
          />

          <div className="my-16">
            <p>Mascha is an artist, and breathe is her album</p>
          </div>

          <div className="flex gap-8 w-full">
            <video
              width={200}
              height={400}
              autoPlay
              loop
              className="rounded-2xl"
            >
              <source
                src="/projects/mascha/breathe/Breathe-Canvas.mp4"
                type="video/mp4"
              />
            </video>
            <iframe
              data-testid="embed-iframe"
              className="rounded-2xl flex-grow"
              src="https://open.spotify.com/embed/track/3fT6DKtpBcb66huSBr8H5c?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <Image
            src="/projects/mascha/breathe/mascha-cd.png"
            alt="Mascha Breathe CD Cover"
            width={800}
            height={800}
          />
        </div>
      </div>

      <div
        id="kundalini"
        className="content-container flex flex-col justify-center items-center gap-16 mt-48"
      >
        <Image
          src="/projects/mascha/kundalini/k-text3.png"
          alt="Kundalini album cover text"
          width={800}
          height={200}
        />

        <Image
          src="/projects/mascha/kundalini/kundalini.png"
          className="rounded-2xl"
          alt="Kundalini album cover"
          width={700}
          height={700}
        />

        <div className="flex gap-8 w-[700px]">
          {/* <video width={200} height={400} autoPlay loop className="rounded-2xl">
            <source
              src="/projects/mascha/kundalini/kundalinianimation.mp4"
              type="video/mp4"
            />
          </video> */}
          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl"
            src="https://open.spotify.com/embed/track/3DHo0zqSwKUCk0nEXjQuZl?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div
        id="feelloved"
        className="content-container flex flex-col justify-center items-center gap-16 mt-48"
      >
        <Image
          src="/projects/mascha/loved/feellovedtext.png"
          alt="Feel Loved album cover text"
          width={600}
          height={200}
        />

        <Image
          src="/projects/mascha/loved/fullcover.png"
          alt="Feel Loved album cover"
          className="rounded-2xl"
          width={1000}
          height={600}
        />

        <div className="flex gap-8 w-[700px] items-center">
          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl"
            src="https://open.spotify.com/embed/track/6SYvsiN3KZqKIepny2UX5D?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <Image
            src="/projects/mascha/loved/loved-mockup.png"
            alt="Mascha Feel Loved CD Cover"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
