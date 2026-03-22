"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FlipBook, { type FlipBookHandle } from "./components/FlipBook";
import { pageImages } from "./components/images";
import InteractionHint from "@/app/components/InteractionHint";
import PageHeader from "@/app/components/PageHeader";
import SectionHintsGrid from "@/app/components/SectionHintsGrid";
import {
  GalleryTextProvider,
  useGalleryText,
} from "@/app/translations/gallery";

const MOBILE_VIEWPORT_MAX_WIDTH = 1024;

const coverImage = pageImages[0];
const coverAspectRatio =
  typeof coverImage === "object" &&
  "width" in coverImage &&
  "height" in coverImage
    ? coverImage.width / coverImage.height
    : 4 / 3;
const coverAspectRatioCSS =
  typeof coverImage === "object" &&
  "width" in coverImage &&
  "height" in coverImage
    ? `${coverImage.width} / ${coverImage.height}`
    : "4 / 3";

function MonkeybrainInner() {
  const t = useGalleryText();
  const flipBookRef = useRef<FlipBookHandle>(null);

  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const isPortrait = viewport.height > viewport.width;
  const isMobile = viewport.width <= MOBILE_VIEWPORT_MAX_WIDTH;
  const isMobileLandscape = isMobile && !isPortrait;
  const usePortraitTapHint = isMobile && isPortrait;

  const tapHintDirection = usePortraitTapHint ? "bottom" : "right";
  const tapHintClassName = usePortraitTapHint
    ? "text-center"
    : "items-end max-md:max-w-[8.5rem] max-md:whitespace-normal text-right md:whitespace-nowrap";

  return (
    <div className="flex flex-col relative isolate min-h-screen overflow-x-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/projects/MONKEYBRAIN/pages/FINALPATTERNS_left.webp"
          alt="Monkeybrain background pattern"
          fill
          sizes="100vw"
          className="object-cover opacity-18"
          priority
        />
        <div className="absolute inset-0 bg-[#0c0d12]/36" />
      </div>

      <section className="relative z-10" style={{ clipPath: "inset(0)" }}>
        <div id="monkeybrain" className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <PageHeader title={t.monkeybrain.title} description={t.monkeybrain.description} />

            {/* Cover preview + tap hint */}
            <div className="mx-auto mt-16 md:mt-12 w-full relative">
              <div
                className={`mx-auto w-fit relative ${
                  usePortraitTapHint ? "flex flex-col items-center gap-1.5" : ""
                }`}
              >
                {/* Tap hint */}
                <div
                  className={`pointer-events-none ${
                    usePortraitTapHint
                      ? ""
                      : "absolute right-full top-1/2 mr-2 md:mr-8 -translate-y-1/2"
                  }`}
                >
                  <InteractionHint
                    text={t.monkeybrain.tapToFlickThrough}
                    delay={0}
                    size="large"
                    direction={tapHintDirection}
                    className={tapHintClassName}
                  />
                </div>

                {/* Cover image — click to open flipbook overlay */}
                <button
                  type="button"
                  onClick={() => flipBookRef.current?.open()}
                  className="group relative block w-[min(88vw,340px)] lg:w-[380px] mx-auto cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5E6A3] focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                  style={
                    isMobileLandscape
                      ? {
                          width: `min(88vw, calc(104dvh * ${coverAspectRatio}))`,
                        }
                      : undefined
                  }
                  aria-label="Open Monkeybrain magazine"
                >
                  <div
                    className="relative w-full overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ aspectRatio: coverAspectRatioCSS }}
                  >
                    <Image
                      src={coverImage}
                      alt="Monkeybrain cover"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 90vw, 400px"
                      priority
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <SectionHintsGrid currentHref="/monkeybrain" transparentCards />
      </div>

      {/* Flipbook overlay — opened imperatively via ref */}
      <FlipBook
        ref={flipBookRef}
        landscapeHintText={t.monkeybrain.betterInLandscape}
      />
    </div>
  );
}

export default function MonkeybrainPage() {
  return (
    <GalleryTextProvider>
      <MonkeybrainInner />
    </GalleryTextProvider>
  );
}
