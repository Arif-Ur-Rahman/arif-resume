"use client";

import { motion } from "framer-motion";
import { Hash, ArrowLeft, BookOpen, Ruler, Triangle } from "lucide-react";
import Link from "next/link";
import { ChaptersSidebar } from "../../_components/sidebar";
import { CoordinatePlane } from "../../_components/coordinate-plane";

/* ─── helpers ─────────────────────────────────────────────── */
function Steps({ lines }: { lines: string[] }) {
  return (
    <div className="bg-muted/30 border border-border/40 rounded-xl px-5 py-4 space-y-1 font-mono text-sm leading-relaxed overflow-x-auto">
      {lines.map((l, i) => (
        <p key={i} className="whitespace-pre">{l}</p>
      ))}
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

function ExampleCard({
  num,
  statement,
  diagram,
  steps,
  answer,
}: {
  num: number;
  statement: React.ReactNode;
  diagram?: React.ReactNode;
  steps: string[];
  answer: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (num - 1) * 0.06 }}
      className="gradient-border bg-card rounded-2xl p-6 space-y-4"
    >
      <div className="flex items-start gap-3">
        <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm flex-shrink-0 mt-0.5">
          {num}
        </span>
        <p className="text-sm font-medium leading-relaxed">{statement}</p>
      </div>

      <div className="pl-11 space-y-4">
        {diagram && (
          <div className="max-w-sm">
            {diagram}
          </div>
        )}
        <Steps lines={steps} />
        <Answer>{answer}</Answer>
      </div>
    </motion.div>
  );
}

function SectionHeader({ icon, label, title }: { icon: React.ReactNode; label: string; title: string }) {
  return (
    <div className="flex items-center gap-3 pt-4">
      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400/70">{label}</p>
        <h2 className="text-lg font-bold leading-tight">{title}</h2>
      </div>
    </div>
  );
}

