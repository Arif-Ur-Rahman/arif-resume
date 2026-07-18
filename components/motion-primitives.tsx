"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Vertical-only margin: a horizontal shrink would exclude elements near the container edge */
const VIEWPORT = { once: true, margin: "-60px 0px" } as const;

/* Masked reveal — content slides up from behind an overflow clip when scrolled into view.
   The in-view trigger lives on the UNCLIPPED wrapper: the clipped child always reports
   zero intersection, so it can never trigger itself. Variants propagate down. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn("-mb-[0.14em] block overflow-hidden pb-[0.14em]", className)}
    >
      <motion.span
        className="block"
        variants={{
          hidden: { y: "115%" },
          visible: {
            y: "0%",
            transition: { duration: 0.9, ease: EASE, delay },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/* Fade + rise on scroll into view */
export function FadeUp({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Hairline rule that draws itself from the left */
export function DrawRule({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.1, ease: EASE, delay }}
      className={cn("rule origin-left", className)}
    />
  );
}

/* Springy pop-in for small elements (icons, badges, buttons) */
export function Pop({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ delay, type: "spring", stiffness: 260, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
