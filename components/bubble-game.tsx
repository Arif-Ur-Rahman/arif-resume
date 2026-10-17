"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, LogOut, Play, RotateCcw, Timer, Trophy, Volume2, VolumeX, X, Zap } from "lucide-react";
import { useGame } from "@/components/game-provider";
import { EASE } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";

type Kind = "Arif" | "Arian" | "Mimi";

/* Higher-value bubbles are rarer, smaller and faster */
const KINDS: Record<
  Kind,
  { points: number; color: string; weight: number; size: [number, number]; rise: [number, number]; pitch: number }
> = {
  Arif: { points: 5, color: "var(--primary)", weight: 0.5, size: [80, 100], rise: [9, 12.5], pitch: 520 },
  Mimi: { points: 7, color: "var(--blush)", weight: 0.32, size: [72, 90], rise: [8, 11], pitch: 660 },
  Arian: { points: 10, color: "var(--iris)", weight: 0.18, size: [64, 78], rise: [6.5, 8.5], pitch: 880 },
};
const ORDER: Kind[] = ["Arif", "Mimi", "Arian"];

const LEVEL_SECONDS = 20; // a new level every 20s of play
const MAX_LEVEL = 10;
const MAX_MISSES = 20; // escaped bubbles that end the game
const BEST_KEY = "bubble-best";
const MUTE_KEY = "bubble-muted";

type Difficulty = { speed: number; spawnMs: number; size: number; cap: number; sway: number };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* Level 1 is gentle; by level 10 bubbles are ~2.6× faster, smaller, wobblier and more numerous */
function difficulty(level: number): Difficulty {
  const t = (level - 1) / (MAX_LEVEL - 1);
  return {
    speed: lerp(1.45, 0.55, t), // multiplier on rise time — lower = faster
    spawnMs: Math.round(lerp(1150, 420, t)),
    size: lerp(1.12, 0.78, t),
    cap: Math.round(lerp(6, 16, t)),
    sway: lerp(0.7, 1.6, t),
  };
}

type Bubble = {
  id: number;
  kind: Kind;
  x: number; // % across the viewport
  size: number;
  rise: number; // seconds to cross the screen
  sway: number;
  swayDur: number;
  wobble: number;
};
type Pop = { id: number; kind: Kind; x: number; y: number; size: number };
type MissMark = { id: number; x: number };

const rand = (min: number, max: number) => min + Math.random() * (max - min);

function pickKind(): Kind {
  let r = Math.random();
  for (const k of ORDER) {
    r -= KINDS[k].weight;
    if (r <= 0) return k;
  }
  return "Arif";
}

function makeBubble(id: number, d: Difficulty): Bubble {
  const kind = pickKind();
  const k = KINDS[kind];
  const small = window.innerWidth < 640 ? 0.8 : 1;
  return {
    id,
    kind,
    x: rand(6, 94),
    size: Math.round(rand(...k.size) * small * d.size),
    rise: rand(...k.rise) * d.speed,
    sway: rand(14, 38) * d.sway,
    swayDur: rand(2.4, 4),
    wobble: rand(2.2, 3.6),
  };
}

const formatTime = (ms: number) => {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

const readStore = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const writeStore = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {}
};

/* Tiny synthesized sound effects — no audio files needed */
function useSfx(muted: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const tone = useCallback(
    (from: number, to: number, dur: number, peak = 0.22, delay = 0, type: OscillatorType = "sine") => {
      if (muted) return;
      const AC =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      const ctx = (ctxRef.current ??= new AC());
      const t = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(from, t);
      osc.frequency.exponentialRampToValueAtTime(to, t + dur * 0.8);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(peak, t + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + dur + 0.02);
    },
    [muted]
  );
  return {
    pop: (pitch: number) => tone(pitch, pitch * 0.35, 0.16),
    miss: () => tone(220, 110, 0.22, 0.12, 0, "triangle"),
    levelUp: () => {
      tone(523, 523, 0.12, 0.12);
      tone(784, 784, 0.18, 0.12, 0.1);
    },
    gameOver: () => {
      tone(392, 380, 0.22, 0.14, 0, "triangle");
      tone(311, 300, 0.22, 0.14, 0.2, "triangle");
      tone(233, 180, 0.45, 0.14, 0.4, "triangle");
    },
  };
}

