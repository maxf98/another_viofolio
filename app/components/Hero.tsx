"use client";

import Image from "next/image";
import LetterSwitcher from "./LetterSwitcher";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-8 p-16">
      {/* Image above letter switcher */}
      <div className="w-full max-w-sm">
        <Image
          src="/heyim.png"
          alt="Hey I'm"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Letter Switcher */}
      <div className="w-full h-[50%]">
        <LetterSwitcher />
      </div>

      {/* Image below letter switcher */}
      <div className="w-full max-w-sm">
        <Image
          src="/gdai.png"
          alt="Graphic Designer and Illustrator"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
