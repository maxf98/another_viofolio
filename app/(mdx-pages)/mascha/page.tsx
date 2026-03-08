"use client";

import Image from "next/image";
import LocalNav, { NavSection } from "@/app/components/navigation/LocalNav";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import SectionHintsGrid from "@/app/components/SectionHintsGrid";
import { MaschaTextProvider, useMaschaText } from "@/app/translations/mascha";

// Static import for hero image
import heroImg from "@/public/projects/mascha/breathe/4.webp";

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
      <LocalNav sections={navs} />

      {/* Hero and Breathe section with shared background */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10">
          <Image
            src={heroImg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            quality={60}
            priority
          />
        </div>

        <ProjectHeroSection
          src={heroImg}
          alt="Mascha"
          title={t.heroTitle}
          description={t.heroDescription}
          noBackground={true}
        />

        <div id="breathe" className="relative pt-24 pb-32">
          <div className="content-container grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="md:col-span-7 md:col-start-1">
              <Image
                src="/projects/mascha/breathe 2.webp"
                alt="Breathe"
                width={552}
                height={552}
                className="w-full max-w-[560px] h-auto"
                loading="lazy"
              />
            </div>

            <div className="md:col-span-5 md:col-start-8 md:pt-6">
              <Image
                src="/projects/mascha/breathe/mascha-cd.webp"
                alt="Mascha Breathe CD Cover"
                width={500}
                height={500}
                className="w-full max-w-[780px] h-auto object-contain"
                loading="lazy"
              />
            </div>

            <div className="md:col-span-7 md:col-start-2 md:pt-4">
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

            <div className="md:col-span-4 md:col-start-9 md:-mt-6">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-[280px] md:h-[400px] w-full object-cover rounded-2xl"
              >
                <source
                  src="/projects/mascha/breathe/Breathe-Canvas.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
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
        <div className="content-container grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-7 md:col-start-2">
            <Image
              src="/projects/mascha/kundalini/kundalini.webp"
              alt="Kundalini album cover"
              width={552}
              height={552}
              className="w-full max-w-[620px] h-auto"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-7 md:col-start-4 md:pt-6">
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
      </div>

      <div className="relative" style={{ clipPath: "inset(0)" }}>
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
        <div
          id="feelloved"
          className="relative pt-24 pb-32"
        >
        <div className="content-container grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-8 md:col-start-1">
            <Image
              src="/projects/mascha/loved/fullcover.webp"
              alt="Feel Loved album cover"
              width={1400}
              height={840}
              className="w-full max-w-[1100px] h-auto"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-10">
            <Image
              src="/projects/mascha/loved/loved-mockup.webp"
              alt="Mascha Feel Loved CD Cover"
              width={1920}
              height={1080}
              className="w-full max-w-[520px] h-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-7 md:col-start-3 md:pt-6">
            <iframe
              data-testid="embed-iframe"
              className="rounded-2xl w-full"
              src="https://open.spotify.com/embed/track/6SYvsiN3KZqKIepny2UX5D?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        </div>
        <SectionHintsGrid currentHref="/mascha" />
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
