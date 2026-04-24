"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, ArrowLeft, Phone, MapPin, PenLine, FileText, MessageSquare, Lightbulb } from "lucide-react";
import Link from "next/link";

const topics = [
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Reading Comprehension",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20",
    items: [
      { label: "Seen passage reading & analysis", href: null },
      { label: "Unseen passage strategies", href: null },
      { label: "Identifying main idea & supporting details", href: null },
      { label: "Vocabulary in context", href: null },
      { label: "True / False / Not Given questions", href: null },
    ],
  },
  {
    icon: <PenLine className="h-5 w-5" />,
    title: "Grammar & Language",
    colorClass: "text-violet-400",
    bgClass: "bg-violet-500/10 border-violet-500/20",
    items: [
      { label: "Parts of speech & sentence structure", href: null },
      { label: "Tenses and their correct usage", href: null },
      { label: "Right forms of verbs", href: null },
      { label: "Prepositions, articles & determiners", href: null },
      { label: "Voice change & narration", href: null },
      { label: "Transformation of sentences", href: null },
    ],
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Writing Skills",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      { label: "Paragraph writing", href: "/tuitions/ssc-english/paragraph-writing" },
      { label: "Composition & essay writing", href: null },
      { label: "Formal & informal letters", href: null },
      { label: "Applications & emails", href: null },
      { label: "Completing stories", href: null },
      { label: "Dialogue writing", href: null },
    ],
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Exam Strategy",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10 border-amber-500/20",
    items: [
      { label: "Board exam paper pattern breakdown", href: null },
      { label: "Time management per section", href: null },
      { label: "High-scoring answer techniques", href: null },
      { label: "Common mistakes to avoid", href: null },
      { label: "Full mock test practice & review", href: null },
    ],
  },
];

const features = [
  "One-on-one sessions at your home",
  "Structured notes for every topic",
  "Weekly written practice with corrections",
  "Board question bank practice",
  "Focus on both 1st & 2nd Paper",
  "Flexible scheduling around school hours",
];

export default function SSCEnglishPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              href="/tuitions/ssc"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SSC
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                  SSC · English
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  English <span className="gradient-text">Guidance</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Comprehensive one-on-one guidance for SSC English (1st &amp; 2nd Paper) —
              covering grammar, reading comprehension, writing skills, and full board
              exam preparation, at your home.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28 space-y-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Topics grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              What We Cover
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Topics &amp; <span className="gradient-text">Coverage</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="gradient-border bg-card rounded-2xl p-6"
              >
                <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl border ${topic.bgClass} ${topic.colorClass} mb-5`}>
                  {topic.icon}
                  <span className="text-sm font-bold">{topic.title}</span>
                </div>
                <div className="space-y-2.5">
                  {topic.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${topic.colorClass}`} />
                      {item.href ? (
                        <Link href={item.href} className="text-primary font-medium hover:underline underline-offset-4 transition-colors">
                          {item.label} →
                        </Link>
                      ) : (
                        <span className="text-muted-foreground">{item.label}</span>
                      )}
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
            <BookOpen className="h-5 w-5 text-blue-400" />
            How It Works
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
            <h3 className="text-2xl font-bold mb-2">Ready to improve your English?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Get in touch to start personalized SSC English sessions at your home.
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
