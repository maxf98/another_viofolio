import Image from "next/image";
import GiftBoxPreview from "./GiftBoxPreview";
import { winter22Images } from "@/app/data/elgato";

export default function Winter22Gallery() {
  return (
    <GiftBoxPreview
      coverImg="/projects/elgato/brand-illustration/covers/1.jpg"
      title="Winter Holidays"
      description="Design for winter holiday box"
    >
      <div className="grid grid-cols-6 gap-8 p-6">
        {/* Row 1: Large featured image */}
        <Image
          src={winter22Images[0]}
          alt="Winter 22 illustration 1"
          width={500}
          height={500}
          className="col-span-2 w-full h-full object-cover"
        />
        <Image
          src={winter22Images[1]}
          alt="Winter 22 illustration 2"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-cover"
        />
        <Image
          src={winter22Images[2]}
          alt="Winter 22 illustration 3"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-cover"
        />

        {/* Row 2 */}
        <Image
          src={winter22Images[3]}
          alt="Winter 22 illustration 4"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />
        <Image
          src={winter22Images[4]}
          alt="Winter 22 illustration 5"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />

        <Image
          src={winter22Images[5]}
          alt="Winter 22 illustration 6"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />

        {/* Row 3: Another large featured */}
        <Image
          src={winter22Images[6]}
          alt="Winter 22 illustration 7"
          width={500}
          height={500}
          className="col-span-3 w-full h-full object-cover"
        />
        <Image
          src={winter22Images[7]}
          alt="Winter 22 illustration 8"
          width={250}
          height={250}
          className="col-span-3 w-full h-full object-cover"
        />

        {/* Row 4 */}
        <Image
          src={winter22Images[8]}
          alt="Winter 22 illustration 9"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />
        <Image
          src={winter22Images[9]}
          alt="Winter 22 illustration 10"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />

        {/* Row 5: Last items */}
        <Image
          src={winter22Images[10]}
          alt="Winter 22 illustration 11"
          width={500}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />

        {/* Row 6: Tweet */}
        <Image
          src={winter22Images[11]}
          alt="Winter 22 tweet"
          width={600}
          height={400}
          className="col-span-2 w-full h-full object-contain"
        />
      </div>
    </GiftBoxPreview>
  );
}
