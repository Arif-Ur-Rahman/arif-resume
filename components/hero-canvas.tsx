"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GAP = 26; // px between dots
const RADIUS = 170; // cursor influence radius
const PUSH = 16; // max displacement near the cursor
const LEVELS = 8; // alpha buckets → one fill() per bucket instead of per dot

/* Interactive dot field: a slow travelling wave lights the grid, and dots near the
   cursor are pushed aside and glow in the signature gradient. When there's no mouse
   (touch, or before first move) a "ghost" attractor drifts so the field stays alive. */
export default function HeroCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dots: Float32Array = new Float32Array(0); // x, y pairs
    let fg = "0 0% 100%";
    let glow: CanvasGradient | string = "#ff7a33";

    // Cursor target (tx,ty) and its smoothed position (mx,my)
    let tx = -9999;
    let ty = -9999;
    let mx = -9999;
    let my = -9999;
    let lastMove = -Infinity;
    let raf = 0;
    let running = false;
    let visible = true;

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      fg = s.getPropertyValue("--foreground").trim() || fg;
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, `hsl(${s.getPropertyValue("--gold").trim()})`);
      g.addColorStop(0.35, `hsl(${s.getPropertyValue("--primary").trim()})`);
      g.addColorStop(0.65, `hsl(${s.getPropertyValue("--blush").trim()})`);
      g.addColorStop(1, `hsl(${s.getPropertyValue("--iris").trim()})`);
      glow = g;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;
      const offX = (w - (cols - 1) * GAP) / 2;
      const offY = (h - (rows - 1) * GAP) / 2;
      dots = new Float32Array(cols * rows * 2);
      let k = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots[k++] = offX + c * GAP;
          dots[k++] = offY + r * GAP;
        }
      }
      readColors();
    };

    // Reusable bucket paths
    const base: Path2D[] = [];
    const lit: Path2D[] = [];

    const draw = (t: number) => {
      // Ghost attractor when idle: a lazy figure-eight over the right half
      if (t - lastMove > 2500) {
        tx = w * (0.62 + 0.22 * Math.sin(t * 0.00031));
        ty = h * (0.45 + 0.25 * Math.sin(t * 0.00053 + 1.3));
      }
      if (mx < -9000) {
        mx = tx;
        my = ty;
      }
      mx += (tx - mx) * 0.09;
      my += (ty - my) * 0.09;

      for (let i = 0; i < LEVELS; i++) {
        base[i] = new Path2D();
        lit[i] = new Path2D();
      }

      const time = t * 0.001;
      for (let k = 0; k < dots.length; k += 2) {
        const bx = dots[k];
        const by = dots[k + 1];

        // Two interfering waves → soft moving bands of light
        const wave =
          (Math.sin((bx + by) * 0.009 - time * 1.1) * 0.5 + 0.5) *
          (Math.cos(bx * 0.013 - by * 0.006 + time * 0.7) * 0.5 + 0.5);

        let x = bx;
        let y = by;
        let heat = 0;
        const dx = bx - mx;
        const dy = by - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < RADIUS * RADIUS) {
          const d = Math.sqrt(d2) || 1;
          const f = 1 - d / RADIUS;
          heat = f * f;
          x += (dx / d) * PUSH * heat;
          y += (dy / d) * PUSH * heat;
        }

        const r = 0.7 + wave * 0.9 + heat * 1.8;
        if (heat > 0.04) {
          const lvl = Math.min(LEVELS - 1, Math.floor(heat * LEVELS));
          lit[lvl].moveTo(x + r, y);
          lit[lvl].arc(x, y, r, 0, Math.PI * 2);
        } else {
          const lvl = Math.min(LEVELS - 1, Math.floor(wave * LEVELS));
          base[lvl].moveTo(x + r, y);
          base[lvl].arc(x, y, r, 0, Math.PI * 2);
        }
      }

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = `hsl(${fg})`;
      for (let i = 0; i < LEVELS; i++) {
        ctx.globalAlpha = 0.07 + (i / LEVELS) * 0.28;
        ctx.fill(base[i]);
      }
      ctx.fillStyle = glow;
      for (let i = 0; i < LEVELS; i++) {
        ctx.globalAlpha = 0.35 + (i / LEVELS) * 0.65;
        ctx.fill(lit[i]);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      lastMove = performance.now();
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    if (reduce) draw(0);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    // Re-read colours when the theme class flips
    const mo = new MutationObserver(() => {
      readColors();
      if (reduce) draw(0);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={cn("pointer-events-none", className)} />;
}
