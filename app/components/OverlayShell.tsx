"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useMemo } from "react";
import { MdClose } from "react-icons/md";
import CTAButton from "./CTAButton";
import { OVERLAY_CONTROL_Z_INDEX, OVERLAY_ROOT_Z_INDEX } from "./overlayZ";

type OverlayShellProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backdropClassName?: string;
  containerClassName?: string;
  showCloseButton?: boolean;
  closeButtonClassName?: string;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  lockScroll?: boolean;
};

export default function OverlayShell({
  isOpen,
  onClose,
  children,
  backdropClassName = "bg-black/80 backdrop-blur-[10px]",
  containerClassName = "relative h-full w-full flex items-center justify-center",
  showCloseButton = true,
  closeButtonClassName = "",
  closeOnBackdrop = true,
  closeOnEscape = true,
  lockScroll = true,
}: OverlayShellProps) {
  const portalTarget = useMemo(() => {
    if (typeof window === "undefined") return null;
    return document.getElementById("modal-root") ?? document.body;
  }, []);

  useEffect(() => {
    if (!lockScroll) return;
    document.body.style.overflowY = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen, lockScroll]);

  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeOnEscape, isOpen, onClose]);

  if (!portalTarget) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 ${backdropClassName}`}
          style={{ zIndex: OVERLAY_ROOT_Z_INDEX }}
          onClick={closeOnBackdrop ? onClose : undefined}
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {showCloseButton && (
            <div
              className={`fixed top-4 md:top-8 right-4 md:right-8 ${closeButtonClassName}`}
              style={{ zIndex: OVERLAY_CONTROL_Z_INDEX }}
            >
              <CTAButton
                onClick={onClose}
                size="sm"
                className="!p-3 !bg-white/10 backdrop-blur-sm hover:!bg-white/20 transition-colors"
              >
                <MdClose size={24} />
              </CTAButton>
            </div>
          )}

          <div className={containerClassName} onClick={(event) => event.stopPropagation()}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget,
  );
}
