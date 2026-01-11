"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ href, children, className = "" }: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center gap-3 px-12 py-6 rounded-full font-bold text-lg ${className}`}
      style={{
        backgroundColor: '#F5E6A3',
        color: '#1a1a1f',
        boxShadow: '0 6px 0 #c4b57a',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