/* ─── page ────────────────────────────────────────────────── */
export default function CoordinateGeometryExamplesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Link
              href="/tuitions/ssc-higher-math"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Higher Mathematics
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Hash className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-2">
                  SSC · উচ্চতর গণিত · Chapter 11
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Worked <span className="gradient-text">Examples</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Textbook worked examples for Coordinate Geometry — covering both the Distance
              Formula (Ex 11.1) and Area of Triangles (Ex 11.2), each with step-by-step
              solutions and diagrams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main layout */}
      <div className="relative container px-4 mx-auto pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="flex flex-col lg:flex-row gap-8 items-start pt-8">
          <ChaptersSidebar />

          <div className="flex-1 min-w-0 space-y-6">

            {/* ══════════════════════════════════════════
                SECTION 1 — DISTANCE FORMULA EXAMPLES
               ══════════════════════════════════════════ */}
            <SectionHeader
              icon={<Ruler className="h-5 w-5" />}
              label="Exercise 11.1 — before the exercise"
              title="Distance Formula — Worked Examples"
            />

            {/* ── Example 1 ── */}
            <ExampleCard
              num={1}
              statement="Find the distance between the points P(−3, 2) and Q(4, −1)."
              diagram={
                <CoordinatePlane
                  xRange={[-5, 6]} yRange={[-3, 4]}
                  points={[
                    { x: -3, y:  2, label: "P(−3, 2)", labelPos: "nw" },
                    { x:  4, y: -1, label: "Q(4, −1)", labelPos: "se" },
                  ]}
                  edges={[{ from: 0, to: 1 }]}
                  caption="Line segment PQ on the coordinate plane"
                />
              }
              steps={[
                "d(P, Q) = √[(x₂ − x₁)² + (y₂ − y₁)²]",
                "",
                "       = √[(4 − (−3))² + (−1 − 2)²]",
                "       = √[(4 + 3)²    + (−3)²]",
                "       = √[7²  +  9]",
                "       = √[49 + 9]",
                "       = √58",
              ]}
              answer="PQ = √58 units"
            />

            {/* ── Example 2 ── */}
            <ExampleCard
              num={2}
              statement={
                <>
                  Show that A(0, 0), B(4, 0) and C(2, 2√3) are the vertices of an
                  equilateral triangle.
                </>
              }
              diagram={
                <CoordinatePlane
                  xRange={[-1, 6]} yRange={[-1, 5]}
                  points={[
                    { x: 0, y: 0,              label: "A", labelPos: "sw" },
                    { x: 4, y: 0,              label: "B", labelPos: "se" },
                    { x: 2, y: 2*Math.sqrt(3), label: "C(2, 2√3)", labelPos: "n" },
                  ]}
                  edges={[
                    { from: 0, to: 1 },
                    { from: 1, to: 2 },
                    { from: 2, to: 0 },
                  ]}
                  polygon={[0, 1, 2]}
                  caption="△ABC — all three sides equal 4 units"
                />
              }
              steps={[
                "AB = √[(4−0)² + (0−0)²]  =  √16  =  4",
                "",
                "BC = √[(2−4)² + (2√3−0)²]",
                "   = √[(−2)² + (2√3)²]",
                "   = √[4 + 12]  =  √16  =  4",
                "",
                "CA = √[(0−2)² + (0−2√3)²]",
                "   = √[4 + 12]  =  √16  =  4",
                "",
                "∴ AB = BC = CA = 4",
                "   All three sides are equal  →  Equilateral triangle  ✓",
              ]}
              answer="△ABC is equilateral with side = 4 units ✓"
            />

            {/* ── Example 3 ── */}
            <ExampleCard
              num={3}
              statement="Find the point on the x-axis that is equidistant from A(4, 3) and B(0, 5)."
              diagram={
                <CoordinatePlane
                  xRange={[-1, 6]} yRange={[-1, 7]}
                  points={[
                    { x: 4, y: 3, label: "A(4, 3)", labelPos: "ne" },
                    { x: 0, y: 5, label: "B(0, 5)", labelPos: "nw" },
                    { x: 0, y: 0, label: "P(0, 0)", labelPos: "se" },
                  ]}
                  edges={[
                    { from: 2, to: 0, dashed: true },
                    { from: 2, to: 1, dashed: true },
                  ]}
                  caption="P is the origin — equidistant from A and B"
                />
              }
              steps={[
                "Let P = (x, 0) be the point on the x-axis.",
                "",
                "PA = PB  (given)",
                "√[(x−4)² + (0−3)²]  =  √[(x−0)² + (0−5)²]",
                "",
                "Square both sides:",
                "(x−4)² + 9  =  x² + 25",
                "x² − 8x + 16 + 9  =  x² + 25",
                "−8x + 25  =  25",
                "−8x  =  0",
                " x   =  0",
                "",
                "∴ P = (0, 0)  — the origin lies on the x-axis",
                "   and is equidistant from A and B.",
                "",
                "Check:  PA = √[16 + 9] = √25 = 5",
                "        PB = √[ 0 + 25] = 5  ✓",
              ]}
              answer="P = (0, 0)"
            />

            {/* ── Example 4 ── */}
            <ExampleCard
              num={4}
              statement="Show that A(−2, −2), B(2, −2) and C(0, 2√3 − 2) are the vertices of an isosceles triangle and find the length of each side."
              diagram={
                <CoordinatePlane
                  xRange={[-4, 4]} yRange={[-4, 4]}
                  points={[
                    { x: -2, y: -2,                label: "A", labelPos: "sw" },
                    { x:  2, y: -2,                label: "B", labelPos: "se" },
                    { x:  0, y: 2*Math.sqrt(3)-2,  label: "C", labelPos: "n" },
                  ]}
                  edges={[
                    { from: 0, to: 1 },
                    { from: 1, to: 2 },
                    { from: 2, to: 0 },
                  ]}
                  polygon={[0, 1, 2]}
                  caption="△ABC — base AB centred at origin"
                />
              }
              steps={[
                "AB = √[(2−(−2))² + (−2−(−2))²]",
                "   = √[4²  +  0]  =  4",
                "",
                "BC = √[(0−2)² + (2√3−2−(−2))²]",
                "   = √[4  +  (2√3)²]",
                "   = √[4  +  12]  =  √16  =  4",
                "",
                "CA = √[(−2−0)² + (−2−(2√3−2))²]",
                "   = √[4  +  (−2√3)²]",
                "   = √[4  +  12]  =  4",
                "",
                "AB = BC = CA = 4  →  equilateral (and thus also isosceles) ✓",
              ]}
              answer="All sides = 4 units — equilateral (isosceles) triangle ✓"
            />

            {/* ══════════════════════════════════════════
                SECTION 2 — AREA OF TRIANGLES EXAMPLES
               ══════════════════════════════════════════ */}
            <div className="pt-4">
              <SectionHeader
                icon={<Triangle className="h-5 w-5" />}
                label="Exercise 11.2 — before the exercise"
                title="Area of Triangles — Worked Examples"
              />
            </div>

            {/* ── Example 5 ── */}
            <ExampleCard
              num={5}
              statement="Find the area of the triangle whose vertices are A(3, 4), B(−2, 1) and C(4, −3)."
              diagram={
                <CoordinatePlane
                  xRange={[-4, 6]} yRange={[-5, 6]}
                  points={[
                    { x:  3, y:  4, label: "A(3, 4)",   labelPos: "ne" },
                    { x: -2, y:  1, label: "B(−2, 1)",  labelPos: "nw" },
                    { x:  4, y: -3, label: "C(4, −3)",  labelPos: "se" },
                  ]}
                  edges={[
                    { from: 0, to: 1 },
                    { from: 1, to: 2 },
                    { from: 2, to: 0 },
                  ]}
                  polygon={[0, 1, 2]}
                  caption="△ABC on the coordinate plane"
                />
              }
              steps={[
                "Area = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
                "",
                "     = ½ |3(1 − (−3)) + (−2)((−3) − 4) + 4(4 − 1)|",
                "     = ½ |3(4)  +  (−2)(−7)  +  4(3)|",
                "     = ½ |12  +  14  +  12|",
                "     = ½ × 38",
                "     = 19",
              ]}
              answer="Area = 19 sq. units"
            />

            {/* ── Example 6 ── */}
            <ExampleCard
              num={6}
              statement="Find the value of k for which A(2, k), B(0, 2) and C(3, −1) are collinear."
              diagram={
                <CoordinatePlane
                  xRange={[-1, 5]} yRange={[-3, 4]}
                  points={[
                    { x: 2, y: 0,  label: "A(2, 0)",  labelPos: "ne" },
                    { x: 0, y: 2,  label: "B(0, 2)",  labelPos: "nw" },
                    { x: 3, y: -1, label: "C(3, −1)", labelPos: "se" },
                  ]}
                  edges={[{ from: 1, to: 2 }]}
                  caption="A, B, C lie on the line y = −x + 2"
                />
              }
              steps={[
                "Three points are collinear when the area of the triangle they",
                "form equals zero.",
                "",
                "Area = ½ |2(2 − (−1)) + 0((−1) − k) + 3(k − 2)|",
                "     = ½ |2(3)  +  0  +  3(k − 2)|",
                "     = ½ |6 + 3k − 6|",
                "     = ½ |3k|",
                "",
                "Set Area = 0:",
                "  ½ |3k| = 0  →  k = 0",
                "",
                "Verification: A(2,0), B(0,2), C(3,−1)",
                "  Slope AB = (2−0)/(0−2) = −1",
                "  Slope AC = (−1−0)/(3−2) = −1  ✓  (same slope → collinear)",
              ]}
              answer="k = 0"
            />

            {/* ── Example 7 ── */}
            <ExampleCard
              num={7}
              statement="Find the area of the quadrilateral PQRS with vertices P(1, 6), Q(6, 4), R(5, 1) and S(2, 2) by dividing it into two triangles along diagonal PR."
              diagram={
                <CoordinatePlane
                  xRange={[-1, 8]} yRange={[-1, 8]}
                  points={[
                    { x: 1, y: 6, label: "P(1, 6)", labelPos: "nw" },
                    { x: 6, y: 4, label: "Q(6, 4)", labelPos: "ne" },
                    { x: 5, y: 1, label: "R(5, 1)", labelPos: "se" },
                    { x: 2, y: 2, label: "S(2, 2)", labelPos: "sw" },
                  ]}
                  edges={[
                    { from: 0, to: 1 },
                    { from: 1, to: 2 },
                    { from: 2, to: 3 },
                    { from: 3, to: 0 },
                    { from: 0, to: 2, dashed: true, color: "rgba(251,191,36,0.65)" },
                  ]}
                  polygon={[0, 1, 2, 3]}
                  caption="Diagonal PR (dashed) splits PQRS into △PQR and △PSR"
                />
              }
              steps={[
                "Divide PQRS along diagonal PR into △PQR and △PSR.",
                "",
                "Area of △PQR  [P(1,6), Q(6,4), R(5,1)]:",
                "  = ½ |1(4−1) + 6(1−6) + 5(6−4)|",
                "  = ½ |1(3) + 6(−5) + 5(2)|",
                "  = ½ |3 − 30 + 10|",
                "  = ½ × 17  =  8.5",
                "",
                "Area of △PSR  [P(1,6), S(2,2), R(5,1)]:",
                "  = ½ |1(2−1) + 2(1−6) + 5(6−2)|",
                "  = ½ |1(1) + 2(−5) + 5(4)|",
                "  = ½ |1 − 10 + 20|",
                "  = ½ × 11  =  5.5",
                "",
                "Area of PQRS = 8.5 + 5.5 = 14",
              ]}
              answer="Area of quadrilateral PQRS = 14 sq. units"
            />

            {/* ── Example 8 ── */}
            <ExampleCard
              num={8}
              statement="Show that the points A(2, 3), B(4, 7) and C(6, 11) are collinear using the area method."
              diagram={
                <CoordinatePlane
                  xRange={[-1, 8]} yRange={[-1, 13]}
                  width={400} height={380}
                  points={[
                    { x: 2, y:  3, label: "A(2, 3)",   labelPos: "w" },
                    { x: 4, y:  7, label: "B(4, 7)",   labelPos: "w" },
                    { x: 6, y: 11, label: "C(6, 11)",  labelPos: "w" },
                  ]}
                  edges={[{ from: 0, to: 2 }]}
                  caption="A, B, C are collinear — they all lie on y = 2x − 1"
                />
              }
              steps={[
                "Area = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
                "",
                "     = ½ |2(7 − 11) + 4(11 − 3) + 6(3 − 7)|",
                "     = ½ |2(−4)  +  4(8)  +  6(−4)|",
                "     = ½ |−8  +  32  −  24|",
                "     = ½ |0|",
                "     = 0",
                "",
                "Area = 0  →  A, B, C are collinear  ✓",
                "",
                "Note: all three satisfy y = 2x − 1",
                "  A: 2(2)−1 = 3 ✓   B: 2(4)−1 = 7 ✓   C: 2(6)−1 = 11 ✓",
              ]}
              answer="Area = 0 → A, B, C are collinear ✓"
            />

            {/* Navigation links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="gradient-border bg-card rounded-2xl p-6"
            >
              <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-violet-400" />
                Now practice with the exercises:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tuitions/ssc-higher-math/coordinate-geometry/exercise-11-1"
                  className="flex-1 flex items-center justify-between px-5 py-3.5 rounded-xl bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/15 transition-all duration-200 group"
                >
                  <div>
                    <p className="text-xs text-violet-400/70 font-semibold uppercase tracking-wide">Exercise 11.1</p>
                    <p className="text-sm font-bold">Distance Formula</p>
                  </div>
                  <span className="text-violet-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
                <Link
                  href="/tuitions/ssc-higher-math/coordinate-geometry/exercise-11-2"
                  className="flex-1 flex items-center justify-between px-5 py-3.5 rounded-xl bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/15 transition-all duration-200 group"
                >
                  <div>
                    <p className="text-xs text-violet-400/70 font-semibold uppercase tracking-wide">Exercise 11.2</p>
                    <p className="text-sm font-bold">Area of Triangles</p>
                  </div>
                  <span className="text-violet-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}
