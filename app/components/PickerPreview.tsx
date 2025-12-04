"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Picker from "@/app/components/Picker";

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
  const selectedImage = images[selectedIndex];
  const selectedDescription = descriptions?.[selectedIndex];

  return (
    <div className="flex flex-col">
      {/* Picker Row */}
      <div className="flex gap-2 justify-center flex-wrap">
        {images.map((src, index) => (
          <Picker
            key={index}
            src={src}
            alt={`${label} design ${index + 1}`}
            isSelected={selectedIndex === index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectionChange?.(index);
            }}
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

          {/* Right side - Preview */}
          <motion.div
            className={`flex-1 basis-[300px] relative ${previewClassName} ${
              onPreviewClick ? "cursor-pointer" : ""
            }`}
            onClick={() => onPreviewClick?.(selectedIndex)}
            whileTap={onPreviewClick ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image
              src={selectedImage}
              alt={`${label} preview`}
              fill
              className="object-contain w-full h-full"
            />
          </motion.div>
        </div>
      ) : (
        <>
          {/* Middle Content */}
          {middleContent}

          {/* Preview */}
          <motion.div
            className={`w-full relative ${previewClassName} ${
              onPreviewClick ? "cursor-pointer" : ""
            }`}
            onClick={() => onPreviewClick?.(selectedIndex)}
            whileTap={onPreviewClick ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image
              src={selectedImage}
              alt={`${label} preview`}
              fill
              className="object-contain w-full h-full"
            />
          </motion.div>
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
