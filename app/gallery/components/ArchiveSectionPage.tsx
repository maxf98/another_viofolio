"use client";

import { useMemo, useState } from "react";
import LocalNav from "@/app/components/navigation/LocalNav";
import GalleryGrid from "@/app/components/GalleryGrid";
import Lightbox from "@/app/components/Lightbox";
import FlipBook from "@/app/components/monkeybrain/FlipBook";
import SectionHintsGrid from "@/app/components/SectionHintsGrid";
import FixedBackgroundImage from "@/app/components/FixedBackgroundImage";
import { GalleryItem } from "@/app/data/model";
import { useGalleryText } from "@/app/translations/gallery";

type ArchiveSectionId = "illustrated-photography" | "art-therapy" | "monkeybrain";

interface ArchiveSectionPageProps {
  sectionId: ArchiveSectionId;
}

export default function ArchiveSectionPage({ sectionId }: ArchiveSectionPageProps) {
  const t = useGalleryText();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<GalleryItem[]>([]);

  const archiveLinks = [
    {
      id: "illustrated-photography" as const,
      href: "/gallery/illustrated-photography",
      label: t.navIllustratedPhotography,
      icon: "/icons/photo.png",
    },
    {
      id: "art-therapy" as const,
      href: "/gallery/art-therapy",
      label: t.navAnalogueExplorations,
      icon: "/icons/art-icon.png",
    },
    {
      id: "monkeybrain" as const,
      href: "/gallery/monkeybrain",
      label: t.navMonkeybrain,
      icon: "/icons/mag-icon.png",
    },
  ];

  const section =
    sectionId === "monkeybrain"
      ? null
      : t.sections.find((s) => s.id === sectionId);

  const backgroundImage = useMemo(() => {
    if (sectionId === "illustrated-photography") return "/gallery/bird.webp";
    if (sectionId === "art-therapy") return "/gallery/Frottage.png";
    if (sectionId === "monkeybrain") return "/gallery/m2%202.png";
    if (section?.images?.length) return section.images[0].image;
    return t.sections.find((s) => s.id === "illustrated-photography")?.images[0]?.image;
  }, [sectionId, section, t.sections]);

  function openLightbox(image: GalleryItem, images: GalleryItem[]) {
    const imageIndex = images.findIndex(
      (img) => img.index === image.index && img.alt === image.alt
    );
    if (imageIndex === -1) return;
    setLightboxImages(images);
    setSelectedImage(imageIndex);
  }

  const currentLink = archiveLinks.find((link) => link.id === sectionId);
  const currentHref =
    sectionId === "illustrated-photography"
      ? "/gallery/illustrated-photography"
      : sectionId === "art-therapy"
        ? "/gallery/art-therapy"
        : "/gallery/monkeybrain";

  return (
    <div className="flex flex-col relative min-h-screen overflow-x-hidden">
      <LocalNav
        sections={[
          {
            id: "archive-section",
            label: currentLink?.label ?? t.navIllustratedPhotography,
          },
        ]}
      />

      {backgroundImage && (
        <FixedBackgroundImage
          src={backgroundImage}
          opacity={sectionId === "art-therapy" ? 0.1 : 0.15}
          loading={sectionId === "art-therapy" ? "eager" : "lazy"}
        />
      )}

      <section className="relative" style={{ clipPath: "inset(0)" }}>
        <div id="archive-section" className="pt-24 md:pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            {sectionId !== "monkeybrain" && section && (
              <>
                <div className="mt-8">
                  <div className="mb-6 px-2 text-left">
                    <h2 className="text-white text-4xl md:text-4xl font-semibold">
                      {section.title}
                    </h2>
                    <p className="text-white/80 text-lg md:text-lg mt-2">
                      {section.description}
                    </p>
                    {sectionId === "art-therapy" && (
                      <p className="text-white/70 text-base md:text-lg mt-2 italic">
                        {t.artTherapyHint}
                      </p>
                    )}
                  </div>
                  <GalleryGrid
                    images={section.images}
                    clickedImage={(image) => openLightbox(image, section.images)}
                    maxColumns={sectionId === "art-therapy" ? 3 : 4}
                  />
                </div>
              </>
            )}

            {sectionId === "monkeybrain" && (
              <>
                <div className="mb-6 px-2 text-left">
                  <h2 className="text-white text-4xl md:text-4xl font-semibold">
                    {t.monkeybrain.title}
                  </h2>
                  <p className="text-white/80 text-lg md:text-lg mt-2">
                    {t.monkeybrain.description}
                  </p>
                </div>
                <FlipBook openInOverlay />
              </>
            )}
          </div>
        </div>
      </section>

      <SectionHintsGrid currentHref={currentHref} transparentCards />

      {sectionId !== "monkeybrain" && section && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          selectedIndex={selectedImage}
          onClose={() => {
            setSelectedImage(null);
            setLightboxImages([]);
          }}
          showText={sectionId !== "illustrated-photography"}
        />
      )}
    </div>
  );
}
