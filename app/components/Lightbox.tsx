"use client";
import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ImageItem } from "@/app/data/model";
import CTAButton from "./CTAButton";

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
  showText = true,
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

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-20 fixed inset-0 bg-black/80 backdrop-blur-[10px] flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button */}
          <div className="fixed top-4 right-4 z-30">
            <CTAButton
              onClick={onClose}
              size="sm"
              bgColor="#7a9b76"
              className="!p-3"
            >
              <MdClose size={24} />
            </CTAButton>
          </div>

          {/* Navigation arrows - Desktop only (hidden on mobile) */}
          {images.length > 1 && (
            <>
              <div className="hidden md:block fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-30">
                <CTAButton
                  onClick={(e) => {
                    e?.stopPropagation();
                    scrollPrev();
                  }}
                  size="sm"
                  bgColor="#1a1a1f"
                  blobIntensity="medium"
                  className="!p-3"
                >
                  <MdChevronLeft size={28} />
                </CTAButton>
              </div>
              <div className="hidden md:block fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30">
                <CTAButton
                  onClick={(e) => {
                    e?.stopPropagation();
                    scrollNext();
                  }}
                  size="sm"
                  bgColor="#1a1a1f"
                  blobIntensity="medium"
                  className="!p-3"
                >
                  <MdChevronRight size={28} />
                </CTAButton>
              </div>
            </>
          )}

          {/* Mobile navigation buttons - Fixed at bottom */}
          {images.length > 1 && (
            <div className="md:hidden fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-30 px-4">
              <CTAButton
                onClick={(e) => {
                  e?.stopPropagation();
                  scrollPrev();
                }}
                size="sm"
                bgColor="#1a1a1f"
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
                bgColor="#1a1a1f"
                blobIntensity="medium"
                className="!p-3"
              >
                <MdChevronRight size={24} />
              </CTAButton>
            </div>
          )}

          {/* Embla Carousel */}
          <div
            className="w-full h-full overflow-hidden"
            ref={emblaRef}
            style={{
              opacity: wrapVisible ? 1 : 0,
              transition: `opacity ${WRAP_FADE_MS}ms ease-in-out`,
            }}
          >
            <div className="flex h-full items-center">
              {images.map((image, i) => (
                <div
                  key={i}
                  className={`flex-[0_0_95%] md:flex-[0_0_90%] min-w-0 flex items-center justify-center px-4 md:px-8 ${
                    i !== currentIndex ? "cursor-pointer" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (i < currentIndex) scrollPrev();
                    else if (i > currentIndex) scrollNext();
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-[1400px]">
                    <Image
                      className={`object-contain select-none max-h-[60vh] md:max-h-[85vh] w-auto h-auto ${imageClassName}`}
                      src={image.image}
                      alt={image.alt ?? "Gallery image"}
                      {...(typeof image.image !== "string" && { placeholder: "blur" })}
                      sizes="(max-width: 768px) 90vw, 70vw"
                      draggable={false}
                      priority
                    />
                    {showText && (
                      <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-[300px] w-full">
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
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") ?? document.body
  );
}
