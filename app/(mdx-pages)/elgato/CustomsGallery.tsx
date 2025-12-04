"use client";

import PickerPreview from "@/app/components/PickerPreview";

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

export default function CustomsGallery() {
  return (
    <div className="w-full flex flex-col gap-12">
      {/* Pairs Section - Full Width */}
      <PickerPreview images={pairImages} label="Pairs" pickerClassName="w-32 h-16" />

      {/* SD and XLR Side by Side on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <PickerPreview images={sdImages} label="SD" defaultIndex={3} />
        <PickerPreview images={xlrImages} label="XLR" defaultIndex={4} />
      </div>
    </div>
  );
}
