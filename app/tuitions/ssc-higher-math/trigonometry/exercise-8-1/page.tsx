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
              <Steps lines={[
                "Use 1° = (π/180)ᶜ  and  1ᶜ = (180/π)°,  π ≈ 3.1416",
                "",
                "(1) Degree → Radian",
                "(i)   75°30′ = 75.5°  = 75.5 × π/180   = 1.3177ᶜ",
                "(ii)  55°54′53″ = 55.9148° = 55.9148 × π/180 = 0.9759ᶜ",
                "(iii) 33°22′11″ = 33.3697° = 33.3697 × π/180 = 0.5824ᶜ",
                "",
                "(2) Radian → Degree",
                "(i)   8π/13 = (8 × 180)/13 = 1440/13 = 110.769° = 110°46′9″",
                "(ii)  1.3177ᶜ = 1.3177 × 180/π = 75.499°  ≈ 75°30′",
                "(iii) 0.9759ᶜ = 0.9759 × 180/π = 55.915°  = 55°54′53″",
              ]} />
              <Answer>(1) 1.3177ᶜ, 0.9759ᶜ, 0.5824ᶜ  ·  (2) 110°46′9″, 75°30′, 55°54′53″</Answer>
            </ProblemCard>

            {/* ── Problem 2 ── */}
            <ProblemCard num={2} statement="If an angle is expressed as D° in the sexagesimal system and Rᶜ in the circular (radian) system, prove that D/180 = R/π.">
              <Steps lines={[
                "We know:  180° = π radian.",
                "∴ 1° = (π/180) radian.",
                "",
                "The angle measures D° in degrees and R radian in circular system,",
                "and both describe the same angle, so:",
                "  D° = D × (π/180) radian = R",
                "",
                "∴ D × π/180 = R",
                "Dividing both sides by π:",
                "  D/180 = R/π   (Proved)",
              ]} />
              <Answer>D/180 = R/π ✓</Answer>
            </ProblemCard>

            {/* ── Problem 3 ── */}
            <ProblemCard num={3} statement="The radius of a wheel is 2 metre 3 cm. Find the approximate value of its circumference to four places of decimals.">
              <Steps lines={[
                "Radius r = 2 m 3 cm = 2.03 m  (1 m = 100 cm)",
                "",
                "Circumference = 2πr",
                "             = 2 × 3.1416 × 2.03",
                "             = 6.2832 × 2.03",
                "             = 12.7549 m  (nearly)",
              ]} />
              <Answer>Circumference ≈ 12.7549 m</Answer>
            </ProblemCard>

            {/* ── Problem 4 ── */}
            <ProblemCard num={4} statement="The diameter of a wheel of a car is 0.84 metre and the wheel makes 6 revolutions per second. Find the speed of the car.">
              <Steps lines={[
                "Diameter d = 0.84 m",
                "Distance in 1 revolution = circumference = πd",
                "  = 3.1416 × 0.84 = 2.6389 m",
                "",
                "In 6 revolutions (i.e. in 1 second):",
                "  distance = 6 × 2.6389 = 15.8337 m",
                "",
                "∴ Speed = 15.83 m/s (nearly)  = 15.83 × 3.6 ≈ 57 km/h",
              ]} />
              <Answer>Speed ≈ 15.83 m/s (≈ 57 km/h)</Answer>
            </ProblemCard>

            {/* ── Problem 5 ── */}
            <ProblemCard num={5} statement="The angles of a triangle are in the ratio 2 : 5 : 3; what are the circular measures of the smallest and the largest angles?">
              <Steps lines={[
                "Sum of angles of a triangle = 180°",
                "Total ratio parts = 2 + 5 + 3 = 10",
                "Each part = 180° / 10 = 18°",
                "",
                "Smallest angle = 2 × 18° = 36°",
                "Largest angle  = 5 × 18° = 90°",
                "",
                "Circular measure:",
                "  36° = 36 × π/180 = π/5 radian",
                "  90° = π/2 radian",
              ]} />
              <Answer>Smallest = π/5ᶜ,  Largest = π/2ᶜ</Answer>
            </ProblemCard>

            {/* ── Problem 6 ── */}
            <ProblemCard num={6} statement="The angles of a triangle are in arithmetical progression and the largest angle is twice the smallest. What are the radian measures of the angles?">
              <Steps lines={[
                "Let the angles be (a − d), a, (a + d).",
                "Sum = 3a = 180°  →  a = 60°",
                "",
                "Largest = 2 × smallest:",
                "  a + d = 2(a − d)",
                "  60 + d = 2(60 − d) = 120 − 2d",
                "  3d = 60  →  d = 20°",
                "",
                "Angles = 40°, 60°, 80°",
                "Radian = 40×π/180, 60×π/180, 80×π/180",
                "       = 2π/9,  π/3,  4π/9",
              ]} />
              <Answer>2π/9ᶜ,  π/3ᶜ,  4π/9ᶜ</Answer>
            </ProblemCard>

            {/* ── Problem 7 ── */}
            <ProblemCard num={7} statement="The arc joining Dhaka with Chittagong subtends an angle of 5° at the centre of the earth. Taking the earth to be a sphere of radius 6440 km, find the distance of Chittagong from Dhaka.">
              <Steps lines={[
                "Radius r = 6440 km",
                "Angle θ = 5° = 5 × π/180 = π/36 radian",
                "",
                "Distance = arc s = r θ",
                "  = 6440 × π/36",
                "  = 6440 × 3.1416 / 36",
                "  = 562.0 km (nearly)",
              ]} />
              <Answer>Distance ≈ 562 km</Answer>
            </ProblemCard>

            {/* ── Problem 8 ── */}
            <ProblemCard num={8} statement="The arc joining Teknaf with Tetulia subtends an angle of 10°6′3″ at the centre of the earth. Taking the earth to be a sphere of radius 6440 km, find the distance between Tetulia and Teknaf.">
              <Steps lines={[
                "Radius r = 6440 km",
                "Angle θ = 10°6′3″ = 10.1008°",
                "       = 10.1008 × π/180 = 0.17628 radian",
                "",
                "Distance = arc s = r θ",
                "  = 6440 × 0.17628",
                "  = 1135.3 km (nearly)",
              ]} />
              <Answer>Distance ≈ 1135.3 km</Answer>
            </ProblemCard>

            {/* ── Problem 9 ── */}
            <ProblemCard num={9} statement="Riding a bicycle Shahed traverses a segment of a circular path in 11 seconds. The diameter of the circular path is 201 metre and the angle subtended by the segment at the centre is 30°; find Shahed's speed.">
              <Steps lines={[
                "Diameter = 201 m  →  radius r = 100.5 m",
                "Angle θ = 30° = π/6 radian",
                "",
                "Arc s = r θ = 100.5 × π/6",
                "      = 100.5 × 0.5236 = 52.62 m",
                "",
                "Speed = s / time = 52.62 / 11",
                "      = 4.78 m/s (nearly)",
              ]} />
              <Answer>Speed ≈ 4.78 m/s</Answer>
            </ProblemCard>

            {/* ── Problem 10 ── */}
            <ProblemCard num={10} statement="Given that the radius of the earth is 6440 km, what is the distance of two places on the surface of the earth which subtend an angle of 32″ at the centre of the earth?">
              <Steps lines={[
                "Radius r = 6440 km",
                "Angle θ = 32″ = 32/3600 degree = 0.008889°",
                "       = 0.008889 × π/180 = 0.00015519 radian",
                "",
                "Distance = arc s = r θ",
                "  = 6440 × 0.00015519",
                "  = 0.999 km ≈ 1 km (nearly)",
              ]} />
              <Answer>Distance ≈ 1 km</Answer>
            </ProblemCard>

            {/* ── Problem 11 ── */}
            <ProblemCard num={11} statement="Express in radian the angle between the minute hand and hour hand of a clock when it is 9 : 30 a.m. [One spacing on the dial subtends 360°/60 = 6° at the centre.]">
              <Steps lines={[
                "Each minute-spacing on the dial = 6°.",
                "",
                "At 9:30, the hands are (15 + 2½) = 17½ spacings apart:",
                "  • minute hand at 6, hour hand half-way between 9 and 10",
                "",
                "Angle = 17.5 × 6° = 105°",
                "Radian = 105 × π/180 = 7π/12",
              ]} />
              <Answer>7π/12 radian (= 105°)</Answer>
            </ProblemCard>

            {/* ── Problem 12 ── */}
            <ProblemCard num={12} statement="A person jogging on a circular track at 6 km per hour traverses a segment of the path in 36 seconds which subtends an angle of 60° at the centre. Find the diameter of the circular track.">
              <Steps lines={[
                "Speed = 6 km/h = 6000 m / 3600 s = 5/3 m/s",
                "Arc traversed in 36 s = (5/3) × 36 = 60 m",
                "",
                "Angle θ = 60° = π/3 radian",
                "From s = r θ:  r = s / θ = 60 / (π/3) = 180/π",
                "  = 180 / 3.1416 = 57.30 m",
                "",
                "Diameter = 2r = 2 × 57.30 = 114.59 m (nearly)",
              ]} />
              <Answer>Diameter ≈ 114.59 m</Answer>
            </ProblemCard>

            {/* ── Problem 13 ── */}
            <ProblemCard num={13} statement="A hill subtends an angle of 8′ at a point at a distance of 750 km from the foot of the hill. Find the height of the hill.">
              <Steps lines={[
                "Distance r = 750 km",
                "Angle θ = 8′ = 8/60 degree = 0.13333°",
                "       = 0.13333 × π/180 = 0.0023271 radian",
                "",
                "Height ≈ arc s = r θ",
                "  = 750 × 0.0023271",
                "  = 1.745 km (nearly)",
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
