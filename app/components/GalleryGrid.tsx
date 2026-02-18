"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { GalleryItem } from "@/app/data/model";

interface GalleryGridProps {
  images: GalleryItem[];
  clickedImage: (image: GalleryItem) => void;
  maxColumns?: number;
}

interface ImageLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

function GalleryGrid({ images, clickedImage, maxColumns = 4 }: GalleryGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layouts, setLayouts] = useState<ImageLayout[]>([]);
  const [containerHeight, setContainerHeight] = useState(0);

  // Generate stable random properties for each image
  const imageProps = useMemo(() => {
    return images.map((_, idx) => {
      const seed = idx * 9301 + 49297;
      const random1 = (seed % 233280) / 233280;
      const random2 = ((seed * 2) % 233280) / 233280;
      const random3 = ((seed * 3) % 233280) / 233280;

      return {
        offsetX: (random1 - 0.5) * 30, // -15% to 15%
        offsetY: (random2 - 0.5) * 20, // -10% to 10%
        scale: 0.85 + random3 * 0.3, // 0.85 to 1.15
      };
    });
  }, [images]);

  useEffect(() => {
    const calculateLayout = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      // Determine columns based on screen width
      let columns = 2;
      if (containerWidth >= 1024) columns = Math.min(maxColumns, 4);
      else if (containerWidth >= 768) columns = Math.min(maxColumns, 3);

      // Gap sizes
      let gap = 48;
      if (containerWidth >= 1024) gap = 64;
      else if (containerWidth >= 768) gap = 56;

      // Calculate column width
      const availableWidth = containerWidth - 32; // 32 for padding
      const columnWidth = (availableWidth - gap * (columns - 1)) / columns;

      // Track column heights
      const columnHeights = new Array(columns).fill(0);
      const newLayouts: ImageLayout[] = [];

      images.forEach((item, idx) => {
        // Find shortest column
        const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));

        // Calculate aspect ratio and apply scale
        const img = item.image as import("next/image").StaticImageData;
        const aspectRatio = img.height / img.width;
        const props = imageProps[idx];

        const scaledWidth = columnWidth * props.scale;
        const scaledHeight = scaledWidth * aspectRatio;

        // Calculate base position in column
        const baseX = 16 + shortestColumn * (columnWidth + gap) + (columnWidth - scaledWidth) / 2;
        const baseY = columnHeights[shortestColumn];

        newLayouts.push({
          x: baseX,
          y: baseY,
          width: scaledWidth,
          height: scaledHeight,
        });

        // Update column height
        columnHeights[shortestColumn] = baseY + scaledHeight + gap;
      });

      setLayouts(newLayouts);
      setContainerHeight(Math.max(...columnHeights));
    };

    calculateLayout();

    const resizeObserver = new ResizeObserver(calculateLayout);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [images, imageProps, maxColumns]);

  return (
    <div ref={containerRef} className="w-full relative py-8 px-4" style={{ height: containerHeight }}>
      {layouts.map((layout, idx) => {
        const item = images[idx];

        return (
          <div
            key={item.index || idx}
            className="absolute cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
            style={{
              left: layout.x,
              top: layout.y,
              width: layout.width,
              height: layout.height,
            }}
            onClick={() => clickedImage(item)}
          >
            <Image
              src={item.image}
              alt={item.alt ?? "A Gallery Image"}
              fill
              sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              className="object-cover rounded-sm shadow-lg"
              placeholder="blur"
            />
          </div>
        );
      })}
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
