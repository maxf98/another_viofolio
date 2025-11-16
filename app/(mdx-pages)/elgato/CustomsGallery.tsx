"use client";

import { useState } from "react";
import Image from "next/image";
import Picker from "@/app/components/Picker";

const sdImages = [
  "/projects/elgato/customs /sd/cosmos.png",
  "/projects/elgato/customs /sd/flamingo.png",
  "/projects/elgato/customs /sd/lines.png",
  "/projects/elgato/customs /sd/monkeys.png",
  "/projects/elgato/customs /sd/pool.png",
];

const xlrImages = [
  "/projects/elgato/customs /xlr/circle.png",
  "/projects/elgato/customs /xlr/disco.png",
  "/projects/elgato/customs /xlr/lines-color.png",
  "/projects/elgato/customs /xlr/lines.png",
  "/projects/elgato/customs /xlr/sky.png",
];

const pairImages = [
  "/projects/elgato/customs /pairs/circuit-black.png",
  "/projects/elgato/customs /pairs/doodle.png",
  "/projects/elgato/customs /pairs/nosignal.png",
];

interface PickerPreviewProps {
  images: string[];
  label: string;
  defaultIndex?: number;
}

function PickerPreview({
  images,
  label,
  defaultIndex = 0,
}: PickerPreviewProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const selectedImage = images[selectedIndex];

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
            onClick={() => setSelectedIndex(index)}
            animatesScale={false}
            className={label === "Pairs" ? "w-32 h-16" : "w-16 h-16"}
          />
        ))}
      </div>

      {/* Preview */}
      <div className="w-full h-96 relative">
        <Image
          src={selectedImage}
          alt={`${label} preview`}
          fill
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}

export default function CustomsGallery() {
  return (
    <div className="w-full flex flex-col gap-12">
      {/* Pairs Section - Full Width */}
      <PickerPreview images={pairImages} label="Pairs" />

      {/* SD and XLR Side by Side on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <PickerPreview images={sdImages} label="SD" defaultIndex={3} />
        <PickerPreview images={xlrImages} label="XLR" defaultIndex={4} />
      </div>
    </div>
  );
}
