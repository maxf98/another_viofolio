"use client";

import { FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";
import RotateOnHover from "./animations/RotateOnHover";

const socials = [
  {
    href: "https://www.tiktok.com/@vioseum",
    label: "TikTok",
    icon: FaTiktok,
    target: "_blank" as const,
  },
  {
    href: "https://www.instagram.com/vioseum/",
    label: "Instagram",
    icon: FaInstagram,
    target: "_blank" as const,
  },
  {
    href: "mailto:vioprandetskaya@gmail.com",
    label: "Email",
    icon: FaEnvelope,
    target: undefined,
  },
];

export default function SocialLinks({
  iconClass = "text-[var(--color-text-secondary)] hover:text-white transition-colors",
  size = 32,
  vertical = false,
  className = "",
}: {
  iconClass?: string;
  size?: number;
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex ${vertical ? "flex-row gap-7 lg:flex-col lg:gap-6" : "gap-8"} ${className}`}>
      {socials.map(({ href, label, icon: Icon, target }) => (
        <RotateOnHover key={label} rotation={15} stiffness={400} damping={8}>
          <a
            href={href}
            target={target}
            rel={target ? "noopener noreferrer" : undefined}
            className={iconClass}
            aria-label={label}
          >
            <Icon size={size} />
          </a>
        </RotateOnHover>
      ))}
    </div>
  );
}
