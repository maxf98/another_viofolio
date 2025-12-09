"use client";

import React from "react";
import Image from "next/image";
import TextBlock from "./TextBlock";

export default function AboutMe() {
  return (
    <section className="relative h-[120vh]">
      {/* Fixed background image - stays in place while previous content scrolls away */}
      <div className="fixed top-0 left-0 w-full h-[100vh] -z-[1]">
        <Image
          src="/me-cover.png"
          alt="About me"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text content that scrolls over the fixed image */}
      <div className="relative z-10 h-[120vh] flex flex-col justify-center">
        <TextBlock>
          Hey, I’m Vio, an artist based in Munich, Germany. I create work that
          blends illustration, visual communication, and intuitive,
          process-driven art. I’m deeply passionate about visual expression,
          world-building, and storytelling, and I’m currently exploring these
          interests through my career in Graphic Design and Illustration as well
          as my studies in art therapy.
        </TextBlock>
      </div>
    </section>
  );
}
