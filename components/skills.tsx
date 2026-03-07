"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    colorClass: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
    headerClass: "text-blue-400",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Vue.js"],
  },
  {
    category: "State & Data",
    colorClass: "bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20",
    headerClass: "text-violet-400",
    skills: ["Redux Toolkit", "Context API", "REST API", "React Query"],
  },
  {
    category: "Backend",
    colorClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
    headerClass: "text-emerald-400",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "JWT"],
  },
  {
    category: "Database",
    colorClass: "bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20",
    headerClass: "text-amber-400",
    skills: ["MongoDB", "Mongoose", "Firebase"],
  },
  {
    category: "Tools & Workflow",
    colorClass: "bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20",
    headerClass: "text-rose-400",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-muted/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-muted-foreground">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="max-w-4xl mx-auto space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              {/* Category label */}
              <div className="sm:w-36 flex-shrink-0 pt-1.5">
                <span className={`text-xs font-bold uppercase tracking-widest ${group.headerClass}`}>
                  {group.category}
                </span>
              </div>

              {/* Divider line (desktop) */}
              <div className="hidden sm:flex items-start pt-3 pr-2">
                <div className={`w-px h-4 ${group.headerClass} opacity-30`} style={{ background: "currentColor" }} />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5 flex-1">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.06 + j * 0.03 }}
                    className={`skill-pill border cursor-default ${group.colorClass}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
