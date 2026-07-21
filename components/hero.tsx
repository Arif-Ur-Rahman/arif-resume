"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 4, suffix: "", label: "Companies" },
];

const socials = [
  { href: "https://github.com/Arif-Ur-Rahman", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:arifurrahman.it.doc@gmail.com", icon: Mail, label: "Email" },
];

const marqueeItems = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "FastAPI", "MongoDB", "Redux", "Figma to Code",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* Masked line reveal — text slides up from behind an overflow clip */
function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Count-up stat number, triggered when scrolled into view */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce) {
      el.textContent = String(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  // Mouse parallax — portrait follows gently, ambient orbs drift opposite
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const portraitX = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 50, damping: 16 });
  const portraitY = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 50, damping: 16 });
  const orbX = useSpring(useTransform(mx, [-0.5, 0.5], [26, -26]), { stiffness: 40, damping: 18 });
  const orbY = useSpring(useTransform(my, [-0.5, 0.5], [20, -20]), { stiffness: 40, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="hero"
      onMouseMove={reduce ? undefined : handleMouseMove}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden"
    >
      {/* Soft ambient washes — drift slowly + react to cursor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute -top-40 right-[-10%] h-[480px] w-[480px]"
        >
          <motion.div
            animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full rounded-full bg-primary/10 blur-[130px]"
          />
        </motion.div>
        <motion.div
          style={{ x: orbY, y: orbX }}
          className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px]"
        >
          <motion.div
            animate={reduce ? undefined : { scale: [1.1, 1, 1.1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full rounded-full bg-amber-500/10 blur-[120px]"
          />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-1 items-center px-4 pb-10 pt-32 md:pt-40">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">

          {/* ── Left: editorial statement ── */}
          <div className="flex flex-col items-start">
            {/* Eyebrow — rule grows in, text follows */}
            <span className="eyebrow mb-6 overflow-hidden">
              <motion.span
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                className="inline-block"
              >
                Frontend Software Engineer
              </motion.span>
            </span>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, ease: EASE, delay: 0.18 }}
              className="mb-4 text-base font-medium text-muted-foreground md:text-lg"
            >
              Hello, I&apos;m{" "}
              <span className="font-semibold text-foreground">Arif Ur Rahman</span> —
            </motion.p>

            {/* Headline — masked line-by-line reveal */}
            <h1 className="font-display mb-7 text-[2.6rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.4rem]">
              <RevealLine delay={0.25}>
                Crafting{" "}
                <span className="accent-word relative inline-block">
                  thoughtful
                  {/* Underline sweep after the reveal settles */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.25, duration: 0.7, ease: EASE }}
                    className="absolute -bottom-[0.04em] left-0 h-[0.06em] w-full origin-left rounded-full bg-primary/50"
                  />
                </span>
              </RevealLine>
              <RevealLine delay={0.37}>interfaces for</RevealLine>
              <RevealLine delay={0.49}>the modern web.</RevealLine>
            </h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.62 }}
              className="mb-9 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I build responsive, accessible, high-performance applications with{" "}
              <span className="font-semibold text-foreground">React</span>,{" "}
              <span className="font-semibold text-foreground">Next.js</span> &{" "}
              <span className="font-semibold text-foreground">TypeScript</span> —
              currently shaping AI products at Crulon AI, Dhaka.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.72 }}
              className="mb-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Let&apos;s work together
                <motion.span
                  animate={reduce ? undefined : { x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
                  className="inline-flex"
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </motion.a>
              <motion.a
                href="/Arif_Ur_Rahman.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Socials + availability */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.82 }}
              className="flex flex-wrap items-center gap-5"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to opportunities
              </span>
              <span className="hidden h-4 w-px bg-border sm:inline-block" />
              <div className="flex items-center gap-2">
                {socials.map(({ href, icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                    whileHover={{ y: -3 }}
                  >
                    <Link
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors duration-200 hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: arched portrait with parallax ── */}
          <motion.div
            style={reduce ? undefined : { x: portraitX, y: portraitY }}
            className="relative mx-auto hidden lg:block"
          >
            {/* Offset arch outline slides into place */}
            <motion.div
              initial={{ opacity: 0, x: 12, y: -12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
              className="absolute -right-4 top-4 h-full w-full rounded-t-full border border-primary/40"
            />

            {/* Portrait — arch mask reveal, image settles from a zoom */}
            <div className="relative h-[440px] w-[330px] overflow-hidden rounded-t-full border border-border bg-secondary">
              <motion.div
                initial={{ scale: 1.28, y: 36 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src="/assets/images/arif.jpg"
                  alt="Arif Ur Rahman"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </div>

            {/* Floating role card — springs in, then drifts */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1.15, type: "spring", stiffness: 130, damping: 14 }}
              className="absolute -left-14 bottom-14"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="lift rounded-2xl border border-border bg-card px-5 py-4 shadow-xl shadow-black/10"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Currently
                </p>
                <p className="text-sm font-semibold leading-tight">
                  Frontend Software Engineer
                </p>
                <p className="mt-0.5 font-display text-sm italic text-primary">
                  @ Crulon AI
                </p>
              </motion.div>
            </motion.div>

            {/* Rotating badge — pops in, spins forever */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 180, damping: 15 }}
              className="absolute -right-8 top-6 flex h-24 w-24 items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="fill-muted-foreground text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.2em" }}>
                  <textPath href="#circlePath">react · next.js · typescript ·</textPath>
                </text>
              </svg>
              <motion.span
                animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="font-display text-xl italic text-primary"
              >
                ✦
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Mobile portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="relative mx-auto -order-1 lg:hidden"
          >
            <div className="absolute -right-2.5 top-2.5 h-full w-full rounded-t-full border border-primary/40" />
            <div className="relative h-52 w-40 overflow-hidden rounded-t-full border border-border bg-secondary">
              <motion.div
                initial={{ scale: 1.22 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src="/assets/images/arif.jpg"
                  alt="Arif Ur Rahman"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats + marquee footer ── */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.95 }}
            className="rule mb-7 origin-left"
          />
          <div className="mb-10 flex flex-wrap items-center justify-start gap-x-12 gap-y-6 sm:gap-x-16">
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
                  <CountUp value={value} suffix={suffix} />
                </span>
                <span className="max-w-[7rem] text-xs leading-snug text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="marquee-paused overflow-hidden border-y border-border bg-card/60 py-4"
        >
          <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {item}
                </span>
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
