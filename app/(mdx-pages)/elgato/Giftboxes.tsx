"use client";

import { useState } from "react";
import Image from "next/image";
import InfiniteScrollGallery from "./InfiniteScrollGallery";
import Lightbox from "@/app/components/Lightbox";
import { winter23Images, ofestImages, winter22Images } from "@/app/data/elgato";
import { StaticImageData } from "next/image";
import { ImageItem } from "@/app/data/model";

const boxes: {
  image: string;
  title: string;
  description: string;
  galleryImages: StaticImageData[];
}[] = [
  {
    image: "/projects/elgato/boxes/box2.png",
    title: "Winter Holidays 2022",
    description:
      "For Elgato’s 2022 Holiday Gift Box, I developed two visual narratives: reimagining the Stream Deck layout as a series of illuminated winter-night windows, and creating an Elgato-inspired gingerbread house illustration. These artworks were applied across the gift box and became core elements of Elgato’s winter campaign online.",
    galleryImages: winter23Images,
  },
  {
    image: "/projects/elgato/boxes/box3.png",
    title: "Winter Holidays 2021",
    description:
      "This gift box brought together a wide range of custom illustrations I developed over time—from Elgato winter-themed stickers to branded posters—all coming together in one cheerful, festive box.",
    galleryImages: winter22Images,
  },
  {
    image: "/projects/elgato/boxes/box1.png",
    title: "Oktoberfest Gift Box",
    description:
      "Drawing inspiration from Munich’s lively Oktoberfest, I created an illustrated gift box that combines classic festival elements with Elgato’s creative, content-focused identity. The products appear within a dynamic, energetic world that reflects the playfulness and variety of the Elgato experience.",
    galleryImages: ofestImages,
  },
];

export default function Giftboxes() {
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleImageClick = (boxIndex: number, imageIndex: number) => {
    const images = boxes[boxIndex].galleryImages.map((img, i) => ({
      index: i,
      image: img,
      alt: `${boxes[boxIndex].title} ${i + 1}`,
    }));
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
  };

  return (
    <div>
      <div className="content-container">
        <h1>Partner Gift Boxes</h1>
        <p>
          I created a series of playful visual narratives for Elgato’s partner
          gift boxes, building imaginative worlds around their brand by working
          with their logo and products.
        </p>
      </div>

      <div className="flex flex-col gap-24 mt-24">
        {boxes.map((box, index) => (
          <div key={index} className="flex flex-col gap-8">
            <div className="content-container">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="relative w-full md:w-3/5 aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={box.image}
                    alt={box.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full md:w-2/5 flex flex-col gap-4">
                  <h2 className="text-2xl font-bold">{box.title}</h2>
                  <p className="text-base-content/70">{box.description}</p>
                </div>
              </div>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-16">
              <InfiniteScrollGallery
                images={box.galleryImages}
                height={200}
                altPrefix={box.title}
                direction={index % 2 === 0 ? "forward" : "backward"}
                onImageClick={(imageIndex) =>
                  handleImageClick(index, imageIndex)
                }
              />
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
