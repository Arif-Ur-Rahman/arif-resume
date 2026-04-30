"use client";

import { motion } from "framer-motion";
import { Languages, ArrowLeft, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { essays, essayContent } from "../data";

export default function EssayClient({ slug }: { slug: string }) {
  const essay = essays.find((e) => e.id === slug);
  const sections = essayContent[slug];

  if (!essay) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">রচনা পাওয়া যায়নি।</p>
          <Link
            href="/tuitions/ssc-bangla/essay-writing"
            className="text-primary hover:underline text-sm"
          >
            ← সব রচনা দেখুন
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              href="/tuitions/ssc-bangla/essay-writing"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Essays
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${essay.color.bg} border ${essay.color.border} ${essay.color.text}`}>
                <Languages className="h-7 w-7" />
              </div>
              <div>
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${essay.color.bg} ${essay.color.text} border ${essay.color.border} mb-2`}>
                  SSC · বাংলা · রচনা
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  <span className="gradient-text">{essay.title}</span>
                </h1>
                <p className="text-sm text-muted-foreground mt-1">{essay.titleEn}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28 max-w-3xl space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {sections ? (
          sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="gradient-border bg-card rounded-2xl px-7 py-6"
            >
              <h2 className="text-base font-bold text-blue-400 mb-3">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {section.content}
              </p>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="gradient-border bg-card rounded-2xl px-7 py-16 text-center"
          >
            <Clock className="h-10 w-10 text-muted-foreground/40 mx-auto mb-4" />
            <h2 className="text-lg font-bold mb-2">শীঘ্রই আসছে</h2>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              এই রচনাটি এখনো প্রস্তুত হয়নি। টিউশন সেশনে এটি বিস্তারিত শেখানো হবে।
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-emerald-500/10 p-10 text-center mt-4"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">রচনা লেখার দক্ষতা বাড়াতে চান?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              ব্যক্তিগত সেশনে প্রতিটি রচনা অনুশীলন করুন — আপনার বাড়িতে।
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
