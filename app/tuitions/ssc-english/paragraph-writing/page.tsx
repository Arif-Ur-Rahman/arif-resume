"use client";

import { motion } from "framer-motion";
import { PenLine, CheckCircle2, ArrowLeft, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const structure = [
  { step: "01", title: "Topic Sentence", description: "Introduce the main idea clearly in the first sentence — sets the tone for the whole paragraph." },
  { step: "02", title: "Supporting Sentences", description: "Expand the main idea with facts, examples, explanations, or descriptions (4–6 sentences)." },
  { step: "03", title: "Concluding Sentence", description: "Wrap up the paragraph by restating or summarizing the main idea in a fresh way." },
];

const topics = [
  "A Rainy Day",
  "My School",
  "A Street Accident",
  "Environment Pollution",
  "Load Shedding",
  "A Book Fair",
  "Digital Bangladesh",
  "A Winter Morning",
  "Greenhouse Effect",
  "Tree Plantation",
  "A Village Market",
  "Female Education",
  "Early Rising",
  "A School Library",
  "Importance of Reading Newspaper",
  "Traffic Jam",
];

const tips = [
  "Keep to one main idea per paragraph",
  "Use linking words (however, moreover, therefore)",
  "Aim for 150–200 words in board exams",
  "Avoid direct repetition of the topic sentence",
  "Use a mix of simple and complex sentences",
  "Proofread for tense consistency",
];

export default function ParagraphWritingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              href="/tuitions/ssc-english"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SSC English
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <PenLine className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                  SSC · English · Writing
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Paragraph <span className="gradient-text">Writing</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Learn how to write clear, well-structured paragraphs that score full marks
              in the SSC board exam — with topic lists, structure guidance, and writing tips.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28 space-y-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Structure
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Paragraph <span className="gradient-text">Structure</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {structure.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="gradient-border bg-card rounded-2xl p-6"
              >
                <span className="text-4xl font-black gradient-text opacity-40 leading-none block mb-3">
                  {s.step}
                </span>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Topics + Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Common topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border bg-card rounded-2xl p-7"
          >
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <PenLine className="h-5 w-5 text-emerald-400" />
              Common Board Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {topics.map((topic) => (
                <div key={topic} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Writing tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gradient-border bg-card rounded-2xl p-7"
          >
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <PenLine className="h-5 w-5 text-emerald-400" />
              Writing Tips
            </h2>
            <div className="space-y-3">
              {tips.map((tip) => (
                <div key={tip} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

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
            <h3 className="text-2xl font-bold mb-2">Want to practice paragraph writing?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Get personal feedback on your paragraphs in one-on-one sessions at your home.
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
