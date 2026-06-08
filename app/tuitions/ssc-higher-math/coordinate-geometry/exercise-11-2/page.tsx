"use client";

import { motion } from "framer-motion";
import { Hash, ArrowLeft, CheckCircle2, Phone, MapPin, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ChaptersSidebar } from "../../_components/sidebar";

/* ─── helpers ─────────────────────────────────────────────── */
function M({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-foreground/90">{children}</span>;
}

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
    <div className="mt-3 inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-lg px-4 py-2">
      <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0" />
      <span className="font-mono font-semibold text-violet-300 text-sm">{children}</span>
    </div>
  );
}

function ProblemCard({
  num,
  statement,
  children,
  note,
}: {
  num: number;
  statement: React.ReactNode;
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (num - 1) * 0.04 }}
      className="gradient-border bg-card rounded-2xl p-6 space-y-4"
    >
      <div className="flex items-start gap-3">
        <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm flex-shrink-0 mt-0.5">
          {num}
        </span>
        <p className="text-sm font-medium leading-relaxed">{statement}</p>
      </div>

      <div className="pl-11 space-y-5">{children}</div>

      {note && (
        <div className="pl-11">
          <div className="flex items-start gap-2 bg-amber-500/8 border border-amber-500/20 rounded-lg px-4 py-2.5 text-xs text-amber-300 leading-relaxed">
            <AlertCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
            <span>{note}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function SubPart({
  label,
  given,
  steps,
  answer,
}: {
  label: string;
  given: string;
  steps: string[];
  answer: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label} &nbsp;·&nbsp; <M>{given}</M>
      </p>
      <Steps lines={steps} />
      <Answer>{answer}</Answer>
    </div>
  );
}

/* ─── page ────────────────────────────────────────────────── */
export default function Exercise11_2Page() {
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
                  Exercise 11.2 <span className="gradient-text">Solutions</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-6">
              Coordinate Geometry — Area of Triangles &amp; Quadrilaterals. Step-by-step
              worked solutions for all problems.
            </p>

            {/* Formula reference */}
            <div className="inline-flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3">
                <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Area Formula</span>
                <span className="font-mono text-sm text-violet-300">
                  Δ = ½ |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|
                </span>
              </div>
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3">
                <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Collinear</span>
                <span className="font-mono text-sm text-violet-300">Δ = 0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main layout: sidebar + content */}
      <div className="relative container px-4 mx-auto pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="flex flex-col lg:flex-row gap-8 items-start pt-8">
          {/* Chapters sidebar */}
          <ChaptersSidebar />

          {/* Solutions */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* ── Problem 1 ── */}
            <ProblemCard num={1} statement="Find the area of the triangles formed by the following vertices in each case:">
              <SubPart
                label="(i)"
                given="A(1, 4), B(−2, 1), C(4, −3)"
                steps={[
                  "Δ = ½ |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|",
                  "  = ½ |1(1−(−3)) + (−2)((−3)−4) + 4(4−1)|",
                  "  = ½ |1(4) + (−2)(−7) + 4(3)|",
                  "  = ½ |4 + 14 + 12|",
                  "  = ½ × 30  =  15",
                ]}
                answer="Area = 15 sq. units"
              />

              <SubPart
                label="(ii)"
                given="A(0, 0), B(5, 0), C(3, 4)"
                steps={[
                  "Δ = ½ |0(0−4) + 5(4−0) + 3(0−0)|",
                  "  = ½ |0 + 20 + 0|",
                  "  = ½ × 20  =  10",
                  "",
                  "Verification (base–height):",
                  "  base AB = 5  (along x-axis)",
                  "  height  = y-coordinate of C = 4",
                  "  Area = ½ × 5 × 4 = 10  ✓",
                ]}
                answer="Area = 10 sq. units"
              />

              <SubPart
                label="(iii)"
                given="A(3, 4), B(−4, 3), C(8, −6)"
                steps={[
                  "Δ = ½ |3(3−(−6)) + (−4)((−6)−4) + 8(4−3)|",
                  "  = ½ |3(9) + (−4)(−10) + 8(1)|",
                  "  = ½ |27 + 40 + 8|",
                  "  = ½ × 75  =  37.5",
                ]}
                answer="Area = 37.5 sq. units"
              />
            </ProblemCard>

            {/* ── Problem 2 ── */}
            <ProblemCard
              num={2}
              statement="The three vertices of a triangle are A(2, −4), B(−4, 4) and C(3, 3). Find the area of the triangle. (These are the same vertices as Exercise 11.1 Problem 2, where it was shown to be isosceles.)"
            >
              <Steps
                lines={[
                  "Δ = ½ |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|",
                  "  = ½ |2(4−3) + (−4)(3−(−4)) + 3(−4−4)|",
                  "  = ½ |2(1) + (−4)(7) + 3(−8)|",
                  "  = ½ |2 − 28 − 24|",
                  "  = ½ |−50|",
                  "  = ½ × 50  =  25",
                ]}
              />
              <Answer>Area = 25 sq. units</Answer>
            </ProblemCard>

            {/* ── Problem 3 ── */}
            <ProblemCard
              num={3}
              statement="Show that the points A(1, 2), B(2, 4) and C(3, 6) are collinear."
            >
              <Steps
                lines={[
                  "If three points are collinear, the area of the triangle they form = 0.",
                  "",
                  "Δ = ½ |1(4−6) + 2(6−2) + 3(2−4)|",
                  "  = ½ |1(−2) + 2(4) + 3(−2)|",
                  "  = ½ |−2 + 8 − 6|",
                  "  = ½ |0|",
                  "  = 0",
                  "",
                  "∴ Area = 0  →  A, B, C are collinear  ✓",
                  "",
                  "Note: the y-values 2, 4, 6 and x-values 1, 2, 3 are both in",
                  "arithmetic progression, so the points lie on y = 2x.",
                ]}
              />
              <Answer>Δ = 0 → A, B, C are collinear ✓</Answer>
            </ProblemCard>

            {/* ── Problem 4 ── */}
            <ProblemCard
              num={4}
              statement="The area of the triangle with vertices A(k, 4), B(3, 2) and C(−1, 6) is 4 square units. Find the value of k."
            >
              <Steps
                lines={[
                  "Δ = ½ |k(2−6) + 3(6−4) + (−1)(4−2)|",
                  "  = ½ |k(−4) + 3(2) + (−1)(2)|",
                  "  = ½ |−4k + 6 − 2|",
                  "  = ½ |−4k + 4|",
                  "  = 2|k − 1|",
                  "",
                  "Given Δ = 4:",
                  "  2|k − 1| = 4",
                  "  |k − 1|  = 2",
                  "  k − 1    = ±2",
                  "",
                  "Case 1:  k − 1 = 2  →  k = 3",
                  "Case 2:  k − 1 = −2 →  k = −1",
                  "",
                  "Verification (k = 3): A(3,4), B(3,2), C(−1,6)",
                  "  Δ = ½|3(2−6)+3(6−4)+(−1)(4−2)| = ½|−12+6−2| = ½×8 = 4 ✓",
                  "Verification (k = −1): A(−1,4), B(3,2), C(−1,6)",
                  "  Δ = ½|(−1)(2−6)+3(6−4)+(−1)(4−2)| = ½|4+6−2| = ½×8 = 4 ✓",
                ]}
              />
              <Answer>k = 3  or  k = −1</Answer>
            </ProblemCard>

            {/* ── Problem 5 ── */}
            <ProblemCard
              num={5}
              statement="Find the area of the triangle A(−1, 2), B(2, −3), C(5, 2). Determine whether the triangle is isosceles."
            >
              <Steps
                lines={[
                  "Area:",
                  "Δ = ½ |(−1)(−3−2) + 2(2−2) + 5(2−(−3))|",
                  "  = ½ |(−1)(−5) + 2(0) + 5(5)|",
                  "  = ½ |5 + 0 + 25|",
                  "  = ½ × 30  =  15 sq. units",
                  "",
                  "Side lengths:",
                  "AB = √[(2−(−1))² + (−3−2)²]  =  √[9 + 25]  =  √34",
                  "BC = √[(5−2)² + (2−(−3))²]   =  √[9 + 25]  =  √34",
                  "AC = √[(5−(−1))² + (2−2)²]   =  √36        =  6",
                  "",
                  "AB = BC = √34  →  Isosceles triangle ✓",
                ]}
              />
              <Answer>Area = 15 sq. units  |  Isosceles (AB = BC = √34)</Answer>
            </ProblemCard>

            {/* ── Problem 6 ── */}
            <ProblemCard
              num={6}
              statement="Find the area of the quadrilateral ABCD whose vertices are A(2, 1), B(6, 3), C(5, 7) and D(1, 5)."
              note="For a quadrilateral, apply the Shoelace formula: Area = ½|(x₁y₂−x₂y₁) + (x₂y₃−x₃y₂) + (x₃y₄−x₄y₃) + (x₄y₁−x₁y₄)|"
            >
              <Steps
                lines={[
                  "Using the Shoelace formula (vertices listed in order):",
                  "",
                  "  Term 1: x₁y₂ − x₂y₁  =  2×3 − 6×1   =  6 − 6   =   0",
                  "  Term 2: x₂y₃ − x₃y₂  =  6×7 − 5×3   = 42 − 15  =  27",
                  "  Term 3: x₃y₄ − x₄y₃  =  5×5 − 1×7   = 25 − 7   =  18",
                  "  Term 4: x₄y₁ − x₁y₄  =  1×1 − 2×5   =  1 − 10  =  −9",
                  "",
                  "Sum = 0 + 27 + 18 + (−9) = 36",
                  "",
                  "Area = ½ × |36| = 18",
                ]}
              />
              <Answer>Area = 18 sq. units</Answer>
            </ProblemCard>

            {/* ── Problem 7 ── */}
            <ProblemCard
              num={7}
              statement="Prove that the area of the triangle formed by the points (t, t − 2), (t + 2, t + 2) and (t + 3, t) is independent of t."
            >
              <Steps
                lines={[
                  "Let P = (t, t−2),  Q = (t+2, t+2),  R = (t+3, t).",
                  "",
                  "Δ = ½ |t((t+2) − t) + (t+2)(t − (t−2)) + (t+3)((t−2) − (t+2))|",
                  "  = ½ |t(2)   + (t+2)(2)   + (t+3)(−4)|",
                  "  = ½ |2t     + 2t + 4      − 4t − 12|",
                  "  = ½ |(2t + 2t − 4t) + (4 − 12)|",
                  "  = ½ |0  +  (−8)|",
                  "  = ½ × 8",
                  "  = 4",
                  "",
                  "The result 4 contains no t  →  area is constant for all t. ✓",
                ]}
              />
              <Answer>Area = 4 sq. units (constant, independent of t) ✓</Answer>
            </ProblemCard>

            {/* ── Problem 8 ── */}
            <ProblemCard
              num={8}
              statement="Find the value of a if the points A(a, −1), B(2, 1) and C(4, 5) are collinear."
            >
              <Steps
                lines={[
                  "For collinearity, area of △ABC = 0.",
                  "",
                  "Δ = ½ |a(1 − 5) + 2(5 − (−1)) + 4((−1) − 1)|",
                  "  = ½ |a(−4) + 2(6) + 4(−2)|",
                  "  = ½ |−4a + 12 − 8|",
                  "  = ½ |−4a + 4|",
                  "",
                  "Set Δ = 0:",
                  "  −4a + 4 = 0",
                  "  −4a     = −4",
                  "   a      = 1",
                  "",
                  "Check: A(1,−1), B(2,1), C(4,5)",
                  "  Slope AB = (1−(−1))/(2−1) = 2",
                  "  Slope BC = (5−1)/(4−2)    = 2  ✓  Same slope → collinear",
                ]}
              />
              <Answer>a = 1</Answer>
            </ProblemCard>

            {/* ── Problem 9 ── */}
            <ProblemCard
              num={9}
              statement="The vertices of a quadrilateral are A(−2, −1), B(5, 4), C(6, 7) and D(−1, 2). Find its area by dividing it into two triangles along diagonal AC."
            >
              <Steps
                lines={[
                  "Divide ABCD into △ABC and △ACD along diagonal AC.",
                  "",
                  "Area of △ABC  [A(−2,−1), B(5,4), C(6,7)]:",
                  "  = ½ |(−2)(4−7) + 5(7−(−1)) + 6((−1)−4)|",
                  "  = ½ |(−2)(−3) + 5(8) + 6(−5)|",
                  "  = ½ |6 + 40 − 30|",
                  "  = ½ × 16  =  8",
                  "",
                  "Area of △ACD  [A(−2,−1), C(6,7), D(−1,2)]:",
                  "  = ½ |(−2)(7−2) + 6(2−(−1)) + (−1)((−1)−7)|",
                  "  = ½ |(−2)(5) + 6(3) + (−1)(−8)|",
                  "  = ½ |−10 + 18 + 8|",
                  "  = ½ × 16  =  8",
                  "",
                  "Total area = 8 + 8 = 16",
                ]}
              />
              <Answer>Area of ABCD = 16 sq. units</Answer>
            </ProblemCard>

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
                <h3 className="text-2xl font-bold mb-2">Need help with these problems?</h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                  Book a one-on-one session and work through every step at your own pace.
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
        </div>
      </div>
    </main>
  );
}
