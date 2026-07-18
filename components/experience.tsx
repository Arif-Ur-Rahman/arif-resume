"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";
import { EASE, Reveal } from "@/components/motion-primitives";

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

export default function Experience() {
  const [active, setActive] = useState<"work" | "education">("work");
  const entries = active === "work" ? workExperience : education;

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
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
        <div className="mb-12 flex justify-center md:mb-16">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            {tabs.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setActive(value)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300",
                  active === value
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === value && (
                  <motion.span
                    layoutId="experience-tab-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-foreground"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial timeline — period column left, content right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            {entries.map((entry, i) => (
              <motion.article
                key={entry.company + entry.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group grid grid-cols-1 gap-3 border-b border-border py-8 first:border-t md:grid-cols-[220px_1fr] md:gap-10 md:py-10"
              >
                {/* Left: period + location — slides in from the left */}
                <motion.div
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.12 }}
                  className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-2"
                >
                  <span
                    className={cn(
                      "text-sm font-semibold tracking-wide",
                      entry.current ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {entry.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {entry.location}
                  </span>
                  {entry.current && (
                    <span className="mt-1 hidden w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary md:inline-flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Current
                    </span>
                  )}
                </motion.div>

                {/* Right: role details — masked company reveal, staggered tags */}
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-primary md:text-[1.75rem]">
                    <Reveal delay={0.15}>{entry.company}</Reveal>
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
                    className="mt-1 text-sm font-semibold text-foreground/80"
                  >
                    {entry.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.36 }}
                    className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground"
                  >
                    {entry.description}
                  </motion.p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag, j) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.4 + j * 0.05,
                        }}
                        className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
