"use client";

import React from "react";
import Image from "next/image";
import TextBlock from "./TextBlock";

export default function AboutMe() {
  return (
    <section className="relative h-[150vh]">
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
      <div className="relative z-10 h-[150vh] flex flex-col justify-center">
        <TextBlock>
          Hi I'm Violetta Prandetskaya, or simply Vio :) I'm an artist and
          designer based in Munich, Germany! Using art as a form of
          self-expression led me to study Graphic Design and Art Direction, and
          I’ve been working as a visual artist ever since. My curiosity about
          how images can resonate emotionally inspired me to expand my practice
          into art therapy studies. Today, I combine design, illustration, and
          insights from the intersection of art and psychology to explore how
          visuals shape understanding and feeling.
        </TextBlock>
      </div>
    </section>
  );
}
