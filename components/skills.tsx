"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import assets from "@/public/assets";

export default function Skills() {
  const skillCategories = [
    {
      title: "Langeages",
      skills: [
        // { name: "React", icon: assets.react },
        // { name: "Next.js", icon: assets.next },
        { name: "Golang", icon: assets.ts },
        { name: "TypeScript", icon: assets.ts },
        { name: "JavaScript", icon: assets.js },
        { name: "PostgreSQL", icon: assets.js },
        { name: "REST API", icon: assets.restApi },
        { name: "Docker", icon: "🔄" },
        { name: "Git", icon: "🔄" },
        { name: "Github", icon: "🔄" },
        { name: "VS Code", icon: "🔄" },
        { name: "Postman", icon: assets.restApi },
        // { name: "Tailwind CSS", icon: assets.tail },
        // { name: "HTML/CSS", icon: "</>" },
        // { name: "Redux", icon: assets.react },
        // { name: "Framer Motion", icon: "🎭" },
      ],
    },
    // {
    //   title: "Backend Development",
    //   skills: [
    //     { name: "TypeScript", icon: assets.ts },
    //     { name: "JavaScript", icon: assets.js },
    //     { name: "Node.js", icon: assets.ode },
    //     { name: "Express", icon: assets.express },
    //     { name: "MongoDB", icon: assets.mongogb },
    //     { name: "Mongoose", icon: assets.mongoose },
    //     // { name: "Postgres", icon: "🐈" },
    //     { name: "Prisma", icon: "🐈" },
    //     { name: "REST API", icon: assets.restApi },
    //   ],
    // },
    // {
    //   title: "Tools & Other Skills",
    //   skills: [
    //     { name: "Git", icon: "🔄" },
    //     { name: "VS Code", icon: "🔄" },
    //     { name: "Postman", icon: assets.restApi },
    //     { name: "REST API", icon: assets.restApi },
    //     { name: "Figma", icon: "📱" },
    //     { name: "Jest/Vitest", icon: "🧪" },
    //     { name: "Agile/Scrum", icon: "🔄" },
    //   ],
    // },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* <span className="text-sm text-primary font-medium uppercase tracking-wider mb-2 block">
            Expertise
          </span> */}
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          {/* <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            The tools and technologies I use to bring products to life
          </p> */}
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: j * 0.05 }}
                  >
                    <Card className="p-6 pt-0 rounded text-center hover:bg-primary/5 transition-all duration-300 border-2 hover:border-primary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                          <div className="h-[1px] group-hover:h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent group-hover:via-violet-700" />
                        </div>
                      </div>
                      <p className="font-medium pt-6">{skill.name}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
