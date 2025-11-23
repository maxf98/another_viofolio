import Image from "next/image";
import GiftBoxPreview from "./GiftBoxPreview";
import { ofestImages } from "@/app/data/elgato";

export default function OfestGallery() {
  return (
    <GiftBoxPreview
      title="Oktoberfest Giftbox"
      coverImg="/projects/elgato/brand-illustration/covers/3.png"
      description="I illustrated an oktoberfest themed giftbox"
    >
      <div className="grid grid-cols-2 gap-8 p-6">
        {/* Row 1 */}
        <Image
          src={ofestImages[0]}
          alt="Oktoberfest illustration 1"
          width={500}
          height={500}
          className="w-full h-full object-contain p-6"
        />
        <Image
          src={ofestImages[1]}
          alt="Oktoberfest illustration 2"
          width={500}
          height={500}
          className="w-full h-full object-contain p-6"
        />

        {/* Row 2 */}
        <Image
          src={ofestImages[3]}
          alt="Oktoberfest illustration 4"
          width={500}
          height={250}
          className="row-span-2 w-full h-full object-cover"
        />

        {/* Row 3 */}
        <Image
          src={ofestImages[4]}
          alt="Oktoberfest illustration 5"
          width={250}
          height={250}
          className="w-full h-full object-contain"
        />
        <Image
          src={ofestImages[2]}
          alt="Oktoberfest illustration 3"
          width={250}
          height={250}
          className="w-full h-full object-contain"
        />
      </div>
    </GiftBoxPreview>
  );
}
