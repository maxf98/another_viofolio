"use client";

import React, { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import GalleryGrid from "@/app/components/GalleryGrid";
import Lightbox from "@/app/components/Lightbox";

import { GalleryItem } from "@/app/data/model";
import { gallery_graph } from "@/app/data/graph";

const allImages: GalleryItem[] = gallery_graph;
allImages.sort((a, b) => Number(a.index) - Number(b.index));

function WorkGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function clickedImage(image: GalleryItem) {
    const index = allImages.findIndex((img) => img.index === image.index);
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  }

  return (
    <div className="flex flex-col justify-center relative py-8">
      <Navigation sections={[]} />
      <GalleryGrid images={allImages} clickedImage={clickedImage} />

      <Lightbox
        images={allImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </div>
  );
}

export default WorkGallery;
