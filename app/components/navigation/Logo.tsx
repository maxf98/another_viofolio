"use client";

import Link from "next/link";
import Image from "next/image";
import RotateOnHover from "../animations/RotateOnHover";

export default function Logo() {
  return (
    <header className="fixed top-0 left-0 z-[20001] px-4 md:px-6 py-3 md:py-10 pointer-events-auto">
      <Link href="/" className="inline-block">
        <RotateOnHover rotation={8}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={1103}
            height={1734}
            className="w-8 md:w-9 h-auto"
            priority
          />
        </RotateOnHover>
      </Link>
    </header>
  );
}
