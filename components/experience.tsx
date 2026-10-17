"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";
import SpotlightCard from "@/components/spotlight-card";
import { EASE, VIEWPORT } from "@/components/motion-primitives";

type Entry = {
  company: string;
  location: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  current?: boolean;
};

const workExperience: Entry[] = [
  {
    company: "Crulon AI",
    location: "Dhaka",
    title: "Frontend Software Engineer",
    period: "Mar 2026 — Present",
    description:
      "Building and maintaining AI-powered web interfaces with a focus on performance, usability, and modern frontend practices.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI Products"],
    current: true,
  },
  {
    company: "DataCrunch Ltd",
    location: "Gulshan 1, Dhaka",
    title: "Software Engineer",
    period: "Sep 2025 — Feb 2026",
    description:
      "Built scalable web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    tags: ["Next.js", "Express.js", "MongoDB", "REST API", "Testing"],
  },
  {
    company: "Leadsync AI",
    location: "Uttara 9, Dhaka",
    title: "Frontend Software Engineer",
    period: "Jan 2025 — Aug 2025",
    description:
      "Developed and maintained the frontend of an AI-powered lead generation platform, collaborating closely with designers and backend developers to create a seamless user experience.",
    tags: ["Next.js", "Figma to Code", "REST API", "UX Design"],
  },
  {
    company: "Dream Diver",
    location: "Uttara 9, Dhaka",
    title: "Process Development Engineer",
    period: "Jan 2024 — Dec 2024",
    description:
      "Co-operated with clients across different time zones, gathered requirements, and maintained the development team workflow to ensure timely, high-quality software delivery.",
    tags: ["Client Relations", "Web Development", "Documentation", "Agile"],
  },
  {
    company: "Ultra-X Asia Pacific",
    location: "Baridhara J Block, Dhaka",
    title: "Software Engineer",
    period: "Sep 2022 — Dec 2023",
    description:
      "Developed and maintained web applications for Japanese clients using Angular and React.js. Software quality and timely delivery were top priorities.",
    tags: ["React.js", "Angular", "Quality Assurance", "Japanese Clients"],
  },
];

const education: Entry[] = [
  {
    company: "Programming Hero",
    location: "Dhaka",
    title: "MERN Stack Development",
    period: "Jan 2022 — Dec 2022",
    description:
      "Comprehensive full-stack course covering MongoDB, Express.js, React.js, Node.js, Next.js, and Tailwind CSS. Built multiple end-to-end projects and learned best practices for collaborative development.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    company: "East West University",
    location: "Dhaka",
    title: "B.Sc. Computer Science & Engineering",
    period: "Sep 2014 — Dec 2020",
    description:
      "Solid foundation in computer science principles: data structures, algorithms, database management, and software engineering. Hands-on experience across frontend and backend development.",
    tags: ["Algorithms", "Data Structures", "Databases"],
  },
  {
    company: "Udayan Higher Secondary School",
    location: "Dhaka, Bangladesh",
    title: "Higher Secondary Certificate (HSC)",
    period: "2011 — 2013",
    description:
      "Science stream, laying the groundwork for further studies in computer science and engineering.",
    tags: ["Science"],
  },
  {
    company: "Willes Little Flower School & College",
    location: "Kakrail, Dhaka, Bangladesh",
    title: "Secondary School Certificate (SSC)",
    period: "2009 — 2011",
    description:
      "Built a strong academic foundation and prepared for higher studies in science and technology.",
    tags: ["Science"],
  },
];

const tabs = [
  { value: "work", label: "Work", icon: Briefcase },
  { value: "education", label: "Education", icon: GraduationCap },
] as const;

/* Timeline line is centred on the node column: 16px on mobile, 220px + 28px = 248px on md+ */
const TRACK_POS = "left-[15.5px] md:left-[247.5px]"; // 1px track
const BEAM_POS = "left-[15px] md:left-[247px]"; // 2px beam
const HEAD_POS = "left-[16px] md:left-[248px]"; // comet head centre

