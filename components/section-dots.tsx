"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const found = sections.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      if (found) setActive(found.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3.5">
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-label={label} className="group relative flex items-center justify-end">
          <span className="absolute right-5 px-2.5 py-1 rounded-md text-xs font-medium bg-card border border-border text-foreground whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
            {label}
          </span>
          <motion.div
            animate={
              active === id
                ? { scale: 1, width: 8, height: 20, borderRadius: 4, opacity: 1 }
                : { scale: 1, width: 6, height: 6, borderRadius: 9999, opacity: 0.35 }
            }
            transition={{ duration: 0.25 }}
            className={cn(active === id ? "bg-primary" : "bg-muted-foreground")}
          />
        </a>
      ))}
    </div>
  );
}
