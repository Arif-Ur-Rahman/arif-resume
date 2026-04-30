"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, ArrowLeft, Search, X, FileText, Phone, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import { essays, essayContent, CATEGORIES } from "./data";

export default function BanglaEssayIndexPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return essays.filter((e) => {
      const matchSearch =
        !q ||
        e.title.includes(query.trim()) ||
        e.titleEn.toLowerCase().includes(q) ||
        e.category.includes(query.trim());
      const matchCat = !activeCategory || e.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [query, activeCategory]);

  const counts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return Object.fromEntries(
      CATEGORIES.map((c) => [
        c.label,
        essays.filter(
          (e) =>
            e.category === c.label &&
            (!q ||
              e.title.includes(query.trim()) ||
              e.titleEn.toLowerCase().includes(q))
        ).length,
      ])
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              href="/tuitions/ssc-bangla"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SSC Bangla
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Languages className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                  SSC · বাংলা · রচনা
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  রচনা <span className="gradient-text">সূচিপত্র</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-8">
              SSC বোর্ড পরীক্ষার জন্য গুরুত্বপূর্ণ রচনার সম্পূর্ণ তালিকা।
              যেকোনো রচনায় ক্লিক করুন এবং পড়া শুরু করুন।
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{essays.length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">মোট রচনা</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{CATEGORIES.length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">বিভাগ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{Object.keys(essayContent).length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">রচনা প্রস্তুত</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28 space-y-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="রচনা খুঁজুন... (বাংলা বা English)"
              className="w-full h-13 pl-12 pr-12 py-3.5 rounded-xl bg-card border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/15 outline-none text-base transition-all duration-200 placeholder:text-muted-foreground/60"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
              activeCategory === null
                ? "bg-primary/15 border-primary/30 text-primary"
                : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            সব রচনা
            <span className="text-[10px] opacity-70">({essays.length})</span>
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.label;
            const count = counts[cat.label] ?? 0;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(isActive ? null : cat.label)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  isActive
                    ? `${cat.color.bg} ${cat.color.border} ${cat.color.text}`
                    : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat.label}
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
        </motion.div>

        {/* Results count */}
        <AnimatePresence mode="wait">
          {(query || activeCategory) ? (
            <motion.p
              key="count"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-sm text-muted-foreground"
            >
              {filtered.length === 0
                ? "কোনো রচনা পাওয়া যায়নি"
                : `${filtered.length}টি রচনা পাওয়া গেছে`}
            </motion.p>
          ) : null}
        </AnimatePresence>

        {/* Essay grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                &ldquo;{query}&rdquo; — এই নামে কোনো রচনা পাওয়া যায়নি
              </p>
              <button
                onClick={() => { setQuery(""); setActiveCategory(null); }}
                className="mt-4 text-xs text-primary hover:underline"
              >
                সব রচনা দেখুন
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((essay, i) => {
                const hasContent = essay.id in essayContent;
                return (
                  <motion.div
                    key={essay.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                  >
                    <Link
                      href={`/tuitions/ssc-bangla/essay-writing/${essay.id}`}
                      className="gradient-border bg-card rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300 group block h-full"
                    >
                      <span
                        className={`self-start inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border ${essay.color.bg} ${essay.color.border} ${essay.color.text}`}
                      >
                        {essay.category}
                      </span>
                      <div className="flex items-start justify-between gap-2 flex-1">
                        <div>
                          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-200">
                            {essay.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {essay.titleEn}
                          </p>
                        </div>
                        <ChevronRight className={`h-4 w-4 flex-shrink-0 mt-1 transition-colors ${hasContent ? "text-primary" : "text-muted-foreground/40"} group-hover:text-primary`} />
                      </div>
                      {hasContent && (
                        <span className="self-start text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          প্রস্তুত ✓
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-emerald-500/10 p-10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">রচনা লেখার দক্ষতা বাড়াতে চান?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              এক-এক করে প্রতিটি রচনা অনুশীলন করুন — আপনার বাড়িতে ব্যক্তিগত সেশনে।
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
    </main>
  );
}
