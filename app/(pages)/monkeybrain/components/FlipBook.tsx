"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import HTMLFlipBook from "react-pageflip";
import Image, { type StaticImageData } from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import InteractionHint from "@/app/components/InteractionHint";
import CTAButton from "@/app/components/CTAButton";
import OverlayShell from "@/app/components/OverlayShell";
import { OVERLAY_CONTROL_Z_INDEX } from "@/app/components/overlayZ";
import { pageImages as defaultImages } from "./images";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FlipBookHandle {
  open: () => void;
}

interface FlipBookOverlayProps {
  images?: StaticImageData[];
  landscapeHintText?: string;
}

type FlipBookInstance = {
  getCurrentPageIndex?: () => number;
  flipNext: (corner?: "top" | "bottom") => void;
  flipPrev: (corner?: "top" | "bottom") => void;
};

type FlipBookRef = {
  pageFlip?: () => FlipBookInstance | undefined;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const PAGE_LOAD_BEHIND = 1;
const PAGE_LOAD_AHEAD = 4;
const INITIAL_PAGE_LOAD_AHEAD = 6;
const EAGER_LOAD_AHEAD = 3;
const INITIAL_EAGER_LOAD_AHEAD = 4;
const MOBILE_VIEWPORT_MAX_WIDTH = 1024;
const PORTRAIT_HINT_WIDTH_MULTIPLIER = 1.5;
const LANDSCAPE_DISPLAY_SCALE = 1.08;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function computeBookSize(
  viewportWidth: number,
  viewportHeight: number,
  isCoverMode: boolean,
) {
  const isLandscapeViewport = viewportWidth > viewportHeight;
  const paddingX = isLandscapeViewport ? 2 : 8;
  const paddingY = isLandscapeViewport ? 2 : 24;
  const availableWidth = Math.max(0, viewportWidth - paddingX);
  const availableHeight = Math.max(0, viewportHeight - paddingY);

  const basePageWidth = 400;
  const basePageHeight = 600;
  const bookBaseWidth = isCoverMode ? basePageWidth : basePageWidth * 2;

  const widthScale = availableWidth > 0 ? availableWidth / bookBaseWidth : 1;
  const heightScale =
    availableHeight > 0 ? availableHeight / basePageHeight : 1;
  const scale = Math.min(2, widthScale, heightScale);

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
  for (let i = start; i <= end; i++) indexes.push(i);
  return indexes;
}

// ─── Component ────────────────────────────────────────────────────────────────

const FlipBook = forwardRef<FlipBookHandle, FlipBookOverlayProps>(
  function FlipBook(
    { images, landscapeHintText = "better in landscape" },
    ref,
  ) {
    const pageImages = images ?? defaultImages;

    // ── State ──────────────────────────────────────────────────────────────────

    const [isOpen, setIsOpen] = useState(false);
    const [loadedPages, setLoadedPages] = useState<Set<number>>(
      () => new Set(getPagesToLoad(0, pageImages.length)),
    );
    const [currentPage, setCurrentPage] = useState(0);
    const [openCycle, setOpenCycle] = useState(0);
    const [portraitHintLayoutLocked, setPortraitHintLayoutLocked] =
      useState(false);
    const [portraitHintViewport, setPortraitHintViewport] = useState<{
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

    // ── Imperative handle ──────────────────────────────────────────────────────

    useImperativeHandle(ref, () => ({
      open() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const shouldUsePortraitHintLayout =
          vw > 0 && vw <= MOBILE_VIEWPORT_MAX_WIDTH && vh > vw;

        setLoadedPages(new Set(getPagesToLoad(0, pageImages.length)));
        setAnimateTransform(true);
        setCoverShiftActive(true);
        setCurrentPage(0);
        setPortraitHintLayoutLocked(shouldUsePortraitHintLayout);
        setPortraitHintViewport(
          shouldUsePortraitHintLayout
            ? { width: vw * PORTRAIT_HINT_WIDTH_MULTIPLIER, height: vh }
            : null,
        );
        setOpenCycle((c) => c + 1);
        setIsOpen(true);
      },
    }));

    // ── Viewport tracking ──────────────────────────────────────────────────────

    useEffect(() => {
      const update = () =>
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      update();
      window.addEventListener("resize", update);
      window.addEventListener("orientationchange", update);
      return () => {
        window.removeEventListener("resize", update);
        window.removeEventListener("orientationchange", update);
      };
    }, []);

    // ── Keyboard navigation ────────────────────────────────────────────────────

    const flipNext = useCallback(() => {
      bookRef.current?.pageFlip?.()?.flipNext("bottom");
    }, []);

    const flipPrev = useCallback(() => {
      bookRef.current?.pageFlip?.()?.flipPrev("bottom");
    }, []);

    useEffect(() => {
      if (!isOpen) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") flipNext();
        else if (e.key === "ArrowLeft") flipPrev();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, flipNext, flipPrev]);

    // ── Open animation (cover → spread → first flip) ──────────────────────────

    useEffect(() => {
      if (!isOpen) return;

      const rotateDelayMs = 420;
      const rotateDurationMs = 700;
      let flipTimer: number | undefined;

      const rotateTimer = window.setTimeout(() => {
        setCoverShiftActive(false);

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const shouldLockLandscape =
          vw > 0 && vw <= MOBILE_VIEWPORT_MAX_WIDTH && vh > vw;

        if (shouldLockLandscape) {
          setPortraitHintLayoutLocked(true);
          setPortraitHintViewport({
            width: vw * PORTRAIT_HINT_WIDTH_MULTIPLIER,
            height: vh,
          });
        } else {
          setPortraitHintLayoutLocked(false);
          setPortraitHintViewport(null);
        }

        flipTimer = window.setTimeout(() => {
          const instance = bookRef.current?.pageFlip?.();
          if (instance && instance.getCurrentPageIndex?.() === 0) {
            instance.flipNext("top");
          }
        }, rotateDurationMs + 80);
      }, rotateDelayMs);

      const endTransformTimer = window.setTimeout(
        () => setAnimateTransform(false),
        rotateDelayMs + rotateDurationMs + 80,
      );

      return () => {
        window.clearTimeout(rotateTimer);
        if (flipTimer) window.clearTimeout(flipTimer);
        window.clearTimeout(endTransformTimer);
      };
    }, [openCycle, isOpen]);

    // ── Page loading ───────────────────────────────────────────────────────────

    const handleFlip = (e: { data: number }) => {
      const pageIndex = e.data;
      setCurrentPage(pageIndex);
      setLoadedPages((prev) => {
        const next = new Set(prev);
        let changed = false;
        for (const i of getPagesToLoad(pageIndex, pageImages.length)) {
          if (!next.has(i)) {
            next.add(i);
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    };

    // ── Close ──────────────────────────────────────────────────────────────────

    const handleClose = () => {
      setIsOpen(false);
      setAnimateTransform(false);
      setCoverShiftActive(false);
      setPortraitHintLayoutLocked(false);
      setPortraitHintViewport(null);
      setLoadedPages(new Set(getPagesToLoad(0, pageImages.length)));
    };

    // ── Derived layout values ──────────────────────────────────────────────────

    const isPortrait = viewport.height > viewport.width;
    const isMobile = viewport.width <= MOBILE_VIEWPORT_MAX_WIDTH;
    const isOverlayLandscape = viewport.width > viewport.height;

    const usePortraitHintLayout =
      portraitHintLayoutLocked && isMobile && isPortrait;
    const showLandscapeHint = isOpen && isMobile && isPortrait;

    const adjustedViewport = portraitHintViewport ?? viewport;
    const isCoverMode =
      currentPage === 0 && !usePortraitHintLayout && !(isMobile && isPortrait);

    const initialBookSize = computeBookSize(
      viewport.width,
      viewport.height,
      isCoverMode,
    );
    const adjustedBookSize = computeBookSize(
      adjustedViewport.width,
      adjustedViewport.height,
      false,
    );

    const pageWidth = initialBookSize.pageWidth;
    const pageHeight = initialBookSize.pageHeight;
    const coverShiftPx =
      currentPage === 0 && coverShiftActive ? pageWidth / 2 : 0;

    const widthResizeRatio =
      pageWidth > 0 ? adjustedBookSize.pageWidth / pageWidth : 1;
    const heightResizeRatio =
      pageHeight > 0 ? adjustedBookSize.pageHeight / pageHeight : 1;
    const resizeScale = usePortraitHintLayout
      ? Math.min(widthResizeRatio, heightResizeRatio)
      : 1;
    const landscapeBoost =
      isOverlayLandscape && !usePortraitHintLayout
        ? LANDSCAPE_DISPLAY_SCALE
        : 1;
    const stageW = isCoverMode ? pageWidth : pageWidth * 2;
    const stageH = pageHeight;
    const maxSafeScale =
      stageW > 0 && stageH > 0
        ? Math.min(viewport.width / stageW, viewport.height / stageH)
        : 1;
    const displayScale = Math.min(resizeScale * landscapeBoost, maxSafeScale);

    const bookStageWidth = isCoverMode ? pageWidth : pageWidth * 2;
    const bookStageHeight = pageHeight;
    const imageSizes = `${Math.max(160, Math.round(pageWidth))}px`;
    const bookKey = `overlay-${openCycle}-${Math.round(pageWidth)}x${Math.round(pageHeight)}-${
      usePortraitHintLayout ? "portrait-hint" : "default"
    }`;

    // ── Render ─────────────────────────────────────────────────────────────────

    return (
      <OverlayShell
        isOpen={isOpen}
        onClose={handleClose}
        stopContainerPropagation={false}
      >
        {/* Desktop / landscape nav buttons */}
        <div
          className="hidden fixed left-3 top-1/2 -translate-y-1/2 max-md:landscape:block md:block md:left-8"
          style={{ zIndex: OVERLAY_CONTROL_Z_INDEX }}
        >
          <CTAButton
            onClick={(e) => {
              e?.stopPropagation();
              flipPrev();
            }}
            size="sm"
            blobIntensity="medium"
            className="!p-3"
          >
            <MdChevronLeft size={28} />
          </CTAButton>
        </div>
        <div
          className="hidden fixed right-3 top-1/2 -translate-y-1/2 max-md:landscape:block md:block md:right-8"
          style={{ zIndex: OVERLAY_CONTROL_Z_INDEX }}
        >
          <CTAButton
            onClick={(e) => {
              e?.stopPropagation();
              flipNext();
            }}
            size="sm"
            blobIntensity="medium"
            className="!p-3"
          >
            <MdChevronRight size={28} />
          </CTAButton>
        </div>

        {/* Mobile portrait nav buttons */}
        <div
          className="fixed top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:hidden max-md:landscape:hidden"
          style={{ zIndex: OVERLAY_CONTROL_Z_INDEX }}
        >
          <CTAButton
            onClick={(e) => {
              e?.stopPropagation();
              flipPrev();
            }}
            size="sm"
            blobIntensity="medium"
            className="!p-3"
          >
            <MdChevronLeft size={24} />
          </CTAButton>
          <CTAButton
            onClick={(e) => {
              e?.stopPropagation();
              flipNext();
            }}
            size="sm"
            blobIntensity="medium"
            className="!p-3"
          >
            <MdChevronRight size={24} />
          </CTAButton>
        </div>

        {/* Flipbook stage */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {showLandscapeHint && (
              <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2"
                style={{ bottom: "calc(100% + 48px)" }}
              >
                <InteractionHint text={landscapeHintText} delay={0} />
              </div>
            )}

            <div
              className="pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              style={{
                transition: animateTransform
                  ? "transform 700ms ease-in-out"
                  : "none",
                transform: `translateX(${-coverShiftPx}px) scale(${displayScale})`,
                width: `${bookStageWidth}px`,
                height: `${bookStageHeight}px`,
              }}
            >
              <div
                className={`flipbook-wrapper flex justify-center items-center w-full h-full relative overflow-visible ${
                  isOverlayLandscape ? "px-0" : "px-4"
                }`}
              >
                <HTMLFlipBook
                  ref={(instance) => {
                    bookRef.current =
                      (instance as unknown as FlipBookRef) ?? null;
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
                      currentPage === 0
                        ? INITIAL_EAGER_LOAD_AHEAD
                        : EAGER_LOAD_AHEAD;
                    const shouldEagerLoad =
                      index >= currentPage &&
                      index <= currentPage + eagerLoadAhead;

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
                              style={{ objectFit: "contain" }}
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
            </div>
          </div>
        </div>
      </OverlayShell>
    );
  },
);

export default FlipBook;
