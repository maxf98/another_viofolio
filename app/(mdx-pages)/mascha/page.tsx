"use client";

import Image from "next/image";
import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import NextProjectButton from "@/app/components/NextProjectButton";
import { MaschaTextProvider, useMaschaText } from "@/app/translations/mascha";

// Static import for hero image
import heroImg from "@/public/covers/mascha/m3.webp";

function MaschaInner() {
  const t = useMaschaText();

  const navs: NavSection[] = [
    {
      id: "breathe",
      label: t.navBreathe,
      src: "/icons/yellow.png",
    },
    {
      id: "kundalini",
      label: t.navKundalini,
      src: "/icons/blue.png",
    },
    {
      id: "feelloved",
      label: t.navFeelLoved,
      src: "/icons/pink.png",
    },
  ];

  return (
    <div className="bg-[#24242e]">
      <Navigation sections={navs} />

      <ProjectHeroSection
        src={heroImg}
        alt="Mascha"
        title={t.heroTitle}
        description={t.heroDescription}
      />

      <div
        id="breathe"
        className="relative pt-24 pb-32"
        style={{ clipPath: "inset(0)" }}
      >
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/projects/mascha/breathe/4.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            quality={60}
            loading="lazy"
          />
        </div>
        <div className="content-container flex flex-col justify-center items-center">
          <Image
            src="/projects/mascha/breathe/text.png"
            alt="Mascha Breathe"
            className="object-contain"
            width={400}
            height={200}
            loading="lazy"
          />

          <div className="my-16 max-w-2xl text-center">
            <p>{t.breatheDescription}</p>
          </div>

          <Image
            src="/projects/mascha/breathe 2.webp"
            alt="Breathe"
            width={800}
            height={800}
            className="mb-16"
            loading="lazy"
          />

          <h2 className="text-lg font-light mb-8 opacity-70">
            {t.breatheSubtitle}
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
              src="/projects/mascha/breathe/mascha-cd.webp"
              alt="Mascha Breathe CD Cover"
              width={500}
              height={500}
              className="h-[350px] md:h-[550px] w-auto object-contain order-1 md:order-2"
              loading="lazy"
            />
          </div>

          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl w-full mt-16"
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
            src="/covers/mascha/underwater.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            quality={60}
            loading="lazy"
          />
        </div>
        <div className="content-container flex flex-col justify-center items-center gap-8">
          <Image
            src="/projects/mascha/kundalini/k-text3.png"
            alt="Kundalini album cover text"
            width={800}
            height={200}
            loading="lazy"
          />

          <div className="my-16 max-w-2xl text-center">
            <p>{t.kundaliniDescription}</p>
          </div>

          <Image
            src="/projects/mascha/kundalini/kundalini.webp"
            alt="Kundalini album cover"
            width={800}
            height={800}
            loading="lazy"
          />

          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl w-full mt-8"
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
            src="/covers/mascha/m-plants.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            quality={60}
            loading="lazy"
          />
        </div>
        <div className="content-container flex flex-col justify-center items-center gap-16">
          <Image
            src="/projects/mascha/loved/feellovedtext.png"
            alt="Feel Loved album cover text"
            width={600}
            height={200}
            loading="lazy"
          />

          <div className="my-16 max-w-2xl text-center">
            <p>{t.feelLovedDescription}</p>
          </div>

          <Image
            src="/projects/mascha/loved/fullcover.webp"
            alt="Feel Loved album cover"
            width={1400}
            height={840}
            className="w-[75vw] max-w-[1200px] h-auto"
            loading="lazy"
          />

          <h2 className="text-lg font-light mb-4 opacity-70">{t.feelLovedSubtitle}</h2>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1200px] items-center md:items-center md:justify-center">
            <Image
              src="/projects/mascha/loved/feelloved-cover.webp"
              alt="Feel Loved Cover"
              width={400}
              height={400}
              className="h-[250px] md:h-[450px] w-auto object-contain"
              loading="lazy"
            />
            <Image
              src="/projects/mascha/loved/loved-mockup.webp"
              alt="Mascha Feel Loved CD Cover"
              width={1920}
              height={1080}
              className="h-[250px] md:h-[550px] w-auto object-contain"
              loading="lazy"
            />
          </div>

          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl w-full max-w-[900px] mt-16"
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
            src="/covers/mascha/m3.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            quality={60}
            loading="lazy"
          />
        </div>
        <div className="content-container py-32 flex flex-col items-center text-center">
          <p className="max-w-2xl text-lg">{t.summaryText}</p>
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

export default function Page() {
  return (
    <MaschaTextProvider>
      <MaschaInner />
    </MaschaTextProvider>
  );
}
