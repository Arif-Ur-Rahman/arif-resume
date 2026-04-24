"use client";

import { motion } from "framer-motion";
import { GraduationCap, Home, Phone, MapPin, Users, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const streams = [
  {
    name: "Science",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20",
    subjects: ["Physics", "Chemistry", "Biology / Higher Math", "English", "Bangla", "ICT"],
  },
  {
    name: "Business Studies",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10 border-amber-500/20",
    subjects: ["Accounting", "Business Organization", "Finance & Banking", "Economics", "English", "Bangla"],
  },
  {
    name: "Humanities",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
    subjects: ["Bangla", "English", "History", "Civics", "Economics", "Social Work"],
  },
];

const features = [
  "One-on-one sessions at your home",
  "Stream-specific notes & resources",
  "University admission test preparation",
  "Weekly mock tests with performance tracking",
  "Monthly progress updates for parents",
  "Dedicated doubt-clearing at every session",
  "Previous board & admission question practice",
  "Flexible scheduling around student's routine",
];

export default function HSCPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-2">
                  HSC
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Higher Secondary <span className="gradient-text">Certificate</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Private, one-on-one tuition at your home for Classes 11 &amp; 12.
              Science, Business, and Humanities streams — with university admission
              test preparation built in.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28 space-y-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Home visit highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4 gradient-border bg-card rounded-2xl p-6 max-w-xl"
        >
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex-shrink-0">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Home Visit Tuition</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I come to your home — no commute, no distractions. Each session is fully
              private and tailored to the individual student's pace and needs.
            </p>
          </div>
        </motion.div>

        {/* Streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Subjects
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Subjects by <span className="gradient-text">Stream</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {streams.map((stream, i) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="gradient-border bg-card rounded-2xl p-6"
              >
                <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${stream.bgClass} ${stream.colorClass} mb-5`}>
                  {stream.name}
                </div>
                <div className="space-y-2.5">
                  {stream.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${stream.colorClass}`} />
                      <span className="text-muted-foreground">{subject}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border bg-card rounded-2xl p-7 max-w-2xl mx-auto"
        >
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-violet-400" />
            What You Get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
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
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-violet-500/10 p-10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

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
    </main>
  );
}
