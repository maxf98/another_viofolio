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
    <div className="flipbook-wrapper flex justify-center items-center w-full relative">
      <div className="absolute left-1/8 top-1/2 -translate-y-1/2">
        <h1 className="text-bold text-4xl rotate-[-25deg]">Flick through!</h1>
      </div>
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
        startPage={0}
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
          const isPriority = index >= currentPage && index <= currentPage + 2;

          return (
            <div key={index} className="page relative w-full h-full">
              <Image
                src={imageSrc}
                alt={`Page ${index + 1}`}
                width={600}
                height={740}
                className="object-contain"
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
