"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollNav, { ScrollNavSection } from "@/app/components/ScrollNav";
import CustomsGallery from "./CustomsGallery";
import Winter22Gallery from "./Winter22Gallery";
import Winter23Gallery from "./Winter23Gallery";
import OfestGallery from "./OfestGallery";
import InfiniteScrollGallery from "./InfiniteScrollGallery";
import {
  customsWebShotsImages,
  dImages,
  xImages,
  ofestImages,
  winter22Images,
  winter23Images,
} from "@/app/data/elgato";

const navs: ScrollNavSection[] = [
  {
    id: "customs",
    src: "/projects/elgato/brand-illustration/winter22/221.png",
  },
  {
    id: "w22",
    src: "/projects/elgato/brand-illustration/groups/2.png",
  },
  {
    id: "ofest",
    src: "/projects/elgato/brand-illustration/groups/3.png",
  },
  {
    id: "w21",
    src: "/projects/elgato/brand-illustration/groups/1.png",
  },
];

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <ScrollNav sections={navs} />

      <div
        ref={heroRef}
        className="relative mb-32 w-screen h-screen overflow-hidden"
      >
        <div className="absolute bottom-20 left-20 z-10">
          <h1 className="!text-8xl">Working with Elgato</h1>
          <p></p>
        </div>
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <Image
            src="/projects/elgato/front1.png"
            fill
            alt="Elgato Poster"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div id="customs">
        <div className="content-container mb-24">
          <h1>Product Customs</h1>
          <p>
            Elgato has its own custom print factory, allowing it print custom
            looks for many of their products. They asked me to design their
            initial collection of custom Stream Deck faceplates, make designs
            for collaborations like Dreamville or Black Ops 3, or for special
            occasions.
          </p>
        </div>
        <CustomsGallery />
      </div>

      <InfiniteScrollGallery
        images={customsWebShotsImages}
        altPrefix="Customs web shot"
      />

      <div className="flex flex-col items-center">
        <h1>Dreamville</h1>
        <p>Custom Mic</p>
      </div>
      <InfiniteScrollGallery
        images={dImages}
        altPrefix="D collection"
        direction="right"
      />
      <div className="flex flex-col items-center">
        <h1>Elgato X</h1>
        <p>Customs + Pattern + Logo</p>
      </div>
      <InfiniteScrollGallery images={xImages} altPrefix="X collection" />

      <div className="flex flex-col items-center">
        <h1>Partner Gift Boxes</h1>
        <p>Illustrations</p>
      </div>
      <InfiniteScrollGallery
        images={winter23Images}
        altPrefix="Winter 23 collection"
        height={400}
        direction="right"
      />
      <InfiniteScrollGallery
        images={ofestImages}
        altPrefix="Ofest collection"
        height={400}
        direction="right"
      />
      <InfiniteScrollGallery
        images={winter22Images}
        altPrefix="Winter 22 collection"
        height={400}
        direction="right"
      />

      {/* <div id="w22">
        <Winter23Gallery />
      </div>
      <div id="ofest">
        <OfestGallery />
      </div>
      <div id="w21">
        <Winter22Gallery />
      </div> */}
    </div>
  );
}
