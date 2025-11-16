import Image from "next/image";
import GiftBoxPreview from "./GiftBoxPreview";

// Winter 23 images
const winter23Images = [
  "/projects/elgato/brand-illustration/winter23/1.png",
  "/projects/elgato/brand-illustration/winter23/2.png",
  "/projects/elgato/brand-illustration/winter23/221.png",
  "/projects/elgato/brand-illustration/winter23/222.png",
  "/projects/elgato/brand-illustration/winter23/223.png",
  "/projects/elgato/brand-illustration/winter23/3.png",
  "/projects/elgato/brand-illustration/winter23/4.png",
  "/projects/elgato/brand-illustration/winter23/5.png",
  "/projects/elgato/brand-illustration/winter23/w22-sd.png",
  "/projects/elgato/brand-illustration/winter23/tweet.png",
];

export default function Winter23Gallery() {
  return (
    <GiftBoxPreview
      coverImg="/projects/elgato/brand-illustration/covers/2.png"
      title="Winter Holidays"
      description="Another design for winter holidays"
    >
      <div className="grid grid-cols-6 gap-8 p-6">
        {/* Row 1: Large featured image */}
        <Image
          src={winter23Images[0]}
          alt="Winter 23 illustration 1"
          width={500}
          height={500}
          className="col-span-3 row-span-2 w-full h-full object-contain"
        />

        <Image
          src={winter23Images[8]}
          alt="Winter 23 illustration 9"
          width={250}
          height={250}
          className="col-span-3 row-span-2 w-full h-full object-contain"
        />

        {/* Row 2 */}
        <Image
          src={winter23Images[2]}
          alt="Winter 23 illustration 3"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />

        {/* Row 3 */}
        <Image
          src={winter23Images[3]}
          alt="Winter 23 illustration 4"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />

        {/* Row 4 */}
        <Image
          src={winter23Images[4]}
          alt="Winter 23 illustration 5"
          width={250}
          height={250}
          className="col-span-2 w-full h-full object-contain"
        />

        <Image
          src={winter23Images[6]}
          alt="Winter 23 illustration 7"
          width={1200}
          height={600}
          className="col-span-6 w-full h-full object-contain"
        />

        {/* Row 5 */}
        <Image
          src={winter23Images[7]}
          alt="Winter 23 illustration 8"
          width={1200}
          height={600}
          className="col-span-6 w-full h-full object-contain object-top"
        />

        {/* Row 6: Tweet */}
        <Image
          src={winter23Images[9]}
          alt="Winter 23 tweet"
          width={600}
          height={400}
          className="col-span-3 w-full h-full object-contain"
        />
      </div>
    </GiftBoxPreview>
  );
}
