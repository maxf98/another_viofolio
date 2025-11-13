"use client";

import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/app/data/model";
import { motion } from "framer-motion";

interface GalleryGridProps {
  images: GalleryItem[];
  clickedImage: (image: GalleryItem) => void;
}

function GalleryGrid({ images, clickedImage }: GalleryGridProps) {
  return (
    // CSS columns layout: columns-[300px] for masonry effect
    <div className="w-full" style={{ columns: "300px" }}>
      {images.map((item: GalleryItem, idx: number) => (
        <Image
          key={item.index || idx}
          src={item.image}
          alt={item.alt ?? "A Gallery Image"}
          // w-full h-full object-contain cursor-pointer mb-3 hover:opacity-80 transition-opacity duration-300
          className="w-full h-full object-contain cursor-pointer mb-3 hover:opacity-80 transition-opacity duration-300"
          width={300}
          height={200}
          onClick={() => clickedImage(item)}
        />
      ))}
    </div>
  );
}

// import { MasonryPhotoAlbum } from "react-photo-album";
// import "react-photo-album/masonry.css";

// function GalleryGrid({ images, clickedImage }: GalleryGridProps) {
//   return (
//     <MasonryPhotoAlbum photos={images.map((item: GridItem, idx: number) => (
//       <Image
//         src={item.image}
//         alt={item.name ?? "A Gallery Image"}
//         key={item.id || idx}
//         className={styles.image}
//         width={500}
//         height={500}
//         onClick={() => clickedImage(item)}
//       />
//     ))}>
//   );
// }
export default GalleryGrid;

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// function GalleryGrid2({ images, clickedImage }: GalleryGridProps) {
//   return (
//     <ResponsiveMasonry>
//       <Masonry>
//         {images.map((item: GridItem, idx: number) => (
//           <Image
//             src={item.image}
//             alt={item.name ?? "A Gallery Image"}
//             key={item.id || idx}
//             className={styles.image}
//             width={500}
//             height={500}
//             onClick={() => clickedImage(item)}
//           />
//         ))}
//       </Masonry>
//     </ResponsiveMasonry>
//   );
// }
// import useMasonry from "@/components/utils/useMasonry";

// function GalleryGrid({ images, clickedImage }: GalleryGridProps) {
//   const masonryContainer = useMasonry();

//   return (
//     <div
//       ref={masonryContainer}
//       className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
//     >
//       {images.map((item: GridItem, idx: number) => (
//         <Image
//           src={item.image}
//           alt={item.name ?? "A Gallery Image"}
//           key={item.id || idx}
//           className={styles.image}
//           width={500}
//           height={500}
//           onClick={() => clickedImage(item)}
//         />
//       ))}
//     </div>
//   );
// }
