"use client";

import { motion } from "framer-motion";
import {
  Languages,
  CheckCircle2,
  ArrowLeft,
  Phone,
  MapPin,
  BookOpen,
  PenLine,
  FileText,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const topics = [
  {
    icon: <FileText className="h-5 w-5" />,
    title: "গদ্য ও পদ্য (Prose & Poetry)",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      { label: "গদ্যাংশ পাঠ ও বিশ্লেষণ (Seen passage reading & analysis)", href: null },
      { label: "পদ্যাংশ অনুধাবন (Poetry comprehension)", href: null },
      { label: "মূলভাব ও তাৎপর্য বোঝা (Main idea & significance)", href: null },
      { label: "প্রশ্নোত্তর কৌশল (Question-answer technique)", href: null },
    ],
  },
  {
    icon: <PenLine className="h-5 w-5" />,
    title: "ব্যাকরণ (Grammar)",
    colorClass: "text-teal-400",
    bgClass: "bg-teal-500/10 border-teal-500/20",
    items: [
      { label: "শব্দ ও পদ (Words & parts of speech)", href: null },
      { label: "সন্ধি (Sandhi — word combination)", href: null },
      { label: "সমাস (Compound word formation)", href: null },
      { label: "কারক ও বিভক্তি (Case & inflection)", href: null },
      { label: "প্রকৃতি ও প্রত্যয় (Root & suffix)", href: null },
      { label: "বাক্য ও বিরাম চিহ্ন (Sentences & punctuation)", href: null },
    ],
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "রচনামূলক দক্ষতা (Writing Skills)",
    colorClass: "text-green-400",
    bgClass: "bg-green-500/10 border-green-500/20",
    items: [
      { label: "অনুচ্ছেদ লেখা (Paragraph writing)", href: null },
      { label: "রচনা লেখা (Essay / composition writing)", href: "/tuitions/ssc-bangla/essay-writing" },
      { label: "সারাংশ ও সারমর্ম (Summarising)", href: null },
      { label: "ভাব-সম্প্রসারণ (Expanding a proverb / idea)", href: null },
      { label: "পত্র ও আবেদনপত্র (Letter & application writing)", href: null },
      { label: "গল্প সম্পূর্ণ করা (Completing a story)", href: null },
    ],
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "পরীক্ষা কৌশল (Exam Strategy)",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10 border-amber-500/20",
    items: [
      { label: "বোর্ড প্রশ্নপত্রের ধরন বিশ্লেষণ (Board exam pattern breakdown)", href: null },
      { label: "সময় ব্যবস্থাপনা (Time management per section)", href: null },
      { label: "উচ্চ নম্বর পাওয়ার কৌশল (High-scoring answer techniques)", href: null },
      { label: "প্রতিশব্দ ও বিপরীত শব্দ (Synonyms & antonyms)", href: null },
      { label: "এক কথায় প্রকাশ (One-word substitution)", href: null },
      { label: "মক টেস্ট ও পর্যালোচনা (Full mock test practice & review)", href: null },
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

export default function SSCBanglaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Languages className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                  SSC · বাংলা
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  বাংলা <span className="gradient-text">Guidance</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Comprehensive one-on-one guidance for SSC Bangla (1st &amp; 2nd Paper) —
              covering grammar, prose &amp; poetry comprehension, all writing forms, and full
              board exam preparation, at your home.
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
                        <Link
                          href={item.href}
                          className="text-primary font-medium hover:underline underline-offset-4 transition-colors"
                        >
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
            <BookOpen className="h-5 w-5 text-emerald-400" />
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
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
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-emerald-500/10 p-10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Ready to improve your Bangla?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Get in touch to start personalized SSC Bangla sessions at your home.
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
