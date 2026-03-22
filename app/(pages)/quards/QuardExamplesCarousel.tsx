"use client";

import { useState } from "react";
import ClickThroughGallery from "@/app/components/ClickThroughGallery";
import Lightbox from "@/app/components/Lightbox";
import { ImageItem } from "@/app/model";

import img1 from "@/public/projects/quards/quardExamples/IMG_3840.png";
import img2 from "@/public/projects/quards/quardExamples/IMG_3844.png";
import img3 from "@/public/projects/quards/quardExamples/IMG_3845.png";
import img4 from "@/public/projects/quards/quardExamples/IMG_3846.png";
import img5 from "@/public/projects/quards/quardExamples/IMG_3847.png";

const images = [img1, img2, img3, img4, img5];

const lightboxImages: ImageItem[] = images.map((img, i) => ({
  index: i,
  image: img,
  alt: `Quard example ${i + 1}`,
}));

export default function QuardExamplesCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="w-full mt-2 md:mt-4 mb-6 md:mb-10">
        <div className="relative mx-auto w-full max-w-7xl px-3 md:pl-32 md:pr-6">
          <div className="rounded-[26px] border border-white/12 bg-black/20 backdrop-blur-[2px] p-3 md:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
            <div className="relative">
              <ClickThroughGallery
                images={images}
                altPrefix="Quard example"
                onImageClick={(index) => setLightboxIndex(index)}
                height={300}
                imageClassName="ipad-border"
              />
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        imageClassName="ipad-border"
        showText={false}
      />
    </>
  );
}
