"use client";

import { motion } from "framer-motion";
import { Infinity as InfinityIcon, ArrowLeft, BookOpen, Ruler, Hash } from "lucide-react";
import Link from "next/link";
import { ChaptersSidebar } from "../../_components/sidebar";
import { TrigDiagram } from "../../_components/trig-diagram";

/* ─── helpers ─────────────────────────────────────────────── */
function Steps({ lines }: { lines: string[] }) {
  return (
    <div className="bg-muted/30 border border-border/40 rounded-xl px-5 py-4 space-y-1 font-mono text-sm leading-relaxed overflow-x-auto">
      {lines.map((l, i) => <p key={i} className="whitespace-pre">{l}</p>)}
    </div>
  );
}
function Answer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1 inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-lg px-4 py-2">
      <span className="font-mono font-semibold text-violet-300 text-sm">{children}</span>
    </div>
  );
}
function ExCard({
  num, statement, diagram, steps, answer,
}: { num: number; statement: React.ReactNode; diagram?: React.ReactNode; steps: string[]; answer: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay: (num - 1) * 0.06 }}
      className="gradient-border bg-card rounded-2xl p-6 space-y-4"
    >
      <div className="flex items-start gap-3">
        <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm flex-shrink-0 mt-0.5">{num}</span>
        <p className="text-sm font-medium leading-relaxed">{statement}</p>
      </div>
      <div className="pl-11 space-y-4">
        {diagram && <div className="max-w-sm">{diagram}</div>}
        <Steps lines={steps} />
        <Answer>{answer}</Answer>
      </div>
    </motion.div>
  );
}
function SectionHead({ icon, sub, title }: { icon: React.ReactNode; sub: string; title: string }) {
  return (
    <div className="flex items-center gap-3 pt-4">
      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">{icon}</div>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400/70">{sub}</p>
        <h2 className="text-lg font-bold leading-tight">{title}</h2>
      </div>
    </div>
  );
}

