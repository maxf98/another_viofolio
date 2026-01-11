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

// Static import for hero image
import heroImg from "@/public/projects/quards/featureArtNoBG.png";

const navs: NavSection[] = [
  {
    id: "app",
    label: "App Design",
    src: "/icons/q1.png",
  },
  {
    id: "visual-identity",
    label: "Visual Identity",
    src: "/icons/q2.png",
  },
];

export default function Page() {
  return (
    <div className="bg-[#24242e]">
      <Navigation sections={navs} />
      <ProjectHeroSection
        src={heroImg}
        alt="Quards"
        title="WORKING ON ^QUARDS^"
        description="Quards is an indie iPad app for creating handdrawn flashcards, for which I developed the visual identity and created all assets.
        As the only designer, working with a single developer, that meant I was responsible for a wide variety of big and small tasks, from designing button icons, to logo design, colors, app store screenshots and themed artworks."
      />

      <div className="flex flex-col gap-32 bg-dotted pt-16 md:pt-24">
        <div id="app">
          <div className="content-container flex flex-col gap-8">
            <h1>App Design</h1>
            <p>
              When I joined the project, the app had no visual design—just basic
              functionality. I helped transform it into what you see today,
              bringing the builder&apos;s vision to life together with my own
              additions.
            </p>
          </div>
          <div className="my-16">
            <BeforeAfter />
          </div>
          <div className="content-container flex flex-col gap-8">
            <p>
              What makes Quards unique is that instead of having two sides like
              a regular flashcard, a Quard has <i>layers</i>—a question layer
              and an answer layer, a decision inspired by digital illustration
              programs.
            </p>
            <QuardSwitcher />
          </div>
        </div>
        <div id="visual-identity">
          <div className="content-container flex flex-col gap-8">
            <h1>Visual Identity</h1>
            <p>
              The app consists of two basic elements: the circle (folder) and
              the rounded rectangle (quard), which together form the logo.
            </p>
            <Image
              src="/projects/quards/QUARDS-empty.png"
              alt="Circles and squares artwork elements"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <LogoEquation />
            <p className="mb-16">
              I developed the visual identity around this concept of squares and
              circles—cards and folders orbiting in a personal knowledge
              universe, with the learner at the center.
            </p>
          </div>
          <div className="my-16">
            {/* Full width version on mobile, parallax on desktop */}
            <Image
              src="/projects/quards/fullFeature.png"
              alt="Quards feature artwork"
              width={1600}
              height={412}
              className="w-full h-auto sm:hidden"
            />
            <div className="hidden sm:block">
              <ParallaxImage
                src="/projects/quards/fullFeature.png"
                alt="Quards feature artwork"
                width={1600}
                height={412}
              />
            </div>
          </div>
          <div className="content-container flex justify-center">
            <Image
              src="/projects/quards/feature.png"
              alt="Quards featured artwork"
              width={800}
              height={533}
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="content-container flex flex-col gap-8 mt-32 mb-16">
            <p>
              This idea of space and floating elements was carried through to
              the website, showing the unique and representative elements of the
              app—cards, folders, drawings—floating in space.
            </p>
          </div>
          <Image
            src="/projects/quards/WebLandingPage.png"
            alt="Quards landing page"
            className="rounded-lg mb-16"
            width={1920}
            height={1080}
          />
          <div className="content-container flex flex-col gap-8 mt-16 mb-8">
            <p>
              Quards is about drawing instead of typing, about feeling free and
              having fun and putting your soul into something that can otherwise
              feel kind of rigid and boring: studying. The design reflects this
              through its use of color and handdrawn visual assets.
              <br /> <br />I created these visuals for the app store and
              onboarding to showcase what using the app feels like:
            </p>
          </div>
          <QuardExamplesCarousel />
        </div>
      </div>

      {/* Summary Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/projects/quards/featureArtNoBG.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="content-container py-32 flex flex-col items-center text-center">
          <p className="max-w-2xl text-lg">
            Being the sole designer on this project taught me to wear many
            hats—from icon design to brand strategy, from app store assets to
            marketing materials. It was a rewarding challenge that pushed me to
            grow in every direction.
          </p>
        </div>
      </div>

      {/* Next Project Button - on blank background */}
      <div className="bg-[#1c1b1b]">
        <NextProjectButton
          href="/mascha"
          label="Mascha"
          imageSrc="/covers/mascha/m3.png"
        />
      </div>
    </div>
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
