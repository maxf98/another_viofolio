"use client";

import { useState } from "react";
import Lightbox from "@/app/components/Lightbox";
import { ImageItem } from "@/app/model";
import { ScatteredImages, type MediaItem } from "@/app/components/ScatteredImages";
import { useGalleryText } from "@/app/translations/gallery";

import blowout from "@/public/gallery/blowout.png";
import stairhair from "@/public/gallery/stairhair.png";
import chalk3 from "@/public/gallery/chalk 3.png";
import carib from "@/public/gallery/carib.png";
import frottage from "@/public/gallery/Frottage.png";
import frot3 from "@/public/gallery/frot3.png";
import abdruck from "@/public/gallery/Narrative.png";
import abdruck2 from "@/public/gallery/abdruck2.png";
import flo from "@/public/gallery/flo.png";
import handpainting from "@/public/gallery/handpainting.png";
import mix3 from "@/public/gallery/mix3.png";
import dragon from "@/public/gallery/dragon.png";
import ink1 from "@/public/gallery/ink1.png";
import mask from "@/public/gallery/mask.png";
import puzzle from "@/public/gallery/puzzle.png";
import pattern1 from "@/public/gallery/pattern1.png";
import imprint4 from "@/public/gallery/imprint4.png";
import nature1 from "@/public/gallery/nature1.png";
import shadow1 from "@/public/gallery/shadow1.png";
import shadow2 from "@/public/gallery/shadow2.png";
import hand2 from "@/public/arttherapy/handpainting/hand2.png";
import stone2 from "@/public/gallery/stone2.png";
import rain2 from "@/public/arttherapy/rain/rain2.png";
import rain3at from "@/public/arttherapy/rain/rain3.png";
import rain5 from "@/public/arttherapy/rain/rain5.png";
import volpatinger from "@/public/gallery/volpatinger.png";

// --- Media items per technique (images don't need translation) ---

const techniqueMedia: Record<string, MediaItem[]> = {
  "imprinting-nature": [{ type: "image", src: nature1 }, { type: "image", src: stone2 }, { type: "image", src: flo }],
  "capturing-shadow": [{ type: "image", src: shadow1 }, { type: "image", src: shadow2 }],
  "rain": [{ type: "image", src: rain2 }, { type: "image", src: rain3at }, { type: "image", src: rain5 }],
  "frottage": [{ type: "image", src: frottage }, { type: "image", src: frot3 }],
  "blowout": [{ type: "image", src: blowout }, { type: "image", src: ink1 }],
  "abklatsch": [{ type: "image", src: abdruck2 }, { type: "image", src: imprint4 }, { type: "image", src: mask }],
  "blind-explorations": [{ type: "image", src: stairhair }],
  "puzzle": [{ type: "image", src: puzzle }, { type: "image", src: pattern1 }],
  "collage": [{ type: "image", src: carib }, { type: "image", src: volpatinger }],
  "intuitive-drawing": [{ type: "image", src: mix3 }, { type: "image", src: dragon }],
  "handpainting": [{ type: "image", src: hand2 }, { type: "image", src: handpainting }],
  "imagination-travel": [{ type: "image", src: abdruck }, { type: "image", src: chalk3 }],
};

// --- Component ---

export default function AnalogueSections() {
  const t = useGalleryText();
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (items: MediaItem[], imageIndex: number, title: string) => {
    setLightboxImages(
      items.flatMap((item, i) => {
        if (item.type === "label") return [];
        return [{
          index: i,
          image: item.type === "image" ? item.src : item.src,
          video: item.type === "video" ? item.src : undefined,
          videoWidth: item.type === "video" ? item.width : undefined,
          videoHeight: item.type === "video" ? item.height : undefined,
          alt: `${title} ${i + 1}`,
        }];
      })
    );
    setLightboxIndex(imageIndex);
  };

  return (
    <>
      {t.groups.map((group, groupIndex) => (
        <div
          key={group.id}
          id={group.id}
          className={`scroll-mt-28 ${groupIndex === 0 ? "" : "pt-8 md:pt-12"}`}
        >
          {(() => {
            const allMedia = group.techniques.flatMap((tech) => techniqueMedia[tech.id] ?? []);
            let mediaOffset = 0;
            return group.techniques.map((technique) => {
              const media = techniqueMedia[technique.id] ?? [];
              const offset = mediaOffset;
              mediaOffset += media.length;
              const itemsWithLabel: MediaItem[] = [
                { type: "label", text: technique.title },
                ...media,
              ];
              return (
                <div key={technique.id}>
                  <ScatteredImages
                    items={itemsWithLabel}
                    title={technique.title}
                    description={technique.description}
                    variant="analogue"
                    onImageClick={(i) => {
                      if (itemsWithLabel[i].type === "label") return;
                      openLightbox(allMedia, offset + i - 1, group.groupTitle);
                    }}
                  />
                </div>
              );
            });
          })()}
        </div>
      ))}

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        showText={false}
      />
    </>
  );
}
