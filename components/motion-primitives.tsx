"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Vertical-only margin: a horizontal shrink would exclude elements near the container edge */
export const VIEWPORT = { once: true, margin: "-60px 0px" } as const;

/* Seconds the hero should wait for the intro curtain (0 once it has played this session).
   The curtain runs on CSS time from page load, so only wait for what's left of it —
   if hydration is slow, the hero must not sit blank behind an already-lifted curtain. */
const INTRO_SECONDS = 2.05;
export function useIntroDelay() {
  const [delay] = useState(() => {
    if (typeof document === "undefined") return 0;
    if (document.documentElement.dataset.intro === "seen") return 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
    return Math.max(0, INTRO_SECONDS - performance.now() / 1000);
  });
  return delay;
}

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
      className={cn(
        "-mb-[0.2em] -mt-[0.1em] block overflow-hidden pb-[0.2em] pt-[0.1em]",
        className
      )}
    >
      <motion.span
        className="block"
        variants={{
          hidden: { y: "115%" },
          visible: {
            y: "0%",
            transition: { duration: 1, ease: EASE, delay },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/* Word-by-word blur-in — for paragraphs and display lines */
export function BlurWords({
  text,
  delay = 0,
  stagger = 0.035,
  className,
  inView = true,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  /** false = animate on mount (hero), true = animate when scrolled into view */
  inView?: boolean;
}) {
  const words = text.split(" ");
  const trigger = inView
    ? { whileInView: "visible", viewport: VIEWPORT }
    : { animate: "visible" };
  return (
    <motion.span initial="hidden" {...trigger} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: EASE, delay: delay + i * stagger },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
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
      transition={{ duration: 0.7, ease: EASE, delay }}
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
      transition={{ duration: 1.2, ease: EASE, delay }}
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

/* Magnetic hover — the child drifts toward the cursor and springs back on leave */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const spring = { stiffness: 180, damping: 14, mass: 0.4 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
