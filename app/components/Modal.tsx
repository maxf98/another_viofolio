"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import OverlayShell from "./OverlayShell";

type ModalProps = {
  isOpen: boolean;
  close: () => void;
  layoutId?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  close,
  layoutId,
  children,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, [isOpen]);

  return (
    <OverlayShell isOpen={isOpen} onClose={close}>
      <motion.div
        className="relative bg-background m-5 box-border border border-gray-300 dark:border-gray-700 overflow-scroll"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        layoutId={layoutId}
      >
        <div className="min-w-[30vw] rounded-[30px]">{children}</div>
      </motion.div>
    </OverlayShell>
  );
}
