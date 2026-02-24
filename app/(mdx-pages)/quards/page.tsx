"use client";

import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import QuardSwitcher from "./QuardSwitcher";
import QuardExamplesCarousel from "./QuardExamplesCarousel";
import LogoEquation from "./LogoEquation";
import BeforeAfter from "./BeforeAfter";
import ParallaxImage from "./ParallaxImage";
import Image from "next/image";
import NextProjectButton from "@/app/components/NextProjectButton";
import "@/app/styles/backgrounds.css";
import { QuardsTextProvider, useQuardsText } from "@/app/translations/quards";

// Static import for hero image
import heroImg from "@/public/projects/quards/featureArtNoBG.webp";

function QuardsInner() {
  const t = useQuardsText();

  const navs: NavSection[] = [
    {
      id: "app",
      label: t.navApp,
      src: "/icons/q1.png",
    },
    {
      id: "visual-identity",
      label: t.navVisualIdentity,
      src: "/icons/q2.png",
    },
  ];

  return (
    <div className="bg-[#24242e]">
      <Navigation sections={navs} />
      <ProjectHeroSection
        src={heroImg}
        alt="Quards"
        title={t.heroTitle}
        description={t.heroDescription}
      />

      <div className="flex flex-col gap-32 bg-dotted pt-16 md:pt-24">
        <div id="app">
          <div className="content-container flex flex-col gap-8">
            <h1>{t.appDesignTitle}</h1>
            <p>{t.appDesignP1}</p>
          </div>
          <div className="my-16">
            <BeforeAfter />
          </div>
          <div className="content-container flex flex-col gap-8">
            <p>{t.appDesignP2}</p>
            <QuardSwitcher />
          </div>
        </div>
        <div id="visual-identity">
          <div className="content-container flex flex-col gap-8">
            <h1>{t.visualIdentityTitle}</h1>
            <p>{t.visualIdentityP1}</p>
            <Image
              src="/projects/quards/QUARDS-empty.png"
              alt="Circles and squares artwork elements"
              width={1200}
              height={600}
              className="w-full h-auto"
              loading="lazy"
            />
            <LogoEquation />
            <p className="mb-16">{t.visualIdentityP2}</p>
          </div>
          <div className="my-16">
            {/* Full width version on mobile, parallax on desktop */}
            <Image
              src="/projects/quards/fullFeature.webp"
              alt="Quards feature artwork"
              width={1600}
              height={412}
              className="w-full h-auto sm:hidden"
              loading="lazy"
            />
            <div className="hidden sm:block">
              <ParallaxImage
                src="/projects/quards/fullFeature.webp"
                alt="Quards feature artwork"
                width={1600}
                height={412}
              />
            </div>
          </div>
          <div className="content-container flex justify-center">
            <Image
              src="/projects/quards/feature.webp"
              alt="Quards featured artwork"
              width={800}
              height={533}
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>
          <div className="content-container flex flex-col gap-8 mt-32 mb-16">
            <p>{t.visualIdentityP3}</p>
          </div>
          <Image
            src="/projects/quards/WebLandingPage.webp"
            alt="Quards landing page"
            className="rounded-lg mb-16"
            width={1920}
            height={1080}
            loading="lazy"
          />
          <div className="content-container flex flex-col gap-8 mt-16 mb-8">
            <p style={{ whiteSpace: "pre-line" }}>{t.visualIdentityP4}</p>
          </div>
          <QuardExamplesCarousel />
        </div>
      </div>

      {/* Summary Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/projects/quards/featureArtNoBG.webp"
            alt=""
            fill
            className="object-cover opacity-20"
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
          href="/mascha"
          label="Mascha"
          imageSrc="/covers/mascha/m3.webp"
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <QuardsTextProvider>
      <QuardsInner />
    </QuardsTextProvider>
  );
}

// <div className="flex flex-wrap gap-16 items-center md:-mt-16">
//   <div className="flex-2 basis-[300px]">
//     <p>
//       A Quard is a flashcard, and it&#39;s iPad shaped. There are two
//       things that make them different from other digital flashcards:
//     </p>
//     <ol className="my-4 space-y-2">
//       <li>
//         <strong>1.</strong> They are handdrawn.
//       </li>
//       <li>
//         <strong>2.</strong> They have layers (like in Photoshop, or
//         Procreate, or any design app).
//       </li>
//     </ol>
//   </div>
//   <div className="flex-1 basis-[300px]">
//     <QuardSwitcher />
//   </div>
// </div>
// <div className="flex flex-wrap flex-row-reverse gap-16 items-center md:-mt-16">
//   <p className="flex-1 basis-[300px]">
//     Quards are organised into folders, which are circles in a mindmap.
//     They resemble planets, in your knowledge universe.
//   </p>
//   <div className="flex-1 basis-[300px]">
//     <video
//       src="/projects/quards/tree_compressed.mp4"
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="w-full"
//     />
//   </div>
// </div>
