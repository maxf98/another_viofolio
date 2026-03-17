"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import LocalNav from "@/app/components/navigation/LocalNav";
import GalleryGrid from "@/app/components/GalleryGrid";
import Lightbox from "@/app/components/Lightbox";
import FixedBackgroundImage from "@/app/components/FixedBackgroundImage";

import { GalleryItem } from "@/app/data/model";
import FlipBook from "@/app/components/monkeybrain/FlipBook";
import { GalleryTextProvider, useGalleryText } from "@/app/translations/gallery";

function WorkGalleryInner() {
  const t = useGalleryText();
  const [selectedImage, setSelectedImage] = useState<{
    sectionIndex: number;
    imageIndex: number;
  } | null>(null);

  // Scope lightbox navigation to the currently selected section only
  const activeSectionImages = useMemo(() => {
    if (!selectedImage) return [];
    return t.sections[selectedImage.sectionIndex]?.images ?? [];
  }, [selectedImage, t.sections]);

  function clickedImage(sectionIndex: number, image: GalleryItem) {
    const imageIndex = t.sections[sectionIndex].images.findIndex(
      (img) => img.index === image.index
    );
    setSelectedImage({ sectionIndex, imageIndex });
  }

  // Get the shared background image (first image from illustrated photography)
  const sharedBackgroundImage = t.sections.find(s => s.id === "illustrated-photography")?.images[0]?.image;

  return (
    <div className="flex flex-col relative min-h-screen overflow-x-hidden">
      <LocalNav sections={[
        { id: "illustrated-photography", label: t.navIllustratedPhotography, src: "/icons/photo.png" },
        { id: "art-therapy", label: t.navAnalogueExplorations, src: "/icons/art-icon.png" },
        { id: "monkeybrain", label: t.navMonkeybrain, src: "/icons/mag-icon.png" },
      ]} />

      {/* All Gallery Sections Stacked */}
      {t.sections.map((section, sectionIndex) => (
        <React.Fragment key={section.id}>
          {section.images.length > 0 && section.id !== "monkeybrain-gallery" && (
            <section className="relative" style={{ clipPath: "inset(0)" }}>
              <FixedBackgroundImage
                src={
                  section.id === "illustrated-photography"
                    ? "/gallery/bird.webp"
                    : section.id === "art-therapy"
                    ? "/gallery/blowout.png"
                    : (sharedBackgroundImage ?? "/gallery/chat.webp")
                }
                opacity={0.15}
                loading={section.id === "art-therapy" ? "eager" : "lazy"}
              />

              <div id={section.id} className="pt-24 md:pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 md:pl-32 md:pr-8">
                  {/* Personal Archive title for first section */}
                  {sectionIndex === 0 && (
                    <div className="mb-24 flex flex-col items-center gap-4">
                      <Image
                        src="/archive.webp"
                        alt={t.archiveTitle}
                        width={400}
                        height={200}
                        className="w-3/4 md:w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                        priority
                      />
                      <p className="text-white/80 text-center text-lg md:text-xl max-w-3xl leading-relaxed">
                        {t.archiveDescription}
                      </p>
                    </div>
                  )}

                  <div className="mb-6 px-2 text-left">
                    <h2 className="text-white text-4xl md:text-4xl font-semibold">
                      {section.title}
                    </h2>
                    <p className="text-white/80 text-lg md:text-lg mt-2">
                      {section.description}
                    </p>
                    {section.id === "art-therapy" && (
                      <p className="text-white/70 text-base md:text-lg mt-2 italic">
                        {t.artTherapyHint}
                      </p>
                    )}
                  </div>
                  <div className="mt-8">
                    <GalleryGrid
                      images={section.images}
                      clickedImage={(image) => clickedImage(sectionIndex, image)}
                      maxColumns={section.id === "art-therapy" ? 3 : 4}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* Monkeybrain Magazine Section - after Art Therapy */}
          {section.id === "art-therapy" && (
            <section className="relative" style={{ clipPath: "inset(0)" }}>
              <div id="monkeybrain" className="pt-32 md:pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 md:pl-32 md:pr-8">
                  <div className="mb-6 px-2 text-left">
                    <h2 className="text-white text-4xl md:text-4xl font-semibold">
                      {t.monkeybrain.title}
                    </h2>
                    <p className="text-white/80 text-lg md:text-lg mt-2">
                      {t.monkeybrain.description}
                    </p>
                  </div>
                  <FlipBook
                    tapHintText={t.monkeybrain.tapToFlickThrough}
                    landscapeHintText={t.monkeybrain.betterInLandscape}
                  />
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      ))}

      <Lightbox
        images={activeSectionImages}
        selectedIndex={selectedImage?.imageIndex ?? null}
        onClose={() => setSelectedImage(null)}
        showText={selectedImage?.sectionIndex !== 0}
      />
    </div>
  );
}

export default function WorkGallery() {
  return (
    <GalleryTextProvider>
      <WorkGalleryInner />
    </GalleryTextProvider>
  );
}
