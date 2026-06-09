"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Sub = { label: string; title: string; href: string | null };
type Chapter = { num: number; title: string; subs: Sub[] | null };

export const chapters: Chapter[] = [
  { num: 1,  title: "Set and Function",                     subs: null },
  { num: 2,  title: "Algebraic Expression",                 subs: null },
  { num: 3,  title: "Geometry",                             subs: null },
  { num: 4,  title: "Geometric Constructions",              subs: null },
  { num: 5,  title: "Equation",                             subs: null },
  { num: 6,  title: "Inequality",                           subs: null },
  { num: 7,  title: "Infinite Series",                      subs: null },
  {
    num: 8,
    title: "Trigonometry",
    subs: [
      { label: "Examples", title: "Worked Examples",   href: "/tuitions/ssc-higher-math/trigonometry/examples" },
      { label: "Ex 8.1",   title: "Ratios & Values",   href: "/tuitions/ssc-higher-math/trigonometry/exercise-8-1" },
      { label: "Ex 8.2",   title: "Identities",        href: "/tuitions/ssc-higher-math/trigonometry/exercise-8-2" },
      { label: "Ex 8.3",   title: "Height & Distance", href: "/tuitions/ssc-higher-math/trigonometry/exercise-8-3" },
    ],
  },
  { num: 9,  title: "Exponential and Logarithmic Function", subs: null },
  { num: 10, title: "Binomial Expansion",                   subs: null },
  {
    num: 11,
    title: "Coordinate Geometry",
    subs: [
      { label: "Examples", title: "Worked Examples",    href: "/tuitions/ssc-higher-math/coordinate-geometry/examples" },
      { label: "Ex 11.1",  title: "Distance Formula",   href: "/tuitions/ssc-higher-math/coordinate-geometry/exercise-11-1" },
      { label: "Ex 11.2",  title: "Area of Triangles",  href: "/tuitions/ssc-higher-math/coordinate-geometry/exercise-11-2" },
    ],
  },
  { num: 12, title: "Planar Vector",   subs: null },
  { num: 13, title: "Solid Geometry",  subs: null },
  { num: 14, title: "Probability",     subs: null },
];

export function ChaptersSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number[]>(() =>
    chapters
      .filter(ch => ch.subs?.some(s => s.href && pathname.startsWith(s.href)))
      .map(ch => ch.num)
  );

  useEffect(() => {
    setOpen(prev => {
      const active = chapters
        .filter(ch => ch.subs?.some(s => s.href && pathname.startsWith(s.href)))
        .map(ch => ch.num);
      const seen = new Set(prev);
      const merged = [...prev, ...active.filter(n => !seen.has(n))];
      return merged.length === prev.length && merged.every((v, i) => v === prev[i]) ? prev : merged;
    });
  }, [pathname]);

  const toggle = (num: number) =>
    setOpen((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-72 lg:sticky lg:top-24 flex-shrink-0"
    >
      <div className="gradient-border bg-card rounded-2xl overflow-hidden">
        {/* header */}
        <div className="px-5 py-4 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-violet-400" />
            </div>
            <span className="font-bold text-sm">Chapters</span>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            {chapters.length}
          </span>
        </div>

        {/* list */}
        <div className="p-3 space-y-0.5">
          {chapters.map((ch, i) => {
            const isExpanded = open.includes(ch.num);
            const hasSubs = !!ch.subs;
            const isActiveChapter =
              hasSubs &&
              ch.subs!.some((s) => s.href && pathname.startsWith(s.href));

            return (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.04 + i * 0.03 }}
              >
                {/* chapter row */}
                <button
                  onClick={() => hasSubs && toggle(ch.num)}
                  className={`group w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-200 text-left ${
                    isActiveChapter
                      ? "bg-violet-500/10 border border-violet-500/20"
                      : "border border-transparent hover:bg-primary/5"
                  } ${hasSubs ? "cursor-pointer" : "cursor-default"}`}
                >
                  <span
                    className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                      isActiveChapter
                        ? "bg-violet-500/20 text-violet-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {ch.num}
                  </span>

                  <span
                    className={`flex-1 text-sm font-medium leading-tight ${
                      isActiveChapter ? "text-violet-300" : "text-foreground/90"
                    }`}
                  >
                    {ch.title}
                  </span>

                  {hasSubs ? (
                    <ChevronDown
                      className={`h-3.5 w-3.5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isExpanded ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  ) : (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Soon
                    </span>
                  )}
                </button>

                {/* sub-items */}
                {hasSubs && isExpanded && (
                  <div className="ml-4 pl-3 border-l border-border/40 mt-0.5 mb-1 space-y-0.5">
                    {ch.subs!.map((sub) => {
                      const isActiveSub =
                        !!sub.href && pathname.startsWith(sub.href);
                      const inner = (
                        <div
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            isActiveSub
                              ? "bg-violet-500/15 text-violet-300"
                              : sub.href
                              ? "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                              : "text-muted-foreground/60"
                          }`}
                        >
                          <span className="font-mono text-[11px] font-bold w-12 flex-shrink-0 text-violet-400/70">
                            {sub.label}
                          </span>
                          <span className="flex-1 leading-tight text-xs">
                            {sub.title}
                          </span>
                          {sub.href ? (
                            <ChevronRight
                              className={`h-3 w-3 flex-shrink-0 ${
                                isActiveSub
                                  ? "text-violet-400"
                                  : "text-muted-foreground/40"
                              }`}
                            />
                          ) : (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground flex-shrink-0">
                              Soon
                            </span>
                          )}
                        </div>
                      );
                      return sub.href ? (
                        <Link key={sub.label} href={sub.href}>
                          {inner}
                        </Link>
                      ) : (
                        <div key={sub.label}>{inner}</div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* footer */}
        <div className="px-5 py-3 border-t border-border/50">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Tap a chapter with{" "}
            <ChevronDown className="inline h-3 w-3" /> to see its exercises
            and worked examples.
          </p>
        </div>
      </div>
    </motion.aside>
  );
}
