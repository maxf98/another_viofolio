"use client";

import LetterSwitcher from "./LetterSwitcher";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-8 p-16 bg-body">
      {/* Text above letter switcher */}

      {/* Letter Switcher */}
      <div className="w-full flex-1 min-h-0 h-full">
        <LetterSwitcher />
      </div>

      {/* Text below letter switcher */}
    </div>
  );
}
