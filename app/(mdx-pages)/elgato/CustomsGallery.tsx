"use client";

import PickerPreview from "@/app/components/PickerPreview";

export const sdImages = [
  "/projects/elgato/customs /sd/cosmos.png",
  "/projects/elgato/customs /sd/flamingo.png",
  "/projects/elgato/customs /sd/lines.png",
  "/projects/elgato/customs /sd/monkeys.png",
  "/projects/elgato/customs /sd/pool.png",
];

export const xlrImages = [
  "/projects/elgato/customs /xlr/circle.png",
  "/projects/elgato/customs /xlr/disco.png",
  "/projects/elgato/customs /xlr/lines-color.png",
  "/projects/elgato/customs /xlr/lines.png",
  "/projects/elgato/customs /xlr/sky.png",
];

export const pairImages = [
  "/projects/elgato/customs /pairs/circuit-black.png",
  "/projects/elgato/customs /pairs/doodle.png",
  "/projects/elgato/customs /pairs/nosignal.png",
];

interface CustomsGalleryProps {
  onPairClick?: (index: number) => void;
  onSdClick?: (index: number) => void;
  onXlrClick?: (index: number) => void;
}

export default function CustomsGallery({ onPairClick, onSdClick, onXlrClick }: CustomsGalleryProps) {
  return (
    <div className="w-full flex flex-col gap-0 lg:gap-16">
      {/* Pairs Section - Full Width */}
      <PickerPreview images={pairImages} label="Pairs" pickerClassName="w-28 h-20 lg:w-36 lg:h-24" previewClassName="h-96 -mt-32 lg:-mt-8" onPreviewClick={onPairClick} />

      {/* SD and XLR Side by Side on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-16 lg:mt-0">
        <PickerPreview images={sdImages} label="SD" defaultIndex={3} previewClassName="h-48 lg:h-96" onPreviewClick={onSdClick} />
        <PickerPreview images={xlrImages} label="XLR" defaultIndex={4} previewClassName="h-48 lg:h-96" onPreviewClick={onXlrClick} />
      </div>
    </div>
  );
}
