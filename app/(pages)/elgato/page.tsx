"use client";

import { useState } from "react";
import LocalNav, { NavSection } from "@/app/components/navigation/LocalNav";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import CustomsGallery from "./CustomsGallery";
import Giftboxes from "./Giftboxes";
import ClickThroughGallery from "@/app/components/ClickThroughGallery";
import Lightbox from "@/app/components/Lightbox";
import SectionHintsGrid from "@/app/components/SectionHintsGrid";
import FixedBackgroundImage from "@/app/components/FixedBackgroundImage";
import Image from "next/image";
import { ImageItem } from "@/app/model";
import { dImages, xImages } from "./images";
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
    <div className="bg-transparent overflow-x-hidden">
      <LocalNav sections={navs} />

      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <FixedBackgroundImage
          src={heroImg}
          alt="Elgato Poster"
          opacity={0.2}
          objectPosition="center 70%"
          containerClassName="-z-10 bg-[#24242e]"
          quality={60}
          priority
        />
        <ProjectHeroSection
          title={t.heroTitle}
          description={t.heroDescription}
          noBackground
        />

        {/* Product Customs Section */}
        <div className="flex flex-col justify-center items-center gap-16 pt-32 md:pt-32 pb-24 md:pb-16">
          <div id="customs" className="w-full">
            <div className="mb-24 content-container">
              <h1>{t.customsTitle}</h1>
              <p className="mb-12">{t.customsDescription}</p>
              <CustomsGallery
                onPairClick={handlePairClick}
                onSdClick={handleSdClick}
                onXlrClick={handleXlrClick}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Collaborations Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <FixedBackgroundImage
          src="/projects/elgato/D/8.jpg"
          opacity={0.05}
          containerClassName="-z-10 bg-[#1e1e28]"
          quality={60}
          loading="eager"
        />
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
          <div className="w-full mt-2 md:mt-4 mb-6 md:mb-10">
            <div className="relative mx-auto w-full max-w-7xl px-3 md:px-6">
              <div className="rounded-[26px] border border-white/12 bg-black/20 backdrop-blur-[2px] p-3 md:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <div className="relative">
                  <ClickThroughGallery
                    images={dImages}
                    altPrefix="D collection"
                    onImageClick={handleDreamvilleClick}
                    height={300}
                    showScrollHint
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anniversary Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <FixedBackgroundImage
          src="/projects/elgato/X/4.png"
          opacity={0.05}
          containerClassName="-z-10 bg-[#24242e]"
          quality={60}
          loading="eager"
        />
        <div
          id="anniversary"
          className="flex flex-col justify-center items-center gap-16 py-24 md:py-16"
        >
          <div className="content-container pt-16 md:pt-0">
            <h1>{t.anniversaryTitle}</h1>
            <div className="flex flex-col-reverse md:flex-col-reverse gap-4">
              <Image
                src="/covers/elgato+/x22.png"
                alt="Elgato X"
                width={1920}
                height={1080}
                className="w-full max-w-[480px] mx-auto"
              />
              <p>{t.anniversaryDescription}</p>
            </div>
          </div>
          <div className="w-full mt-2 md:mt-4 mb-6 md:mb-10">
            <div className="relative mx-auto w-full max-w-7xl px-3 md:px-6">
              <div className="rounded-[26px] border border-white/12 bg-black/20 backdrop-blur-[2px] p-3 md:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <div className="relative">
                  <ClickThroughGallery
                    images={xImages}
                    altPrefix="X collection"
                    onImageClick={handleXClick}
                    height={300}
                    showScrollHint
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giftboxes Section */}
      <div className="relative" style={{ clipPath: "inset(0)" }}>
        <FixedBackgroundImage
          src="/projects/elgato/brand-illustration/winter23/1.png"
          opacity={0.05}
          containerClassName="-z-10 bg-[#1e1e28]"
          quality={60}
          loading="eager"
        />
        <div className="">
          <Giftboxes />
        </div>
      </div>
      <SectionHintsGrid currentHref="/elgato" transparentCards />

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
