"use client";

import { useState } from "react";
import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import CustomsGallery from "./CustomsGallery";
import Giftboxes from "./Giftboxes";
import InfiniteScrollGallery from "../../components/InfiniteScrollGallery";
import Lightbox from "@/app/components/Lightbox";
import NextProjectButton from "@/app/components/NextProjectButton";
import Image from "next/image";
import { ImageItem } from "@/app/data/model";
import workingImg from "@/public/working.png";
import {
  customsWebShotsImages,
  dImages,
  xImages,
  ofestImages,
  winter22Images,
  winter23Images,
} from "@/app/data/elgato";
import { pairImages, sdImages, xlrImages } from "./CustomsGallery";
import { ElgatoTextProvider, useElgatoText } from "@/app/translations/elgato";

// Static import for hero image
import heroImg from "@/public/projects/elgato/gato3.png";

function ElgatoInner() {
  const t = useElgatoText();
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const navs: NavSection[] = [
    {
      id: "customs",
      label: t.customsTitle,
      src: "/icons/sd.png",
    },
    {
      id: "w22",
      label: t.dreamvilleTitle,
      src: "/icons/D.png",
    },
    {
      id: "anniversary",
      label: t.anniversaryTitle,
      src: "/icons/ex.png",
    },
    {
      id: "w21",
      label: t.giftboxesTitle,
      src: "/icons/gift.png",
    },
  ];

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
    <div className="bg-[#24242e] overflow-x-hidden">
      <Navigation sections={navs} />

      <ProjectHeroSection
        src={heroImg}
        alt="Elgato Poster"
        title={t.heroTitle}
        description={t.heroDescription}
      />

      {/* Product Customs Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-[#24242e]">
          <Image
            src="/projects/elgato/gato3.png"
            alt=""
            fill
            className="object-cover opacity-20"
            style={{ objectPosition: "center 70%" }}
          />
        </div>
        <div className="content-container flex flex-col justify-center items-center gap-16 pt-32 md:pt-32 pb-24 md:pb-16">
          <div id="customs">
            <div className="mb-24">
              <h1>{t.customsTitle}</h1>
              <p>{t.customsDescription}</p>
            </div>
            <CustomsGallery
              onPairClick={handlePairClick}
              onSdClick={handleSdClick}
              onXlrClick={handleXlrClick}
            />
          </div>
        </div>
        <InfiniteScrollGallery
          images={customsWebShotsImages}
          altPrefix="Customs web shot"
          onImageClick={handleCustomsWebShotsClick}
          cropLeftHalf={[]}
        />
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
        <div className="flex flex-col justify-center items-center gap-16 py-32 md:py-16">
          <div id="w22" className="content-container pt-16 md:pt-0">
            <h1>{t.dreamvilleTitle}</h1>
            <div className="flex flex-col-reverse md:flex-col-reverse gap-4">
              <Image
                src="/covers/elgato+/ville.png"
                alt="Dreamville x Elgato"
                width={1920}
                height={1080}
                className="w-full"
              />
              <p>{t.dreamvilleDescription}</p>
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
        <div
          id="anniversary"
          className="flex flex-col justify-center items-center gap-16 py-24 md:py-16"
        >
          <div className="content-container pt-16 md:pt-0">
            <h1>{t.anniversaryTitle}</h1>
            <div className="flex flex-col-reverse md:flex-col-reverse gap-4">
              <Image
                src="/covers/elgato+/x2.png"
                alt="Elgato X"
                width={1920}
                height={1080}
                className="w-full"
              />
              <p>{t.anniversaryDescription}</p>
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
          <p className="max-w-2xl text-lg">{t.summaryText}</p>
        </div>
      </div>

      {/* Next Project Button - match page background */}
      <div className="bg-[#24242e]">
        <NextProjectButton
          href="/quards"
          label="Quards"
          imageSrc="/covers/quards/quards.png"
        />
      </div>

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        showText={false}
      />
    </div>
  );
}

export default function Page() {
  return (
    <ElgatoTextProvider>
      <ElgatoInner />
    </ElgatoTextProvider>
  );
}
