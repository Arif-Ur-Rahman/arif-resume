"use client";

import { motion } from "framer-motion";
import { Infinity as InfinityIcon, ArrowLeft, CheckCircle2, Lightbulb, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { ChaptersSidebar } from "../../_components/sidebar";

function Concept({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 bg-indigo-500/5 border border-indigo-500/15 rounded-xl px-4 py-3">
      <Lightbulb className="h-4 w-4 text-indigo-300 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-muted-foreground leading-relaxed">
        <span className="font-semibold text-indigo-300">Idea: </span>{children}
      </p>
    </div>
  );
}
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
              Radian &amp; degree measure — conversion between systems and arc length.
              Step-by-step solutions for all 13 problems (π ≈ 3.1416).
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["1° = π/180 rad",   "Degree → Radian"],
                ["1ᶜ = (180/π)°",     "Radian → Degree"],
                ["s = r θ",          "Arc length"],
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
            <ProblemCard num={1} statement="(1) Express in radians: (i) 75°30′  (ii) 55°54′53″  (iii) 33°22′11″.  (2) Express in degrees: (i) 8π/13 radian  (ii) 1.3177 radian  (iii) 0.9759 radian.">
              <Concept>
                Degrees and radians are two scales for the same angle. To switch between them you only need the bridge <span className="font-mono text-violet-300">180° = π radian</span>. Going to radians, multiply by π/180; going back to degrees, multiply by 180/π. Minutes (′) and seconds (″) must first be folded into the degree, using 60′ = 1° and 60″ = 1′.
              </Concept>
              <Steps lines={[
                "Facts used:  60′ = 1°,  60″ = 1′,  π ≈ 3.1416",
                "  • Degree → Radian:  multiply by π/180",
                "  • Radian → Degree:  multiply by 180/π",
                "",
                "── (1) Degree → Radian ──",
                "",
                "(i)  75°30′",
                "     30′ = 30/60 ° = 0.5°,  so 75°30′ = 75.5°",
                "     = 75.5 × π/180 = 75.5 × 3.1416 ÷ 180",
                "     = 237.1908 ÷ 180 = 1.3177 radian",
                "",
                "(ii) 55°54′53″",
                "     54′ = 54/60° = 0.9°,   53″ = 53/3600° = 0.0147°",
                "     angle = 55 + 0.9 + 0.0147 = 55.9147°",
                "     = 55.9147 × 3.1416 ÷ 180 = 175.662 ÷ 180 = 0.9759 radian",
                "",
                "(iii) 33°22′11″",
                "     22′ = 22/60° = 0.3667°,  11″ = 11/3600° = 0.0031°",
                "     angle = 33 + 0.3667 + 0.0031 = 33.3697°",
                "     = 33.3697 × 3.1416 ÷ 180 = 104.834 ÷ 180 = 0.5824 radian",
                "",
                "── (2) Radian → Degree ──",
                "Splitting a decimal degree into ° ′ ″:",
                "   • whole number part = degrees",
                "   • (leftover °) × 60 = minutes",
                "   • (leftover ′) × 60 = seconds",
                "",
                "(i)  8π/13 radian = 8π/13 × 180/π   (the π cancels)",
                "     = 8 × 180 ÷ 13 = 1440 ÷ 13 = 110.7692°",
                "     degrees      → 110°",
                "     0.7692° × 60 = 46.15′ → 46′",
                "     0.15′  × 60  = 9″",
                "     = 110°46′9″",
                "",
                "(ii) 1.3177 radian = 1.3177 × 180/π",
                "     = 1.3177 × 180/3.1416     [π ≈ 3.1416]",
                "     = 1.3177 × 57.2958 = 75.4985°",
                "     degrees      → 75°",
                "     0.4985° × 60 = 29.91′ → 29′",
                "     0.91′  × 60  = 55″  (nearly)",
                "     = 75°29′55″ ≈ 75°30′",
                "       (1.3177 was itself a rounded value, so it",
                "        returns to the original 75°30′)",
                "",
                "(iii) 0.9759 radian = 0.9759 × 180/π",
                "     = 0.9759 × 180/3.1416     [π ≈ 3.1416]",
                "     = 0.9759 × 57.2958 = 55.9148°",
                "     degrees      → 55°",
                "     0.9148° × 60 = 54.89′ → 54′",
                "     0.89′  × 60  = 53″  (nearly)",
                "     = 55°54′53″",
              ]} />
              <Answer>(1) 1.3177ᶜ, 0.9759ᶜ, 0.5824ᶜ  ·  (2) 110°46′9″, 75°30′, 55°54′53″</Answer>
            </ProblemCard>

            {/* ── Problem 2 ── */}
            <ProblemCard num={2} statement="If an angle is expressed as D° in the sexagesimal system and Rᶜ in the circular (radian) system, prove that D/180 = R/π.">
              <Concept>
                Both D (a degree-reading) and R (a radian-reading) describe the <em>same</em> angle, so the two readings must be equal once converted. Start from the one fact everyone agrees on — a straight angle is 180° and also π radian — and the proportion falls out.
              </Concept>
              <Steps lines={[
                "To prove:  D/180 = R/π",
                "",
                "Step 1 — the bridge between the two systems:",
                "   A straight angle is 180° and also π radian, so",
                "   180° = π radian.",
                "",
                "Step 2 — find the radian value of 1°:",
                "   Divide both sides by 180:",
                "   1° = (π/180) radian.",
                "",
                "Step 3 — the angle measures D degrees, i.e. D times 1°:",
                "   D° = D × (π/180) radian.",
                "",
                "Step 4 — but the same angle is R radian, so the two are equal:",
                "   R = D × π/180.",
                "",
                "Step 5 — divide both sides by π:",
                "   R/π = D/180",
                "   i.e.  D/180 = R/π   (Proved)",
              ]} />
              <Answer>D/180 = R/π ✓</Answer>
            </ProblemCard>

            {/* ── Problem 3 ── */}
            <ProblemCard num={3} statement="The radius of a wheel is 2 metre 3 cm. Find the approximate value of its circumference to four places of decimals.">
              <Concept>
                The circumference is the distance once around the circle, <span className="font-mono text-violet-300">C = 2πr</span>. The only trap here is units — the radius is given in mixed metre + centimetre, so turn it into a single unit (metre) before substituting.
              </Concept>
              <Steps lines={[
                "Step 1 — make the radius one unit (metre):",
                "   1 m = 100 cm,  so  3 cm = 3/100 = 0.03 m",
                "   r = 2 m + 0.03 m = 2.03 m",
                "",
                "Step 2 — apply C = 2πr  (π ≈ 3.1416):",
                "   C = 2 × 3.1416 × 2.03",
                "     = 6.2832 × 2.03",
                "     = 12.7549 m   (to four decimal places)",
                "",
                "Since π is approximate, the answer is written 'nearly'.",
              ]} />
              <Answer>Circumference ≈ 12.7549 m</Answer>
            </ProblemCard>

            {/* ── Problem 4 ── */}
            <ProblemCard num={4} statement="The diameter of a wheel of a car is 0.84 metre and the wheel makes 6 revolutions per second. Find the speed of the car.">
              <Concept>
                In one full turn a wheel rolls forward by exactly its circumference (<span className="font-mono text-violet-300">C = πd</span>). So distance covered in one second = circumference × revolutions per second — and distance per second <em>is</em> the speed.
              </Concept>
              <Steps lines={[
                "Step 1 — distance covered in ONE revolution = circumference:",
                "   C = πd = 3.1416 × 0.84 = 2.6389 m",
                "",
                "Step 2 — the wheel turns 6 times every second:",
                "   distance in 1 second = 6 × 2.6389 = 15.8337 m",
                "",
                "Step 3 — distance per second is the speed:",
                "   speed ≈ 15.83 m/s",
                "",
                "(For a feel of the size: 15.83 × 3.6 ≈ 57 km/h.)",
              ]} />
              <Answer>Speed ≈ 15.83 m/s (≈ 57 km/h)</Answer>
            </ProblemCard>

            {/* ── Problem 5 ── */}
            <ProblemCard num={5} statement="The angles of a triangle are in the ratio 2 : 5 : 3; what are the circular measures of the smallest and the largest angles?">
              <Concept>
                The three angles of any triangle add to 180°. A ratio 2 : 5 : 3 just means the 180° is shared into 2 + 5 + 3 = 10 equal pieces. Find one piece, hand out the pieces, then convert the smallest and largest to radian.
              </Concept>
              <Steps lines={[
                "Step 1 — total number of equal shares:",
                "   2 + 5 + 3 = 10 shares make up 180°",
                "",
                "Step 2 — value of one share:",
                "   one share = 180° ÷ 10 = 18°",
                "",
                "Step 3 — smallest (2 shares) and largest (5 shares):",
                "   smallest = 2 × 18° = 36°",
                "   largest  = 5 × 18° = 90°",
                "",
                "Step 4 — convert to radian (multiply by π/180):",
                "   36° = 36 × π/180 = π/5 radian",
                "   90° = 90 × π/180 = π/2 radian",
              ]} />
              <Answer>Smallest = π/5ᶜ,  Largest = π/2ᶜ</Answer>
            </ProblemCard>

            {/* ── Problem 6 ── */}
            <ProblemCard num={6} statement="The angles of a triangle are in arithmetical progression and the largest angle is twice the smallest. What are the radian measures of the angles?">
              <Concept>
                “Arithmetical progression” means the angles rise by a fixed step. Writing them as a−d, a, a+d is the clever choice: when you add them the steps cancel, so the middle angle pops out immediately. The second clue (largest = twice smallest) then fixes the step d.
              </Concept>
              <Steps lines={[
                "Let the three angles be (a − d),  a,  (a + d).",
                "",
                "Step 1 — use the angle sum (the d's cancel):",
                "   (a − d) + a + (a + d) = 180°",
                "   3a = 180°  →  a = 60°   (the middle angle)",
                "",
                "Step 2 — use 'largest = twice the smallest':",
                "   largest = a + d,   smallest = a − d",
                "   a + d = 2(a − d)",
                "   60 + d = 2(60 − d) = 120 − 2d",
                "   d + 2d = 120 − 60",
                "   3d = 60  →  d = 20°",
                "",
                "Step 3 — write the three angles:",
                "   a − d = 40°,  a = 60°,  a + d = 80°",
                "",
                "Step 4 — convert to radian (× π/180):",
                "   40° = 40π/180 = 2π/9",
                "   60° = 60π/180 = π/3",
                "   80° = 80π/180 = 4π/9",
              ]} />
              <Answer>2π/9ᶜ,  π/3ᶜ,  4π/9ᶜ</Answer>
            </ProblemCard>

            {/* ── Problem 7 ── */}
            <ProblemCard num={7} statement="The arc joining Dhaka with Chittagong subtends an angle of 5° at the centre of the earth. Taking the earth to be a sphere of radius 6440 km, find the distance of Chittagong from Dhaka.">
              <Concept>
                On a circle of radius r, an arc that opens an angle θ <em>at the centre</em> has length <span className="font-mono text-violet-300">s = rθ</span> — but only when θ is in radian. The earth is the circle and the two cities sit on an arc, so the city-to-city distance is that arc s. Always convert the angle to radian first.
              </Concept>
              <Steps lines={[
                "Given:  radius r = 6440 km,  central angle = 5°",
                "",
                "Step 1 — put the angle in radian (s = rθ needs radian):",
                "   θ = 5° = 5 × π/180 = π/36 radian",
                "",
                "Step 2 — apply the arc-length formula s = rθ:",
                "   s = 6440 × π/36",
                "     = 6440 × 3.1416 ÷ 36",
                "     = 20231.9 ÷ 36",
                "     = 562.0 km   (nearly)",
              ]} />
              <Answer>Distance ≈ 562 km</Answer>
            </ProblemCard>

            {/* ── Problem 8 ── */}
            <ProblemCard num={8} statement="The arc joining Teknaf with Tetulia subtends an angle of 10°6′3″ at the centre of the earth. Taking the earth to be a sphere of radius 6440 km, find the distance between Tetulia and Teknaf.">
              <Concept>
                Same arc rule <span className="font-mono text-violet-300">s = rθ</span> as the previous one. The only extra work is that the angle comes in degrees-minutes-seconds, so squeeze it into a single decimal degree first, then into radian.
              </Concept>
              <Steps lines={[
                "Given:  radius r = 6440 km,  angle = 10°6′3″",
                "",
                "Step 1 — fold minutes & seconds into the degree:",
                "   6′ = 6/60° = 0.1°,   3″ = 3/3600° = 0.0008°",
                "   θ = 10 + 0.1 + 0.0008 = 10.1008°",
                "",
                "Step 2 — degree → radian (× π/180):",
                "   θ = 10.1008 × 3.1416 ÷ 180 = 0.17629 radian",
                "",
                "Step 3 — arc length s = rθ:",
                "   s = 6440 × 0.17629 = 1135.3 km   (nearly)",
              ]} />
              <Answer>Distance ≈ 1135.3 km</Answer>
            </ProblemCard>

            {/* ── Problem 9 ── */}
            <ProblemCard num={9} statement="Riding a bicycle Shahed traverses a segment of a circular path in 11 seconds. The diameter of the circular path is 201 metre and the angle subtended by the segment at the centre is 30°; find Shahed's speed.">
              <Concept>
                Two ideas chained together: first the length he actually rode is an arc, found from <span className="font-mono text-violet-300">s = rθ</span>; then speed = distance ÷ time. Watch the diameter — the formula needs the radius (half of it).
              </Concept>
              <Steps lines={[
                "Step 1 — radius from the diameter:",
                "   r = 201 ÷ 2 = 100.5 m",
                "",
                "Step 2 — angle in radian:",
                "   θ = 30° = 30 × π/180 = π/6 radian",
                "",
                "Step 3 — length of the arc he rode (s = rθ):",
                "   s = 100.5 × π/6 = 100.5 × 0.5236 = 52.62 m",
                "",
                "Step 4 — speed = distance ÷ time:",
                "   speed = 52.62 ÷ 11 = 4.78 m/s   (nearly)",
              ]} />
              <Answer>Speed ≈ 4.78 m/s</Answer>
            </ProblemCard>

            {/* ── Problem 10 ── */}
            <ProblemCard num={10} statement="Given that the radius of the earth is 6440 km, what is the distance of two places on the surface of the earth which subtend an angle of 32″ at the centre of the earth?">
              <Concept>
                Again the arc rule <span className="font-mono text-violet-300">s = rθ</span>. The angle here is tiny — just 32 seconds — so expect a short distance. The whole job is converting 32″ all the way down to radian.
              </Concept>
              <Steps lines={[
                "Given:  radius r = 6440 km,  angle = 32″",
                "",
                "Step 1 — seconds → degree (3600″ = 1°):",
                "   θ = 32″ = 32/3600° = 0.008889°",
                "",
                "Step 2 — degree → radian (× π/180):",
                "   θ = 0.008889 × 3.1416 ÷ 180 = 0.00015514 radian",
                "",
                "Step 3 — arc length s = rθ:",
                "   s = 6440 × 0.00015514 = 0.999 km",
                "     ≈ 1 km   (nearly)",
              ]} />
              <Answer>Distance ≈ 1 km</Answer>
            </ProblemCard>

            {/* ── Problem 11 ── */}
            <ProblemCard num={11} statement="Express in radian the angle between the minute hand and hour hand of a clock when it is 9 : 30 a.m. [One spacing on the dial subtends 360°/60 = 6° at the centre.]">
              <Concept>
                The clock face is a full 360° cut into 60 minute-marks, so each mark is worth 360 ÷ 60 = 6°. Find where each hand points at 9:30, count the marks between them, multiply by 6°, then convert to radian. The catch: by 9:30 the hour hand has crept half-way past the 9.
              </Concept>
              <Steps lines={[
                "Value of one minute-mark = 360° ÷ 60 = 6°",
                "",
                "Step 1 — where each hand points at 9:30:",
                "   • minute hand → the 30-min mark (the figure 6)",
                "   • hour hand → half-way between 9 and 10,",
                "       because 30 min is half an hour past 9",
                "",
                "Step 2 — count the marks separating them:",
                "   from the 6 up to 'half-past-9' = 15 + 2½ = 17½ marks",
                "",
                "Step 3 — marks → degrees:",
                "   angle = 17.5 × 6° = 105°",
                "",
                "Step 4 — degrees → radian (× π/180):",
                "   = 105 × π/180 = 7π/12 radian",
              ]} />
              <Answer>7π/12 radian (= 105°)</Answer>
            </ProblemCard>

            {/* ── Problem 12 ── */}
            <ProblemCard num={12} statement="A person jogging on a circular track at 6 km per hour traverses a segment of the path in 36 seconds which subtends an angle of 60° at the centre. Find the diameter of the circular track.">
              <Concept>
                Run it backwards. First find how far the jogger went (distance = speed × time) — that distance is the arc s. Then rearrange <span className="font-mono text-violet-300">s = rθ</span> into r = s/θ, and double r for the diameter. Make the units agree before you start.
              </Concept>
              <Steps lines={[
                "Step 1 — convert the speed to metres per second:",
                "   6 km/h = 6000 m ÷ 3600 s = 5/3 m/s",
                "",
                "Step 2 — distance jogged in 36 s (this is the arc s):",
                "   s = 5/3 × 36 = 60 m",
                "",
                "Step 3 — angle in radian:",
                "   θ = 60° = 60 × π/180 = π/3 radian",
                "",
                "Step 4 — rearrange s = rθ to get the radius:",
                "   r = s ÷ θ = 60 ÷ (π/3) = 180/π",
                "     = 180 ÷ 3.1416 = 57.30 m",
                "",
                "Step 5 — diameter = 2 × radius:",
                "   = 2 × 57.30 = 114.59 m   (nearly)",
              ]} />
              <Answer>Diameter ≈ 114.59 m</Answer>
            </ProblemCard>

            {/* ── Problem 13 ── */}
            <ProblemCard num={13} statement="A hill subtends an angle of 8′ at a point at a distance of 750 km from the foot of the hill. Find the height of the hill.">
              <Concept>
                Seen from 750 km away the angle is tiny, so the hill’s height is almost exactly the little arc it sweeps out — height ≈ <span className="font-mono text-violet-300">s = rθ</span>, with r the distance to the hill. Convert the 8′ angle to radian, then substitute.
              </Concept>
              <Steps lines={[
                "Given:  distance r = 750 km,  angle = 8′",
                "",
                "Step 1 — minutes → degree (60′ = 1°):",
                "   θ = 8′ = 8/60° = 0.13333°",
                "",
                "Step 2 — degree → radian (× π/180):",
                "   θ = 0.13333 × 3.1416 ÷ 180 = 0.0023271 radian",
                "",
                "Step 3 — for a small angle, height ≈ arc s = rθ:",
                "   s = 750 × 0.0023271 = 1.745 km   (nearly)",
              ]} />
              <Answer>Height ≈ 1.745 km</Answer>
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
