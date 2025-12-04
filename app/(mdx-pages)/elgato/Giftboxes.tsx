"use client";

import { useState } from "react";
import PickerPreview from "@/app/components/PickerPreview";
import Lightbox from "@/app/components/Lightbox";
import { ImageItem } from "@/app/data/model";
import { winter23Images, ofestImages, winter22Images } from "@/app/data/elgato";

const boxImages = [
  "/projects/elgato/boxes/box1.png",
  "/projects/elgato/boxes/box2.png",
  "/projects/elgato/boxes/box3.png",
];

const boxTitles = ["Oktoberfest 2023", "Winter 2023", "Winter 2022"];

const boxDescriptions = [
  "A playful Oktoberfest-themed gift box featuring traditional Bavarian elements, designed to celebrate the festive spirit.",
  "A cozy winter wonderland design with snowflakes and warm colors, bringing holiday cheer to the unboxing experience.",
  "A cosmic-themed gift box featuring swirling galaxies and nebulas, designed to evoke a sense of wonder and exploration.",
];

// Map each box to its corresponding gallery images
const boxGalleryImages: ImageItem[][] = [
  ofestImages.map((img, i) => ({
    index: i,
    image: img,
    alt: "Oktoberfest gift box",
  })),
  winter23Images.map((img, i) => ({
    index: i,
    image: img,
    alt: "Winter 23 gift box",
  })),
  winter22Images.map((img, i) => ({
    index: i,
    image: img,
    alt: "Winter 22 gift box",
  })),
];

export default function Giftboxes() {
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedBox, setSelectedBox] = useState(0);

  const handlePreviewClick = (boxIndex: number) => {
    setLightboxImages(boxGalleryImages[boxIndex]);
    setLightboxIndex(0);
  };

  return (
    <div className="content-container">
      <h1>Partner Gift Boxes</h1>
      <p>
        I created a series of playful visual narratives for Elgato&#39;s partner
        gift boxes. These projects involved building imaginative worlds around
        their logo and products - developing themed faceplates, packaging,
        stickers, and poster designs that added personality and story to the
        brand experience.
      </p>

      <div className="h-16" />

      <PickerPreview
        images={boxImages}
        label="Gift Box"
        onPreviewClick={handlePreviewClick}
        onSelectionChange={setSelectedBox}
        pickerClassName="w-36 h-36"
        previewClassName="h-[500px]"
        sideBySide
        middleContent={
          <div>
            <h2>{boxTitles[selectedBox]}</h2>
            <p>{boxDescriptions[selectedBox]}</p>
          </div>
        }
      />

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
