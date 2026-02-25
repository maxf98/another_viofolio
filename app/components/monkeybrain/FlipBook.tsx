"use client";

import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image, { type StaticImageData } from "next/image";
import { pageImages as defaultImages } from "./images";

interface FlipBookProps {
  images?: StaticImageData[];
}

export default function FlipBook({ images }: FlipBookProps) {
  const pageImages = images || defaultImages;
  const [currentPage, setCurrentPage] = useState(0); // starts at cover/page 1
  const [viewport, setViewport] = useState(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  }));

  useEffect(() => {
    const updateViewport = () =>
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  const handleFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  // Keep two-page spread within viewport
  const paddingX = 32; // px-4 on each side
  const availableWidth = Math.max(0, viewport.width - paddingX);
  const availableHeight = viewport.height;

  const basePageWidth = 400;
  const basePageHeight = 600;
  const bookBaseWidth = basePageWidth * 2; // two pages

  const widthScale =
    availableWidth > 0 ? availableWidth / bookBaseWidth : 1;
  const heightScale =
    availableHeight > 0 ? availableHeight / basePageHeight : 1;
  const scale = Math.min(1, widthScale, heightScale);

  const pageWidth = basePageWidth * scale;
  const pageHeight = basePageHeight * scale;
  const bookKey = `${Math.round(pageWidth)}x${Math.round(pageHeight)}`;

  return (
    <div className="flipbook-wrapper flex justify-center items-center w-full h-full relative px-4 overflow-visible">
      {/* Click through indicator - visible on page 1, hidden behind pages otherwise */}
      <div
        className={`absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 flex items-center gap-4 pointer-events-none transition-opacity duration-500 ${
          currentPage === 0 ? "z-10 opacity-100" : "-z-10 opacity-0"
        }`}
      >
        <div className="flex flex-col items-end">
          <span className="text-[#F5E6A3] text-xl md:text-4xl font-black tracking-tight animate-tap-hint">
            tap the magazine
          </span>
          <span className="text-white/70 text-base md:text-2xl font-medium mt-1">
            to flip through
          </span>
          <svg
            className="w-10 h-10 md:w-14 md:h-14 text-[#F5E6A3] animate-arrow-bounce mt-2 self-end"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
      <HTMLFlipBook
        key={bookKey}
        width={pageWidth}
        height={pageHeight}
        size="fixed"
        style={{}}
        minWidth={0}
        maxWidth={pageWidth}
        minHeight={0}
        maxHeight={pageHeight}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook"
        startPage={currentPage}
        drawShadow={false}
        flippingTime={1000}
        usePortrait={false}
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
            <div
              key={index}
              className="page"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%'
              }}>
                <Image
                  src={imageSrc}
                  alt={`Page ${index + 1}`}
                  fill
                  style={{
                    objectFit: 'contain'
                  }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={isPriority}
                />
              </div>
            </div>
          );
        })}
      </HTMLFlipBook>
    </div>
  );
}
