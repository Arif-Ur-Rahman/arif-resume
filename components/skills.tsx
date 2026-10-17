"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiVuedotjs,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { TbBrandHtml5, TbBrandCss3, TbBrandFramerMotion, TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  Accessibility,
  Database,
  Gauge,
  LayoutGrid,
  PenTool,
  Server,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SpotlightCard from "@/components/spotlight-card";
import { EASE, VIEWPORT } from "@/components/motion-primitives";
import { useDhakaTime } from "@/lib/use-local-time";
import { cn } from "@/lib/utils";

type Skill = { name: string; icon: IconType; color?: string };

const frontend: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML5", icon: TbBrandHtml5, color: "#E34F26" },
  { name: "CSS3", icon: TbBrandCss3, color: "#2965F1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Shadcn/UI", icon: SiShadcnui },
  { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#FF4D9D" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
];

type Group = { title: string; icon: LucideIcon; blurb: string; skills: Skill[]; className: string };

const groups: Group[] = [
  {
    title: "State & Data",
    icon: Workflow,
    blurb: "Predictable state, cached server data.",
    className: "lg:col-span-4",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Context API", icon: SiReact, color: "#61DAFB" },
      { name: "REST API", icon: TbApi },
      { name: "React Query", icon: SiReactquery, color: "#FF4154" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    blurb: "APIs that are typed, secure and quick.",
    className: "lg:col-span-4",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    blurb: "Document stores & realtime data.",
    className: "lg:col-span-4",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#C9302C" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
];

const tools: Skill[] = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel },
];

const principles: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: PenTool, title: "Pixel-perfect", text: "Figma to production, faithfully." },
  { icon: Accessibility, title: "Accessible", text: "Semantic, keyboard-friendly UI." },
  { icon: Gauge, title: "Performant", text: "Fast loads, smooth interactions." },
  { icon: Sparkles, title: "Motion", text: "Purposeful, delightful animation." },
];

/* Staggered entrance for each bento tile */
function Tile({ children, className, i }: { children: React.ReactNode; className?: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.1 }}
      className={className}
    >
      <SpotlightCard className="h-full p-6 md:p-7">{children}</SpotlightCard>
    </motion.div>
  );
}

function TileHeader({ icon: Icon, title, count, blurb }: { icon: LucideIcon; title: string; count: number; blurb: string }) {
  return (
    <div className="mb-6 flex items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.04] text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{blurb}</p>
        </div>
      </div>
      <span className="index-number shrink-0 pt-1 text-muted-foreground">{String(count).padStart(2, "0")}</span>
    </div>
  );
}

/* Chip whose icon picks up the brand colour on hover */
function SkillChip({ skill, i }: { skill: Skill; i: number }) {
  const Icon = skill.icon;
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.25 + i * 0.04 }}
      style={{ "--brand": skill.color ?? "hsl(var(--foreground))" } as React.CSSProperties}
      className="group/chip inline-flex cursor-default items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] py-1.5 pl-2 pr-3.5 text-sm font-medium text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:text-foreground"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground/[0.06] transition-colors duration-300">
        <Icon className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-300 group-hover/chip:text-[color:var(--brand)]" />
      </span>
      {skill.name}
    </motion.span>
  );
}

