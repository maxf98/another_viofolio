"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Picker from "@/app/components/Picker";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

interface PickerPreviewProps {
  images: string[];
  label: string;
  defaultIndex?: number;
  descriptions?: string[];
  onPreviewClick?: (index: number) => void;
  onSelectionChange?: (index: number) => void;
  pickerClassName?: string;
  previewClassName?: string;
  middleContent?: React.ReactNode;
  sideBySide?: boolean;
}

export default function PickerPreview({
  images,
  label,
  defaultIndex = 0,
  descriptions,
  onPreviewClick,
  onSelectionChange,
  pickerClassName = "w-16 h-16",
  previewClassName = "h-96",
  middleContent,
  sideBySide = false,
}: PickerPreviewProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const selectedDescription = descriptions?.[selectedIndex];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: true, dragThreshold: 10 },
    [Fade()]
  );

  // Sync picker selection when carousel changes (via swipe/tap)
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      onSelectionChange?.(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelectionChange]);

  // Scroll carousel when picker is clicked
  const handlePickerClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="flex flex-col">
      {/* Picker Row */}
      <div className="flex gap-2 justify-center flex-wrap mb-8 relative z-10">
        {images.map((src, index) => (
          <Picker
            key={index}
            src={src}
            alt={`${label} design ${index + 1}`}
            isSelected={selectedIndex === index}
            onClick={() => handlePickerClick(index)}
            animatesScale={false}
            className={pickerClassName}
          />
        ))}
      </div>

      {/* Middle Content and Preview */}
      {sideBySide ? (
        <div className="flex flex-wrap gap-8 items-center mt-8">
          {/* Left side - Middle Content */}
          <div className="flex-1 basis-[300px]">{middleContent}</div>

          {/* Right side - Preview Carousel */}
          <div
            className={`flex-1 basis-[300px] relative ${previewClassName} overflow-hidden select-none`}
            ref={emblaRef}
          >
            <div className="flex h-full">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className={`flex-[0_0_100%] min-w-0 relative h-full ${
                    onPreviewClick ? "cursor-pointer" : ""
                  }`}
                  onClick={() => onPreviewClick?.(index)}
                  whileTap={onPreviewClick ? { scale: 0.98 } : undefined}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={src}
                    alt={`${label} preview ${index + 1}`}
                    fill
                    className="object-contain w-full h-full select-none"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Middle Content */}
          {middleContent}

          {/* Preview Carousel */}
          <div
            className={`w-full relative ${previewClassName} overflow-hidden select-none`}
            ref={emblaRef}
          >
            <div className="flex h-full">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className={`flex-[0_0_100%] min-w-0 relative h-full ${
                    onPreviewClick ? "cursor-pointer" : ""
                  }`}
                  onClick={() => onPreviewClick?.(index)}
                  whileTap={onPreviewClick ? { scale: 0.98 } : undefined}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={src}
                    alt={`${label} preview ${index + 1}`}
                    fill
                    className="object-contain w-full h-full select-none"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Description */}
      {selectedDescription && (
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
          {selectedDescription}
        </p>
      )}
    </div>
  );
}
