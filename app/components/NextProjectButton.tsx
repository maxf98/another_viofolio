"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface NextProjectButtonProps {
  href: string;
  label: string;
  imageSrc: string;
}

export default function NextProjectButton({
  href,
  label,
  imageSrc,
}: NextProjectButtonProps) {
  return (
    <div className="content-container py-16 md:py-24">
      <Link href={href} className="group block no-underline">
        <motion.div
          className="flex flex-col items-center gap-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white/40 text-sm uppercase tracking-[0.2em] no-underline">
            Go To
          </span>
          <div className="relative w-full max-w-md aspect-video overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={label}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.1em] group-hover:tracking-[0.15em] transition-all duration-300 no-underline">
                {label}
              </h3>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
