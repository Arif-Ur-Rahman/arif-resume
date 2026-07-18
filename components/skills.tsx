"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Vue.js"],
  },
  {
    category: "State & Data",
    skills: ["Redux Toolkit", "Context API", "REST API", "React Query"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "JWT"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "Firebase"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-28">
      <div className="container relative mx-auto px-4">
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

        {/* Editorial rows — serif category, hairline dividers, ink chips */}
        <div>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="grid grid-cols-1 gap-4 border-b border-border py-7 first:border-t md:grid-cols-[minmax(0,320px)_1fr] md:gap-10 md:py-9"
            >
              {/* Category — masked serif reveal */}
              <div className="flex items-baseline gap-4">
                <motion.span
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="index-number"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <h3 className="font-display text-2xl font-medium tracking-tight md:text-[1.7rem]">
                  <Reveal delay={0.15}>{group.category}</Reveal>
                </h3>
              </div>

              {/* Chips — springy staggered pops */}
              <div className="flex flex-wrap content-start items-start gap-2.5">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.15 + j * 0.035,
                    }}
                    className="chip cursor-default"
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