function DhakaCard() {
  const time = useDhakaTime();
  return (
    <div className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden">
      {/* Radar */}
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-[300px] w-[300px] md:-bottom-28 md:-right-16">
        {[1, 0.75, 0.5, 0.25].map((s) => (
          <span
            key={s}
            className="absolute inset-0 m-auto rounded-full border border-foreground/10"
            style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
          />
        ))}
        <span
          className="absolute inset-0 rounded-full [animation:spin-slow_6s_linear_infinite]"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary) / 0.35) 50deg, transparent 52deg)",
          }}
        />
        <span className="absolute left-1/2 top-1/2 -ml-1.5 -mt-1.5 flex h-3 w-3">
          <span className="animate-ping-soft absolute inset-0 rounded-full bg-primary" />
          <span className="relative h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]" />
        </span>
      </div>

      <div className="relative">
        <span className="eyebrow">Based in</span>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Dhaka, <span className="accent-word">Bangladesh</span>
        </h3>
      </div>

      <div className="relative">
        <p className="font-mono text-3xl font-medium tabular-nums tracking-tight md:text-4xl" suppressHydrationWarning>
          {time ?? "--:--:-- --"}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">GMT+6 · Remote-friendly across time zones</p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Technical Expertise"
          title={
            <>
              Skills &amp; <span className="accent-word">technologies</span>
            </>
          }
          description="The tools I reach for every day to turn ideas into fast, polished products."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          {/* Frontend — hero tile */}
          <Tile i={0} className="md:col-span-2 lg:col-span-7">
            <TileHeader
              icon={LayoutGrid}
              title="Frontend"
              count={frontend.length}
              blurb="Interfaces that feel fast, look sharp and work for everyone."
            />
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
              {frontend.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 14, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={VIEWPORT}
                    transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.2 + i * 0.04 }}
                    style={{ "--brand": skill.color ?? "hsl(var(--foreground))" } as React.CSSProperties}
                    className="group/tile relative flex cursor-default flex-col items-center gap-2.5 overflow-hidden rounded-2xl border border-foreground/[0.07] bg-foreground/[0.025] px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)]"
                  >
                    <span
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100"
                      style={{ background: "radial-gradient(80% 60% at 50% 0%, color-mix(in srgb, var(--brand) 18%, transparent), transparent)" }}
                    />
                    <Icon className="relative h-7 w-7 text-foreground/60 transition-all duration-300 group-hover/tile:scale-110 group-hover/tile:text-[color:var(--brand)]" />
                    <span className="relative text-xs font-medium text-foreground/80">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </Tile>

          {/* Location + live clock */}
          <Tile i={1} className="md:col-span-2 lg:col-span-5">
            <DhakaCard />
          </Tile>

          {/* State / Backend / Database */}
          {groups.map((g, gi) => (
            <Tile key={g.title} i={gi} className={cn(g.className, gi === 2 && "md:col-span-2 lg:col-span-4")}>
              <TileHeader icon={g.icon} title={g.title} count={g.skills.length} blurb={g.blurb} />
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s, i) => (
                  <SkillChip key={s.name} skill={s} i={i} />
                ))}
              </div>
            </Tile>
          ))}

          {/* Tools + terminal */}
          <Tile i={0} className="md:col-span-2 lg:col-span-7">
            <TileHeader icon={Wrench} title="Tools & Workflow" count={tools.length} blurb="The everyday kit behind every ship." />
            <div className="grid gap-5 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div className="flex flex-wrap gap-2">
                {tools.map((s, i) => (
                  <SkillChip key={s.name} skill={s} i={i} />
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-[#0c0c10] font-mono text-[12px] leading-relaxed text-white/80 shadow-inner">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[10px] text-white/40">~/portfolio</span>
                </div>
                <div className="space-y-1 px-4 py-3.5">
                  <p>
                    <span className="text-[#28c840]">❯</span> git commit -m <span className="text-[#febc2e]">&quot;ship it&quot;</span>
                  </p>
                  <p>
                    <span className="text-[#28c840]">❯</span> git push origin main
                  </p>
                  <p className="text-white/50">✓ Build passed · deployed on Vercel</p>
                  <p>
                    <span className="text-[#28c840]">❯</span>{" "}
                    <span className="inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-white/70" />
                  </p>
                </div>
              </div>
            </div>
          </Tile>

          {/* Principles */}
          <Tile i={1} className="md:col-span-2 lg:col-span-5">
            <div className="mb-6">
              <span className="eyebrow">How I work</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Craft in every <span className="accent-word">detail</span>
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {principles.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group/p rounded-2xl border border-foreground/[0.07] bg-foreground/[0.025] p-4 transition-colors duration-300 hover:border-primary/40"
                >
                  <Icon className="mb-3 h-5 w-5 text-primary transition-transform duration-300 group-hover/p:-rotate-6 group-hover/p:scale-110" />
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
