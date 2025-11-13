"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // .modalOverlay: z-20 fixed inset-0 bg-black/80 backdrop-blur-[10px] flex flex-col justify-center items-center
          className="z-20 fixed inset-0 bg-black/80 backdrop-blur-[10px] flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            // .modal: relative bg-background m-5 box-border border overflow-scroll
            className="relative bg-background m-5 box-border border border-gray-300 dark:border-gray-700 overflow-scroll"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            layoutId={layoutId}
          >
            <motion.button
              // .modalCloseButton: absolute top-[10px] right-[10px] text-gray-800 dark:text-gray-200 bg-gray-500/40 rounded-[50px] border-0
              className="absolute top-[10px] right-[10px] text-gray-800 dark:text-gray-200 bg-gray-500/40 rounded-[50px] border-0"
              onClick={close}
              whileHover={{ color: "purple", rotate: "90deg" }}
            >
              <MdClose size="35px" />
            </motion.button>
            {/* .modalContent: min-w-[30vw] bg-background rounded-[30px] */}
            <div className="min-w-[30vw] bg-background rounded-[30px]">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") ?? document.body
  );
}
