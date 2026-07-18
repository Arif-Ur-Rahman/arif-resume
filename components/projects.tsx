"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { EASE, Reveal } from "@/components/motion-primitives";

const projects = [
  {
    title: "Simple Authentication System",
    description:
      "A clean authentication system with Next.js frontend and Python FastAPI backend, featuring user registration, login, and JWT-protected routes.",
    image: "/projects/authentication.png",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "Python", "JWT"],
    category: "backend",
    demoLink: "https://jwt-cors-middlewares-7dj1-lks09j6mi-arif-ur-rahmans-projects.vercel.app/login",
    githubLink: "https://github.com/Arif-Ur-Rahman/jwt-cors-middlewares",
  },
  {
    title: "Credit Hero",
    description:
      "A credit management platform for tracking scores, viewing reports, and receiving personalized financial recommendations. Built with TypeScript and Next.js.",
    image: "/projects/Credit-Hero.png",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    category: "frontend",
    demoLink: "https://research-credit-frontend.vercel.app/",
    githubLink: "https://github.com/Arif-Ur-Rahman/credit-hero",
  },
  {
    title: "Foody Moody",
    description:
      "A restaurant website with interactive menu browsing, online ordering, and user reviews. Delivered as a client project at Dream Diver IT.",
    image: "/projects/Foodymoody.png",
    tags: ["TypeScript", "Express", "MongoDB", "React", "Firebase"],
    category: "frontend",
    demoLink: "https://foody-moody-restaurant.web.app/",
    githubLink: "https://github.com/Arif-Ur-Rahman/foody-moody-shakil",
  },
  {
    title: "Dr. Sarwar Kamal Portfolio",
    description:
      "A professional portfolio for a researcher in Australia, showcasing work, achievements, and services. Delivered as a freelance project.",
    image: "/projects/sarwar-sir.png",
    tags: ["TypeScript", "Next.js", "Express.js", "MongoDB"],
    category: "frontend",
    demoLink: "https://dr-sarwar-sir.vercel.app/",
    githubLink: "https://github.com/Arif-Ur-Rahman/dr-sarwar-sir",
  },
];

const tabs = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title={
            <>
              Projects with <span className="accent-word">purpose</span>
            </>
          }
          description="A selection of recent work — client builds, product frontends, and full-stack experiments."
        />

        {/* Filter pills — sliding indicator */}
        <div className="mb-12 flex justify-center md:mb-16">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            {tabs.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setActiveTab(t.value)}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300",
                  activeTab === t.value
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === t.value && (
                  <motion.span
                    layoutId="project-tab-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-foreground"
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group"
              >
                {/* Framed screenshot */}
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden rounded-2xl border border-border bg-secondary"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* Zoom-reveal: image settles from a scale as it scrolls into view */}
                    <motion.div
                      initial={{ scale: 1.16 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.1, ease: EASE }}
                      className="h-full w-full"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </motion.div>
                  </div>

                  {/* Hover veil + visit chip */}
                  <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">
                      Visit site
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>

                {/* Caption row */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                      className="index-number"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-primary">
                        <Reveal delay={0.15}>{project.title}</Reveal>
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                        className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground"
                      >
                        {project.description}
                      </motion.p>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: 0.35 + j * 0.05,
                            }}
                            className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.25 }}
                    whileHover={{ y: -3 }}
                    className="shrink-0"
                  >
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors duration-200 hover:border-primary hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
