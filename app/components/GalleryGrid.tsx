"use client";

import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/app/data/model";

interface GalleryGridProps {
  images: GalleryItem[];
  clickedImage: (image: GalleryItem) => void;
}

function GalleryGrid({ images, clickedImage }: GalleryGridProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-2">
      {images.map((item: GalleryItem, idx: number) => (
        <div
          key={item.index || idx}
          className="relative aspect-[3/4] overflow-hidden cursor-pointer"
          onClick={() => clickedImage(item)}
        >
          <Image
            src={item.image}
            alt={item.alt ?? "A Gallery Image"}
            fill
            sizes="(max-width: 768px) 33vw, 25vw"
            className="object-cover"
            placeholder="blur"
          />
        </div>
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
