import Image from "next/image";
import Link from "next/link";

interface ScrollLinkSectionProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  height?: string;
}

export default function ScrollLinkSection({
  href,
  imageSrc,
  imageAlt,
  label,
  height = "h-[100vh]",
}: ScrollLinkSectionProps) {
  return (
    <div
      className={`relative ${height} w-full`}
      style={{ clipPath: "inset(0)" }}
    >
      <div className="fixed inset-0 -z-10">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <Link
        href={href}
        className="absolute inset-0 flex items-center justify-center text-center text-4xl md:text-5xl font-semibold text-white uppercase hover:opacity-80"
      >
        {label}
      </Link>
    </div>
  );
}
