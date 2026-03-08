"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import LocalNav from "@/app/components/navigation/LocalNav";
import GalleryGrid from "@/app/components/GalleryGrid";
import Lightbox from "@/app/components/Lightbox";

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
              <div className="fixed inset-0 -z-10 pointer-events-none">
                <Image
                  src={
                    section.id === "art-therapy"
                      ? "/gallery/blowout.png"
                      : (sharedBackgroundImage ?? "/gallery/chat.webp")
                  }
                  alt=""
                  fill
                  loading={section.id === "art-therapy" ? "eager" : "lazy"}
                  className="object-cover opacity-15"
                />
              </div>

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
                  <FlipBook />
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      ))}

      {/* Disclaimer Section */}
      <section className="relative pb-24 pt-16">
        <div className="max-w-7xl mx-auto px-4 md:pl-32 md:pr-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-white/80 text-xl md:text-2xl">
              {t.disclaimer}
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="https://www.instagram.com/vio.festa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@vio.festa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

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
