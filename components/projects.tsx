"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const projects = [
  {
    title: "Simple Authentication System",
    description:
      "A clean authentication system with Next.js frontend and Python FastAPI backend, featuring user registration, login, and JWT-protected routes.",
    image: "/projects/authentication.png",
    tags: ["React", "Next.js", "Tailwind CSS", "FastAPI", "Python", "JWT"],
    category: "backend",
    demoLink: "https://jwt-cors-middlewares-7dj1-lks09j6mi-arif-ur-rahmans-projects.vercel.app/login",
    githubLink: "https://github.com/Arif-Ur-Rahman/jwt-cors-middlewares",
  },
  {
    title: "Credit Hero Frontend",
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
    tags: ["TypeScript", "Express", "MongoDB", "React", "Tailwind CSS", "Firebase"],
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
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-muted-foreground">
            A selection of my recent work showcasing my skills in modern web development
          </p>
        </motion.div>

        {/* Filter tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="flex w-fit mx-auto bg-secondary/40 border border-border p-1 rounded-xl gap-1">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value} className="rounded-lg text-sm px-5">
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <div className="group gradient-border bg-card rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Image */}
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                      <span className="text-white text-sm font-medium capitalize bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        <Link
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/15 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors duration-200 border border-white/20"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </Link>
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/15 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors duration-200 border border-white/20"
                        >
                          <Github className="h-4 w-4 text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal rounded-full bg-secondary/60 border border-border"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
