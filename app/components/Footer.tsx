import Link from "next/link";
import { FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";
import RotateOnHover from "./animations/RotateOnHover";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-8">
            <RotateOnHover rotation={15} stiffness={400} damping={8}>
              <a
                href="https://tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={32} />
              </a>
            </RotateOnHover>

            <RotateOnHover rotation={15} stiffness={400} damping={8}>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
            </RotateOnHover>

            <RotateOnHover rotation={15} stiffness={400} damping={8}>
              <a
                href="vioprandetskaya@gmail.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={32} />
              </a>
            </RotateOnHover>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <Link
              href="/impressum"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Impressum
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
