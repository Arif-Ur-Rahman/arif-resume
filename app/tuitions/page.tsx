"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, University } from "lucide-react";
import Link from "next/link";

const levels = [
  {
    href: "/tuitions/ssc",
    label: "SSC",
    full: "Secondary School Certificate",
    description:
      "One-on-one tuition at your home for Classes 9 & 10, covering all core subjects with a focus on board exam preparation and concept clarity.",
    icon: <BookOpen className="h-8 w-8" />,
    gradient: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    href: "/tuitions/hsc",
    label: "HSC",
    full: "Higher Secondary Certificate",
    description:
      "One-on-one home tuition for Classes 11 & 12 across Science, Business, and Humanities streams with university admission test preparation built in.",
    icon: <GraduationCap className="h-8 w-8" />,
    gradient: "from-violet-500/20 to-purple-500/5",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    href: "/tuitions/university",
    label: "University",
    full: "Private University Admission",
    description:
      "Specialized admission preparation for BRAC University, East West University, and North South University — tailored to each university's entrance test format.",
    icon: <University className="h-8 w-8" />,
    gradient: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
];

const highlights = [
  { value: "5+", label: "Years Teaching" },
  { value: "100+", label: "Students Taught" },
  { value: "95%", label: "Pass Rate" },
  { value: "1 : 1", label: "Private Sessions" },
];

export default function TuitionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              Tuitions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Learn, Grow &amp;{" "}
              <span className="gradient-text">Excel</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed mb-10">
              Fully private, one-on-one tuition at your home — SSC, HSC, and private
              university admission preparation tailored to each student.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              {highlights.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold gradient-text">{value}</span>
                  <span className="text-xs text-muted-foreground mt-1">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {levels.map((level, i) => (
              <motion.div
                key={level.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link href={level.href} className="block h-full group">
                  <div className="gradient-border bg-card rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${level.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${level.iconBg} ${level.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {level.icon}
                      </div>

                      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${level.badgeColor} mb-3`}>
                        {level.label}
                      </span>

                      <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                        {level.full}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {level.description}
                      </p>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        View Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-200" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
