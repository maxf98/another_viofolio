import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import QuardSwitcher from "./QuardSwitcher";
import QuardExamplesCarousel from "./QuardExamplesCarousel";
import LogoEquation from "./LogoEquation";
import BeforeAfter from "./BeforeAfter";
import ParallaxImage from "./ParallaxImage";
import Link from "next/link";
import Image from "next/image";
import "@/app/styles/backgrounds.css";

const navs: NavSection[] = [
  {
    id: "app",
    src: "",
  },
  {
    id: "brand",
    src: "",
  },
  {
    id: "visual-identity",
    src: "",
  },
];

export default function Page() {
  return (
    <div className="bg-[#24242e]">
      <Navigation sections={navs} />
      <ProjectHeroSection
        src="/projects/quards/featureArtNoBG.png"
        alt="Quards"
        title="WORKING ON ^QUARDS^"
        description="Quards is an indie iPad app for creating handdrawn flashcards, for which I developed the visual identity and created all assets.
        As the only designer, working with a single developer, that meant I was responsible for a wide variety of big and small tasks, from designing button icons, to logo design, colors, app store screenshots and themed artworks."
      />

      <div className="flex flex-col gap-32 bg-dotted pt-16 md:pt-24">
        <div id="app" className="content-container">
          <h1>App Design</h1>
          <p>
            When I started working on this app, the design was... non-existent.
            It took a lot of work to get it where it is now. Check the before
            and after to see what I mean.
          </p>
          <BeforeAfter />
          <p>
            One of the core selling points of the app is that instead of having
            two sides (like a regular flashcard), a Quard has <i>layers</i>, so
            instead of a front and a back, a Quard has a question and an answer
            layer. I got that idea from the design apps I use!
          </p>
          <QuardSwitcher />
        </div>
        <div id="brand">
          <div className="content-container flex flex-col gap-8 mb-32">
            <h1>Circles and Squares</h1>
            <p>
              The app consists of two basic elements: the circle (folder) and
              the rounded rectangle (quard), which together form the logo.
            </p>
            <LogoEquation size={120} logoSize={240} />
            <p className="">
              The app was featured on Apple&#39;s App Store when it launched, so
              I created a themed artwork around these basic elements, showing
              the learner at the center of his personal knowledge universe.
            </p>
          </div>
          <ParallaxImage
            src="/projects/quards/fullFeature.png"
            alt="Quards feature artwork"
            width={1600}
            height={412}
          />
          <div className="content-container flex gap-4 mt-32">
            <Image
              src="/projects/quards/appstore/appstore.png"
              alt="Quards App Store"
              width={960}
              height={540}
              className="flex-1 w-0 ipad-border"
            />
            <Image
              src="/projects/quards/appstore/feature.png"
              alt="Quards Feature"
              width={960}
              height={540}
              className="flex-1 w-0 ipad-border"
            />
          </div>
        </div>
        <div
          id="visual-identity"
          className="content-container mt-16 md:mt-48 flex flex-col gap-16"
        >
          <h1>Visual Identity</h1>
          <p>
            Quards is about drawing instead of typing, about feeling free and
            having fun and putting your soul into something that can otherwise
            feel kind of rigid and boring: studying.
            <br /> <br />
            The design of the app highlights this through its use of color, and
            through visual assets (like types and icons) that are primarily
            handdrawn. The{" "}
            <Link href="https://www.quards.app">landing page</Link> is an
            example of this:
          </p>
          <Image
            src="/projects/quards/WebLandingPage.png"
            alt="Quards landing page"
            className="rounded-lg"
            width={1920}
            height={1080}
          />
          <p className="mb-32">
            And any number of other assets and icons in around the app...
          </p>
          <Image
            src="/projects/quards/webicons.png"
            alt="Quards icons"
            className="rounded-lg"
            width={1920}
            height={1080}
          />
          <p>And so is the onboarding (and app store screenshots):</p>
          <QuardExamplesCarousel />
        </div>
      </div>

      <div className="h-32" />

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
            Being the sole designer on this project taught me to wear many hats—from icon design to brand strategy, from app store assets to marketing materials. It was a rewarding challenge that pushed me to grow in every direction.
          </p>
        </div>
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
