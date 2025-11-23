"use client";

import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image, { type StaticImageData } from "next/image";
import { pageImages as defaultImages } from "./images";

interface FlipBookProps {
  images?: StaticImageData[];
}

export default function FlipBook({ images }: FlipBookProps) {
  const pageImages = images || defaultImages;
  const [currentPage, setCurrentPage] = useState(0);

  const handleFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="flipbook-wrapper flex justify-center items-center w-full h-full relative">
      <HTMLFlipBook
        width={400}
        height={600}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook"
        style={{}}
        startPage={3}
        drawShadow={false}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showPageCorners={false}
        disableFlipByClick={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        onFlip={handleFlip}
      >
        {pageImages.map((imageSrc, index) => {
          // Prioritize current page and next 2 pages
          const isPriority = index >= currentPage && index <= currentPage + 3;

          return (
            <div key={index} className="page relative w-full h-full flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={`Page ${index + 1}`}
                width={600}
                height={740}
                className="object-contain w-full h-full"
                placeholder="blur"
                priority={isPriority}
              />
            </div>
          );
        })}
      </HTMLFlipBook>
    </div>
  );
}
