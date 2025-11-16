"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollNav, { ScrollNavSection } from "@/app/components/ScrollNav";

const navs: ScrollNavSection[] = [
  {
    id: "breathe",
    src: "/projects/mascha/breathe/6.png",
  },
  {
    id: "kundalini",
    src: "/projects/mascha/kundalini/kundalini.png",
  },
  {
    id: "feelloved",
    src: "/projects/mascha/loved/feelloved-cover.png",
  },
];

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);

  return (
    <div>
      <ScrollNav sections={navs} />

      <div
        ref={heroRef}
        className="relative mb-32 w-screen h-screen overflow-hidden"
      >
        <div className="absolute bottom-20 left-20 z-10">
          <h1 className="!text-8xl">Working with Mascha</h1>
          <p></p>
        </div>
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-128"
        >
          <Image
            src="/projects/mascha/breathe/6.png"
            fill
            alt="Mascha Breathe"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div id="breathe" className="content-container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/projects/mascha/breathe/text.png"
            alt="Mascha Breathe"
            className="object-contain"
            width={400}
            height={200}
          />

          <div className="my-16">
            <p>Mascha is an artist, and breathe is her album</p>
          </div>

          <div className="flex gap-8 w-full">
            <video
              width={200}
              height={400}
              autoPlay
              loop
              className="rounded-2xl"
            >
              <source
                src="/projects/mascha/breathe/Breathe-Canvas.mp4"
                type="video/mp4"
              />
            </video>
            <iframe
              data-testid="embed-iframe"
              className="rounded-2xl flex-grow"
              src="https://open.spotify.com/embed/track/3fT6DKtpBcb66huSBr8H5c?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <Image
            src="/projects/mascha/breathe/mascha-cd.png"
            alt="Mascha Breathe CD Cover"
            width={800}
            height={800}
          />
        </div>
      </div>

      <div
        id="kundalini"
        className="content-container flex flex-col justify-center items-center gap-16 mt-48"
      >
        <Image
          src="/projects/mascha/kundalini/k-text3.png"
          alt="Kundalini album cover text"
          width={800}
          height={200}
        />

        <Image
          src="/projects/mascha/kundalini/kundalini.png"
          className="rounded-2xl"
          alt="Kundalini album cover"
          width={700}
          height={700}
        />

        <div className="flex gap-8 w-[700px]">
          {/* <video width={200} height={400} autoPlay loop className="rounded-2xl">
            <source
              src="/projects/mascha/kundalini/kundalinianimation.mp4"
              type="video/mp4"
            />
          </video> */}
          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl"
            src="https://open.spotify.com/embed/track/3DHo0zqSwKUCk0nEXjQuZl?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div
        id="feelloved"
        className="content-container flex flex-col justify-center items-center gap-16 mt-48"
      >
        <Image
          src="/projects/mascha/loved/feellovedtext.png"
          alt="Feel Loved album cover text"
          width={600}
          height={200}
        />

        <Image
          src="/projects/mascha/loved/fullcover.png"
          alt="Feel Loved album cover"
          className="rounded-2xl"
          width={1000}
          height={600}
        />

        <div className="flex gap-8 w-[700px] items-center">
          <iframe
            data-testid="embed-iframe"
            className="rounded-2xl"
            src="https://open.spotify.com/embed/track/6SYvsiN3KZqKIepny2UX5D?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <Image
            src="/projects/mascha/loved/loved-mockup.png"
            alt="Mascha Feel Loved CD Cover"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
