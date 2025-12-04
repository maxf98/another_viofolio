"use client";

import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import CustomsGallery from "./CustomsGallery";
import Giftboxes from "./Giftboxes";
import InfiniteScrollGallery from "./InfiniteScrollGallery";
import Image from "next/image";
import {
  customsWebShotsImages,
  dImages,
  xImages,
  ofestImages,
  winter22Images,
  winter23Images,
} from "@/app/data/elgato";

const navs: NavSection[] = [
  {
    id: "customs",
    src: "/projects/elgato/brand-illustration/winter22/221.png",
  },
  {
    id: "w22",
    src: "/projects/elgato/brand-illustration/groups/2.png",
  },
  {
    id: "ofest",
    src: "/projects/elgato/brand-illustration/groups/3.png",
  },
  {
    id: "w21",
    src: "/projects/elgato/brand-illustration/groups/1.png",
  },
];

export default function Page() {
  return (
    <div>
      <Navigation sections={navs} />

      <ProjectHeroSection
        src="/projects/elgato/front1.png"
        alt="Elgato Poster"
        title="Working with Elgato"
        description="Over the course of several years, I had the opportunity to work with
            Elgato on many visual projects. Our work together began with
            developing custom product designs and gradually expanded into
            creating illustrative and creative assets that brought their brand
            to life. Throughout this time, I worked closely with different teams
            across the company, and across the globe."
      />

      <div className="flex flex-col justify-center items-center gap-16">
        <div id="customs">
          <div className="content-container mb-24">
            <h1>Product Customs</h1>
            <p>
              My custom design projects involved working with product
              specifications and mockups using Adobe programs, while having the
              creative freedom to develop and execute my own ideas or bring
              specific design directions to life. I created a wide range of
              designs for both Elgato’s own product releases and their partner
              collaborations.
            </p>
          </div>
          <CustomsGallery />
        </div>

        <InfiniteScrollGallery
          images={customsWebShotsImages}
          altPrefix="Customs web shot"
        />

        <div className="content-container">
          <h1>Dreamville x Elgato </h1>
          <Image
            src="/covers/elgato+/ville.png"
            alt="Dreamville x Elgato"
            width={1920}
            height={1080}
            className="w-full"
          />
          <p>
            {" "}
            I designed the first limited-edition Dreamville x Elgato Wave 3
            microphone, creating the visual concept, color variations, and
            assets used for the collaboration’s promotion.
          </p>
        </div>
        <InfiniteScrollGallery
          images={dImages}
          altPrefix="D collection"
          direction="right"
        />
        <div className="content-container">
          <Image
            src="/covers/elgato+/x2.png"
            alt="Elgato X"
            width={1920}
            height={1080}
            className="w-full"
          />
          <p>
            I developed the visual identity for Elgato&#39;s 10-year anniversary
            event, creating limited-edition products featuring a custom pattern,
            two color palettes, and the Elgato X event logo.
          </p>
        </div>
        <InfiniteScrollGallery images={xImages} altPrefix="X collection" />

        <Giftboxes />
      </div>
    </div>
  );
}
