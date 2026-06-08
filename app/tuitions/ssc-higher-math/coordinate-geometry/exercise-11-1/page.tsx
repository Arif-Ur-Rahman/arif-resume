"use client";

import { motion } from "framer-motion";
import { Hash, ArrowLeft, CheckCircle2, Phone, MapPin, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ChaptersSidebar } from "../../_components/sidebar";

/* ─── helpers ─────────────────────────────────────────────── */
function M({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-foreground/90">{children}</span>
  );
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
export default function Exercise11_1Page() {
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
                  Exercise 11.1 <span className="gradient-text">Solutions</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-6">
              Coordinate Geometry — Distance Formula. Step-by-step worked solutions
              for all 11 problems.
            </p>

            {/* Formula reference */}
            <div className="inline-flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3">
                <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Distance Formula</span>
                <span className="font-mono text-sm text-violet-300">
                  PQ = √[(x₂ − x₁)² + (y₂ − y₁)²]
                </span>
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
        <ProblemCard num={1} statement="Find the distance between the given points in every case:">
          <SubPart
            label="(1)"
            given="(2, 3) and (4, 6)"
            steps={[
              "d = √[(x₂ − x₁)² + (y₂ − y₁)²]",
              "  = √[(4 − 2)² + (6 − 3)²]",
              "  = √[2² + 3²]",
              "  = √[4 + 9]",
              "  = √13",
            ]}
            answer="d = √13"
          />

          <SubPart
            label="(2)"
            given="(−3, 7) and (−7, 3)"
            steps={[
              "d = √[(−7 − (−3))² + (3 − 7)²]",
              "  = √[(−4)² + (−4)²]",
              "  = √[16 + 16]",
              "  = √32  =  4√2",
            ]}
            answer="d = 4√2"
          />

          <SubPart
            label="(3)"
            given="(a, b) and (b, a)"
            steps={[
              "d = √[(b − a)² + (a − b)²]",
              "  = √[(a − b)² + (a − b)²]       [since (b−a)² = (a−b)²]",
              "  = √[2(a − b)²]",
              "  = √2 · |a − b|",
            ]}
            answer="d = √2 |a − b|"
          />

          <SubPart
            label="(4)"
            given="(0, 0) and (sinθ, cosθ)"
            steps={[
              "d = √[(sinθ − 0)² + (cosθ − 0)²]",
              "  = √[sin²θ + cos²θ]",
              "  = √1                              [identity: sin²θ + cos²θ = 1]",
              "  = 1",
            ]}
            answer="d = 1"
          />

          <SubPart
            label="(5)"
            given="(−3/2, −1) and (1/2, 2)"
            steps={[
              "d = √[(1/2 − (−3/2))² + (2 − (−1))²]",
              "  = √[(1/2 + 3/2)² + (3)²]",
              "  = √[(2)² + 9]",
              "  = √[4 + 9]",
              "  = √13",
            ]}
            answer="d = √13"
          />
        </ProblemCard>

        {/* ── Problem 2 ── */}
        <ProblemCard
          num={2}
          statement="The three vertices of a triangle are A(2, −4), B(−4, 4) and C(3, 3). Draw the triangle and show that it is an isosceles triangle."
        >
          <Steps
            lines={[
              "AB = √[(−4 − 2)² + (4 − (−4))²]",
              "   = √[(−6)² + (8)²]",
              "   = √[36 + 64]  =  √100  =  10",
              "",
              "BC = √[(3 − (−4))² + (3 − 4)²]",
              "   = √[(7)² + (−1)²]",
              "   = √[49 + 1]  =  √50  =  5√2",
              "",
              "AC = √[(3 − 2)² + (3 − (−4))²]",
              "   = √[(1)² + (7)²]",
              "   = √[1 + 49]  =  √50  =  5√2",
              "",
              "∴ BC = AC = 5√2",
            ]}
          />
          <Answer>Two sides equal (BC = AC = 5√2) → Isosceles triangle ✓</Answer>
        </ProblemCard>

        {/* ── Problem 3 ── */}
        <ProblemCard
          num={3}
          statement="A(2, 5), B(−1, 1) and C(2, 1) are the three vertices of a triangle. Draw the triangle and show that it is a right angled triangle."
        >
          <Steps
            lines={[
              "AB = √[(−1 − 2)² + (1 − 5)²]",
              "   = √[(−3)² + (−4)²]",
              "   = √[9 + 16]  =  √25  =  5",
              "",
              "BC = √[(2 − (−1))² + (1 − 1)²]",
              "   = √[(3)² + 0²]  =  √9  =  3",
              "",
              "AC = √[(2 − 2)² + (1 − 5)²]",
              "   = √[0 + 16]  =  4",
              "",
              "Check (Pythagoras): AB² = BC² + AC²?",
              "  25  =  9 + 16  =  25  ✓",
              "",
              "∴ Right angle at C (AB is the hypotenuse)",
            ]}
          />
          <Answer>BC² + AC² = AB² → Right angled triangle, ∠ACB = 90° ✓</Answer>
        </ProblemCard>

        {/* ── Problem 4 ── */}
        <ProblemCard
          num={4}
          statement="Ascertain whether the points A(1, 2), B(−3, 5) and C(5, −1) form a triangle."
        >
          <Steps
            lines={[
              "AB = √[(−3 − 1)² + (5 − 2)²]",
              "   = √[16 + 9]  =  √25  =  5",
              "",
              "BC = √[(5 − (−3))² + (−1 − 5)²]",
              "   = √[64 + 36]  =  √100  =  10",
              "",
              "AC = √[(5 − 1)² + (−1 − 2)²]",
              "   = √[16 + 9]  =  √25  =  5",
              "",
              "Check: AB + AC = 5 + 5 = 10 = BC",
              "",
              "Since AB + AC = BC, the three points are collinear",
              "(they lie on the same straight line).",
              "∴ No triangle can be formed.",
            ]}
          />
          <Answer>A, B, C are collinear → cannot form a triangle</Answer>
        </ProblemCard>

        {/* ── Problem 5 ── */}
        <ProblemCard
          num={5}
          statement="If the two points (−5, 5) and (5, k) are equidistant from the origin; find the value of k."
        >
          <Steps
            lines={[
              "Let O = (0, 0) be the origin.",
              "",
              "Distance from O to (−5, 5):",
              "  d₁ = √[(−5)² + 5²]  =  √[25 + 25]  =  √50  =  5√2",
              "",
              "Distance from O to (5, k):",
              "  d₂ = √[5² + k²]  =  √[25 + k²]",
              "",
              "Given d₁ = d₂:",
              "  5√2 = √[25 + k²]",
              "  50  = 25 + k²",
              "  k²  = 25",
              "  k   = ±5",
            ]}
          />
          <Answer>k = 5  or  k = −5</Answer>
        </ProblemCard>

        {/* ── Problem 6 ── */}
        <ProblemCard
          num={6}
          statement="Show that A(2, 2), B(−2, −2) and C(−2√3, 2√3) are the vertices of an equilateral triangle. Find its perimeter up to three decimal places."
        >
          <Steps
            lines={[
              "AB = √[(−2 − 2)² + (−2 − 2)²]",
              "   = √[(−4)² + (−4)²]",
              "   = √[16 + 16]  =  √32  =  4√2",
              "",
              "BC = √[(−2√3 − (−2))² + (2√3 − (−2))²]",
              "   = √[(2 − 2√3)² + (2 + 2√3)²]",
              "   = √[4 − 8√3 + 12 + 4 + 8√3 + 12]",
              "   = √32  =  4√2",
              "",
              "AC = √[(−2√3 − 2)² + (2√3 − 2)²]",
              "   = √[(2√3 + 2)² + (2√3 − 2)²]",
              "   = √[12 + 8√3 + 4 + 12 − 8√3 + 4]",
              "   = √32  =  4√2",
              "",
              "∴ AB = BC = AC = 4√2  →  Equilateral triangle ✓",
              "",
              "Perimeter = 3 × 4√2  =  12√2",
              "           ≈ 12 × 1.41421…  =  16.971  (3 d.p.)",
            ]}
          />
          <Answer>All sides = 4√2, Perimeter = 12√2 ≈ 16.971 units</Answer>
        </ProblemCard>

        {/* ── Problem 7 ── */}
        <ProblemCard
          num={7}
          statement="Show that the points A(−5, 0), B(5, 0), C(5, 5) and D(−5, 5) are the four vertices of a square."
          note="Note: With these coordinates AB = CD = 10 and BC = DA = 5. Adjacent sides are unequal, so the shape is actually a rectangle (all right angles, equal diagonals), not a square. This appears to be a typographical error in the textbook. The working below confirms the rectangle properties."
        >
          <Steps
            lines={[
              "AB = √[(5−(−5))² + (0−0)²]  =  √[100]  =  10",
              "BC = √[(5−5)² + (5−0)²]      =  √[25]   =  5",
              "CD = √[(−5−5)² + (5−5)²]     =  √[100]  =  10",
              "DA = √[(−5−(−5))² + (0−5)²]  =  √[25]   =  5",
              "",
              "Opposite sides: AB = CD = 10,  BC = DA = 5  ✓",
              "",
              "Diagonals:",
              "AC = √[(5−(−5))² + (5−0)²]  =  √[100+25]  =  5√5",
              "BD = √[(−5−5)² + (5−0)²]    =  √[100+25]  =  5√5",
              "",
              "Equal diagonals (AC = BD = 5√5) and all angles = 90°",
              "∴ ABCD is a Rectangle.",
            ]}
          />
          <Answer>ABCD is a rectangle (AB = CD = 10, BC = DA = 5, AC = BD = 5√5)</Answer>
        </ProblemCard>

        {/* ── Problem 8 ── */}
        <ProblemCard
          num={8}
          statement="Ascertain whether the quadrilateral formed with the points A(−2, −1), B(5, 4), C(6, 7) and D(−1, 2) is a parallelogram or a rectangle."
        >
          <Steps
            lines={[
              "AB = √[(5−(−2))² + (4−(−1))²]  =  √[49+25]  =  √74",
              "BC = √[(6−5)² + (7−4)²]          =  √[1+9]    =  √10",
              "CD = √[(−1−6)² + (2−7)²]         =  √[49+25]  =  √74",
              "DA = √[(−2−(−1))² + (−1−2)²]     =  √[1+9]    =  √10",
              "",
              "AB = CD = √74  and  BC = DA = √10",
              "∴ Opposite sides are equal  →  Parallelogram",
              "",
              "Now check diagonals:",
              "AC = √[(6−(−2))² + (7−(−1))²]  =  √[64+64]  =  8√2",
              "BD = √[(−1−5)² + (2−4)²]         =  √[36+4]   =  2√10",
              "",
              "AC ≠ BD  →  Diagonals are NOT equal",
              "∴ Not a rectangle.",
            ]}
          />
          <Answer>ABCD is a Parallelogram (not a rectangle)</Answer>
        </ProblemCard>

        {/* ── Problem 9 ── */}
        <ProblemCard
          num={9}
          statement="Which of the points A(10, 5), B(7, 6), C(−3, 5) is the nearest to the point P(3, −2) and which is the farthest?"
        >
          <Steps
            lines={[
              "PA = √[(10−3)² + (5−(−2))²]",
              "   = √[49 + 49]  =  √98  =  7√2  ≈  9.899",
              "",
              "PB = √[(7−3)² + (6−(−2))²]",
              "   = √[16 + 64]  =  √80  =  4√5  ≈  8.944",
              "",
              "PC = √[(−3−3)² + (5−(−2))²]",
              "   = √[36 + 49]  =  √85         ≈  9.220",
              "",
              "Comparing: PB < PC < PA",
              "   4√5  <  √85  <  7√2",
            ]}
          />
          <Answer>Nearest: B(7, 6)  |  Farthest: A(10, 5)</Answer>
        </ProblemCard>

        {/* ── Problem 10 ── */}
        <ProblemCard
          num={10}
          statement="From the point P(x, y), the distance of the y-axis is equal to the distance of P from Q(3, 2). Prove that, y² − 4y − 6x + 13 = 0"
        >
          <Steps
            lines={[
              "Distance of P(x, y) from the y-axis  =  |x|",
              "",
              "Distance of P(x, y) from Q(3, 2):",
              "  PQ = √[(x − 3)² + (y − 2)²]",
              "",
              "Given:  |x|  =  PQ",
              "⟹  x²  =  (x − 3)² + (y − 2)²",
              "⟹  x²  =  x² − 6x + 9 + y² − 4y + 4",
              "⟹   0  =  y² − 4y − 6x + 9 + 4",
              "⟹   0  =  y² − 4y − 6x + 13",
              "",
              "∴  y² − 4y − 6x + 13 = 0          (Proved)",
            ]}
          />
          <Answer>y² − 4y − 6x + 13 = 0  ✓ (Proved)</Answer>
        </ProblemCard>

        {/* ── Problem 11 ── */}
        <ProblemCard
          num={11}
          statement="The vertices of triangle ABC are A(2, −1), B(−4, 2), C(2, 5). Find the value of the median AD."
        >
          <Steps
            lines={[
              "The median AD goes from vertex A to the midpoint D of side BC.",
              "",
              "Step 1 — Find D (midpoint of BC):",
              "  D = ( (−4+2)/2 , (2+5)/2 )",
              "    = ( −2/2 , 7/2 )",
              "    = ( −1 , 7/2 )",
              "",
              "Step 2 — Find length AD:",
              "  AD = √[(−1 − 2)² + (7/2 − (−1))²]",
              "     = √[(−3)² + (7/2 + 2/2)²]",
              "     = √[9 + (9/2)²]",
              "     = √[9 + 81/4]",
              "     = √[36/4 + 81/4]",
              "     = √(117/4)",
              "     = √117 / 2",
              "     = 3√13 / 2",
            ]}
          />
          <Answer>AD = 3√13 / 2  ≈  5.408 units</Answer>
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
