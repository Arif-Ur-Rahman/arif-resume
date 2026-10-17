"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { useGame } from "@/components/game-provider";
import { cn } from "@/lib/utils";

/* "Game Mode" on/off switch for the navbar */
export function GameToggle({ className }: { className?: string }) {
  const { on, toggle } = useGame();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn game mode off" : "Turn game mode on"}
      title={on ? "Game mode: on (Esc to stop)" : "Game mode: pop the bubbles!"}
      className={cn(
        "group relative flex h-10 items-center gap-2 rounded-full border px-2.5 text-sm font-medium transition-colors duration-300",
        on
          ? "border-primary/50 bg-primary/10 text-foreground"
          : "border-foreground/10 bg-foreground/[0.04] text-foreground/80 hover:border-primary/50 hover:text-foreground",
        className
      )}
    >
      <Gamepad2
        className={cn(
          "h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12",
          on && "text-primary"
        )}
      />

      {/* Switch track (sm+) */}
      <span
        aria-hidden
        className={cn(
          "relative hidden h-[18px] w-8 shrink-0 rounded-full transition-colors duration-300 sm:block",
          on ? "bg-signature" : "bg-foreground/15"
        )}
      >
        <motion.span
          initial={false}
          animate={{ x: on ? 14 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute left-[2px] top-[2px] h-[14px] w-[14px] rounded-full bg-white shadow-sm"
        />
      </span>

      {/* Status dot on phones, where the track is hidden */}
      {on && (
        <span aria-hidden className="absolute right-1 top-1 h-2 w-2 rounded-full bg-emerald-500 sm:hidden" />
      )}
    </button>
  );
}
