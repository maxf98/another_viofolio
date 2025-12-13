"use client";

import LetterSwitcher from "./LetterSwitcher";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-8 p-16">
      {/* Text above letter switcher */}
      <span className="text-white text-xl md:text-2xl mt-0">Hey I&apos;m</span>

      {/* Letter Switcher */}
      <div className="w-full flex-1 min-h-0 h-full">
        <LetterSwitcher />
      </div>

      {/* Text below letter switcher */}
      <span className="text-white text-xl mb-8">Graphic Designer and Illustrator</span>
    </div>
  );
}
