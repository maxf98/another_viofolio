"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image, { type StaticImageData } from "next/image";
import OverlayShell from "@/app/components/OverlayShell";
import { pageImages as defaultImages } from "./images";

interface FlipBookProps {
  images?: StaticImageData[];
  openInOverlay?: boolean;
}

type FlipBookInstance = {
  getCurrentPageIndex?: () => number;
  flipNext: (corner?: "top" | "bottom") => void;
};
type FlipBookRef = {
  pageFlip?: () => FlipBookInstance | undefined;
};

function computeBookSize(
  viewportWidth: number,
  viewportHeight: number,
  isOverlay: boolean,
  isCoverMode: boolean,
) {
  const paddingX = isOverlay ? 8 : 32;
  const paddingY = isOverlay ? 24 : 0;
  const availableWidth = Math.max(0, viewportWidth - paddingX);
  const availableHeight = Math.max(0, viewportHeight - paddingY);

  const basePageWidth = 400;
  const basePageHeight = 600;
  // On cover, a single visible page should size against viewport width.
  const bookBaseWidth = isCoverMode ? basePageWidth : basePageWidth * 2;

  const widthScale = availableWidth > 0 ? availableWidth / bookBaseWidth : 1;
  const heightScale =
    availableHeight > 0 ? availableHeight / basePageHeight : 1;
  const maxScale = isOverlay ? 2 : 1;
  const scale = Math.min(maxScale, widthScale, heightScale);

  return {
    pageWidth: basePageWidth * scale,
    pageHeight: basePageHeight * scale,
  };
}

