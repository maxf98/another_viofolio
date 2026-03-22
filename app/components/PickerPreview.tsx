"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Picker from "@/app/components/Picker";

interface PickerPreviewProps {
  images: string[];
  label: string;
  defaultIndex?: number;
  onPreviewClick?: (index: number) => void;
  onSelectionChange?: (index: number) => void;
  pickerClassName?: string;
  previewClassName?: string;
  className?: string;
  /** Amount in rem to bleed the preview beyond its container on mobile (lg and below). Applied equally on both sides. */
  mobileBleed?: number;
}

export default function PickerPreview({
  images,
  label,
  defaultIndex = 0,
  onPreviewClick,
  onSelectionChange,
  pickerClassName = "w-16 h-16",
  previewClassName = "h-96",
  className = "",
  mobileBleed,
}: PickerPreviewProps) {
  const safeIndex = Math.min(Math.max(defaultIndex, 0), images.length - 1);
  const [selectedIndex, setSelectedIndex] = useState(safeIndex);

  const handlePickerClick = (index: number) => {
    setSelectedIndex(index);
    onSelectionChange?.(index);
  };

  const selectedImage = images[selectedIndex] ?? images[0];

  const bleedStyle = mobileBleed
    ? {
        marginLeft: `-${mobileBleed}rem`,
        marginRight: `-${mobileBleed}rem`,
        width: `calc(100% + ${mobileBleed * 2}rem)`,
      }
    : undefined;

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Picker Row */}
      <div className="flex gap-2 justify-center flex-nowrap w-full relative z-10">
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

      {/* Preview */}
      <div
        className={`relative ${previewClassName} overflow-hidden select-none lg:!ml-0 lg:!mr-0 lg:!w-full`}
        style={bleedStyle}
      >
        <motion.div
          className={`absolute inset-0 ${onPreviewClick ? "cursor-pointer" : ""}`}
          onClick={() => onPreviewClick?.(selectedIndex)}
          whileTap={onPreviewClick ? { scale: 0.98 } : undefined}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {selectedImage && (
            <Image
              src={selectedImage}
              alt={`${label} preview ${selectedIndex + 1}`}
              fill
              className="object-contain w-full h-full select-none"
              draggable={false}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
