"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

interface FlipBookProps {
  images?: string[];
}

export default function FlipBook({ images }: FlipBookProps) {
  const defaultImages = [
    "/projects/MONKEYBRAIN/pages/monkeybrain.jpg",
    "/projects/MONKEYBRAIN/pages/FINALPATTERNS_left.png",
    "/projects/MONKEYBRAIN/pages/FINALPATTERNS_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain3_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain3_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain4_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain4_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain5_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain5_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain6_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain6_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain7_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain7_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain8_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain8_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain9_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain9_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain10_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain10_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain11_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain11_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain12_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain12_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain13_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain13_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain14_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain14_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain15_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain15_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain16_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain16_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain17_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain17_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain18_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain18_right.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain19_left.png",
    "/projects/MONKEYBRAIN/pages/Prandetskaya_monkeybrain19_right.png",
    "/projects/MONKEYBRAIN/pages/FINALPATTERNS_left.png",
    "/projects/MONKEYBRAIN/pages/FINALPATTERNS_right.png",
  ];

  const pageImages = images || defaultImages;

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
      >
        {pageImages.map((imageSrc, index) => (
          <div key={index} className="page relative w-full h-full">
            <Image
              src={imageSrc}
              alt={`Page ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
