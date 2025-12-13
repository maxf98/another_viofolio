"use client";
import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ImageItem } from "@/app/data/model";

type LightboxProps = {
  images: ImageItem[];
  selectedIndex: number | null;
  onClose: () => void;
};

export default function Lightbox({
  images,
  selectedIndex,
  onClose,
}: LightboxProps) {
  const isOpen = selectedIndex !== null;
  const [currentIndex, setCurrentIndex] = useState(selectedIndex ?? 0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  // Jump to selected image when opening
  useEffect(() => {
    if (emblaApi && selectedIndex !== null) {
      emblaApi.scrollTo(selectedIndex, true);
    }
  }, [emblaApi, selectedIndex]);

  // Track current slide for opacity styling
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    onSelect(); // Set initial index
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
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

  // Calculate styles based on distance from current slide
  const getSlideStyles = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return { opacity: 1, scale: 1 };
    if (distance === 1) return { opacity: 0.3, scale: 0.9 };
    return { opacity: 0.1, scale: 0.85 };
  };

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-20 fixed inset-0 bg-gray-900/50 backdrop-blur-[10px] flex flex-col justify-center items-center"
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

          {/* Embla Carousel */}
          <div
            className="w-full h-full overflow-hidden"
            ref={emblaRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full items-center">
              {images.map((image, i) => (
                <div
                  key={image.index ?? i}
                  className={`flex-[0_0_90%] md:flex-[0_0_50%] min-w-0 flex items-center justify-center px-4 transition-all duration-300 ${
                    i !== currentIndex ? "cursor-pointer" : ""
                  }`}
                  style={{
                    opacity: getSlideStyles(i).opacity,
                    transform: `scale(${getSlideStyles(i).scale})`,
                  }}
                  onClick={() => {
                    if (i < currentIndex) scrollPrev();
                    else if (i > currentIndex) scrollNext();
                  }}
                >
                  <Image
                    className="object-contain select-none max-h-[85vh] w-auto h-auto"
                    src={image.image}
                    alt={image.alt ?? "Gallery image"}
                    placeholder={typeof image.image === "string" ? "empty" : "blur"}
                    width={typeof image.image === "string" ? 1920 : image.image.width}
                    height={typeof image.image === "string" ? 1080 : image.image.height}
                    draggable={false}
                  />
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
