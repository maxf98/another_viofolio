"use client";

import { useState } from "react";
import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import CustomsGallery from "./CustomsGallery";
import Giftboxes from "./Giftboxes";
import InfiniteScrollGallery from "./InfiniteScrollGallery";
import Lightbox from "@/app/components/Lightbox";
import Image from "next/image";
import { ImageItem } from "@/app/data/model";
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
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleDreamvilleClick = (imageIndex: number) => {
    const images = dImages.map((img, i) => ({
      index: i,
      image: img,
      alt: `Dreamville x Elgato ${i + 1}`,
    }));
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
  };

  const handleXClick = (imageIndex: number) => {
    const images = xImages.map((img, i) => ({
      index: i,
      image: img,
      alt: `Elgato X ${i + 1}`,
    }));
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
  };

  return (
    <div>
      <Navigation sections={navs} />

      <ProjectHeroSection
        src="/projects/elgato/front1.png"
        alt="Elgato Poster"
        title="Working with Elgato"
        description="Elgato is a leading creator of hardware and software for content creators, known for products like the Stream Deck, capture cards, microphones, and lighting tools used by streamers and creatives worldwide. I had the opportunity to collaborate with their teams globally on custom product designs and illustrated brand assets, contributing to the visual identity of several releases and campaigns."
      />

      <div className="flex flex-col justify-center items-center gap-16">
        <div id="customs">
          <div className="content-container mb-24">
            <h1>Product Customs</h1>
            <p>
              I created a wide range of custom designs for Elgato’s
              interchangeable Stream Deck and Wave XLR faceplates, including the
              first versions released in their store and various partner
              collaborations. Working from product mockups, I developed both
              assigned concepts and self-initiated proposals, collaborating
              closely with Elgato’s print team to bring these designs to life as
              pieces now in the hands of creators globally.
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
            I helped bring the first Dreamville x Elgato Wave 3 microphone to
            life by crafting its visual identity, exploring color directions,
            and creating assets used throughout the collaboration’s launch.
          </p>
        </div>
        <InfiniteScrollGallery
          images={dImages}
          altPrefix="D collection"
          direction="backward"
          onImageClick={handleDreamvilleClick}
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
            For Elgato’s 10-year anniversary, I developed the event’s visual
            identity, creating limited-edition products featuring a custom
            pattern, two color palettes, and the Elgato X event logo.
          </p>
        </div>
        <InfiniteScrollGallery
          images={xImages}
          altPrefix="X collection"
          onImageClick={handleXClick}
        />

        <Giftboxes />

        <Lightbox
          images={lightboxImages}
          selectedIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      </div>
    </div>
  );
}
