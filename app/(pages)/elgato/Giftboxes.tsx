"use client";

import { useState } from "react";
import Image from "next/image";
import ClickThroughGallery from "@/app/components/ClickThroughGallery";
import Lightbox from "@/app/components/Lightbox";
import FixedBackgroundImage from "@/app/components/FixedBackgroundImage";
import { winter23Images, ofestImages, winter22Images } from "./images";
import { StaticImageData } from "next/image";
import { ImageItem } from "@/app/model";
import { useElgatoText } from "@/app/translations/elgato";

import box1 from "@/public/projects/elgato/boxes/box1.png";
import box2 from "@/public/projects/elgato/boxes/box2.png";
import box3 from "@/public/projects/elgato/boxes/box3.png";
import bg1 from "@/public/projects/elgato/brand-illustration/winter23/1.png";
import bg2 from "@/public/projects/elgato/brand-illustration/winter22/8.png";
import bg3 from "@/public/projects/elgato/brand-illustration/ofest/6.png";

const boxImages: { image: StaticImageData; galleryImages: StaticImageData[]; backgroundImage: StaticImageData }[] = [
  { image: box2, galleryImages: winter23Images, backgroundImage: bg1 },
  { image: box3, galleryImages: winter22Images, backgroundImage: bg2 },
  { image: box1, galleryImages: ofestImages, backgroundImage: bg3 },
];

export default function Giftboxes() {
  const t = useElgatoText();
  const [lightboxImages, setLightboxImages] = useState<ImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const boxes = boxImages.map((b, i) => ({ ...b, title: t.boxes[i].title, description: t.boxes[i].description }));

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
    <div id="w21">
      <div className="content-container pt-24 md:pt-16">
        <h1>{t.giftboxesTitle}</h1>
        <p>{t.giftboxesDescription}</p>
      </div>

      <div className="flex flex-col mt-24">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="relative flex flex-col pt-16 pb-16"
            style={box.backgroundImage ? { clipPath: "inset(0)" } : undefined}
          >
            {box.backgroundImage && (
              <FixedBackgroundImage
                src={box.backgroundImage}
                opacity={0.05}
                containerClassName="-z-10 bg-[#1e1e28]"
                loading="eager"
              />
            )}
            <div className="content-container">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                  <h2 className="text-2xl font-bold">{box.title}</h2>
                  <p className="text-base-content/70 whitespace-pre-line">{box.description}</p>
                </div>
                <div className="relative w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={box.image}
                    alt={box.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-12 md:mt-20 mb-6 md:mb-20">
              <div className="relative mx-auto w-full max-w-7xl px-3 md:px-6">
                <div className="rounded-[26px] border border-white/12 bg-black/20 backdrop-blur-[2px] p-3 md:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                  <div className="relative">
                    <ClickThroughGallery
                      images={box.galleryImages}
                      height={300}
                      altPrefix={box.title}
                      onImageClick={(imageIndex) =>
                        handleImageClick(index, imageIndex)
                      }
                      showScrollHint
                      imageClassName="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        showText={false}
      />
    </div>
  );
}
