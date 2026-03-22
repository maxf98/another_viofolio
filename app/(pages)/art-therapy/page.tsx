"use client";

import { useState } from "react";
import LocalNav from "@/app/components/navigation/LocalNav";
import GalleryGrid from "@/app/components/GalleryGrid";
import Lightbox from "@/app/components/Lightbox";
import SectionHintsGrid from "@/app/components/SectionHintsGrid";
import FixedBackgroundImage from "@/app/components/FixedBackgroundImage";
import PageHeader from "@/app/components/PageHeader";
import { GalleryItem } from "@/app/model";
import {
  GalleryTextProvider,
  useGalleryText,
} from "@/app/translations/gallery";

function ArtTherapyInner() {
  const t = useGalleryText();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<GalleryItem[]>([]);

  const section = t.sections.find((s) => s.id === "art-therapy");

  function openLightbox(image: GalleryItem, images: GalleryItem[]) {
    const idx = images.findIndex(
      (img) => img.index === image.index && img.alt === image.alt,
    );
    if (idx === -1) return;
    setLightboxImages(images);
    setSelectedImage(idx);
  }

  return (
    <div className="flex flex-col relative isolate min-h-screen overflow-x-hidden">
      <FixedBackgroundImage
        src="/gallery/Frottage.png"
        opacity={0.06}
        loading="eager"
      />

      <LocalNav
        sections={[{ id: "art-therapy", label: t.navAnalogueExplorations }]}
      />

      <section className="relative z-10" style={{ clipPath: "inset(0)" }}>
        <div id="art-therapy" className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            {section && (
              <>
                <PageHeader title={section.title} description={section.description} />
                <GalleryGrid
                  images={section.images}
                  clickedImage={(image) => openLightbox(image, section.images)}
                  maxColumns={3}
                />
              </>
            )}
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <SectionHintsGrid currentHref="/art-therapy" transparentCards />
      </div>

      {lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          selectedIndex={selectedImage}
          onClose={() => {
            setSelectedImage(null);
            setLightboxImages([]);
          }}
          showText={false}
        />
      )}
    </div>
  );
}

export default function ArtTherapyPage() {
  return (
    <GalleryTextProvider>
      <ArtTherapyInner />
    </GalleryTextProvider>
  );
}
