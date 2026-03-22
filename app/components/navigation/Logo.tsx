"use client";

import Link from "next/link";
import Image from "next/image";
import RotateOnHover from "../RotateOnHover";
import { useGlobalNav } from "./GlobalNavContext";

export default function Logo() {
  const { closeGlobalNav } = useGlobalNav();

  return (
    <Link href="/" onClick={closeGlobalNav} className="inline-block">
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
  );
}
