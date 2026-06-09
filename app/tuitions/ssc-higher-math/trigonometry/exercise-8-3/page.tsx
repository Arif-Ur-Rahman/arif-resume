"use client";

import { motion } from "framer-motion";
import { Infinity as InfinityIcon, ArrowLeft, CheckCircle2, Phone, MapPin, AlertCircle } from "lucide-react";
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
function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 bg-amber-500/8 border border-amber-500/20 rounded-lg px-4 py-2.5 text-xs text-amber-300 leading-relaxed">
      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
      <span>{children}</span>
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

export default function Exercise8_3Page() {
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
                  Exercise 8.3 <span className="gradient-text">Solutions</span>
                </h1>
              </div>
            </div>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-6">
              Height &amp; Distance — real-world applications of trigonometry.
              Step-by-step solutions with diagrams for all 8 problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["tan θ = opposite / adjacent", "Angle of elevation/depression"],
                ["Angle of depression = Angle of elevation", "Alternate interior angles"],
              ].map(([eq, label]) => (
                <div key={label} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5">
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
            <ProblemCard num={1} statement="The angle of elevation of the top of a tree from a point 40 m away from its base is 60°. Find the height of the tree.">
              <div className="max-w-sm">
                <TrigDiagram type="elevation"
                  labels={{ theta: "60°", height: "h", dist: "40 m", obj: "Tree" }}
                  caption="Angle of elevation 60° from P to tree top"
                />
              </div>
              <Steps lines={[
                "In right △OTP (right angle at O):",
                "  tan 60° = h / 40",
                "  √3       = h / 40",
                "  h         = 40√3  m",
                "           ≈ 69.3 m",
              ]} />
              <Answer>Height = 40√3 m ≈ 69.3 m</Answer>
            </ProblemCard>

            {/* ── Problem 2 ── */}
            <ProblemCard num={2} statement="A ladder 10 m long is leaning against a vertical wall. If the foot of the ladder is 5 m from the base of the wall, find the angle the ladder makes with the ground.">
              <div className="max-w-xs">
                <TrigDiagram type="right-triangle"
                  labels={{ hyp: "10 m", adj: "5 m", theta: "θ" }}
                  caption="Ladder (hyp), wall (opp), ground (adj)"
                />
              </div>
              <Steps lines={[
                "Ladder = hypotenuse = 10 m",
                "Distance from wall = adjacent = 5 m",
                "",
                "cos θ = adjacent / hypotenuse = 5/10 = 1/2",
                "",
                "cos 60° = 1/2  →  θ = 60°",
              ]} />
              <Answer>The ladder makes 60° with the ground</Answer>
            </ProblemCard>

            {/* ── Problem 3 ── */}
            <ProblemCard num={3} statement="From the top of a 30 m high tower, the angle of depression of a point on the ground is 30°. Find the distance of that point from the base of the tower.">
              <div className="max-w-sm">
                <TrigDiagram type="depression"
                  labels={{ theta: "30°", height: "30 m", dist: "d" }}
                  caption="Angle of depression 30° from tower top to P"
                />
              </div>
              <Steps lines={[
                "Height of tower = 30 m.",
                "Angle of depression at T = 30°",
                "∴ Angle of elevation from P to T = 30° (alternate interior angles)",
                "",
                "  tan 30° = 30 / d",
                "  1/√3    = 30 / d",
                "  d        = 30√3  m",
                "           ≈ 51.96 m",
              ]} />
              <Answer>Distance = 30√3 m ≈ 51.96 m</Answer>
            </ProblemCard>

            {/* ── Problem 4 ── */}
            <ProblemCard num={4} statement="A kite is flying at a height of 60 m above the ground. The string attached to the kite makes a 60° angle with the horizontal. Find the length of the string, assuming no sag.">
              <div className="max-w-xs">
                <TrigDiagram type="right-triangle"
                  labels={{ hyp: "L", opp: "60 m", theta: "60°" }}
                  caption="String is the hypotenuse; height is opposite"
                />
              </div>
              <Steps lines={[
                "Height (opposite) = 60 m, angle = 60°",
                "",
                "  sin 60° = opposite / hypotenuse = 60 / L",
                "  √3/2     = 60 / L",
                "  L         = 60 × 2/√3",
                "            = 120/√3",
                "            = 120√3/3",
                "            = 40√3  m",
                "           ≈ 69.3 m",
              ]} />
              <Answer>Length of string = 40√3 m ≈ 69.3 m</Answer>
            </ProblemCard>

            {/* ── Problem 5 ── */}
            <ProblemCard num={5} statement="The angle of elevation of the top of a tower from point P₁ is 30°. On walking 20 m towards the tower to point P₂, the angle becomes 60°. Find the height of the tower and the distance P₂ from the foot.">
              <div className="max-w-sm">
                <TrigDiagram type="approach"
                  labels={{ theta: "30°", theta2: "60°", height: "h", dist: "x", dist2: "20 m" }}
                  caption="Two elevation angles: 30° (far) → 60° (near, 20 m closer)"
                />
              </div>
              <Steps lines={[
                "Let x = distance from tower to P₂  (near point).",
                "Distance from tower to P₁ = x + 20.",
                "",
                "From P₂:  tan 60° = h/x       →  h = x√3    … (i)",
                "From P₁:  tan 30° = h/(x + 20) →  h = (x+20)/√3  … (ii)",
                "",
                "Equate (i) and (ii):",
                "  x√3 = (x + 20)/√3",
                "  3x  = x + 20",
                "  2x  = 20",
                "  x   = 10 m",
                "",
                "From (i):  h = 10√3 m",
              ]} />
              <Answer>Height = 10√3 m ≈ 17.32 m  |  P₂ is 10 m from the tower</Answer>
            </ProblemCard>

            {/* ── Problem 6 ── */}
            <ProblemCard num={6} statement="A man on the near bank of a river observes the angle of elevation of a tree on the far bank to be 60°. When he steps 20 m back, the angle becomes 30°. Find the width of the river and the height of the tree.">
              <div className="max-w-sm">
                <TrigDiagram type="approach"
                  labels={{ theta: "30°", theta2: "60°", height: "h", dist: "w", dist2: "20 m" }}
                  caption="Width w of the river, tree on the far bank"
                />
              </div>
              <Steps lines={[
                "Let w = width of river (= distance from near bank to tree base).",
                "",
                "From near bank:  tan 60° = h/w       →  h = w√3    … (i)",
                "From 20 m back:  tan 30° = h/(w + 20) → h = (w+20)/√3  … (ii)",
                "",
                "Equate (i) and (ii):",
                "  w√3 = (w + 20)/√3",
                "  3w  = w + 20",
                "  2w  = 20",
                "  w   = 10 m",
                "",
                "From (i):  h = 10√3 m",
              ]} />
              <Answer>Width of river = 10 m  |  Height of tree = 10√3 m ≈ 17.32 m</Answer>
            </ProblemCard>

            {/* ── Problem 7 ── */}
            <ProblemCard num={7} statement="Two vertical poles of heights 6 m and 11 m stand on level ground. If the distance between their feet is 12 m, find the distance between their tops.">
              <Steps lines={[
                "When both poles are placed side-by-side on level ground:",
                "  Vertical difference = 11 − 6 = 5 m",
                "  Horizontal distance = 12 m",
                "",
                "The tops form the hypotenuse of a right triangle:",
                "  d = √(5² + 12²)",
                "    = √(25 + 144)",
                "    = √169",
                "    = 13 m",
              ]} />
              <Answer>Distance between the tops = 13 m</Answer>
            </ProblemCard>

            {/* ── Problem 8 ── */}
            <ProblemCard num={8} statement="The shadow of a vertical pole 15 m tall is 15√3 m long on level ground. Find the angle of elevation of the sun at that moment.">
              <div className="max-w-sm">
                <TrigDiagram type="elevation"
                  labels={{ theta: "θ", height: "15 m", dist: "15√3 m", obj: "Pole" }}
                  caption="Sun rays cast the pole's shadow; θ = elevation of sun"
                />
              </div>
              <Steps lines={[
                "Height of pole (opposite) = 15 m",
                "Shadow length (adjacent)  = 15√3 m",
                "",
                "  tan θ = opposite / adjacent",
                "        = 15 / (15√3)",
                "        = 1/√3",
                "",
                "  tan 30° = 1/√3  →  θ = 30°",
              ]} />
              <Answer>Angle of elevation of sun = 30°</Answer>
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
