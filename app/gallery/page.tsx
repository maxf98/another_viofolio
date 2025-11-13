"use client";

import React, { useState, useEffect } from "react";
import GalleryGrid from "@/app/components/GalleryGrid";
import Modal from "@/app/components/Modal";

import { GalleryItem } from "@/app/data/model";
import { gallery_graph } from "@/app/data/graph"; // Assuming graph is an array of GridItem

import { motion } from "framer-motion";

const allImages: GalleryItem[] = gallery_graph;
allImages.sort((a, b) => Number(a.index) - Number(b.index));

function WorkGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  function clickedImage(image: GalleryItem) {
    if (selectedImage?.index === image.index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  }

  return (
    // .galleryContainer: flex flex-col justify-center relative
    <div className="flex flex-col justify-center relative pt-16 pb-32">
      <GalleryGrid images={allImages} clickedImage={clickedImage} />

      <Modal
        isOpen={selectedImage !== null}
        close={() => setSelectedImage(null)}
        layoutId={`gallery-img${selectedImage?.index ?? ""}`}
      >
        {/* .imgOverlay: max-h-[95vh] object-contain overflow-hidden */}
        <motion.img
          className="max-h-[95vh] object-contain overflow-hidden"
          src={selectedImage?.image ?? ""}
          alt="ello"
        />
      </Modal>
    </div>
  );
}

export default WorkGallery;
