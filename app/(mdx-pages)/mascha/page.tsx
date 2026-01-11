"use client";

import Image from "next/image";
import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import NextProjectButton from "@/app/components/NextProjectButton";

// Static import for hero image
import heroImg from "@/public/covers/mascha/m3.png";

const navs: NavSection[] = [
  {
    id: "breathe",
    label: "Breathe",
    src: "/icons/yellow.png",
  },
  {
    id: "kundalini",
    label: "Kundalini",
    src: "/icons/blue.png",
  },
  {
    id: "feelloved",
    label: "Feel Loved",
    src: "/icons/pink.png",
  },
];

export default function Page() {
  return (
    <div className="bg-[#24242e]">
      <Navigation sections={navs} />

      <ProjectHeroSection
        src={heroImg}
        alt="Mascha"
        title="WORKING WITH ^MASCHA^"
        description="In collaboration with musician Mascha, I created three album covers that translate the themes of her music into visual form. Using a mixed-media process, I combined AI-generated imagery, photography, hand-painted illustration, and digital editing to craft layered, cohesive artworks that reflect the depth and atmosphere of her sound."
      />

      <div
        id="breathe"
        className="relative pt-24 pb-32"
        style={{ clipPath: "inset(0)" }}
      >
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/projects/mascha/breathe/4.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="content-container flex flex-col justify-center items-center">
          <Image
            src="/projects/mascha/breathe/text.png"
            alt="Mascha Breathe"
            className="object-contain"
            width={400}
            height={200}
          />

          <div className="my-16 max-w-2xl text-center">
            <p>
              This cover explores breath as a force. My work involved
              illustration and collage, designing a hand-drawn title, a
              frame-by-frame animation in Procreate, and a full CD design.
            </p>
          </div>

          <Image
            src="/projects/mascha/breathe 2.png"
            alt="Breathe"
            width={800}
            height={800}
            className="mb-16"
          />

          <h2 className="text-lg font-light mb-8 opacity-70">
            Animation & CD Design
          </h2>
          <div className="flex flex-col md:flex-row gap-8 w-full items-center md:items-center md:justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-[350px] md:h-[450px] w-[50vw] md:w-[250px] object-cover order-2 md:order-1"
            >
              <source
                src="/projects/mascha/breathe/Breathe-Canvas.mp4"
                type="video/mp4"
              />
            </video>
            <Image
              src="/projects/mascha/breathe/mascha-cd.png"
              alt="Mascha Breathe CD Cover"
              width={500}
              height={500}
              className="h-[350px] md:h-[550px] w-auto object-contain order-1 md:order-2"
            />
          </div>

          <h2 className="text-lg font-light mt-16 mb-4 opacity-70">Listen</h2>
          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl w-full"
            src="https://open.spotify.com/embed/track/3fT6DKtpBcb66huSBr8H5c?utm_source=generator"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div
        id="kundalini"
        className="relative pt-24 pb-32"
        style={{ clipPath: "inset(0)" }}
      >
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/covers/mascha/underwater.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="content-container flex flex-col justify-center items-center gap-8">
          <Image
            src="/projects/mascha/kundalini/k-text3.png"
            alt="Kundalini album cover text"
            width={800}
            height={200}
          />

          <div className="my-16 max-w-2xl text-center">
            <p>
              This cover design involved bringing Mascha into a calm underwater
              world. Working with photographs, this cover involved mainly photo
              editing and collage work.
            </p>
          </div>

          <Image
            src="/projects/mascha/kundalini/kundalini.png"
            alt="Kundalini album cover"
            width={800}
            height={800}
          />

          <h2 className="text-lg font-light mt-8 mb-4 opacity-70">Listen</h2>
          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl w-full"
            src="https://open.spotify.com/embed/track/3DHo0zqSwKUCk0nEXjQuZl?utm_source=generator"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div
        id="feelloved"
        className="relative pt-24 pb-32"
        style={{ clipPath: "inset(0)" }}
      >
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/covers/mascha/m-plants.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="content-container flex flex-col justify-center items-center gap-16">
          <Image
            src="/projects/mascha/loved/feellovedtext.png"
            alt="Feel Loved album cover text"
            width={600}
            height={200}
          />

          <div className="my-16 max-w-2xl text-center">
            <p>
              This cover design wrapped Mascha in a warm, glowing floral
              blanket. The work combined photo editing, collage, and
              illustration, along with hand-drawn lettering for the title.
            </p>
          </div>

          <Image
            src="/projects/mascha/loved/fullcover.png"
            alt="Feel Loved album cover"
            width={1400}
            height={840}
            className="w-[75vw] max-w-[1200px] h-auto"
          />

          <h2 className="text-lg font-light mb-4 opacity-70">Album Design</h2>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1200px] items-center md:items-center md:justify-center">
            <Image
              src="/projects/mascha/loved/feelloved-cover.png"
              alt="Feel Loved Cover"
              width={400}
              height={400}
              className="h-[250px] md:h-[450px] w-auto object-contain"
            />
            <Image
              src="/projects/mascha/loved/loved-mockup.png"
              alt="Mascha Feel Loved CD Cover"
              width={1920}
              height={1080}
              className="h-[250px] md:h-[550px] w-auto object-contain"
            />
          </div>

          <h2 className="text-lg font-light mt-16 mb-4 opacity-70">Listen</h2>
          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl w-full max-w-[900px]"
            src="https://open.spotify.com/embed/track/6SYvsiN3KZqKIepny2UX5D?utm_source=generator"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Summary Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/covers/mascha/m3.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="content-container py-32 flex flex-col items-center text-center">
          <p className="max-w-2xl text-lg">
            Working with Mascha allowed me to explore the intersection of music
            and visual art, translating emotion and sound into imagery through a
            blend of traditional and digital techniques.
          </p>
        </div>
      </div>

      {/* Next Project Button - on blank background */}
      <div className="bg-[#1c1b1b]">
        <NextProjectButton
          href="/gallery"
          label="Personal Archive"
          imageSrc="/gallery/chat.webp"
        />
      </div>
    </div>
  );
}
