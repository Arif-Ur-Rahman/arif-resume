"use client";

import { motion } from "framer-motion";
import {
  BookOpen, Home, Phone, MapPin, Users, CheckCircle2, ArrowLeft, ChevronRight,
  Languages, Calculator, Zap, FlaskConical, Leaf, Monitor, Globe, Microscope, Hash,
} from "lucide-react";
import Link from "next/link";

const subjects = [
  {
    label: "Bangla",
    sub: "1st & 2nd Paper",
    href: "/tuitions/ssc-bangla",
    icon: Languages,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    barColor: "bg-emerald-500",
  },
  {
    label: "English",
    sub: "1st & 2nd Paper",
    href: "/tuitions/ssc-english",
    icon: BookOpen,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    barColor: "bg-blue-500",
  },
  {
    label: "Mathematics",
    sub: "Core",
    href: null,
    icon: Calculator,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    barColor: "bg-orange-500",
  },
  {
    label: "Higher Mathematics",
    sub: "Advanced",
    href: null,
    icon: Hash,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    barColor: "bg-violet-500",
  },
  {
    label: "Physics",
    sub: "Science Stream",
    href: null,
    icon: Zap,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    barColor: "bg-yellow-500",
  },
  {
    label: "Chemistry",
    sub: "Science Stream",
    href: null,
    icon: FlaskConical,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10 border-pink-500/20",
    barColor: "bg-pink-500",
  },
  {
    label: "Biology",
    sub: "Science Stream",
    href: null,
    icon: Leaf,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10 border-green-500/20",
    barColor: "bg-green-500",
  },
  {
    label: "ICT",
    sub: "Info & Comm. Tech.",
    href: null,
    icon: Monitor,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    barColor: "bg-cyan-500",
  },
  {
    label: "General Science",
    sub: "All Streams",
    href: null,
    icon: Microscope,
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/10 border-teal-500/20",
    barColor: "bg-teal-500",
  },
  {
    label: "Bangladesh & World",
    sub: "Global Studies",
    href: null,
    icon: Globe,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    barColor: "bg-indigo-500",
  },
];

const features = [
  "One-on-one sessions at your home",
  "Board exam-focused notes & materials",
  "Weekly tests with detailed feedback",
  "Monthly progress updates for parents",
  "Doubt-clearing at every session",
  "Previous year board question practice",
  "Flexible scheduling around student's routine",
];

function SubjectsSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-72 lg:sticky lg:top-24 flex-shrink-0"
    >
      <div className="gradient-border bg-card rounded-2xl overflow-hidden">
        {/* Sidebar header */}
        <div className="px-5 py-4 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-blue-400" />
            </div>
            <span className="font-bold text-sm">Subjects Offered</span>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            {subjects.length}
          </span>
        </div>

        {/* Subject list */}
        <div className="p-3 space-y-1">
          {subjects.map((subject, i) => {
            const Icon = subject.icon;
            const inner = (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 cursor-pointer ${
                  subject.href
                    ? "hover:bg-blue-500/8 hover:border-blue-500/20"
                    : "hover:bg-primary/5"
                } border border-transparent`}
              >
                {/* Accent bar */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 ${subject.barColor} rounded-full transition-all duration-200 group-hover:h-6`}
                />

                {/* Icon */}
                <div
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${subject.iconBg} ${subject.iconColor} transition-transform duration-200 group-hover:scale-110`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium leading-tight truncate transition-colors duration-200 ${
                      subject.href
                        ? "text-foreground group-hover:text-blue-400"
                        : "text-foreground/90"
                    }`}
                  >
                    {subject.label}
                  </p>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">
                    {subject.sub}
                  </p>
                </div>

                {/* Right indicator */}
                {subject.href ? (
                  <ChevronRight className="h-3.5 w-3.5 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0" />
                ) : (
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Soon
                  </span>
                )}
              </motion.div>
            );

            return subject.href ? (
              <Link key={subject.label} href={subject.href}>
                {inner}
              </Link>
            ) : (
              <div key={subject.label}>{inner}</div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="px-5 py-3 border-t border-border/50">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Tap a subject with{" "}
            <ChevronRight className="inline h-3 w-3 text-blue-400" /> to explore
            detailed notes & resources.
          </p>
        </div>
      </div>
    </motion.aside>
  );
}

export default function SSCPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              href="/tuitions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tuitions
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                  SSC
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Secondary School <span className="gradient-text">Certificate</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Private, one-on-one tuition at your home for Classes 9 &amp; 10.
              Build strong fundamentals and master board exam patterns — at your own pace,
              in your own space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main layout: sidebar + content */}
      <div className="relative container px-4 mx-auto pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="flex flex-col lg:flex-row gap-8 items-start pt-8">
          {/* Subjects sidebar */}
          <SubjectsSidebar />

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-8">
            {/* Home visit highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 gradient-border bg-card rounded-2xl p-6"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Home Visit Tuition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I come to your home — no commute, no distractions. Each session is fully
                  private and tailored to the individual student&apos;s pace and needs.
                </p>
              </div>
            </motion.div>

            {/* What You Get */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gradient-border bg-card rounded-2xl p-7"
            >
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                What You Get
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-blue-500/10 p-10 text-center"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Interested? Let&apos;s talk.</h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                  Reach out to schedule a free first session and discuss your child&apos;s needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+8801680728065"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href="mailto:arifurrahman.it.doc@gmail.com"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 text-sm font-medium transition-all duration-300"
                  >
                    <MapPin className="h-4 w-4" />
                    Dhaka, Bangladesh
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