function TimelineItem({ entry, i }: { entry: Entry; i: number }) {
  // Node lights up roughly when the scroll beam reaches it (beam starts at 70% of the viewport)
  const nodeRef = useRef<HTMLSpanElement>(null);
  const lit = useInView(nodeRef, { once: true, margin: "0px 0px -38% 0px" }) || !!entry.current;

  const card = (
    <SpotlightCard className="p-6 md:p-7">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight md:text-[1.7rem]">{entry.company}</h3>
          <p className="mt-1 font-display text-lg italic text-primary">{entry.title}</p>
        </div>
        {entry.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Now
          </span>
        )}
      </div>

      {/* Period + location inline on mobile */}
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground md:hidden">
        <span>{entry.period}</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {entry.location}
        </span>
      </div>

      <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{entry.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {entry.tags.map((tag, j) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 + j * 0.05 }}
            className="tag"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </SpotlightCard>
  );

  return (
    <div className="group relative grid grid-cols-[32px_1fr] gap-5 pb-8 last:pb-0 md:grid-cols-[220px_56px_1fr] md:gap-0 md:pb-10">
      {/* Left: period + location (md+) */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="hidden pr-8 pt-7 text-right md:block"
      >
        <p
          className={cn(
            "font-mono text-sm font-medium",
            entry.current ? "text-primary" : "text-foreground/80"
          )}
        >
          {entry.period}
        </p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {entry.location}
        </p>
      </motion.div>

      {/* Node */}
      <div className="relative flex justify-center pt-7">
        <motion.span
          ref={nodeRef}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT}
          transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
          className={cn(
            "relative z-10 flex h-[31px] w-[31px] items-center justify-center rounded-full border bg-background transition-all duration-500",
            lit
              ? "border-primary shadow-[0_0_18px_-2px_hsl(var(--primary)/0.7)]"
              : "border-foreground/15 group-hover:border-primary/60"
          )}
        >
          {entry.current && <span className="animate-ping-soft absolute inset-0 rounded-full bg-primary/40" />}
          <span
            className={cn(
              "relative h-2.5 w-2.5 rounded-full transition-colors duration-500",
              lit ? "bg-signature" : "bg-foreground/25 group-hover:bg-primary"
            )}
          />
        </motion.span>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 + (i % 2) * 0.05 }}
      >
        {entry.current ? <div className="border-beam rounded-[1.75rem]">{card}</div> : card}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState<"work" | "education">("work");
  const entries = active === "work" ? workExperience : education;

  // Gradient beam fills the timeline as you scroll through it
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const beam = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const headTop = useTransform(beam, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="My Journey"
          title={
            <>
              Experience &amp; <span className="accent-word">education</span>
            </>
          }
          description="Five years across product teams, agencies, and AI startups — and the studies behind them."
        />

        {/* Toggle — sliding pill indicator */}
        <div className="mb-14 flex justify-center md:mb-20">
          <div className="glass inline-flex rounded-full p-1.5">
            {tabs.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setActive(value)}
                aria-pressed={active === value}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300",
                  active === value ? "text-background" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === value && (
                  <motion.span
                    layoutId="experience-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-foreground shadow-[0_8px_24px_-10px_hsl(var(--primary)/0.8)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div ref={listRef} className="relative mx-auto max-w-5xl">
          {/* Track + scroll beam */}
          <div className={cn("absolute bottom-0 top-0 w-px bg-border", TRACK_POS)} />
          <motion.div
            style={{ scaleY: beam }}
            className={cn(
              "absolute bottom-0 top-0 w-[2px] origin-top bg-gradient-to-b from-gold via-primary to-iris shadow-[0_0_12px_hsl(var(--primary)/0.6)]",
              BEAM_POS
            )}
          />
          <motion.div
            style={{ top: headTop }}
            className={cn(
              "pointer-events-none absolute z-20 -ml-[6px] -mt-[6px] h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_4px_hsl(var(--primary)/0.7)]",
              HEAD_POS
            )}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {entries.map((entry, i) => (
                <TimelineItem key={entry.company + entry.period} entry={entry} i={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
