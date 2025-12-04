"use client";

import Image from "next/image";
import LetterSwitcher from "./LetterSwitcher";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-16 px-8 p-16 bg-body">
      {/* Image above letter switcher */}
      <div className="w-full max-w-sm  min-h-0 max-h-[25vh] flex items-center justify-center">
        <Image
          src="/heyim.png"
          alt="Hey I'm"
          width={800}
          height={450}
          className="w-full h-auto max-h-full object-contain"
          priority
        />
      </div>

      {/* Letter Switcher */}
      <div className="w-[100%] md:w-full min-h-0">
        <LetterSwitcher />
      </div>

      {/* Image below letter switcher */}
      <div className="w-full max-w-sm  min-h-0 max-h-[25vh] flex items-center justify-center">
        <Image
          src="/gdai.png"
          alt="Graphic Designer and Illustrator"
          width={800}
          height={450}
          className="w-full h-auto max-h-full object-contain"
        />
      </div>
    </div>
  );
}
