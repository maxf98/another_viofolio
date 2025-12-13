import Image from "next/image";
import Link from "next/link";

interface ScrollLinkSectionProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  height?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
}

export default function ScrollLinkSection({
  href,
  imageSrc,
  imageAlt,
  label,
  height = "h-[150vh]",
  objectPosition = "center",
  mobileObjectPosition,
}: ScrollLinkSectionProps) {
  return (
    <div
      className={`relative ${height} w-full`}
      style={{ clipPath: "inset(0)" }}
    >
      <div className="fixed inset-0 -z-10">
        {/* Mobile image */}
        {mobileObjectPosition && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`object-cover object-${mobileObjectPosition} md:hidden`}
          />
        )}
        {/* Desktop image (or only image if no mobileObjectPosition) */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover ${mobileObjectPosition ? 'hidden md:block' : ''}`}
          style={{ objectPosition }}
        />
      </div>
      <Link
        href={href}
        className="absolute inset-0 flex items-center justify-center text-center text-5xl md:text-7xl font-semibold text-white uppercase hover:opacity-80"
        style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }}
      >
        {label}
      </Link>
    </div>
  );
}
