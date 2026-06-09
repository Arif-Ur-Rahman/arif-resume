"use client";

import { motion } from "framer-motion";
import { Infinity as InfinityIcon, ArrowLeft, CheckCircle2, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { ChaptersSidebar } from "../../_components/sidebar";
import { TrigDiagram } from "../../_components/trig-diagram";

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

export default function Exercise8_1Page() {
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
                  Exercise 8.1 <span className="gradient-text">Solutions</span>
                </h1>
              </div>
            </div>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-6">
              Trigonometric Ratios, Standard Values &amp; Complementary Angles.
              Step-by-step solutions for all problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["sin²θ + cos²θ = 1",  "Pythagorean"],
                ["1 + tan²θ = sec²θ",  "Pythagorean"],
                ["sin(90°−θ) = cos θ", "Complementary"],
              ].map(([eq, label]) => (
                <div key={eq} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5">
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{label}</span>
                  <span className="font-mono text-sm text-violet-300">{eq}</span>
                </div>
              ))}
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
            <ProblemCard num={1} statement="If sin θ = 3/5, find the values of the remaining five trigonometric ratios.">
              <div className="max-w-xs">
                <TrigDiagram type="right-triangle"
                  labels={{ hyp: "5", opp: "3", adj: "4", theta: "θ" }}
                  caption="Right triangle derived from sin θ = 3/5"
                />
              </div>
              <Steps lines={[
                "sin θ = 3/5  →  opposite = 3, hypotenuse = 5",
                "",
                "By Pythagoras:  adjacent = √(5² − 3²) = √(25 − 9) = √16 = 4",
                "",
                "cos θ = 4/5",
                "tan θ = sin θ / cos θ = (3/5) / (4/5) = 3/4",
                "csc θ = 1/sin θ = 5/3",
                "sec θ = 1/cos θ = 5/4",
                "cot θ = 1/tan θ = 4/3",
              ]} />
              <Answer>cos θ = 4/5, tan θ = 3/4, csc θ = 5/3, sec θ = 5/4, cot θ = 4/3</Answer>
            </ProblemCard>

            {/* ── Problem 2 ── */}
            <ProblemCard num={2} statement="If tan θ = 5/12, find the values of sin θ, cos θ, sec θ, csc θ and cot θ.">
              <Steps lines={[
                "tan θ = 5/12  →  opposite = 5, adjacent = 12",
                "",
                "Hypotenuse = √(5² + 12²) = √(25 + 144) = √169 = 13",
                "",
                "sin θ = 5/13,   cos θ = 12/13",
                "sec θ = 13/12,  csc θ = 13/5",
                "cot θ = 12/5",
              ]} />
              <Answer>sin θ = 5/13, cos θ = 12/13, sec θ = 13/12, csc θ = 13/5, cot θ = 12/5</Answer>
            </ProblemCard>

            {/* ── Problem 3 ── */}
            <ProblemCard num={3} statement="Evaluate: 2sin²30° + cos²45° + 3tan²60°">
              <Steps lines={[
                "sin 30° = 1/2  →  sin²30° = 1/4",
                "cos 45° = 1/√2 →  cos²45° = 1/2",
                "tan 60° = √3   →  tan²60° = 3",
                "",
                "= 2(1/4) + 1/2 + 3(3)",
                "= 1/2    + 1/2 + 9",
                "= 1 + 9  =  10",
              ]} />
              <Answer>10</Answer>
            </ProblemCard>

            {/* ── Problem 4 ── */}
            <ProblemCard num={4} statement="Evaluate: 4cos²60° + 3tan²30° − sin²90°">
              <Steps lines={[
                "cos 60° = 1/2  →  cos²60° = 1/4",
                "tan 30° = 1/√3 →  tan²30° = 1/3",
                "sin 90° = 1    →  sin²90° = 1",
                "",
                "= 4(1/4) + 3(1/3) − 1",
                "= 1      + 1      − 1",
                "= 1",
              ]} />
              <Answer>1</Answer>
            </ProblemCard>

            {/* ── Problem 5 ── */}
            <ProblemCard num={5} statement="Show that: sin 30° · cos 60° + cos 30° · sin 60° = 1">
              <Steps lines={[
                "LHS = sin 30° · cos 60° + cos 30° · sin 60°",
                "    = (1/2)(1/2)  +  (√3/2)(√3/2)",
                "    = 1/4  +  3/4",
                "    = 4/4  =  1  =  RHS  ✓",
                "",
                "Note: This is the expansion of sin(30° + 60°) = sin 90° = 1.",
              ]} />
              <Answer>LHS = 1 = RHS ✓</Answer>
            </ProblemCard>

            {/* ── Problem 6 ── */}
            <ProblemCard num={6} statement="If sin(A + B) = 1 and cos(A − B) = 1, where 0° ≤ A, B ≤ 90°, find A and B.">
              <Steps lines={[
                "sin(A + B) = 1  →  A + B = 90°  … (i)",
                "cos(A − B) = 1  →  A − B = 0°   … (ii)",
                "",
                "Adding (i) and (ii):   2A = 90°  →  A = 45°",
                "Subtracting (ii) from (i):  2B = 90°  →  B = 45°",
              ]} />
              <Answer>A = 45°, B = 45°</Answer>
            </ProblemCard>

            {/* ── Problem 7 ── */}
            <ProblemCard num={7} statement="Find the value of: sin²30° + sin²45° + sin²60°">
              <Steps lines={[
                "sin 30° = 1/2  →  sin²30° = 1/4",
                "sin 45° = 1/√2 →  sin²45° = 1/2",
                "sin 60° = √3/2 →  sin²60° = 3/4",
                "",
                "= 1/4 + 1/2 + 3/4",
                "= 1/4 + 2/4 + 3/4",
                "= 6/4  =  3/2",
              ]} />
              <Answer>3/2</Answer>
            </ProblemCard>

            {/* ── Problem 8 ── */}
            <ProblemCard num={8} statement="Find θ if 2 sin θ − 1 = 0, where 0° ≤ θ ≤ 90°.">
              <Steps lines={[
                "2 sin θ − 1 = 0",
                "sin θ = 1/2",
                "",
                "From the standard values table:",
                "  sin 30° = 1/2",
                "",
                "∴ θ = 30°",
              ]} />
              <Answer>θ = 30°</Answer>
            </ProblemCard>

            {/* ── Problem 9 ── */}
            <ProblemCard num={9} statement="Prove: sin(90° − A) · cos(90° − A) = sin A · cos A">
              <Steps lines={[
                "Using complementary-angle identities:",
                "  sin(90° − A) = cos A",
                "  cos(90° − A) = sin A",
                "",
                "LHS = cos A · sin A",
                "    = sin A · cos A  =  RHS  ✓",
              ]} />
              <Answer>sin(90°−A)·cos(90°−A) = sinA·cosA ✓</Answer>
            </ProblemCard>

            {/* ── Problem 10 ── */}
            <ProblemCard num={10} statement="Find all values of θ in [0°, 90°] that satisfy: 2cos²θ − 3cos θ + 1 = 0">
              <Steps lines={[
                "Let x = cos θ:",
                "  2x² − 3x + 1 = 0",
                "  (2x − 1)(x − 1) = 0",
                "  x = 1/2   or   x = 1",
                "",
                "Case 1:  cos θ = 1/2  →  θ = 60°",
                "Case 2:  cos θ = 1    →  θ = 0°",
                "",
                "Both are in [0°, 90°].",
              ]} />
              <Answer>θ = 0° or θ = 60°</Answer>
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