export default function FlipBook({
  images,
  openInOverlay = false,
}: FlipBookProps) {
  const pageImages = images || defaultImages;
  const [currentPage, setCurrentPage] = useState(0); // starts at cover/page 1
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [openCycle, setOpenCycle] = useState(0);
  const [landscapeHintLocked, setLandscapeHintLocked] = useState(false);
  const [hintViewport, setHintViewport] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [overlayViewport, setOverlayViewport] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [animateTransform, setAnimateTransform] = useState(false);
  const [coverShiftActive, setCoverShiftActive] = useState(false);
  const [viewport, setViewport] = useState(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  }));
  const bookRef = useRef<FlipBookRef | null>(null);

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

  useEffect(() => {
    if (!openInOverlay || !overlayOpen) return;

    const rotateDelayMs = 420;
    const rotateDurationMs = 700;
    let flipTimer: number | undefined;

    const rotateTimer = window.setTimeout(() => {
      // Run cover translate intro in both portrait and landscape.
      setCoverShiftActive(false);

      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      const shouldLockLandscape =
        currentWidth > 0 &&
        currentWidth <= 1024 &&
        currentHeight > currentWidth;

      if (shouldLockLandscape) {
        setLandscapeHintLocked(true);
        setHintViewport({
          width: Math.max(currentWidth, currentHeight),
          height: Math.min(currentWidth, currentHeight),
        });
      } else {
        setLandscapeHintLocked(false);
        setHintViewport(null);
      }

      const flipDelayAfterRotateMs = rotateDurationMs + 80;

      flipTimer = window.setTimeout(() => {
        const instance = bookRef.current?.pageFlip?.();
        if (instance && instance.getCurrentPageIndex?.() === 0) {
          instance.flipNext("top");
        }
      }, flipDelayAfterRotateMs);
    }, rotateDelayMs);

    const endTransformAnimationTimer = window.setTimeout(
      () => {
        setAnimateTransform(false);
      },
      rotateDelayMs + rotateDurationMs + 80,
    );

    return () => {
      window.clearTimeout(rotateTimer);
      if (flipTimer) window.clearTimeout(flipTimer);
      window.clearTimeout(endTransformAnimationTimer);
    };
  }, [bookRef, openCycle, openInOverlay, overlayOpen]);

  const handleFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  // Keep size fixed per session, but let rotation follow current orientation.
  const isCurrentlyPortrait = viewport.height > viewport.width;
  const applyLandscapeHint = landscapeHintLocked && isCurrentlyPortrait;
  const baseOverlayViewport = overlayViewport ?? viewport;
  const adjustedViewport = hintViewport ?? {
    width: Math.max(baseOverlayViewport.width, baseOverlayViewport.height),
    height: Math.min(baseOverlayViewport.width, baseOverlayViewport.height),
  };
  // Keep cover-width baseline while hint mode is active to avoid post-animation rebound.
  const isCoverMode =
    openInOverlay && (currentPage === 0 || landscapeHintLocked);
  const initialBookSize = computeBookSize(
    baseOverlayViewport.width,
    baseOverlayViewport.height,
    openInOverlay,
    isCoverMode,
  );
  const adjustedBookSize = computeBookSize(
    adjustedViewport.width,
    adjustedViewport.height,
    openInOverlay,
    false,
  );
  const pageWidth = initialBookSize.pageWidth;
  const pageHeight = initialBookSize.pageHeight;
  const bookKey = openInOverlay
    ? `overlay-${openCycle}`
    : `${Math.round(pageWidth)}x${Math.round(pageHeight)}`;
  const coverShiftPx =
    currentPage === 0 && coverShiftActive ? pageWidth / 2 : 0;
  const widthResizeRatio =
    initialBookSize.pageWidth > 0
      ? adjustedBookSize.pageWidth / initialBookSize.pageWidth
      : 1;
  const heightResizeRatio =
    initialBookSize.pageHeight > 0
      ? adjustedBookSize.pageHeight / initialBookSize.pageHeight
      : 1;
  const targetResizeScale = Math.min(widthResizeRatio, heightResizeRatio);
  const resizeScale = landscapeHintLocked ? targetResizeScale : 1;

  const renderIndicator = () => (
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
  );

  const flipbookContent = (showIndicator: boolean) => (
    <div className="flipbook-wrapper flex justify-center items-center w-full h-full relative px-4 overflow-visible">
      {showIndicator ? renderIndicator() : null}
      <HTMLFlipBook
        ref={(instance) => {
          // react-pageflip exposes imperative API through pageFlip()
          bookRef.current = (instance as unknown as FlipBookRef) ?? null;
        }}
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
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={`Page ${index + 1}`}
                  fill
                  style={{
                    objectFit: "contain",
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

  if (!openInOverlay) {
    return flipbookContent(true);
  }

  return (
    <>
      <div className="mx-auto w-full relative">
        <div className="pointer-events-none hidden md:block absolute top-1/2 -translate-y-1/2 right-[calc(50%+170px+1.5rem)] lg:right-[calc(50%+190px+2rem)]">
          <div className="flex flex-col items-end">
            <span className="text-[#F5E6A3] text-xl md:text-2xl lg:text-3xl font-black tracking-tight animate-tap-hint whitespace-nowrap text-right">
              tap the magazine
            </span>
            <span className="text-white/70 text-base md:text-lg lg:text-xl font-medium mt-1 whitespace-nowrap text-right">
              to flip through
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            // Open in default orientation first, then evaluate rotation in effect.
            setOverlayViewport({
              width: window.innerWidth,
              height: window.innerHeight,
            });
            setAnimateTransform(true);
            setCoverShiftActive(true);
            setLandscapeHintLocked(false);
            setHintViewport(null);
            setCurrentPage(0);
            setOpenCycle((prev) => prev + 1);
            setOverlayOpen(true);
          }}
          className="group relative block w-[min(88vw,340px)] lg:w-[380px] mx-auto cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5E6A3] focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
          aria-label="Open Monkeybrain magazine"
        >
          <div className="relative aspect-[2/3] w-full overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
            <Image
              src={pageImages[0]}
              alt="Monkeybrain title page"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 400px"
              priority
            />
          </div>
        </button>
      </div>

      <OverlayShell
        isOpen={overlayOpen}
        onClose={() => {
          setOverlayOpen(false);
          setOverlayViewport(null);
          setAnimateTransform(false);
          setCoverShiftActive(false);
          setLandscapeHintLocked(false);
          setHintViewport(null);
        }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transition: animateTransform
              ? "transform 700ms ease-in-out"
              : "none",
            transform: `translate(calc(-50% - ${coverShiftPx}px), -50%) rotate(${applyLandscapeHint ? 90 : 0}deg) scale(${resizeScale})`,
            width: `${
              (applyLandscapeHint
                ? (hintViewport?.width ??
                  Math.max(
                    baseOverlayViewport.width,
                    baseOverlayViewport.height,
                  ))
                : baseOverlayViewport.width) ?? 0
            }px`,
            height: `${
              (applyLandscapeHint
                ? (hintViewport?.height ??
                  Math.min(
                    baseOverlayViewport.width,
                    baseOverlayViewport.height,
                  ))
                : baseOverlayViewport.height) ?? 0
            }px`,
          }}
        >
          {flipbookContent(false)}
        </div>
      </OverlayShell>
    </>
  );
}
