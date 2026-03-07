"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const workExperience = [
  {
    company: "Crulon AI",
    location: "Dhaka",
    title: "Frontend Software Engineer",
    period: "Mar 2026 – Present",
    description:
      "Working as a Frontend Software Engineer at Crulon AI, building and maintaining AI-powered web interfaces with a focus on performance, usability, and modern frontend practices.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI Products"],
  },
  {
    company: "DataCrunch Ltd",
    location: "Gulshan 1, Dhaka",
    title: "Software Engineer",
    period: "Sep 2025 – Feb 2026",
    description:
      "Built scalable web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    tags: ["Next.js", "Express.js", "MongoDB", "REST API", "Testing"],
  },
  {
    company: "Leadsync AI",
    location: "Uttara 9, Dhaka",
    title: "Frontend Software Engineer",
    period: "Jan 2025 – Aug 2025",
    description:
      "Developed and maintained the frontend of an AI-powered lead generation platform. Collaborated closely with designers and backend developers to create a seamless user experience.",
    tags: ["Next.js", "Figma to Code", "REST API", "UX Design"],
  },
  {
    company: "Dream Diver",
    location: "Uttara 9, Dhaka",
    title: "Process Development Engineer",
    period: "Jan 2024 – Dec 2024",
    description:
      "Co-operated with clients across different time zones, gathered requirements, and maintained the development team workflow to ensure timely, high-quality software delivery.",
    tags: ["Client Relations", "Web Development", "Documentation", "Agile"],
  },
  {
    company: "Ultra-X Asia Pacific",
    location: "Baridhara J Block, Dhaka",
    title: "Software Engineer",
    period: "Sep 2022 – Dec 2023",
    description:
      "Developed and maintained web applications for Japanese clients using Angular and React.js. Software quality and timely delivery were top priorities.",
    tags: ["React.js", "Angular", "Quality Assurance", "Japanese Clients"],
  },
];

const education = [
  {
    degree: "MERN Stack Development",
    institution: "Programming Hero",
    location: "Dhaka",
    period: "Jan 2022 – Dec 2022",
    description:
      "Comprehensive full-stack course covering MongoDB, Express.js, React.js, Node.js, Next.js, and Tailwind CSS. Built multiple end-to-end projects and learned best practices for version control and collaborative development.",
  },
  {
    degree: "B.Sc. Computer Science & Engineering",
    institution: "East West University",
    location: "Dhaka",
    period: "Sep 2014 – Dec 2020",
    description:
      "Solid foundation in computer science principles: data structures, algorithms, database management, and software engineering. Hands-on experience across frontend and backend development.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Udayan Higher Secondary School",
    location: "Dhaka, Bangladesh",
    period: "2011 – 2013",
    description:
      "Science stream, laying the groundwork for further studies in computer science and engineering.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Willes Little Flower School & College",
    location: "Kakrail, Dhaka, Bangladesh",
    period: "2009 – 2011",
    description:
      "Built a strong academic foundation and prepared for higher studies in science and technology.",
  },
];

function TimelineDot() {
  return (
    <div className="absolute left-[18px] top-6 w-5 h-5 rounded-full border-2 border-primary bg-background hidden sm:flex items-center justify-center z-10">
      <div className="w-2 h-2 rounded-full bg-primary" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
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
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-muted-foreground">
            My professional journey and educational background that shaped my expertise
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 mb-16 bg-secondary/40 p-1 rounded-xl border border-border">
            <TabsTrigger value="work" className="rounded-lg text-sm">
              <Briefcase className="mr-2 h-3.5 w-3.5" />
              Work
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded-lg text-sm">
              <GraduationCap className="mr-2 h-3.5 w-3.5" />
              Education
            </TabsTrigger>
          </TabsList>

          {/* Work */}
          <TabsContent value="work">
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline vertical line */}
              <div className="absolute left-[26px] top-10 bottom-10 w-px bg-gradient-to-b from-primary via-violet-500/50 to-transparent hidden sm:block" />

              <div className="space-y-6">
                {workExperience.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.09 }}
                    className="relative sm:pl-16"
                  >
                    <TimelineDot />

                    <div className="group gradient-border bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-base font-bold group-hover:text-primary transition-colors duration-200">
                            {job.title}
                          </h3>
                          <p className="text-primary text-sm font-semibold mt-0.5">{job.company}</p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" /> {job.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" /> {job.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary/80 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent value="education">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-[26px] top-10 bottom-10 w-px bg-gradient-to-b from-primary via-violet-500/50 to-transparent hidden sm:block" />

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.09 }}
                    className="relative sm:pl-16"
                  >
                    <TimelineDot />

                    <div className="group gradient-border bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-base font-bold group-hover:text-primary transition-colors duration-200">
                            {edu.degree}
                          </h3>
                          <p className="text-primary text-sm font-semibold mt-0.5">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" /> {edu.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" /> {edu.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
