"use client";

import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="relative">
      {/* Fixed background image - stays in place while previous content scrolls away */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src="/me-cover.png"
          alt="About me"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text content that scrolls over the fixed image */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="content-container py-20">
          <div className="bg-background/90 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4">
              I&apos;m a designer and developer passionate about creating
              beautiful, functional experiences.
            </p>
            <p className="text-lg mb-4">
              With a background in visual design and front-end development, I
              bring ideas to life through thoughtful design and clean code.
            </p>
            <p className="text-lg">
              Currently working on projects that blend creativity with
              technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
