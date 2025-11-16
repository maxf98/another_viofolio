import Image from "next/image";
import { ReactNode } from "react";

interface GiftBoxPreviewProps {
  title: string;
  coverImg: string;
  description: string;
  children: ReactNode;
}

export default function GiftBoxPreview({
  title,
  coverImg,
  description,
  children,
}: GiftBoxPreviewProps) {
  return (
    <div className="w-full min-h-screen">
      {/* Sticky Background Image */}
      <div className="relative w-full">
        {/* <Image
          src={coverImg}
          fill
          alt={description}
          className="object-cover opacity-30 -z-10"
        /> */}

        <div className="content-container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative content-container">{children}</div>
    </div>
  );
}