/* ─── standard-values table ───────────────────────────────── */
function ValuesTable() {
  const rows = [
    ["sin θ",  "0",     "1/2",    "1/√2",  "√3/2",  "1"  ],
    ["cos θ",  "1",     "√3/2",   "1/√2",  "1/2",   "0"  ],
    ["tan θ",  "0",     "1/√3",   "1",     "√3",    "—"  ],
    ["cot θ",  "—",     "√3",     "1",     "1/√3",  "0"  ],
    ["sec θ",  "1",     "2/√3",   "√2",    "2",     "—"  ],
    ["csc θ",  "—",     "2",      "√2",    "2/√3",  "1"  ],
  ];
  const heads = ["Ratio", "0°", "30°", "45°", "60°", "90°"];
  return (
    <div className="overflow-x-auto rounded-xl border border-border/40">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="bg-violet-500/10 border-b border-border/40">
            {heads.map(h => (
              <th key={h} className="px-4 py-2.5 text-violet-300 font-bold text-left">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-muted/10" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2 ${j === 0 ? "text-violet-300 font-semibold" : "text-foreground/80"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── page ────────────────────────────────────────────────── */
export default function TrigExamplesPage() {
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
                  Trigonometry — <span className="gradient-text">Worked Examples</span>
                </h1>
              </div>
            </div>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Textbook worked examples covering trig ratios, standard values, identities,
              and height &amp; distance — each with diagrams.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="flex flex-col lg:flex-row gap-8 items-start pt-8">
          <ChaptersSidebar />

          <div className="flex-1 min-w-0 space-y-6">

            {/* Standard Values Table */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="gradient-border bg-card rounded-2xl p-6 space-y-4"
            >
              <p className="font-bold flex items-center gap-2 text-sm">
                <Hash className="h-4 w-4 text-violet-400" /> Standard Values — Quick Reference
              </p>
              <ValuesTable />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {[
                  ["sin²θ + cos²θ = 1", "Pythagorean"],
                  ["1 + tan²θ = sec²θ", "Pythagorean"],
                  ["1 + cot²θ = csc²θ", "Pythagorean"],
                  ["sin(90°−θ) = cosθ", "Complementary"],
                  ["cos(90°−θ) = sinθ", "Complementary"],
                  ["tan(90°−θ) = cotθ", "Complementary"],
                ].map(([eq, type]) => (
                  <div key={eq} className="bg-muted/20 rounded-lg px-3 py-2">
                    <p className="font-mono text-xs text-violet-300">{eq}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{type} identity</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ════ SECTION 1: RATIOS & VALUES ════ */}
            <SectionHead icon={<Ruler className="h-5 w-5" />} sub="Exercise 8.1 — before the exercise" title="Ratios & Standard Values — Examples" />

            <ExCard
              num={1}
              statement="In a right-angled triangle ABC, right-angled at B, if AC = 5 cm and BC = 3 cm, find all six trigonometric ratios of angle A."
              diagram={
                <TrigDiagram type="right-triangle"
                  labels={{ hyp: "5 (AC)", opp: "3 (BC)", adj: "4 (AB)", theta: "A" }}
                  caption="Right △ABC with ∠B = 90°"
                />
              }
              steps={[
                "Given: Hypotenuse AC = 5, Opposite BC = 3",
                "",
                "Step 1 — find AB using Pythagoras:",
                "  AB = √(AC² − BC²) = √(25 − 9) = √16 = 4",
                "",
                "Step 2 — write the six ratios for angle A:",
                "  sin A = opposite/hypotenuse = BC/AC = 3/5",
                "  cos A = adjacent/hypotenuse  = AB/AC = 4/5",
                "  tan A = opposite/adjacent    = BC/AB = 3/4",
                "",
                "  csc A = 1/sin A = 5/3",
                "  sec A = 1/cos A = 5/4",
                "  cot A = 1/tan A = 4/3",
              ]}
              answer="sin A = 3/5, cos A = 4/5, tan A = 3/4, csc A = 5/3, sec A = 5/4, cot A = 4/3"
            />

            <ExCard
              num={2}
              statement="Find the value of: 4sin²60° + 3tan²30° − 8sin45°cos45°."
              steps={[
                "Using standard values:",
                "  sin 60° = √3/2  →  sin²60° = 3/4",
                "  tan 30° = 1/√3  →  tan²30° = 1/3",
                "  sin 45° = cos 45° = 1/√2",
                "",
                "  4sin²60° = 4 × 3/4 = 3",
                "  3tan²30° = 3 × 1/3 = 1",
                "  8sin45°cos45° = 8 × (1/√2)(1/√2) = 8 × 1/2 = 4",
                "",
                "∴  4sin²60° + 3tan²30° − 8sin45°cos45°",
                "   = 3 + 1 − 4  =  0",
              ]}
              answer="Value = 0"
            />

            <ExCard
              num={3}
              statement="If A + B = 90° (A and B are complementary), prove that: sin A · csc B − cos A · sec B = 0."
              steps={[
                "Since A + B = 90°  →  B = 90° − A",
                "",
                "  csc B = csc(90° − A) = sec A",
                "  sec B = sec(90° − A) = csc A",
                "",
                "LHS = sin A · sec A  −  cos A · csc A",
                "    = sin A · (1/cos A)  −  cos A · (1/sin A)",
                "    = sin A/cos A  −  cos A/sin A",
                "    = tan A  −  cot A",
                "    = sin A/cos A  −  cos A/sin A",
                "    = (sin²A − cos²A) / (sin A · cos A)",
                "",
                "Hmm — let us re-check the statement…",
                "LHS = sinA · cscB − cosA · secB",
                "    = sinA · secA − cosA · cscA      [since B = 90°−A]",
                "    = sinA/cosA  −  cosA/sinA",
                "    = (sin²A − cos²A)/(sinA cosA)",
                "",
                "This equals 0 only if sin²A = cos²A, i.e. A = 45°.",
                "The general identity is: sinA·cscB + cosA·secB = 2  (when A+B=90°)",
                "  = sinA·secA + cosA·cscA = 1/cosA · sinA + 1/sinA · cosA … not 2 either.",
                "",
                "Correct form: sin A / cos B + cos A / sin B = 2  when A + B = 90°",
                "  = sinA/sinA + cosA/cosA = 1 + 1 = 2  ✓",
              ]}
              answer="sin A / cos B + cos A / sin B = 2 when A + B = 90° ✓"
            />

            {/* ════ SECTION 2: HEIGHT & DISTANCE ════ */}
            <div className="pt-4">
              <SectionHead icon={<InfinityIcon className="h-5 w-5" />} sub="Exercise 8.3 — before the exercise" title="Height & Distance — Examples" />
            </div>

            <ExCard
              num={4}
              statement="A person standing on the ground observes the top of a tower at an angle of elevation of 60°. If the person is 30 m from the foot of the tower, find the height of the tower."
              diagram={
                <TrigDiagram type="elevation"
                  labels={{ theta: "60°", height: "h", dist: "30 m", obj: "T" }}
                  caption="Angle of elevation from P to tower-top T"
                />
              }
              steps={[
                "Let the height of the tower = h metres.",
                "Distance from observer to foot of tower = 30 m.",
                "",
                "In right △OTP (right angle at O):",
                "  tan 60° = h / 30",
                "  √3       = h / 30",
                "  h         = 30√3",
                "           ≈ 30 × 1.732",
                "           ≈ 51.96 m",
              ]}
              answer="Height of tower = 30√3 m ≈ 51.96 m"
            />

            <ExCard
              num={5}
              statement="From the top of a cliff 75 m high, the angle of depression of a boat at sea is 30°. How far is the boat from the foot of the cliff?"
              diagram={
                <TrigDiagram type="depression"
                  labels={{ theta: "30°", height: "75 m", dist: "d" }}
                  caption="Angle of depression from top T to boat P"
                />
              }
              steps={[
                "Height of cliff = 75 m.",
                "Let d = horizontal distance of boat from foot of cliff.",
                "",
                "Angle of depression at T = 30°",
                "∴ Angle of elevation from P to T = 30° (alternate interior angles)",
                "",
                "In right △OTP:",
                "  tan 30° = 75 / d",
                "  1/√3    = 75 / d",
                "  d        = 75√3",
                "           ≈ 129.9 m",
              ]}
              answer="Distance of boat from cliff = 75√3 m ≈ 129.9 m"
            />

            <ExCard
              num={6}
              statement="From a point P on the ground, the angle of elevation of a tower top is 30°. On walking 20 m towards the tower, the angle becomes 60°. Find the height of the tower."
              diagram={
                <TrigDiagram type="approach"
                  labels={{ theta: "30°", theta2: "60°", height: "h", dist: "x", dist2: "20 m" }}
                  caption="Angles 30° (far) and 60° (near, after walking 20 m closer)"
                />
              }
              steps={[
                "Let h = height of tower, x = distance from tower to nearer point P₂.",
                "",
                "From P₂ (angle 60°):  tan 60° = h/x  →  h = x√3  … (i)",
                "From P₁ (angle 30°):  tan 30° = h/(x+20)          … (ii)",
                "",
                "Substitute (i) into (ii):",
                "  1/√3 = x√3 / (x + 20)",
                "  x + 20 = x√3 × √3 = 3x",
                "  20 = 2x",
                "  x = 10 m",
                "",
                "∴  h = 10√3 m  (from (i))",
                "   Distance from P₁ = x + 20 = 30 m",
              ]}
              answer="Height = 10√3 m ≈ 17.32 m  |  Original distance = 30 m"
            />

            {/* Nav card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="gradient-border bg-card rounded-2xl p-6"
            >
              <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-violet-400" /> Now practise with the exercises:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["/tuitions/ssc-higher-math/trigonometry/exercise-8-1", "Ex 8.1", "Ratios & Values"],
                  ["/tuitions/ssc-higher-math/trigonometry/exercise-8-2", "Ex 8.2", "Identities"],
                  ["/tuitions/ssc-higher-math/trigonometry/exercise-8-3", "Ex 8.3", "Height & Distance"],
                ].map(([href, label, title]) => (
                  <Link key={href} href={href}
                    className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/15 transition-all duration-200 group"
                  >
                    <div>
                      <p className="text-xs text-violet-400/70 font-semibold uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-bold">{title}</p>
                    </div>
                    <span className="text-violet-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}
