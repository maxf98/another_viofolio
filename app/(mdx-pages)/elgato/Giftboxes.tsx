"use client";

import { useState } from "react";
import Image from "next/image";
import InfiniteScrollGallery from "../../components/InfiniteScrollGallery";
import Lightbox from "@/app/components/Lightbox";
import { winter23Images, ofestImages, winter22Images } from "@/app/data/elgato";
import { StaticImageData } from "next/image";
import { ImageItem } from "@/app/data/model";
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
              <div className="fixed inset-0 -z-10 bg-[#1e1e28]">
                <Image
                  src={box.backgroundImage}
                  alt=""
                  fill
                  className="object-cover opacity-5"
                  loading="eager"
                />
              </div>
            )}
            <div className="content-container">
              <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
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
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 md:mt-20 mb-4 md:mb-16">
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
        showText={false}
      />
    </div>
  );
}
