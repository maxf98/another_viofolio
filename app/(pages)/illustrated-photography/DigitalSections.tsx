"use client";

import { useState } from "react";
import Lightbox from "@/app/components/Lightbox";
import { ImageItem } from "@/app/model";
import { ScatteredImages, type MediaItem } from "@/app/components/ScatteredImages";
import { useGalleryText } from "@/app/translations/gallery";

import ship from "@/public/gallery/ship.webp";
import memories from "@/public/gallery/memories.webp";
import view from "@/public/gallery/view.webp";
import bottle from "@/public/gallery/bottle.webp";
import treeudude from "@/public/gallery/treeudude.webp";
import flowers from "@/public/gallery/flowers.png";
import thoughtsPng from "@/public/gallery/originals_backup/thoughts.png";
import ghosts from "@/public/gallery/ghosts.webp";
import schadenfreude from "@/public/gallery/schadenfreude.png";
import chat from "@/public/gallery/chat.webp";
import wood from "@/public/gallery/wood.webp";
import angels from "@/public/gallery/angels.webp";
import monster from "@/public/gallery/monster.webp";
import sunburn from "@/public/gallery/sunburn.webp";
import grandpa from "@/public/gallery/grandpa2.webp";
import sun from "@/public/gallery/sun.png";
import mountain from "@/public/gallery/mountain.png";
import cloud from "@/public/gallery/cloud.png";
import shame from "@/public/gallery/shame.webp";
import chill from "@/public/gallery/chill.png";
import sur from "@/public/gallery/sur.png";
import portrait from "@/public/gallery/portrait.png";

// --- Media items per technique (images/videos don't need translation) ---

type NonLabelMedia = Exclude<MediaItem, { type: "label" }>;

const techniqueMedia: Record<string, NonLabelMedia[]> = {
  "enhanced-photography-images": [
    { type: "image", src: ship },
    { type: "image", src: view },
    { type: "image", src: thoughtsPng },
    { type: "image", src: treeudude },
    { type: "image", src: wood },
    { type: "image", src: sun },
    { type: "image", src: cloud },
    { type: "image", src: mountain },
  ],
  "illustrated-photography-images": [
    { type: "image", src: chat },
    { type: "image", src: bottle },
    { type: "image", src: ghosts },
    { type: "image", src: monster },
    { type: "image", src: sunburn },
    { type: "image", src: shame },
    { type: "image", src: angels },
    { type: "image", src: chill },
    { type: "image", src: grandpa },
  ],
  "digital-illustration-images": [
    { type: "image", src: portrait },
    { type: "image", src: memories },
    { type: "image", src: schadenfreude },
    { type: "image", src: flowers },
    { type: "image", src: sur },
  ],
  "animation-images": [
    { type: "video", src: "/gallery/guitar.mp4", width: 1680, height: 2404 },
    { type: "video", src: "/gallery/flying.mp4", width: 2480, height: 3508 },
    { type: "video", src: "/gallery/passthrough.mp4", width: 2480, height: 3508 },
    { type: "video", src: "/gallery/schaukel.mp4", width: 3520, height: 2488 },
  ],
};

// --- Component ---

export default function DigitalSections() {
  const t = useGalleryText();
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (items: NonLabelMedia[], imageIndex: number, title: string) => {
    setLightboxImages(
      items.map((item, i) => ({
        index: i,
        image: item.type === "image" ? item.src : item.src,
        video: item.type === "video" ? item.src : undefined,
        videoWidth: item.type === "video" ? item.width : undefined,
        videoHeight: item.type === "video" ? item.height : undefined,
        alt: `${title} ${i + 1}`,
      }))
    );
    setLightboxIndex(imageIndex);
  };

  return (
    <>
      {t.digitalGroups.map((group) => (
        <div key={group.id} id={group.id}>
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
                    description={group.groupDescription}
                    seed={23}
                    variant={group.id === "animation" ? "animation" : "digital"}
                    onImageClick={(i) => {
                      if (itemsWithLabel[i].type === "label") return;
                      const labelOffset = 1;
                      openLightbox(allMedia, offset + i - labelOffset, group.groupTitle);
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
