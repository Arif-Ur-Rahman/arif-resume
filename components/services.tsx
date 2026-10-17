"use client";

import { motion } from "framer-motion";
import {
  Braces,
  CodeXml,
  Globe,
  Laptop,
  ScanQrCode,
  SquareTerminal,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { FaGithub as Github, FaFigma as Figma } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import SpotlightCard from "@/components/spotlight-card";
import { EASE, Magnetic, Reveal, VIEWPORT } from "@/components/motion-primitives";

const services = [
  {
    icon: Braces,
    title: "JavaScript & TypeScript",
    description:
      "Building dynamic, type-safe web applications with modern JS/TS for robust and scalable solutions.",
  },
  {
    icon: SquareTerminal,
    title: "React & Next.js Development",
    description:
      "High-performance web apps with React and Next.js — SSR, SSG, SEO-optimized, and production-ready.",
  },
  {
    icon: Figma,
    title: "Figma to Code",
    description:
      "Translating Figma designs into pixel-perfect, responsive pages using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: ScanQrCode,
    title: "Responsive Web Design",
    description:
      "Websites that look and work beautifully across all devices and screen sizes — mobile-first.",
  },
  {
    icon: CodeXml,
    title: "FastAPI Development",
    description:
      "Building high-performance backend APIs with Python FastAPI for scalable, well-documented services.",
  },
  {
    icon: Github,
    title: "Version Control & Collaboration",
    description:
      "Efficient Git & GitHub workflows for clean branching strategies, code reviews, and team collaboration.",
  },
];

const promises = [
  { icon: Globe, text: "Customized solutions for your business" },
  { icon: Laptop, text: "Modern, responsive, user-friendly design" },
  { icon: Check, text: "Clean, efficient, and maintainable code" },
];

/* Circular CTA: rotating text ring around a gradient core */
function OrbitButton() {
  return (
    <Magnetic strength={0.4}>
      <a
        href="#contact"
        aria-label="Get in touch"
        className="group relative flex h-40 w-40 items-center justify-center rounded-full md:h-48 md:w-48"
      >
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slow absolute inset-0 h-full w-full"
          style={{ animationDuration: "18s" }}
        >
          <defs>
            <path id="cta-circle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
          </defs>
          {/* textLength = circumference (2π·78) so the phrase closes the ring exactly */}
          <text className="fill-white/75 font-mono text-[12px] uppercase" style={{ letterSpacing: "0.12em" }}>
            <textPath href="#cta-circle" textLength="489" lengthAdjust="spacing">
              Get in touch • Let&apos;s talk • Get in touch • Let&apos;s talk •{" "}
            </textPath>
          </text>
        </svg>
        <span className="bg-signature relative flex h-20 w-20 items-center justify-center rounded-full text-[#0b0b10] shadow-[0_0_60px_-5px_hsl(var(--primary)/0.8)] transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
          <ArrowUpRight className="h-8 w-8 transition-transform duration-500 group-hover:rotate-45" />
        </span>
      </a>
    </Magnetic>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="What I Offer"
          title={
            <>
              Services, <span className="accent-word">crafted</span> to fit
            </>
          }
          description="Specialized web development services tailored to your product and your users."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.1 }}
            >
              <SpotlightCard className="group h-full p-7 hover:-translate-y-1">
                <div className="mb-12 flex items-start justify-between">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.04] text-primary transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-primary/40">
                    <span className="bg-signature absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
                    <Icon className="relative h-6 w-6" />
                  </span>
                  <span className="text-outline text-6xl font-semibold leading-none tracking-tighter transition-all duration-500 group-hover:[-webkit-text-stroke-color:hsl(var(--primary))]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* CTA banner — always-dark stage with live aurora */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0e] text-white md:mt-28"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="aurora-blob absolute -left-[10%] -top-[60%] h-[140%] w-[60%]"
              style={{
                background: "radial-gradient(closest-side, hsl(22 100% 60% / 0.45), transparent)",
                animation: "aurora-a 18s ease-in-out infinite",
              }}
            />
            <div
              className="aurora-blob absolute -bottom-[70%] left-[30%] h-[140%] w-[55%]"
              style={{
                background: "radial-gradient(closest-side, hsl(338 92% 67% / 0.35), transparent)",
                animation: "aurora-c 22s ease-in-out infinite",
              }}
            />
            <div
              className="aurora-blob absolute -right-[10%] -top-[40%] h-[140%] w-[50%]"
              style={{
                background: "radial-gradient(closest-side, hsl(258 94% 72% / 0.4), transparent)",
                animation: "aurora-b 20s ease-in-out infinite",
              }}
            />
            <div
              className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-12 px-7 py-14 sm:px-12 md:py-20 lg:flex-row lg:items-center lg:px-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                <span className="bg-signature h-1.5 w-1.5 rounded-full" />
                Have a project in mind?
              </span>
              <h3 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                <Reveal delay={0.1}>
                  Need a custom <span className="accent-word">web application?</span>
                </Reveal>
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
                className="mt-5 max-w-lg text-white/65"
              >
                Let&apos;s discuss your project and bring your ideas to life. I&apos;m dedicated to
                delivering high-quality solutions tailored to your needs.
              </motion.p>
              <ul className="mt-8 space-y-3">
                {promises.map(({ icon: Icon, text }, i) => (
                  <motion.li
                    key={text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <Icon className="h-3.5 w-3.5 text-[hsl(22_100%_65%)]" />
                    </span>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={VIEWPORT}
              transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.4 }}
              className="self-center lg:self-auto"
            >
              <OrbitButton />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