function PopBurst({ pop }: { pop: Pop }) {
  const { color, points } = KINDS[pop.kind];
  const c = `hsl(${color})`;
  return (
    <div className="pointer-events-none absolute" style={{ left: pop.x, top: pop.y }}>
      {/* Shock ring */}
      <motion.span
        className="absolute rounded-full border-2"
        style={{ width: pop.size, height: pop.size, left: -pop.size / 2, top: -pop.size / 2, borderColor: c }}
        initial={{ scale: 0.8, opacity: 0.9 }}
        animate={{ scale: 1.7, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
      {/* Droplets */}
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2 + 0.3;
        const r = pop.size * rand(0.6, 0.85);
        return (
          <motion.span
            key={i}
            className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full"
            style={{ background: c, boxShadow: `0 0 10px ${c}` }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: Math.cos(a) * r, y: Math.sin(a) * r, opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
          />
        );
      })}
      {/* Floating score */}
      <motion.span
        className="absolute left-0 top-0"
        initial={{ y: -6, opacity: 0, scale: 0.6 }}
        animate={{ y: -84, opacity: [0, 1, 1, 0], scale: 1 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <span
          className="block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-2xl font-bold tracking-tight"
          style={{ color: c, textShadow: `0 2px 14px ${c}` }}
        >
          +{points}
        </span>
      </motion.span>
    </div>
  );
}

/* Red "missed" marker where a bubble escaped off the top */
function MissMarker({ mark }: { mark: MissMark }) {
  return (
    <div className="pointer-events-none absolute top-20" style={{ left: `${mark.x}%` }}>
      <motion.span
        className="block"
        initial={{ y: 10, opacity: 0, scale: 0.7 }}
        animate={{ y: [10, 0, -14], opacity: [0, 1, 0], scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="block -translate-x-1/2 whitespace-nowrap rounded-full border border-red-500/40 bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-500 backdrop-blur-sm">
          Missed −1
        </span>
      </motion.span>
    </div>
  );
}

function GameLayer({ onClose }: { onClose: () => void }) {
  const [round, setRound] = useState(0);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [pops, setPops] = useState<Pop[]>([]);
  const [missMarks, setMissMarks] = useState<MissMark[]>([]);
  const [score, setScore] = useState(0);
  const [counts, setCounts] = useState<Record<Kind, number>>({ Arif: 0, Arian: 0, Mimi: 0 });
  const [misses, setMisses] = useState(0);
  const [elapsed, setElapsed] = useState(0); // ms of active play this round
  const [over, setOver] = useState(false);
  const [paused, setPaused] = useState(false); // tab hidden
  const [banner, setBanner] = useState<number | null>(null);
  const [best, setBest] = useState(0);
  const [newBest, setNewBest] = useState(false);
  const [muted, setMuted] = useState(false);

  const nextId = useRef(0);
  const bestAtStart = useRef(0);
  const overRef = useRef(false);
  const sfx = useSfx(muted);

  const level = Math.min(MAX_LEVEL, 1 + Math.floor(elapsed / 1000 / LEVEL_SECONDS));
  const diffRef = useRef(difficulty(1));
  useEffect(() => {
    diffRef.current = difficulty(level);
  }, [level]);

  // Per-viewer conveniences: best score + mute preference
  useEffect(() => {
    const stored = Number(readStore(BEST_KEY)) || 0;
    setBest(stored);
    bestAtStart.current = stored;
    setMuted(readStore(MUTE_KEY) === "1");
  }, []);
  useEffect(() => {
    if (score > best) {
      setBest(score);
      writeStore(BEST_KEY, String(score));
    }
  }, [score, best]);

  // Freeze everything while the tab is hidden, so bubbles can't escape unseen
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Play clock — drives the level
  useEffect(() => {
    if (over || paused) return;
    let last = performance.now();
    const id = setInterval(() => {
      const now = performance.now();
      // Take the delta *before* resetting `last` — React may run the updater later
      const dt = now - last;
      last = now;
      setElapsed((e) => e + dt);
    }, 250);
    return () => clearInterval(id);
  }, [over, paused, round]);

  // Spawner — reads the current difficulty each tick, so the pace ramps up live
  useEffect(() => {
    if (over || paused) return;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const d = diffRef.current;
      const cap = window.innerWidth < 640 ? Math.max(4, Math.round(d.cap * 0.65)) : d.cap;
      setBubbles((list) => (list.length >= cap ? list : [...list, makeBubble(nextId.current++, d)]));
      timer = setTimeout(tick, d.spawnMs);
    };
    timer = setTimeout(tick, 250);
    return () => clearTimeout(timer);
  }, [over, paused, round]);

  // "Level N" banner on every level change (including the start of a round)
  useEffect(() => {
    if (overRef.current) return;
    setBanner(level);
    if (level > 1) sfx.levelUp();
    const t = setTimeout(() => setBanner(null), 1800);
    return () => clearTimeout(t);
    // sfx is recreated with `muted`; the banner should only react to level/round
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, round]);

  // 20 escaped bubbles → game over
  useEffect(() => {
    if (misses < MAX_MISSES || overRef.current) return;
    overRef.current = true;
    setOver(true);
    setBubbles([]);
    setBanner(null);
    setNewBest(score > bestAtStart.current && score > 0);
    sfx.gameOver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [misses]);

  const removeBubble = useCallback((id: number) => setBubbles((list) => list.filter((b) => b.id !== id)), []);

  const escape = (b: Bubble) => {
    removeBubble(b.id);
    if (overRef.current) return;
    setMisses((m) => m + 1);
    setMissMarks((list) => [...list, { id: b.id, x: b.x }]);
    setTimeout(() => setMissMarks((list) => list.filter((m) => m.id !== b.id)), 1000);
    sfx.miss();
  };

  const popBubble = (b: Bubble, e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (overRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const k = KINDS[b.kind];
    removeBubble(b.id);
    setPops((list) => [...list, { id: b.id, kind: b.kind, x: r.left + r.width / 2, y: r.top + r.height / 2, size: r.width }]);
    setTimeout(() => setPops((list) => list.filter((p) => p.id !== b.id)), 1000);
    setScore((s) => s + k.points);
    setCounts((c) => ({ ...c, [b.kind]: c[b.kind] + 1 }));
    sfx.pop(k.pitch);
  };

  const restart = () => {
    overRef.current = false;
    bestAtStart.current = best;
    setBubbles([]);
    setPops([]);
    setMissMarks([]);
    setScore(0);
    setCounts({ Arif: 0, Arian: 0, Mimi: 0 });
    setMisses(0);
    setElapsed(0);
    setNewBest(false);
    setOver(false);
    setRound((r) => r + 1);
  };

  const toggleMute = () => {
    setMuted((m) => {
      writeStore(MUTE_KEY, m ? "0" : "1");
      return !m;
    });
  };

  const popped = counts.Arif + counts.Arian + counts.Mimi;
  const missesShown = Math.min(misses, MAX_MISSES);
  const danger = !over && MAX_MISSES - missesShown <= 5;

  return (
    <>
      {/* Bubble surface — click-through everywhere except the bubbles themselves */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        // Above the scoreboard (z-46) so every visible bubble is poppable; below the navbar (z-50)
        className={cn("pointer-events-none fixed inset-0 z-[47] overflow-hidden", paused && "bubble-paused")}
      >
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble-rise absolute top-full"
            style={{
              left: `calc(${b.x}% - ${b.size / 2}px)`,
              width: b.size,
              height: b.size,
              animationDuration: `${b.rise}s`,
            }}
            onAnimationEnd={(e) => e.target === e.currentTarget && escape(b)}
          >
            <div
              className="bubble-sway h-full w-full"
              style={{ "--sway": `${b.sway}px`, animationDuration: `${b.swayDur}s` } as React.CSSProperties}
            >
              <div
                className="bubble pointer-events-auto"
                style={
                  {
                    "--c": KINDS[b.kind].color,
                    fontSize: b.size * 0.2,
                    animationDuration: `${b.wobble}s`,
                  } as React.CSSProperties
                }
                onPointerDown={(e) => popBubble(b, e)}
              >
                <span className="relative font-semibold leading-none tracking-tight">{b.kind}</span>
                <span className="relative mt-1 font-mono text-[0.6em] font-medium leading-none opacity-90">
                  +{KINDS[b.kind].points}
                </span>
              </div>
            </div>
          </div>
        ))}

        {pops.map((p) => (
          <PopBurst key={p.id} pop={p} />
        ))}
        {missMarks.map((m) => (
          <MissMarker key={m.id} mark={m} />
        ))}

        {/* Red vignette when only a few misses are left */}
        {danger && (
          <div className="absolute inset-0 animate-pulse shadow-[inset_0_0_120px_rgba(239,68,68,0.28)]" />
        )}

        {/* Level banner */}
        <AnimatePresence>
          {banner !== null && (
            <motion.div
              key={`${round}-${banner}`}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 1.05 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-x-0 top-28 flex justify-center"
            >
              <div className="glass flex items-center gap-3 rounded-full py-2 pl-2 pr-5 shadow-2xl shadow-black/30">
                <span className="bg-signature flex h-9 w-9 items-center justify-center rounded-full text-[#0b0b10]">
                  <Zap className="h-4 w-4" />
                </span>
                <span className="text-2xl font-semibold tracking-tight">
                  Level <span className="text-gradient">{banner}</span>
                </span>
                <span className="text-sm text-muted-foreground">
                  {banner === 1 ? "Easy start — it speeds up!" : banner === MAX_LEVEL ? "Max speed!" : "Faster!"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Scoreboard */}
      <AnimatePresence>
        {!over && (
          <motion.div
            key="hud"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed bottom-4 left-3 right-20 z-[46] sm:bottom-6 sm:left-6 sm:right-auto sm:w-[360px]"
          >
            <div className="glass rounded-3xl p-3.5 shadow-2xl shadow-black/30 sm:p-4" role="region" aria-label="Bubble game scoreboard">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <span className="bg-signature flex h-7 w-7 items-center justify-center rounded-lg text-[#0b0b10]">
                    <Gamepad2 className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-foreground/[0.07] px-2.5 py-1 font-mono text-[11px] font-semibold">
                    LVL <span className="text-primary">{level}</span>
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] tabular-nums text-muted-foreground">
                    <Timer className="h-3.5 w-3.5" />
                    {formatTime(elapsed)}
                  </span>
                </span>
                <span className="flex items-center">
                  {[
                    { label: muted ? "Unmute" : "Mute", icon: muted ? VolumeX : Volume2, onClick: toggleMute },
                    { label: "Restart game", icon: RotateCcw, onClick: restart },
                    { label: "Turn game mode off", icon: X, onClick: onClose },
                  ].map(({ label, icon: Icon, onClick }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={onClick}
                      aria-label={label}
                      title={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.07] hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </span>
              </div>

              <div className="mt-2 flex items-end justify-between">
                <p className="flex items-baseline gap-2" aria-live="polite">
                  <motion.span
                    key={score}
                    initial={{ scale: 1.35 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="text-gradient inline-block origin-left text-4xl font-semibold tabular-nums tracking-tighter"
                  >
                    {score}
                  </motion.span>
                  <span className="text-sm text-muted-foreground">pts</span>
                </p>
                <p className="flex items-center gap-1.5 pb-1 text-xs text-muted-foreground">
                  <Trophy className="h-3.5 w-3.5 text-gold" />
                  Best <span className="font-semibold tabular-nums text-foreground">{best}</span>
                </p>
              </div>

              {/* Misses: 20 segments that fill red */}
              <div className="mt-2.5">
                <div className="mb-1.5 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-muted-foreground">Missed</span>
                  <span className={cn("font-mono tabular-nums", danger ? "font-semibold text-red-500" : "text-muted-foreground")}>
                    {missesShown} / {MAX_MISSES}
                  </span>
                </div>
                <div className={cn("flex gap-[3px]", danger && "animate-pulse")}>
                  {Array.from({ length: MAX_MISSES }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition-colors duration-300",
                        i < missesShown ? "bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.7)]" : "bg-foreground/15"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {ORDER.map((kind) => (
                  <div
                    key={kind}
                    className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1.5 sm:py-2"
                    style={{ "--c": KINDS[kind].color } as React.CSSProperties}
                  >
                    <p className="flex items-center gap-1.5 text-xs font-semibold">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[hsl(var(--c))] shadow-[0_0_8px_hsl(var(--c))]" />
                      {kind}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                      <span className="text-[hsl(var(--c))]">+{KINDS[kind].points}</span>
                      <span className="text-foreground/40"> · </span>×{counts[kind]}
                    </p>
                  </div>
                ))}
              </div>

              <p className={cn("mt-2.5 text-[11px] text-muted-foreground", popped > 0 && "hidden")}>
                Pop the bubbles before they float away — {MAX_MISSES} misses ends the game.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game over */}
      <AnimatePresence>
        {over && (
          <motion.div
            key="game-over"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[48] flex items-center justify-center bg-background/50 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="game-over-title"
          >
            <motion.div
              initial={{ y: 30, scale: 0.94, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              className="glass relative w-full max-w-[420px] overflow-hidden rounded-[2rem] p-6 text-center shadow-2xl shadow-black/40 sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2"
                style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.35), transparent)" }}
              />
              <p className="eyebrow relative justify-center">Game over</p>
              <h2 id="game-over-title" className="relative mt-3 text-3xl font-semibold tracking-tight">
                {MAX_MISSES} bubbles <span className="accent-word">got away</span>
              </h2>

              <div className="relative mt-6">
                <p className="text-6xl font-semibold tabular-nums tracking-tighter">
                  <span className="text-gradient">{score}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">points</p>
                {newBest ? (
                  <span className="bg-signature mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-[#0b0b10]">
                    <Trophy className="h-3.5 w-3.5" /> New best score!
                  </span>
                ) : (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Trophy className="h-3.5 w-3.5 text-gold" /> Best {best}
                  </p>
                )}
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-2">
                {[
                  { label: "Level", value: level },
                  { label: "Time", value: formatTime(elapsed) },
                  { label: "Popped", value: popped },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] py-3">
                    <p className="text-xl font-semibold tabular-nums">{value}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <p className="relative mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                {ORDER.map((kind) => (
                  <span key={kind} className="flex items-center gap-1.5" style={{ "--c": KINDS[kind].color } as React.CSSProperties}>
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--c))]" />
                    {kind} ×{counts[kind]}
                  </span>
                ))}
              </p>

              <div className="relative mt-7 grid grid-cols-2 gap-3">
                <button type="button" onClick={restart} autoFocus className="btn btn-gradient btn-shine">
                  <Play className="h-4 w-4" />
                  Play again
                </button>
                <button type="button" onClick={onClose} className="btn btn-ghost">
                  <LogOut className="h-4 w-4" />
                  Exit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Floating bubble game over the whole site, shown while Game Mode is on */
export default function BubbleGame() {
  const { on, setOn } = useGame();
  return <AnimatePresence>{on && <GameLayer key="bubble-game" onClose={() => setOn(false)} />}</AnimatePresence>;
}
