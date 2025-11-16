import Image from "next/image";
import GiftBoxPreview from "./GiftBoxPreview";

// Winter 22 images
const winter22Images = [
  "/projects/elgato/brand-illustration/winter22/1.png",
  "/projects/elgato/brand-illustration/winter22/2.png",
  "/projects/elgato/brand-illustration/winter22/3.png",
  "/projects/elgato/brand-illustration/winter22/4.png",
  "/projects/elgato/brand-illustration/winter22/5.png",
  "/projects/elgato/brand-illustration/winter22/6.png",
  "/projects/elgato/brand-illustration/winter22/7.png",
  "/projects/elgato/brand-illustration/winter22/8.png",
  "/projects/elgato/brand-illustration/winter22/9.png",
  "/projects/elgato/brand-illustration/winter22/10.png",
  "/projects/elgato/brand-illustration/winter22/11.png",
  "/projects/elgato/brand-illustration/winter22/tweet.png",
];

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
