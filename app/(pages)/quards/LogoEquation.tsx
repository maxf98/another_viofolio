import Image from "next/image";

export default function LogoEquation() {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
      {/* Circle - size: 56px -> 80px -> 112px */}
      <div className="rounded-full border-white border-2 md:border-3 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28" />
      {/* Plus sign */}
      <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
      {/* Rectangle */}
      <div className="rounded-xl border-white border-2 md:border-3 w-[52px] h-[72px] sm:w-[72px] sm:h-[100px] md:w-[100px] md:h-[140px]" />
      {/* Equals sign */}
      <span className="text-2xl sm:text-3xl md:text-4xl">=</span>
      {/* Logo - 2x circle size: 112px -> 160px -> 224px */}
      <Image
        src="/projects/quards/quards-logo.png"
        alt="Quards logo"
        width={224}
        height={224}
        className="w-36 sm:w-40 md:w-56 h-auto"
      />
    </div>
  );
}
