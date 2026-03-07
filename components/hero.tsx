"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "10+", label: "Projects" },
  { value: "4", label: "Companies" },
];

const socials = [
  { href: "https://github.com/Arif-Ur-Rahman", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:arifurrahman.it.doc@gmail.com", icon: Mail, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative z-10 container px-4 mx-auto pt-28 pb-16 md:pt-44 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Mobile-only profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 lg:hidden"
            >
              <div className="relative w-28 h-28 mx-auto">
                {/* Gradient ring */}
                <div
                  className="absolute -inset-[2px] rounded-full"
                  style={{ background: "linear-gradient(135deg, hsl(217 91% 60%), hsl(262 80% 65%))" }}
                />
                <div className="absolute -inset-[1px] rounded-full bg-background" />
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/assets/images/arif.jpg"
                    alt="Arif Ur Rahman"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* "Available" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to Opportunities
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight mb-5 tracking-tight">
              <span className="block text-foreground/80">Hi, I&apos;m</span>
              <span className="gradient-text block mt-1">Arif Ur Rahman</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Frontend Software Engineer specializing in{" "}
              <span className="text-foreground font-semibold">React</span>,{" "}
              <span className="text-foreground font-semibold">Next.js</span>, and{" "}
              <span className="text-foreground font-semibold">TypeScript</span>. I build
              responsive, accessible, and high-performance web applications that deliver
              real value.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto"
              >
                <a href="#contact">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto"
              >
                <a href="/Arif_Ur_Rahman.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2.5">
              {socials.map(({ href, icon: Icon, label }) => (
                <motion.div key={label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary transition-all duration-200 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Ambient glow */}
            <div className="absolute w-[320px] h-[420px] bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute w-[200px] h-[200px] bg-violet-500/10 rounded-full blur-[60px] translate-x-20 translate-y-16" />

            {/* Gradient border frame */}
            <div className="relative animate-float">
              <div
                className="absolute -inset-[3px] rounded-3xl"
                style={{ background: "linear-gradient(135deg, hsl(217 91% 60%), hsl(262 80% 65%), hsl(217 91% 40%))" }}
              />
              <div className="absolute -inset-[2px] rounded-3xl bg-background" />
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden">
                <Image
                  src="/assets/images/arif.jpg"
                  alt="Arif Ur Rahman"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>

            {/* Floating card: Current Role */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-card border border-border rounded-2xl px-5 py-3.5 shadow-2xl shadow-black/30"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-medium">Current Role</p>
              <p className="font-semibold text-sm leading-tight">Frontend Software Engineer</p>
              <p className="text-xs text-primary mt-0.5">@ Crulon AI</p>
            </motion.div>

            {/* Floating card: Stack */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-5 py-3.5 shadow-2xl shadow-black/30"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-medium">Tech Stack</p>
              <div className="flex gap-1.5 flex-wrap">
                {["React", "Next.js", "TS"].map((t) => (
                  <span key={t} className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 md:mt-20 flex items-center justify-center lg:justify-start gap-8 sm:gap-12"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-bold gradient-text">{value}</span>
              <span className="text-xs text-muted-foreground mt-1 leading-tight">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
