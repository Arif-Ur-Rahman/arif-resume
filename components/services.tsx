"use client";

import { motion } from "framer-motion";
import {
  Braces,
  CodeXml,
  Globe,
  Laptop,
  Code2,
  ScanQrCode,
  SquareTerminal,
  ArrowRight,
} from "lucide-react";
import { FaGithub as Github, FaFigma as Figma } from "react-icons/fa";

const services = [
  {
    icon: <Braces className="h-6 w-6" />,
    title: "JavaScript & TypeScript",
    description:
      "Building dynamic, type-safe web applications with modern JS/TS for robust and scalable solutions.",
    gradient: "from-yellow-500/20 to-amber-500/5",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    icon: <SquareTerminal className="h-6 w-6" />,
    title: "React & Next.js Development",
    description:
      "High-performance web apps with React and Next.js — SSR, SSG, SEO-optimized, and production-ready.",
    gradient: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: <Figma className="h-6 w-6" />,
    title: "Figma to Code",
    description:
      "Translating Figma designs into pixel-perfect, responsive pages using React, Next.js, and Tailwind CSS.",
    gradient: "from-violet-500/20 to-purple-500/5",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: <ScanQrCode className="h-6 w-6" />,
    title: "Responsive Web Design",
    description:
      "Websites that look and work beautifully across all devices and screen sizes — mobile-first.",
    gradient: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: <CodeXml className="h-6 w-6" />,
    title: "FastAPI Development",
    description:
      "Building high-performance backend APIs with Python FastAPI for scalable, well-documented services.",
    gradient: "from-rose-500/20 to-pink-500/5",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "Version Control & Collaboration",
    description:
      "Efficient Git & GitHub workflows for clean branching strategies, code reviews, and team collaboration.",
    gradient: "from-gray-500/20 to-slate-500/5",
    iconColor: "text-gray-400",
    iconBg: "bg-gray-500/10 border-gray-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
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
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services I <span className="gradient-text">Provide</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-muted-foreground">
            Specialized web development services tailored to your specific needs
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <div className={`group gradient-border bg-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 relative overflow-hidden`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${service.iconBg} ${service.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-violet-500/10 p-8 md:p-10"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex-1 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Need a custom web application?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss your project and bring your ideas to life. I&apos;m
                dedicated to delivering high-quality solutions tailored to your needs.
              </p>
              <ul className="space-y-2.5">
                {[
                  { icon: <Globe className="h-4 w-4" />, text: "Customized solutions for your business" },
                  { icon: <Laptop className="h-4 w-4" />, text: "Modern, responsive, user-friendly design" },
                  { icon: <Code2 className="h-4 w-4" />, text: "Clean, efficient, and maintainable code" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm">
                    <span className="text-primary">{icon}</span>
                    <span className="text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
