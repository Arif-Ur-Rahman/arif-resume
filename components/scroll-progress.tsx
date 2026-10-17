"use client";
import { useScroll, useSpring, motion } from "framer-motion";

/* Signature-gradient reading progress bar pinned to the top edge */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="bg-signature fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left"
      style={{ scaleX }}
    />
  );
}
