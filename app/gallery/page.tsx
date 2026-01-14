"use client";

import React, { useState, useMemo } from "react";
import Navigation from "../components/navigation/Navigation";
import GalleryGrid from "@/app/components/GalleryGrid";
import Lightbox from "@/app/components/Lightbox";

import { GalleryItem } from "@/app/data/model";
import { gallery_sections } from "@/app/data/graph";
import FlipBook from "@/app/components/monkeybrain/FlipBook";

function WorkGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    sectionIndex: number;
    imageIndex: number;
  } | null>(null);

  // Flatten all images for lightbox navigation
  const allImages = useMemo(() => {
    return gallery_sections.flatMap((section) => section.images);
  }, []);

  // Get the global index for lightbox
  const selectedIndex = useMemo(() => {
    if (!selectedImage) return null;
    let index = 0;
    for (let i = 0; i < selectedImage.sectionIndex; i++) {
      index += gallery_sections[i].images.length;
    }
    return index + selectedImage.imageIndex;
  }, [selectedImage]);

  function clickedImage(sectionIndex: number, image: GalleryItem) {
    const imageIndex = gallery_sections[sectionIndex].images.findIndex(
      (img) => img.index === image.index
    );
    setSelectedImage({ sectionIndex, imageIndex });
  }

  return (
    <div className="flex flex-col relative min-h-screen bg-[#1a1a1f]">
      <Navigation sections={[
        { id: "illustrated-photography", label: "Illustrated Photography", src: "/icons/photo.png" },
        { id: "art-therapy", label: "Analogue Explorations", src: "/icons/art-icon.png" },
        { id: "monkeybrain", label: "Monkeybrain Magazine", src: "/icons/mag-icon.png" },
      ]} />

      {/* All Gallery Sections Stacked */}
      <div className="relative bg-[#1a1a1f] pt-32 md:pt-24 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 px-4 md:pl-32 md:pr-8">
          {gallery_sections.map((section, sectionIndex) => (
            <React.Fragment key={section.id}>
              {section.images.length > 0 && (
                <div id={section.id}>
                  <div className="mb-6 px-2 text-left">
                    <h2 className="text-white/90 text-3xl md:text-3xl font-medium">
                      {section.title}
                    </h2>
                    <p className="text-white/50 text-lg md:text-lg mt-1">
                      {section.description}
                    </p>
                  </div>
                  <GalleryGrid
                    images={section.images}
                    clickedImage={(image) => clickedImage(sectionIndex, image)}
                  />
                </div>
              )}
              {/* Monkeybrain Magazine Section - after Art Therapy */}
              {section.id === "art-therapy" && (
                <div id="monkeybrain">
                  <div className="mb-6 px-2 text-left">
                    <h2 className="text-white/90 text-3xl md:text-3xl font-medium">
                      Monkeybrain Magazine
                    </h2>
                    <p className="text-white/50 text-lg md:text-lg mt-1">
                      My bachelor thesis project—a magazine exploring creative chaos and artistic expression.
                    </p>
                  </div>
                  <FlipBook />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Lightbox
        images={allImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default WorkGallery;
