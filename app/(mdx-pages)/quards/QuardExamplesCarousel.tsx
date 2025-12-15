"use client";

import { useState } from "react";
import InfiniteScrollGallery from "@/app/components/InfiniteScrollGallery";
import Lightbox from "@/app/components/Lightbox";
import { ImageItem } from "@/app/data/model";

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
      <InfiniteScrollGallery
        images={images}
        height={400}
        altPrefix="Quard example"
        onImageClick={(index) => setLightboxIndex(index)}
        imageClassName="ipad-border"
      />

      <Lightbox
        images={lightboxImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        imageClassName="ipad-border"
      />
    </>
  );
}
