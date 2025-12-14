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
import { pairImages, sdImages, xlrImages } from "./CustomsGallery";

// Static import for hero image
import heroImg from "@/public/projects/elgato/gato3.png";

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

  const handleCustomsWebShotsClick = (imageIndex: number) => {
    const images = customsWebShotsImages.map((img, i) => ({
      index: i,
      image: img,
      alt: `Customs web shot ${i + 1}`,
    }));
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
  };

  const handlePairClick = (imageIndex: number) => {
    const images = pairImages.map((img, i) => ({
      index: i,
      image: img,
      alt: `Pair design ${i + 1}`,
    }));
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
  };

  const handleSdClick = (imageIndex: number) => {
    const images = sdImages.map((img, i) => ({
      index: i,
      image: img,
      alt: `Stream Deck design ${i + 1}`,
    }));
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
  };

  const handleXlrClick = (imageIndex: number) => {
    const images = xlrImages.map((img, i) => ({
      index: i,
      image: img,
      alt: `XLR design ${i + 1}`,
    }));
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
  };

  return (
    <div className="bg-[#24242e]">
      <Navigation sections={navs} />

      <ProjectHeroSection
        src={heroImg}
        alt="Elgato Poster"
        title="WORKING WITH ^ELGATO^"
        description="Elgato is a leading creator of hardware and software for content creators, known for products like the Stream Deck, capture cards, microphones, and lighting tools used by streamers and creatives worldwide. I had the opportunity to collaborate with their teams globally on custom product designs and illustrated brand assets, contributing to the visual identity of several releases and campaigns."
      />

      {/* Product Customs Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#2e2a4d]">
          <Image
            src="/covers/elgato+/uni.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-16 pt-24 md:pt-32 pb-16">
          <div id="customs">
            <div className="content-container mb-24">
              <h1>Product Customs</h1>
              <p>
                I designed custom faceplates for Elgato&apos;s Stream Deck and
                Wave XLR, including the first versions released in their store
                and various partner collaborations.
              </p>
            </div>
            <CustomsGallery
                onPairClick={handlePairClick}
                onSdClick={handleSdClick}
                onXlrClick={handleXlrClick}
              />
          </div>

          <InfiniteScrollGallery
            images={customsWebShotsImages}
            altPrefix="Customs web shot"
            onImageClick={handleCustomsWebShotsClick}
            cropLeftHalf={[]}
          />
        </div>
      </div>

      {/* Collaborations Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#1e1e28]">
          <Image
            src="/projects/elgato/D/8.jpg"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-16 py-16">
          <div className="content-container">
            <h1>Dreamville x Elgato </h1>
            <div className="flex flex-col-reverse md:flex-col-reverse gap-4">
              <Image
                src="/covers/elgato+/ville.png"
                alt="Dreamville x Elgato"
                width={1920}
                height={1080}
                className="w-full"
              />
              <p>
                I helped bring the first Dreamville x Elgato Wave 3 microphone
                to life by crafting its visual identity, exploring color
                directions, and creating assets used throughout the
                collaboration&apos;s launch.
              </p>
            </div>
          </div>
          <InfiniteScrollGallery
            images={dImages}
            altPrefix="D collection"
            direction="backward"
            onImageClick={handleDreamvilleClick}
          />
        </div>
      </div>

      {/* Anniversary Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/projects/elgato/X/4.png"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-16 py-16">
          <div className="content-container">
            <h1>Anniversary Designs</h1>
            <div className="flex flex-col-reverse md:flex-col-reverse gap-4">
              <Image
                src="/covers/elgato+/x2.png"
                alt="Elgato X"
                width={1920}
                height={1080}
                className="w-[calc(100%+4rem)] -mx-8 md:w-full md:mx-0"
              />
              <p>
                For Elgato&apos;s 10-year anniversary, I developed the
                event&apos;s visual identity, creating limited-edition products
                featuring a custom pattern, two color palettes, and the Elgato X
                event logo.
              </p>
            </div>
          </div>
          <InfiniteScrollGallery
            images={xImages}
            altPrefix="X collection"
            onImageClick={handleXClick}
          />
        </div>
      </div>

      {/* Giftboxes Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#1e1e28]">
          <Image
            src="/projects/elgato/brand-illustration/winter23/1.png"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="">
          <Giftboxes />
        </div>
      </div>

      <div className="h-32" />

      {/* Summary Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/projects/elgato/gato3.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="content-container py-32 flex flex-col items-center text-center">
          <p className="max-w-2xl text-lg">
            Throughout these projects, I faced many challenges and learned a great deal—working across a wide variety of specifications, experimenting with new ideas, and always keeping the brand feeling consistent.
          </p>
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
