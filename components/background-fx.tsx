"use client";

import { useEffect, useRef } from "react";

/* Fixed ambient layer behind every section: slow-drifting aurora light
   plus a soft spotlight that follows the cursor (fine pointers only). */
export default function BackgroundFX() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = spotRef.current;
        if (!el) return;
        el.style.setProperty("--cx", `${x}px`);
        el.style.setProperty("--cy", `${y}px`);
        el.style.opacity = "1";
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-60 dark:opacity-100">
        <div
          className="aurora-blob absolute -left-[12vw] -top-[22vh] h-[75vh] w-[65vw]"
          style={{
            background: "radial-gradient(closest-side, hsl(var(--primary) / 0.22), transparent)",
            animation: "aurora-a 28s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-blob absolute -right-[15vw] top-[5vh] h-[70vh] w-[60vw]"
          style={{
            background: "radial-gradient(closest-side, hsl(var(--iris) / 0.2), transparent)",
            animation: "aurora-b 34s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-blob absolute -bottom-[30vh] left-[20vw] h-[70vh] w-[60vw]"
          style={{
            background: "radial-gradient(closest-side, hsl(var(--blush) / 0.14), transparent)",
            animation: "aurora-c 30s ease-in-out infinite",
          }}
        />
      </div>

      {/* Cursor spotlight */}
      <div
        ref={spotRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(650px circle at var(--cx, -999px) var(--cy, -999px), hsl(var(--primary) / 0.07), transparent 60%)",
        }}
      />
    </div>
  );
}
