import Image from "next/image";
import FlipBook from "./FlipBook";

export default function MonkeybrainSBG() {
  return (
    <section className="relative min-h-screen">
      {/* Static background image - scrolls with the page flow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/projects/MONKEYBRAIN/pages/FINALPATTERNS_left.png"
          alt="Monkeybrain background pattern"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Content that scrolls normally */}
      <div className="relative z-10">
        <div className="content-container py-8">
          <FlipBook />
        </div>
      </div>
    </section>
  );
}
