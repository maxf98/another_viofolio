"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import img1 from "@/public/projects/quards/quardExamples/IMG_3840.png";
import img2 from "@/public/projects/quards/quardExamples/IMG_3844.png";
import img3 from "@/public/projects/quards/quardExamples/IMG_3845.png";
import img4 from "@/public/projects/quards/quardExamples/IMG_3846.png";
import img5 from "@/public/projects/quards/quardExamples/IMG_3847.png";

const images = [img1, img2, img3, img4, img5];

export default function QuardExamplesCarousel() {
  const duplicatedImages = [...images, ...images, ...images];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        direction: "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ]
  );

  return (
    <div className="w-full">
      {/* Desktop: static grid, no carousel */}
      <div className="hidden md:flex gap-4 justify-center">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={image}
              alt={`Quard example ${index + 1}`}
              height={300}
              className="h-[300px] w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile: autoscrolling carousel */}
      <div className="md:hidden overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4" style={{ height: "250px" }}>
          {duplicatedImages.map((image, index) => (
            <div key={index} className="flex-[0_0_auto] h-full">
              <Image
                src={image}
                alt={`Quard example ${(index % images.length) + 1}`}
                height={250}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
