"use client";
import React, { useEffect, useCallback, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ImageItem } from "@/app/model";
import CTAButton from "./CTAButton";
import OverlayShell from "./OverlayShell";
import { OVERLAY_CONTROL_Z_INDEX } from "./overlayZ";

type LightboxProps = {
  images: ImageItem[];
  selectedIndex: number | null;
  onClose: () => void;
  imageClassName?: string;
  showText?: boolean;
};

const WRAP_FADE_MS = 200;

export default function Lightbox({
  images,
  selectedIndex,
  onClose,
  imageClassName = "",
  showText = false,
}: LightboxProps) {
  const isOpen = selectedIndex !== null;
  const [currentIndex, setCurrentIndex] = useState(selectedIndex ?? 0);
  const [wrapVisible, setWrapVisible] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
  });

  // Jump to selected image when opening
  useEffect(() => {
    if (emblaApi && selectedIndex !== null) {
      emblaApi.scrollTo(selectedIndex, true);
    }
  }, [emblaApi, selectedIndex]);

  // Track current slide for click handling
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Apply slide styles directly to DOM (bypasses React re-renders)
  useEffect(() => {
    if (!emblaApi) return;

    const applyStyles = () => {
      const slides = emblaApi.slideNodes();
      const selected = emblaApi.selectedScrollSnap();

      // Style all real slides
      slides.forEach((slide, i) => {
        const distance = Math.abs(i - selected);
        let opacity = 0.1;
        let scale = 0.85;

        if (distance === 0) {
          opacity = 1;
          scale = 1;
        } else if (distance === 1) {
          opacity = 0.3;
          scale = 0.9;
        }

        slide.style.opacity = String(opacity);
        slide.style.transform = `scale(${scale})`;
        slide.style.transition =
          "opacity 0.3s ease-out, transform 0.3s ease-out";
      });
    };

    applyStyles();
    emblaApi.on("scroll", applyStyles);
    emblaApi.on("select", applyStyles);
    return () => {
      emblaApi.off("scroll", applyStyles);
      emblaApi.off("select", applyStyles);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.selectedScrollSnap() === 0) {
      setWrapVisible(false);
      setTimeout(() => {
        emblaApi.scrollTo(images.length - 1, true);
        setWrapVisible(true);
      }, WRAP_FADE_MS);
    } else {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, images.length]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.selectedScrollSnap() === images.length - 1) {
      setWrapVisible(false);
      setTimeout(() => {
        emblaApi.scrollTo(0, true);
        setWrapVisible(true);
      }, WRAP_FADE_MS);
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi, images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") scrollNext();
      else if (event.key === "ArrowLeft") scrollPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, scrollNext, scrollPrev]);

  return (
    <OverlayShell
      isOpen={isOpen}
      onClose={onClose}
      stopContainerPropagation={false}
    >
      <div className="w-full h-full">
        {/* Navigation arrows - Desktop and mobile landscape */}
        {images.length > 1 && (
          <>
            <div
              className="hidden fixed left-3 top-1/2 -translate-y-1/2 max-md:landscape:block md:block md:left-8"
              style={{ zIndex: OVERLAY_CONTROL_Z_INDEX }}
            >
              <CTAButton
                onClick={(e) => {
                  e?.stopPropagation();
                  scrollPrev();
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
                  scrollNext();
                }}
                size="sm"
                blobIntensity="medium"
                className="!p-3"
              >
                <MdChevronRight size={28} />
              </CTAButton>
            </div>
          </>
        )}

        {/* Mobile portrait navigation buttons - Fixed at center */}
        {images.length > 1 && (
          <div
            className="fixed top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:hidden max-md:landscape:hidden"
            style={{ zIndex: OVERLAY_CONTROL_Z_INDEX }}
          >
            <CTAButton
              onClick={(e) => {
                e?.stopPropagation();
                scrollPrev();
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
                scrollNext();
              }}
              size="sm"
              blobIntensity="medium"
              className="!p-3"
            >
              <MdChevronRight size={24} />
            </CTAButton>
          </div>
        )}

        {/* Embla Carousel */}
        <div
          className="w-full h-full overflow-hidden max-md:landscape:overflow-y-auto max-md:landscape:overscroll-contain"
          ref={emblaRef}
          style={{
            opacity: wrapVisible ? 1 : 0,
            transition: `opacity ${WRAP_FADE_MS}ms ease-in-out`,
          }}
        >
          <div className="flex h-full items-center max-md:landscape:min-h-full max-md:landscape:items-start">
            {images.map((image, i) => {
              const isCurrent = i === currentIndex;
              const isPrev =
                i === (currentIndex - 1 + images.length) % images.length;
              const isNext = i === (currentIndex + 1) % images.length;
              const shouldPrioritize = isCurrent || isPrev || isNext;

              return (
                <div
                  key={i}
                  className={`flex-[0_0_95%] md:flex-[0_0_90%] min-w-0 flex items-center justify-center px-4 md:px-8 max-md:landscape:min-h-full max-md:landscape:items-start max-md:landscape:px-12 max-md:landscape:py-8 ${
                    i !== currentIndex ? "cursor-pointer" : ""
                  }`}
                  onClick={(e) => {
                    if (i < currentIndex) {
                      e.stopPropagation();
                      scrollPrev();
                    } else if (i > currentIndex) {
                      e.stopPropagation();
                      scrollNext();
                    }
                    // Current slide: allow propagation to close lightbox
                  }}
                >
                  <div
                    className={`flex flex-col items-center gap-6 md:flex-row md:gap-12 max-w-[1400px] w-full max-md:landscape:max-w-[min(720px,calc(100vw-7rem))] max-md:landscape:pb-24 ${
                      showText ? "md:items-start" : "md:items-center"
                    }`}
                  >
                    <div
                      className={`flex-shrink min-w-0 ${!showText ? "mx-auto" : ""}`}
                    >
                      <Image
                        className={`object-contain select-none max-h-[60vh] max-md:landscape:max-h-[68vh] md:max-h-[85vh] mt-12 w-auto h-auto max-w-full ${imageClassName}`}
                        src={image.image}
                        alt={image.alt ?? "Gallery image"}
                        {...(typeof image.image !== "string" && {
                          placeholder: "blur",
                        })}
                        sizes="(max-width: 768px) 90vw, 70vw"
                        draggable={false}
                        priority={shouldPrioritize}
                        loading={shouldPrioritize ? "eager" : "lazy"}
                      />
                    </div>
                    {showText && (
                      <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left w-full max-md:landscape:max-w-[min(560px,100%)] md:w-auto md:min-w-[280px] md:max-w-[320px]">
                        {(image.title || image.alt) && (
                          <h3 className="text-white text-xl md:text-2xl font-medium capitalize">
                            {image.title || image.alt}
                          </h3>
                        )}
                        {image.description && (
                          <p className="mt-2 text-white/60 text-base md:text-base leading-relaxed">
                            {image.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
