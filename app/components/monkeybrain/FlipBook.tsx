"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image, { type StaticImageData } from "next/image";
import InteractionHint from "@/app/components/InteractionHint";
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

const PAGE_LOAD_BEHIND = 1;
const PAGE_LOAD_AHEAD = 4;
const INITIAL_PAGE_LOAD_AHEAD = 6;
const EAGER_LOAD_AHEAD = 3;
const INITIAL_EAGER_LOAD_AHEAD = 4;
const MOBILE_VIEWPORT_MAX_WIDTH = 1024;
const PORTRAIT_HINT_WIDTH_MULTIPLIER = 1.5;
const LANDSCAPE_DISPLAY_SCALE = 1.08;

function computeBookSize(
  viewportWidth: number,
  viewportHeight: number,
  isOverlay: boolean,
  isCoverMode: boolean,
) {
  const isLandscapeViewport = viewportWidth > viewportHeight;
  const paddingX = isOverlay ? (isLandscapeViewport ? 2 : 8) : 32;
  const paddingY = isOverlay ? (isLandscapeViewport ? 2 : 24) : 0;
  const availableWidth = Math.max(0, viewportWidth - paddingX);
  const availableHeight = Math.max(0, viewportHeight - paddingY);

  const basePageWidth = 400;
  const basePageHeight = 600;
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

function getPagesToLoad(pageIndex: number, totalPages: number) {
  const start = Math.max(0, pageIndex - PAGE_LOAD_BEHIND);
  const ahead = pageIndex === 0 ? INITIAL_PAGE_LOAD_AHEAD : PAGE_LOAD_AHEAD;
  const end = Math.min(totalPages - 1, pageIndex + ahead);
  const indexes: number[] = [];

  for (let index = start; index <= end; index += 1) {
    indexes.push(index);
  }

  return indexes;
}

export default function FlipBook({
  images,
  openInOverlay = false,
}: FlipBookProps) {
  const pageImages = images || defaultImages;
  const [loadedPages, setLoadedPages] = useState<Set<number>>(
    () => new Set(getPagesToLoad(0, pageImages.length)),
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [openCycle, setOpenCycle] = useState(0);
  const [landscapeHintLocked, setLandscapeHintLocked] = useState(false);
  const [hintViewport, setHintViewport] = useState<{
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

  const allowOverlayIntro = openInOverlay;

  const queuePagesForIndex = (pageIndex: number) => {
    const indexesToLoad = getPagesToLoad(pageIndex, pageImages.length);

    setLoadedPages((previous) => {
      const next = new Set(previous);
      let hasChanges = false;

      for (const index of indexesToLoad) {
        if (!next.has(index)) {
          next.add(index);
          hasChanges = true;
        }
      }

      return hasChanges ? next : previous;
    });
  };

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
    if (!allowOverlayIntro || !overlayOpen) return;

    const rotateDelayMs = 420;
    const rotateDurationMs = 700;
    let flipTimer: number | undefined;

    const rotateTimer = window.setTimeout(() => {
      setCoverShiftActive(false);

      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      const shouldLockLandscape =
        currentWidth > 0 &&
        currentWidth <= MOBILE_VIEWPORT_MAX_WIDTH &&
        currentHeight > currentWidth;

      if (shouldLockLandscape) {
        setLandscapeHintLocked(true);
        setHintViewport({
          width: currentWidth * PORTRAIT_HINT_WIDTH_MULTIPLIER,
          height: currentHeight,
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

      if (flipTimer) {
        window.clearTimeout(flipTimer);
      }

      window.clearTimeout(endTransformAnimationTimer);
    };
  }, [allowOverlayIntro, openCycle, overlayOpen]);

  const handleFlip = (e: { data: number }) => {
    queuePagesForIndex(e.data);
    setCurrentPage(e.data);
  };

  const isCurrentlyPortrait = viewport.height > viewport.width;
  const isMobileViewport = viewport.width <= MOBILE_VIEWPORT_MAX_WIDTH;
  const showLandscapeHint =
    overlayOpen && isMobileViewport && isCurrentlyPortrait;
  const usePortraitHintLayout =
    landscapeHintLocked && isMobileViewport && isCurrentlyPortrait;
  const isOverlayLandscape = openInOverlay && viewport.width > viewport.height;
  const baseOverlayViewport = viewport;
  const adjustedViewport = hintViewport ?? baseOverlayViewport;
  const isCoverMode =
    allowOverlayIntro && (currentPage === 0 || usePortraitHintLayout);
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
  const resizeScale = usePortraitHintLayout ? targetResizeScale : 1;
  const displayScale =
    resizeScale *
    (isOverlayLandscape && !usePortraitHintLayout
      ? LANDSCAPE_DISPLAY_SCALE
      : 1);
  const bookStageWidth = pageWidth * 2;
  const bookStageHeight = pageHeight;
  const imageSizes = `${Math.max(160, Math.round(pageWidth))}px`;
  const geometryKey = `${Math.round(pageWidth)}x${Math.round(pageHeight)}-${
    usePortraitHintLayout ? "portrait-hint" : "default"
  }`;
  const bookKey = openInOverlay
    ? `overlay-${openCycle}-${geometryKey}`
    : geometryKey;

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
    <div
      className={`flipbook-wrapper flex justify-center items-center w-full h-full relative overflow-visible ${
        isOverlayLandscape ? "px-0" : "px-4"
      }`}
    >
      {showIndicator ? renderIndicator() : null}
      <HTMLFlipBook
        ref={(instance) => {
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
          const shouldRenderImage = loadedPages.has(index);
          const eagerLoadAhead =
            currentPage === 0 ? INITIAL_EAGER_LOAD_AHEAD : EAGER_LOAD_AHEAD;
          const shouldEagerLoad =
            index >= currentPage && index <= currentPage + eagerLoadAhead;

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
                padding: isOverlayLandscape ? "1px" : "4px",
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
                {shouldRenderImage ? (
                  <Image
                    src={imageSrc}
                    alt={`Page ${index + 1}`}
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    sizes={imageSizes}
                    loading={shouldEagerLoad ? "eager" : "lazy"}
                  />
                ) : (
                  <div className="h-full w-full rounded-sm bg-black/15" />
                )}
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
            setLoadedPages(new Set(getPagesToLoad(0, pageImages.length)));
            setAnimateTransform(allowOverlayIntro);
            setCoverShiftActive(allowOverlayIntro);
            setLandscapeHintLocked(false);
            setHintViewport(null);
            setCurrentPage(0);
            setOpenCycle((previous) => previous + 1);
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
          setAnimateTransform(false);
          setCoverShiftActive(false);
          setLandscapeHintLocked(false);
          setHintViewport(null);
          setLoadedPages(new Set(getPagesToLoad(0, pageImages.length)));
        }}
        stopContainerPropagation={false}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {showLandscapeHint ? (
            <div
              className="pointer-events-none absolute left-1/2 -translate-x-1/2"
              style={{ bottom: "calc(100% + 12px)" }}
            >
              <InteractionHint text="better in landscape" delay={0} />
            </div>
          ) : null}
          <div
            className="pointer-events-auto"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
            style={{
              transition: animateTransform
                ? "transform 700ms ease-in-out"
                : "none",
              transform: `translateX(${-coverShiftPx}px) scale(${displayScale})`,
              width: `${bookStageWidth}px`,
              height: `${bookStageHeight}px`,
            }}
          >
            {flipbookContent(false)}
          </div>
        </div>
        </div>
      </OverlayShell>
    </>
  );
}
