"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE, Reveal, DrawRule } from "@/components/motion-primitives";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

const VIEWPORT = { once: true, margin: "-60px 0px" } as const;

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="eyebrow overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="inline-block"
          >
            {eyebrow}
          </motion.span>
        </span>
        <motion.span
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="index-number"
        >
          {index}
        </motion.span>
      </div>
      <DrawRule className="mb-8" delay={0.15} />
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-display max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
          <Reveal delay={0.25}>{title}</Reveal>
        </h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground md:pb-1.5 md:text-right"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
