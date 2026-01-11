"use client";
import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ImageItem } from "@/app/data/model";

type LightboxProps = {
  images: ImageItem[];
  selectedIndex: number | null;
  onClose: () => void;
  imageClassName?: string;
};

export default function Lightbox({
  images,
  selectedIndex,
  onClose,
  imageClassName = "",
}: LightboxProps) {
  const isOpen = selectedIndex !== null;
  const [currentIndex, setCurrentIndex] = useState(selectedIndex ?? 0);

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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
          <motion.button
            className="absolute top-4 right-4 z-30 text-white/70"
            onClick={onClose}
            whileHover={{ color: "purple", rotate: "90deg" }}
          >
            <MdClose size={36} />
          </motion.button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <motion.button
                className="absolute left-4 md:left-8 z-30 text-white/50 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollPrev();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MdChevronLeft size={48} />
              </motion.button>
              <motion.button
                className="absolute right-4 md:right-8 z-30 text-white/50 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollNext();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MdChevronRight size={48} />
              </motion.button>
            </>
          )}

          {/* Embla Carousel */}
          <div className="w-full h-full overflow-hidden" ref={emblaRef}>
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
                      placeholder="blur"
                      sizes="(max-width: 768px) 90vw, 70vw"
                      draggable={false}
                    />
                    <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-[300px]">
                      {(image.title || image.alt) && (
                        <h3 className="text-white text-xl md:text-2xl font-medium capitalize">
                          {image.title || image.alt}
                        </h3>
                      )}
                      {image.description && (
                        <p className="mt-2 text-white/60 text-sm md:text-base leading-relaxed">
                          {image.description}
                        </p>
                      )}
                    </div>
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
