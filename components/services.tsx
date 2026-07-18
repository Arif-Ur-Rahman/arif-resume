"use client";

import { motion } from "framer-motion";
import {
  Braces,
  CodeXml,
  Globe,
  Laptop,
  Code2,
  ScanQrCode,
  SquareTerminal,
  ArrowRight,
} from "lucide-react";
import { FaGithub as Github, FaFigma as Figma } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import { EASE, Reveal } from "@/components/motion-primitives";

const services = [
  {
    icon: <Braces className="h-5 w-5" />,
    title: "JavaScript & TypeScript",
    description:
      "Building dynamic, type-safe web applications with modern JS/TS for robust and scalable solutions.",
  },
  {
    icon: <SquareTerminal className="h-5 w-5" />,
    title: "React & Next.js Development",
    description:
      "High-performance web apps with React and Next.js — SSR, SSG, SEO-optimized, and production-ready.",
  },
  {
    icon: <Figma className="h-5 w-5" />,
    title: "Figma to Code",
    description:
      "Translating Figma designs into pixel-perfect, responsive pages using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <ScanQrCode className="h-5 w-5" />,
    title: "Responsive Web Design",
    description:
      "Websites that look and work beautifully across all devices and screen sizes — mobile-first.",
  },
  {
    icon: <CodeXml className="h-5 w-5" />,
    title: "FastAPI Development",
    description:
      "Building high-performance backend APIs with Python FastAPI for scalable, well-documented services.",
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: "Version Control & Collaboration",
    description:
      "Efficient Git & GitHub workflows for clean branching strategies, code reviews, and team collaboration.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28">
      <div className="container relative mx-auto px-4">
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

        {/* Services grid — numbered editorial cards */}
        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6">
                {/* Top row: icon + index */}
                <div className="mb-8 flex items-start justify-between">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.15 + i * 0.06 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    {service.icon}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 0.6, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.06 }}
                    className="index-number"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                </div>

                <h3 className="font-display mb-2.5 text-xl font-medium tracking-tight transition-colors duration-200 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Amber baseline sweep on hover */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner — ink block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative overflow-hidden rounded-3xl bg-foreground p-8 text-background md:p-12"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-amber-500/15 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl flex-1">
              <h3 className="font-display mb-3 text-3xl font-semibold tracking-tight md:text-4xl">
                <Reveal delay={0.1}>
                  Need a custom <span className="italic text-primary">web application?</span>
                </Reveal>
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
                className="mb-6 text-background/70"
              >
                Let&apos;s discuss your project and bring your ideas to life. I&apos;m
                dedicated to delivering high-quality solutions tailored to your needs.
              </motion.p>
              <ul className="space-y-2.5">
                {[
                  { icon: <Globe className="h-4 w-4" />, text: "Customized solutions for your business" },
                  { icon: <Laptop className="h-4 w-4" />, text: "Modern, responsive, user-friendly design" },
                  { icon: <Code2 className="h-4 w-4" />, text: "Clean, efficient, and maintainable code" },
                ].map(({ icon, text }, i) => (
                  <motion.li
                    key={text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="text-primary">{icon}</span>
                    <span className="text-background/70">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.5 }}
              className="flex-shrink-0"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-opacity duration-300 hover:opacity-90"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
