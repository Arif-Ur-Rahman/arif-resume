"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Calendar,
  Clock,
  Award,
  ChevronDown,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { modelTests } from "./data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function TestCard({ test }: { test: (typeof modelTests)[0] }) {
  const [open, setOpen] = useState(false);
  const earnedMarks = test.questions.reduce((s, q) => s + q.marks, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="gradient-border bg-card rounded-2xl overflow-hidden"
    >
      {/* Card header — always visible */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-4 group"
      >
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex-shrink-0">
          <ClipboardList className="h-5 w-5" />
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              {test.subject}
            </span>
          </div>
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-200">
            {test.title}
          </h3>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(test.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {test.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span className="font-semibold text-foreground">{test.totalMarks}</span>
              &nbsp;marks
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5" />
              {test.questions.length} questions
            </span>
          </div>
        </div>

        {/* Expand chevron */}
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mark summary bar */}
      <div className="px-6 pb-4 flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
            style={{ width: `${(earnedMarks / test.totalMarks) * 100}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
          {earnedMarks}/{test.totalMarks} total marks
        </span>
      </div>

      {/* Expandable Q&A */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="qa"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/50 px-6 py-6 space-y-6">
              {test.questions.map((q) => (
                <div
                  key={q.number}
                  className="rounded-xl border border-border/50 bg-muted/20 overflow-hidden"
                >
                  {/* Question */}
                  <div className="px-5 py-4 border-b border-border/50 flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold flex-shrink-0 mt-0.5">
                      {q.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-relaxed">{q.question}</p>
                      <span className="inline-block mt-2 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {q.marks} marks
                      </span>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="px-5 py-4 bg-emerald-500/5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                        Answer
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-mono">
                      {q.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ModelTestPage() {
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
                <ClipboardList className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-2">
                  Model Tests
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Practice &amp; <span className="gradient-text">Evaluate</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Full model test papers with detailed answers and mark breakdowns — published
              after each session so students can revise at home.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{modelTests.length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">Tests Published</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">
                  {modelTests.reduce((s, t) => s + t.questions.length, 0)}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">Questions Total</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">
                  {modelTests.reduce((s, t) => s + t.totalMarks, 0)}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">Marks Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tests list */}
      <div className="relative container px-4 mx-auto pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-3xl mx-auto pt-8 space-y-5">
          {modelTests.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <ClipboardList className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No model tests published yet.</p>
              <p className="text-sm mt-1">Check back after your next session.</p>
            </div>
          ) : (
            modelTests
              .slice()
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((test) => <TestCard key={test.id} test={test} />)
          )}
        </div>
      </div>
    </main>
  );
}
