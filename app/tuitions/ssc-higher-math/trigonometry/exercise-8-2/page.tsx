"use client";

import { motion } from "framer-motion";
import { Infinity as InfinityIcon, ArrowLeft, CheckCircle2, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { ChaptersSidebar } from "../../_components/sidebar";

function Steps({ lines }: { lines: string[] }) {
  return (
    <div className="bg-muted/30 border border-border/40 rounded-xl px-5 py-4 space-y-1 font-mono text-sm leading-relaxed overflow-x-auto">
      {lines.map((l, i) => <p key={i} className="whitespace-pre">{l}</p>)}
    </div>
  );
}
function Answer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-lg px-4 py-2">
      <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0" />
      <span className="font-mono font-semibold text-violet-300 text-sm">{children}</span>
    </div>
  );
}
function ProblemCard({ num, statement, children }: { num: number; statement: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay: (num - 1) * 0.04 }}
      className="gradient-border bg-card rounded-2xl p-6 space-y-4"
    >
      <div className="flex items-start gap-3">
        <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm flex-shrink-0 mt-0.5">{num}</span>
        <p className="text-sm font-medium leading-relaxed">{statement}</p>
      </div>
      <div className="pl-11 space-y-4">{children}</div>
    </motion.div>
  );
}

export default function Exercise8_2Page() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>
        <div className="relative container px-4 mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Link href="/tuitions/ssc-higher-math" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Higher Mathematics
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <InfinityIcon className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-2">
                  SSC · উচ্চতর গণিত · Chapter 8
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Exercise 8.2 <span className="gradient-text">Solutions</span>
                </h1>
              </div>
            </div>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-6">
              Trigonometric Identities — proving and simplifying. Step-by-step solutions for all problems.
            </p>
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Key identities</span>
              <span className="font-mono text-sm text-violet-300">sin²θ + cos²θ = 1 · 1 + tan²θ = sec²θ · 1 + cot²θ = csc²θ</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="flex flex-col lg:flex-row gap-8 items-start pt-8">
          <ChaptersSidebar />
          <div className="flex-1 min-w-0 space-y-6">

            {/* ── Problem 1 ── */}
            <ProblemCard num={1} statement="Prove that sin²θ + cos²θ = 1 using a right-angled triangle with sides a (opposite), b (adjacent), and c (hypotenuse).">
              <Steps lines={[
                "In a right triangle with sides a, b, c (where c is hyp):",
                "  By Pythagoras:  a² + b² = c²",
                "",
                "  sin θ = a/c,   cos θ = b/c",
                "",
                "  sin²θ + cos²θ = (a/c)² + (b/c)²",
                "                = (a² + b²) / c²",
                "                = c² / c²             [using a² + b² = c²]",
                "                = 1  ✓",
              ]} />
              <Answer>sin²θ + cos²θ = 1 ✓ (follows directly from Pythagoras)</Answer>
            </ProblemCard>

            {/* ── Problem 2 ── */}
            <ProblemCard num={2} statement="If sin θ + cos θ = √2, find the value of tan θ + cot θ.">
              <Steps lines={[
                "Given: sin θ + cos θ = √2",
                "Square both sides:",
                "  (sin θ + cos θ)² = 2",
                "  sin²θ + 2sin θ cos θ + cos²θ = 2",
                "  1 + 2sin θ cos θ = 2              [since sin²θ + cos²θ = 1]",
                "  2sin θ cos θ = 1",
                "  sin θ cos θ = 1/2",
                "",
                "Now:",
                "  tan θ + cot θ = sin θ/cos θ + cos θ/sin θ",
                "                = (sin²θ + cos²θ) / (sin θ cos θ)",
                "                = 1 / (1/2)",
                "                = 2",
              ]} />
              <Answer>tan θ + cot θ = 2</Answer>
            </ProblemCard>

            {/* ── Problem 3 ── */}
            <ProblemCard num={3} statement="Prove: tan θ + cot θ = sec θ · csc θ">
              <Steps lines={[
                "LHS = tan θ + cot θ",
                "    = sin θ/cos θ  +  cos θ/sin θ",
                "    = (sin²θ + cos²θ) / (sin θ · cos θ)",
                "    = 1 / (sin θ · cos θ)            [using sin²θ + cos²θ = 1]",
                "    = (1/cos θ) · (1/sin θ)",
                "    = sec θ · csc θ  =  RHS  ✓",
              ]} />
              <Answer>tan θ + cot θ = sec θ · csc θ ✓</Answer>
            </ProblemCard>

            {/* ── Problem 4 ── */}
            <ProblemCard num={4} statement="Prove: (sec θ − tan θ)(sec θ + tan θ) = 1">
              <Steps lines={[
                "LHS = sec²θ − tan²θ          [difference of squares: (a−b)(a+b) = a²−b²]",
                "",
                "From the identity  1 + tan²θ = sec²θ:",
                "  sec²θ − tan²θ = 1",
                "",
                "∴ LHS = 1 = RHS  ✓",
              ]} />
              <Answer>(sec θ − tan θ)(sec θ + tan θ) = 1 ✓</Answer>
            </ProblemCard>

            {/* ── Problem 5 ── */}
            <ProblemCard num={5} statement="Prove: cos θ/(1 − sin θ) + cos θ/(1 + sin θ) = 2 sec θ">
              <Steps lines={[
                "LHS = cos θ · [1/(1 − sin θ)  +  1/(1 + sin θ)]",
                "",
                "Combine the fractions:",
                "  1/(1−sin θ) + 1/(1+sin θ) = [(1+sin θ) + (1−sin θ)] / [(1−sin θ)(1+sin θ)]",
                "                            = 2 / (1 − sin²θ)",
                "                            = 2 / cos²θ          [since 1 − sin²θ = cos²θ]",
                "",
                "∴ LHS = cos θ · (2 / cos²θ)",
                "       = 2 / cos θ",
                "       = 2 sec θ  =  RHS  ✓",
              ]} />
              <Answer>LHS = 2 sec θ ✓</Answer>
            </ProblemCard>

            {/* ── Problem 6 ── */}
            <ProblemCard num={6} statement="Simplify: (sin θ + cos θ)² + (sin θ − cos θ)²">
              <Steps lines={[
                "(sin θ + cos θ)² = sin²θ + 2sin θ cos θ + cos²θ",
                "(sin θ − cos θ)² = sin²θ − 2sin θ cos θ + cos²θ",
                "",
                "Sum = (sin²θ + cos²θ) + 2sin θ cos θ",
                "    + (sin²θ + cos²θ) − 2sin θ cos θ",
                "    = 1 + 1",
                "    = 2",
              ]} />
              <Answer>(sinθ + cosθ)² + (sinθ − cosθ)² = 2</Answer>
            </ProblemCard>

            {/* ── Problem 7 ── */}
            <ProblemCard num={7} statement="Prove: sin θ/(1 + cos θ) + (1 + cos θ)/sin θ = 2 csc θ">
              <Steps lines={[
                "LHS = [sin²θ + (1 + cos θ)²] / [sin θ(1 + cos θ)]",
                "",
                "Expand the numerator:",
                "  sin²θ + 1 + 2cos θ + cos²θ",
                "  = (sin²θ + cos²θ) + 1 + 2cos θ",
                "  = 1 + 1 + 2cos θ",
                "  = 2 + 2cos θ",
                "  = 2(1 + cos θ)",
                "",
                "∴ LHS = 2(1 + cos θ) / [sin θ(1 + cos θ)]",
                "       = 2 / sin θ",
                "       = 2 csc θ  =  RHS  ✓",
              ]} />
              <Answer>sinθ/(1+cosθ) + (1+cosθ)/sinθ = 2 cscθ ✓</Answer>
            </ProblemCard>

            {/* ── Problem 8 ── */}
            <ProblemCard num={8} statement="If sin θ − cos θ = √2 cos θ, show that sin θ + cos θ = √2 sin θ.">
              <Steps lines={[
                "Given:  sin θ − cos θ = √2 cos θ",
                "        sin θ = cos θ + √2 cos θ",
                "        sin θ = (1 + √2) cos θ",
                "        cos θ = sin θ / (1 + √2)                    … (i)",
                "",
                "We need to show:  sin θ + cos θ = √2 sin θ",
                "",
                "LHS = sin θ + cos θ",
                "    = sin θ + sin θ/(1 + √2)          [using (i)]",
                "    = sin θ · [1 + 1/(1 + √2)]",
                "    = sin θ · [(1 + √2 + 1)/(1 + √2)]",
                "    = sin θ · [(2 + √2)/(1 + √2)]",
                "    = sin θ · [√2(√2 + 1)/(1 + √2)]",
                "    = sin θ · √2",
                "    = √2 sin θ  =  RHS  ✓",
              ]} />
              <Answer>sin θ + cos θ = √2 sin θ ✓</Answer>
            </ProblemCard>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-violet-500/10 p-10 text-center"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Need help with these problems?</h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">Book a one-on-one session and work through every step at your own pace.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+8801680728065" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a href="mailto:arifurrahman.it.doc@gmail.com" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 text-sm font-medium transition-all duration-300">
                    <MapPin className="h-4 w-4" /> Dhaka, Bangladesh
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
