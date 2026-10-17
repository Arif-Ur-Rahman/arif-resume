"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  AnimatePresence,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiMongodb,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Image from "next/image";
import HeroCanvas from "@/components/hero-canvas";
import { EASE, Magnetic, useIntroDelay } from "@/components/motion-primitives";

const roles = ["thoughtful", "delightful", "accessible", "performant"];

const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 10, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "", label: "Companies" },
];

const socials = [
  { href: "https://github.com/Arif-Ur-Rahman", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:arifurrahman.it.doc@gmail.com", icon: Mail, label: "Email" },
];

const orbit = [
  { icon: SiReact, color: "#61DAFB", label: "React" },
  { icon: SiNextdotjs, color: "currentColor", label: "Next.js" },
  { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  { icon: TbBrandFramerMotion, color: "hsl(var(--blush))", label: "Framer Motion" },
  { icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
  { icon: SiFigma, color: "#F24E1E", label: "Figma" },
  { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
];

/* Masked line reveal — text slides up from behind an overflow clip */
function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="-mb-[0.18em] -mt-[0.1em] block overflow-hidden pb-[0.18em] pt-[0.1em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Cycles the accent word. Every word sits invisibly in the same grid cell,
   so the slot is always as wide as the widest word — no layout jumps. */
function WordRotator({ words, startDelay }: { words: string[]; startDelay: number }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let interval: ReturnType<typeof setInterval>;
    const kickoff = setTimeout(() => {
      interval = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    }, startDelay * 1000);
    return () => {
      clearTimeout(kickoff);
      clearInterval(interval);
    };
  }, [words.length, startDelay, reduce]);

  return (
    <span className="relative inline-grid align-baseline">
      {words.map((w) => (
        <span key={w} aria-hidden className="accent-word invisible col-start-1 row-start-1">
          {w}
        </span>
      ))}
      {/* Blur lives on the wrapper: Chrome drops background-clip:text when the
          same element carries a filter, which would hide the gradient word */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "70%", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-70%", opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.45, ease: EASE }}
          className="col-start-1 row-start-1"
        >
          <span className="accent-word">{words[index]}</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* Count-up stat number, triggered when scrolled into view */
function CountUp({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce) {
      el.textContent = String(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      delay,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, reduce, delay]);

  return (
    <span className="text-gradient">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

/* Portrait with spinning gradient frame, 3D tilt, cursor glare and orbiting tech */
function Portrait({ delay }: { delay: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 120, damping: 16 };
  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-11, 11]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 55%)`;

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
      className="relative mx-auto w-full max-w-[270px] sm:max-w-[330px] lg:max-w-[370px]"
      style={{ perspective: 1200 }}
    >
      {/* Orbit rings + travelling tech icons */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[166%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-foreground/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[128%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/[0.06]" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[166%] -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin-slow absolute inset-0">
          {orbit.map(({ icon: Icon, color, label }, i) => {
            const angle = (360 / orbit.length) * i;
            return (
              <div key={label} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 16, delay: delay + 0.6 + i * 0.07 }}
                    >
                      <span
                        title={label}
                        className="glass animate-spin-reverse flex h-10 w-10 items-center justify-center rounded-2xl shadow-lg shadow-black/10 sm:h-12 sm:w-12"
                      >
                        <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" style={{ color }} />
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tilting card */}
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        // Always bound (handleMove bails under reduced motion, so it stays flat) —
        // branching the tree on useReducedMotion would break SSR hydration
        style={{ rotateX, rotateY }}
        className="relative"
      >
        {/* Bloom behind the card */}
        <div className="bg-signature absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl dark:opacity-40" />

        <div className="ring-gradient relative rounded-[2.25rem] p-[1.5px] shadow-2xl shadow-black/30">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2.25rem-1.5px)] bg-card">
            <motion.div
              initial={{ scale: 1.25 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: EASE, delay: delay + 0.1 }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/images/ArifUrRahman.jpg"
                alt="Arif Ur Rahman"
                fill
                sizes="(min-width: 1024px) 370px, 330px"
                className="object-cover object-[50%_18%]"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <motion.div
              className="pointer-events-none absolute inset-0 mix-blend-overlay motion-reduce:hidden"
              style={{ background: glare }}
            />

            {/* Name plate */}
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-tight">Arif Ur Rahman</p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-white/70">
                  <MapPin className="h-3 w-3" /> Dhaka, Bangladesh
                </p>
              </div>
              <span className="font-display text-lg italic text-white/90">AR</span>
            </div>
          </div>
        </div>

        {/* Floating "currently" card */}
        <motion.div
          initial={{ opacity: 0, x: -24, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: delay + 0.9 }}
          className="absolute -left-6 top-[18%] sm:-left-14"
        >
          <div className="animate-float rounded-2xl border border-foreground/10 bg-card/80 px-4 py-3 shadow-xl shadow-black/25 backdrop-blur-xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Currently</p>
            <p className="mt-1 text-[13px] font-semibold leading-tight">Frontend Engineer</p>
            <p className="font-display text-[15px] italic leading-tight text-primary">@ Crulon AI</p>
          </div>
        </motion.div>

        {/* Floating experience badge */}
        <motion.div
          initial={{ opacity: 0, x: 24, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 4 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: delay + 1.05 }}
          className="absolute -right-5 bottom-[26%] sm:-right-10"
        >
          <div className="animate-float rounded-2xl border border-foreground/10 bg-card/80 px-4 py-3 shadow-xl shadow-black/25 backdrop-blur-xl [animation-delay:-3s]">
            <p className="text-3xl font-semibold leading-none tracking-tighter">
              <span className="text-gradient">4+</span>
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Years shipping
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const intro = useIntroDelay();
  const at = (s: number) => intro + s;

  // Scroll-linked depth: content drifts down and fades as the hero leaves
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 22, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, ease: EASE, delay: at(delay) },
  });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Backdrop: blueprint grid + interactive dot field */}
      <div className="absolute inset-0">
        <div className="bg-grid mask-radial absolute inset-0 opacity-50" />
        <HeroCanvas className="mask-radial absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container relative z-10 flex flex-1 items-center pb-8 pt-28 md:pt-32">
        <div className="grid w-full grid-cols-1 items-center gap-20 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
          {/* ── Left: statement ── */}
          <motion.div style={{ y: contentY, opacity: fade }} className="flex flex-col items-start">
            <motion.div
              {...fadeIn(0.05)}
              className="glass mb-7 inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-medium"
            >
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-2.5 py-1 text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available
              </span>
              <span className="text-muted-foreground">Open to full-time roles &amp; freelance</span>
            </motion.div>

            <motion.p
              {...fadeIn(0.15)}
              className="mb-5 flex items-center gap-3 text-base text-muted-foreground md:text-lg"
            >
              <span className="bg-signature h-px w-10" />
              <span>
                Hello, I&apos;m <span className="font-semibold text-foreground">Arif Ur Rahman</span>
              </span>
            </motion.p>

            <h1 className="mb-7 text-[clamp(2.75rem,5.7vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
              <RevealLine delay={at(0.25)}>
                Crafting <WordRotator words={roles} startDelay={at(2)} />
              </RevealLine>
              <RevealLine delay={at(0.37)}>interfaces for</RevealLine>
              <RevealLine delay={at(0.49)}>
                the{" "}
                <span className="relative inline-block">
                  modern web.
                  {/* Hand-drawn underline */}
                  <svg
                    viewBox="0 0 300 20"
                    preserveAspectRatio="none"
                    className="absolute -bottom-[0.1em] left-0 h-[0.2em] w-full overflow-visible"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="hero-underline" x1="0" x2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="55%" stopColor="hsl(var(--blush))" />
                        <stop offset="100%" stopColor="hsl(var(--iris))" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M3 14 C 60 4, 120 4, 170 10 S 260 17, 297 6"
                      fill="none"
                      stroke="url(#hero-underline)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, ease: EASE, delay: at(1.2) }}
                    />
                  </svg>
                </span>
              </RevealLine>
            </h1>

            <motion.p
              {...fadeIn(0.65)}
              className="mb-9 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I build responsive, accessible, high-performance applications with{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">Next.js</span> &amp;{" "}
              <span className="font-medium text-foreground">TypeScript</span> — currently shaping
              AI products at <span className="font-medium text-foreground">Crulon AI</span>, Dhaka.
            </motion.p>

            <motion.div {...fadeIn(0.78)} className="mb-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Magnetic className="w-full sm:w-auto">
                <a href="#contact" className="btn btn-ink btn-shine group w-full px-7 py-4 sm:w-auto">
                  Let&apos;s work together
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <a href="/Arif_Ur_Rahman.pdf" download className="btn btn-ghost group w-full px-7 py-4 sm:w-auto">
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              </Magnetic>
            </motion.div>

            <motion.div {...fadeIn(0.9)} className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Find me on
              </span>
              <span className="h-px w-8 bg-border" />
              <div className="flex items-center gap-2.5">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="icon-btn"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: portrait ── */}
          <motion.div style={{ y: portraitY }} className="relative px-8 sm:px-0">
            <Portrait delay={at(0.3)} />
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: at(1) }}
        className="container relative z-10 pb-8"
      >
        <div className="glass flex flex-col gap-6 rounded-3xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-12">
            {stats.map(({ value, suffix, label }, i) => (
              <div key={label} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <span className="text-3xl font-semibold tracking-tighter sm:text-4xl">
                  <CountUp value={value} suffix={suffix} delay={at(1) + i * 0.1} />
                </span>
                <span className="max-w-[6.5rem] text-[11px] leading-snug text-muted-foreground sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#skills"
            className="group hidden items-center gap-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <span className="font-mono uppercase tracking-[0.2em]">Scroll to explore</span>
            <span className="flex h-9 w-6 justify-center rounded-full border border-foreground/20 pt-1.5">
              <span className="h-1.5 w-1 rounded-full bg-primary [animation:scroll-dot_1.6s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
