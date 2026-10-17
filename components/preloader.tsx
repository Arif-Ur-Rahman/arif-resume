"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

/* Intro curtain. Timing lives in CSS (globals.css → .preloader) so it lifts even
   without JS; JS only drives the counter and remembers it played this session. */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (
      root.dataset.intro === "seen" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDone(true);
      return;
    }
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {}

    // Stay in step with the CSS progress line (0.1s → 1.7s after load) even if JS arrives late
    const elapsed = performance.now() / 1000;
    const from = Math.min(100, Math.max(0, ((elapsed - 0.1) / 1.6) * 100));
    const controls = animate(from, 100, {
      duration: Math.max(0.25, 1.7 - elapsed),
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        if (countRef.current) countRef.current.textContent = String(Math.round(v)).padStart(3, "0");
      },
    });
    const timer = setTimeout(() => setDone(true), Math.max(0, 3100 - performance.now()));
    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="preloader fixed inset-0 z-[150] overflow-hidden bg-[#08080b] text-white"
    >
      {/* Ember glow rising from below */}
      <div
        className="pointer-events-none absolute -bottom-[45vh] left-1/2 h-[90vh] w-[120vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, hsl(22 100% 60% / 0.35), hsl(338 92% 67% / 0.18) 45%, hsl(258 94% 72% / 0.08) 70%, transparent)",
        }}
      />

      <div className="preloader-content relative flex h-full flex-col justify-between p-6 md:p-10">
        <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
          <span>Arif Ur Rahman</span>
          <span suppressHydrationWarning>Portfolio © {new Date().getFullYear()}</span>
        </div>

        <div className="font-display text-[13vw] italic leading-[0.95] tracking-tight md:text-[8.5vw]">
          <span className="block overflow-hidden">
            <span className="preloader-rise block" style={{ animationDelay: "0.15s" }}>
              Crafting
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="preloader-rise block text-gradient" style={{ animationDelay: "0.3s" }}>
              interfaces.
            </span>
          </span>
        </div>

        <div>
          <div className="mb-4 flex items-end justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
              Loading experience
            </span>
            <span className="font-mono text-5xl font-medium tabular-nums tracking-tighter md:text-7xl">
              <span ref={countRef}>000</span>
              <span className="text-white/40">%</span>
            </span>
          </div>
          <div className="h-px w-full bg-white/10">
            <div className="preloader-line h-px w-full bg-signature" />
          </div>
        </div>
      </div>
    </div>
  );
}
