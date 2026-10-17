"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import { EASE, VIEWPORT } from "@/components/motion-primitives";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoLink: string;
  githubLink?: string;
  /** CSS colour token used for the card's ambient glow */
  accent: string;
};

const projects: Project[] = [
  {
    title: "Crulon AI",
    description:
      "AI voice support platform for ISPs and WISPs, handling customer calls end-to-end — troubleshooting, billing, and payments. Sole frontend engineer on the website and product interfaces.",
    image: "/projects/crulon.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    demoLink: "https://crulon.ai/",
    accent: "var(--iris)",
  },
  {
    title: "Simple Authentication System",
    description:
      "A clean authentication system with Next.js frontend and Python FastAPI backend, featuring user registration, login, and JWT-protected routes.",
    image: "/projects/authentication.png",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "Python", "JWT"],
    category: "backend",
    demoLink: "https://jwt-cors-middlewares-7dj1-lks09j6mi-arif-ur-rahmans-projects.vercel.app/login",
    githubLink: "https://github.com/Arif-Ur-Rahman/jwt-cors-middlewares",
    accent: "var(--blush)",
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
    accent: "var(--gold)",
  },
  {
    title: "Foody Moody",
    description:
      "A restaurant website with interactive menu browsing, online ordering, and user reviews. Delivered as a client project at Dream Diver IT.",
    image: "/projects/Foodymoody.png",
    tags: ["TypeScript", "Express", "MongoDB", "React", "Firebase"],
    category: "frontend",
    demoLink: "https://arifs-foody-moody-online.vercel.app/",
    githubLink: "https://github.com/Arif-Ur-Rahman/foody-moody-shakil",
    accent: "var(--primary)",
  },
  {
    title: "Dr. Sarwar Kamal Portfolio",
    description:
      "A professional portfolio for a researcher in Australia, showcasing work, achievements, and services. Delivered as a freelance project.",
    image: "/projects/sarwar-sir.jpg",
    tags: ["TypeScript", "Next.js", "Express.js", "MongoDB"],
    category: "frontend",
    demoLink: "https://dr-sarwar-sir.vercel.app/",
    githubLink: "https://github.com/Arif-Ur-Rahman/dr-sarwar-sir",
    accent: "var(--iris)",
  },
];

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}

const hostOf = (url: string) => url.replace(/^https?:\/\//, "").split("/")[0];

function ProjectCard({
  project,
  i,
  total,
  progress,
  desktop,
}: {
  project: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
  desktop: boolean;
}) {
  // Earlier cards recede as later ones stack on top
  const targetScale = 1 - (total - 1 - i) * 0.05;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const dim = useTransform(progress, [i / total, Math.min(1, (i + 1) / total)], [0, i === total - 1 ? 0 : 0.35]);

  return (
    <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center">
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE }}
        style={desktop ? { scale, top: `calc(-4vh + ${i * 28}px)` } : undefined}
        className="group relative w-full origin-top"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] md:h-[min(600px,78vh)]">
          {/* Ambient accent glow */}
          <div
            className="pointer-events-none absolute -right-[10%] -top-[40%] h-[120%] w-[75%] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: `radial-gradient(closest-side, hsl(${project.accent} / 0.22), transparent)` }}
          />
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_right,black,transparent_45%)]" />

          <div className="relative grid h-full grid-cols-1 md:grid-cols-[1fr_1.35fr]">
            {/* Copy */}
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="index-number">
                    {String(i + 1).padStart(2, "0")}
                    <span className="text-muted-foreground"> / {String(total).padStart(2, "0")}</span>
                  </span>
                  <span className="h-px w-8 bg-border" />
                  <span className="tag capitalize">{project.category}</span>
                </div>
                <h3 className="text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ink btn-shine group/btn px-6 py-3"
                  >
                    Live site
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="btn btn-ghost px-5 py-3"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Screenshot in a browser frame */}
            <div className="order-first p-3 sm:p-4 md:order-none md:py-6 md:pl-0 md:pr-6">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xl transition-transform duration-500 [transform:perspective(1200px)] group-hover:[transform:perspective(1200px)_rotateY(-3deg)_rotateX(2deg)]"
              >
                <div className="flex items-center gap-3 border-b border-foreground/10 bg-foreground/[0.03] px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="mx-auto max-w-[70%] truncate rounded-full bg-foreground/[0.06] px-4 py-1 font-mono text-[10px] text-muted-foreground">
                    {hostOf(project.demoLink)}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div className="relative aspect-[16/10] flex-1 overflow-hidden md:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform ease-out [transition-duration:1200ms] group-hover:scale-[1.05]"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Darkens a card once the next one covers it */}
          {desktop && (
            <motion.div
              style={{ opacity: dim }}
              className="pointer-events-none absolute inset-0 rounded-[2rem] bg-background"
            />
          )}
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const desktop = useIsDesktop();
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative pb-16 pt-20 md:pb-20 md:pt-28">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title={
            <>
              Projects with <span className="accent-word">purpose</span>
            </>
          }
          description="A selection of recent work — client builds, product frontends, and full-stack experiments."
          className="md:mb-4"
        />

        <div ref={stackRef} className="relative space-y-6 md:space-y-0">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              i={i}
              total={projects.length}
              progress={scrollYProgress}
              desktop={desktop}
            />
          ))}
        </div>

        {/* Pulled up into the breathing room the last sticky card leaves below it */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mt-12 flex flex-col items-center gap-4 text-center md:-mt-16"
        >
          <p className="text-sm text-muted-foreground">
            More experiments, client work and open source live on GitHub.
          </p>
          <a
            href="https://github.com/Arif-Ur-Rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost group"
          >
            <Github className="h-4 w-4" />
            Explore more on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
