"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE, Reveal, DrawRule, VIEWPORT } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      {/* Label chip + self-drawing rule */}
      <div className="mb-8 flex items-center gap-4">
        <motion.span
          initial={{ opacity: 0, x: -16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
          className="glass inline-flex shrink-0 items-center gap-2.5 rounded-full py-1.5 pl-2 pr-3.5"
        >
          <span className="bg-signature flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 font-mono text-[10px] font-semibold text-[#0b0b10]">
            {index}
          </span>
          <span className="eyebrow">{eyebrow}</span>
        </motion.span>
        <DrawRule className="flex-1" delay={0.15} />
      </div>

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-3xl text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1] tracking-[-0.045em]">
          <Reveal delay={0.2}>{title}</Reveal>
        </h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="max-w-sm text-[15px] leading-relaxed text-muted-foreground md:pb-2 md:text-right"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
