"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Download,
  ChevronDown,
  ArrowUpRight,
  Wrench,
  Briefcase,
  FolderGit2,
  Sparkles,
  GraduationCap,
  School,
  Calculator,
  BookOpen,
  BookText,
  FileCheck,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type NavItem = { href: string; label: string; desc?: string; icon?: LucideIcon };
type Featured = { href: string; title: string; subtitle: string; gradient: string };
type NavGroup = {
  label: string;
  href?: string;
  items?: NavItem[];
  featured?: Featured[];
};

const navGroups: NavGroup[] = [
  { label: "Home", href: "#hero" },
  {
    label: "About",
    items: [
      { href: "#skills", label: "Skills", desc: "Tools & technologies I work with", icon: Wrench },
      { href: "#experience", label: "Experience", desc: "My professional journey", icon: Briefcase },
    ],
    featured: [
      {
        href: "/Arif_Ur_Rahman.pdf",
        title: "Résumé",
        subtitle: "Download my CV",
        gradient: "from-blue-500 via-indigo-500 to-orange-400",
      },
    ],
  },
  {
    label: "Work",
    items: [
      { href: "#projects", label: "Projects", desc: "Things I've designed and built", icon: FolderGit2 },
      { href: "#services", label: "Services", desc: "How I can help you", icon: Sparkles },
    ],
    featured: [
      {
        href: "#projects",
        title: "Featured Work",
        subtitle: "See my latest builds",
        gradient: "from-orange-400 via-orange-500 to-blue-500",
      },
    ],
  },
  {
    label: "Tuitions",
    items: [
      { href: "/tuitions/ssc", label: "SSC", desc: "Secondary School Certificate", icon: GraduationCap },
      { href: "/tuitions/hsc", label: "HSC", desc: "Higher Secondary Certificate", icon: GraduationCap },
      { href: "/tuitions/university", label: "University", desc: "University-level coaching", icon: School },
      { href: "/tuitions/ssc-higher-math", label: "Higher Math", desc: "SSC higher mathematics", icon: Calculator },
      { href: "/tuitions/ssc-english", label: "English", desc: "Writing & grammar", icon: BookOpen },
      { href: "/tuitions/ssc-bangla", label: "Bangla", desc: "Bangla 1st & 2nd paper", icon: BookText },
      { href: "/tuitions/model-test", label: "Model Test", desc: "Practice & mock exams", icon: FileCheck },
    ],
    featured: [
      {
        href: "/tuitions",
        title: "All Courses",
        subtitle: "Browse every program",
        gradient: "from-blue-500 via-indigo-500 to-orange-400",
      },
      {
        href: "/tuitions/model-test",
        title: "Model Tests",
        subtitle: "Free practice exams",
        gradient: "from-orange-500 via-amber-500 to-orange-400",
      },
    ],
  },
];

// All in-page hash sections used for active-section detection
const hashSections = navGroups
  .flatMap((g) => (g.items ? g.items : [g as NavItem]))
  .map((x) => x.href)
  .filter((h) => h.startsWith("#"))
  .map((h) => h.substring(1));

const socials = [
  { href: "https://github.com/Arif-Ur-Rahman", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:arifurrahman.it.doc@gmail.com", icon: Mail, label: "Email" },
];

// Warm Sarvam-style gradient pill
const PILL_BG =
  "linear-gradient(165deg, hsl(33 100% 96%) 0%, hsl(28 100% 89%) 52%, hsl(24 96% 80%) 100%)";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = hashSections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll without layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Hover intent for desktop dropdowns
  const handleGroupEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };
  const handleGroupLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
  };

  const isGroupActive = (group: NavGroup) => {
    if (group.href) {
      return isHome && activeSection === group.href.substring(1);
    }
    return (group.items ?? []).some((item) =>
      item.href.startsWith("#")
        ? isHome && activeSection === item.href.substring(1)
        : pathname.startsWith(item.href)
    );
  };

  const activeGroup = navGroups.find((g) => g.label === openGroup && g.items);

  return (
    <header>
      {/* ── Floating pill top bar ── */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-3 sm:py-4"
        )}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div
            className={cn(
              "relative flex items-center justify-between rounded-full border border-white/60 px-4 sm:px-6 py-2.5 transition-all duration-300",
              scrolled
                ? "shadow-[0_8px_30px_-8px_hsl(24_95%_50%/0.5)]"
                : "shadow-[0_12px_45px_-12px_hsl(24_95%_50%/0.45)]"
            )}
            style={{ background: PILL_BG }}
          >
            {/* Brand */}
            <a
              href="#hero"
              className="text-2xl font-extrabold tracking-tight text-[hsl(222_38%_13%)] z-50 relative lowercase"
            >
              arif<span className="text-[hsl(24_95%_45%)]">.dev</span>
            </a>

            {/* Desktop nav — centered */}
            <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
              {navGroups.map((group) => {
                const active = isGroupActive(group);
                const open = openGroup === group.label;

                // Simple link group (no dropdown)
                if (group.href) {
                  return (
                    <Link
                      key={group.label}
                      href={resolveHref(group.href)}
                      onMouseEnter={handleGroupLeave}
                      className={cn(
                        "text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                        active
                          ? "text-[hsl(24_95%_40%)]"
                          : "text-[hsl(222_47%_10%)] hover:text-[hsl(24_95%_40%)]"
                      )}
                    >
                      {group.label}
                    </Link>
                  );
                }

                // Dropdown trigger — opens shared mega-panel below
                return (
                  <button
                    key={group.label}
                    type="button"
                    aria-expanded={open}
                    onMouseEnter={() => handleGroupEnter(group.label)}
                    onMouseLeave={handleGroupLeave}
                    className={cn(
                      "flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                      active || open
                        ? "text-[hsl(24_95%_40%)]"
                        : "text-[hsl(222_47%_10%)] hover:text-[hsl(24_95%_40%)]"
                    )}
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        open ? "rotate-180" : ""
                      )}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Shared mega-panel */}
            <AnimatePresence>
              {activeGroup && (
                <motion.div
                  key={activeGroup.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onMouseEnter={() => handleGroupEnter(activeGroup.label)}
                  onMouseLeave={handleGroupLeave}
                  className="hidden md:block absolute left-0 right-0 top-full pt-3 z-40"
                >
                  <div className="flex items-stretch justify-between gap-8 rounded-3xl border border-[hsl(28_60%_88%)] bg-[hsl(40_60%_99%)] shadow-2xl shadow-[hsl(24_95%_50%/0.22)] p-5 w-full">
                    {/* Left — item links */}
                    <div
                      className={cn(
                        "grid gap-1 content-start",
                        (activeGroup.items?.length ?? 0) > 4 ? "grid-cols-2" : "grid-cols-1"
                      )}
                    >
                      {activeGroup.items!.map((item) => {
                        const Icon = item.icon;
                        const itemActive = item.href.startsWith("#")
                          ? isHome && activeSection === item.href.substring(1)
                          : pathname.startsWith(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={resolveHref(item.href)}
                            onClick={() => setOpenGroup(null)}
                            className={cn(
                              "group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors min-w-[220px] hover:bg-[hsl(28_100%_95%)]",
                              itemActive ? "bg-[hsl(28_100%_95%)]" : ""
                            )}
                          >
                            {Icon && (
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[hsl(28_55%_85%)] bg-white text-[hsl(24_95%_45%)] transition-colors group-hover:border-[hsl(24_90%_60%)]">
                                <Icon className="h-[18px] w-[18px]" />
                              </span>
                            )}
                            <span className="min-w-0">
                              <span
                                className={cn(
                                  "block text-sm font-semibold",
                                  itemActive ? "text-[hsl(24_95%_42%)]" : "text-[hsl(222_38%_14%)]"
                                )}
                              >
                                {item.label}
                              </span>
                              {item.desc && (
                                <span className="block text-xs text-[hsl(222_15%_45%)] mt-0.5">
                                  {item.desc}
                                </span>
                              )}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right — featured cards */}
                    {activeGroup.featured && activeGroup.featured.length > 0 && (
                      <div className="flex gap-3 border-l border-[hsl(28_50%_90%)] pl-6">
                        {activeGroup.featured.map((f) => (
                          <Link
                            key={f.href + f.title}
                            href={resolveHref(f.href)}
                            download={f.href.endsWith(".pdf") || undefined}
                            onClick={() => setOpenGroup(null)}
                            className="group relative flex h-[132px] w-[200px] flex-col justify-end overflow-hidden rounded-2xl p-4 text-white"
                          >
                            <span
                              className={cn(
                                "absolute inset-0 bg-gradient-to-br transition-transform duration-300 group-hover:scale-105",
                                f.gradient
                              )}
                            />
                            <ArrowUpRight className="absolute top-3 right-3 h-4 w-4 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            <span className="relative z-10">
                              <span className="block font-display text-lg font-semibold leading-tight">
                                {f.title}
                              </span>
                              <span className="block text-xs text-white/85 mt-0.5">
                                {f.subtitle}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-2.5">
              <ThemeToggle />
              {/* Resume — dark filled pill */}
              <Link
                href="/Arif_Ur_Rahman.pdf"
                download
                className="rounded-full bg-[hsl(222_45%_15%)] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[hsl(222_45%_22%)] transition-colors"
              >
                Resume
              </Link>
              {/* Contact — light pill */}
              <Link
                href={resolveHref("#contact")}
                className="rounded-full bg-[hsl(40_60%_98%)] border border-[hsl(28_55%_82%)] px-5 py-2 text-sm font-semibold text-[hsl(222_40%_15%)] hover:border-[hsl(24_90%_55%)] hover:text-[hsl(24_95%_42%)] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile right */}
            <div className="flex md:hidden items-center gap-2 z-50 relative">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
                className="flex items-center gap-1.5 rounded-full bg-[hsl(222_45%_15%)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[hsl(222_45%_22%)]"
              >
                <Menu size={17} />
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col bg-background/95 backdrop-blur-xl"
          >
            {/* Warm background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-400/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-300/20 rounded-full blur-[100px]" />
            </div>

            {/* Header row */}
            <div className="relative flex items-center justify-between px-6 pt-5 pb-4 border-b border-border/40">
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-extrabold tracking-tight lowercase"
              >
                arif<span className="text-[hsl(24_95%_50%)]">.dev</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border bg-secondary/60 hover:bg-secondary transition-all duration-200 text-sm font-medium"
              >
                <X size={18} />
                <span>Close</span>
              </button>
            </div>

            {/* Nav groups — accordion */}
            <div className="relative flex-1 overflow-y-auto px-6 py-6">
              <nav className="space-y-1">
                {navGroups.map((group, i) => {
                  // Simple link group
                  if (group.href) {
                    const active = isHome && activeSection === group.href.substring(1);
                    return (
                      <motion.div
                        key={group.label}
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                      >
                        <Link
                          href={resolveHref(group.href)}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center py-4 border-b border-border/30 text-2xl font-bold tracking-tight uppercase transition-colors",
                            active ? "text-[hsl(24_95%_48%)]" : "text-foreground/80 hover:text-foreground"
                          )}
                        >
                          {group.label}
                        </Link>
                      </motion.div>
                    );
                  }

                  // Accordion group
                  const expanded = openMobileGroup === group.label;
                  return (
                    <motion.div
                      key={group.label}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                      className="border-b border-border/30"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileGroup(expanded ? null : group.label)
                        }
                        className={cn(
                          "flex items-center justify-between w-full py-4 text-2xl font-bold tracking-tight uppercase transition-colors",
                          isGroupActive(group) ? "text-[hsl(24_95%_48%)]" : "text-foreground/80"
                        )}
                      >
                        {group.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            expanded ? "rotate-180 text-[hsl(24_95%_48%)]" : "text-muted-foreground"
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-1 space-y-0.5">
                              {group.items!.map((item) => {
                                const itemActive = item.href.startsWith("#")
                                  ? isHome && activeSection === item.href.substring(1)
                                  : pathname.startsWith(item.href);
                                return (
                                  <Link
                                    key={item.href}
                                    href={resolveHref(item.href)}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                      "block py-2.5 text-base font-medium transition-colors",
                                      itemActive
                                        ? "text-[hsl(24_95%_48%)]"
                                        : "text-foreground/60 hover:text-foreground"
                                    )}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.45 }}
              className="relative px-8 pb-10 pt-6 border-t border-border/40 space-y-5"
            >
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 hover:bg-[hsl(24_95%_50%)] hover:text-white border border-border hover:border-[hsl(24_95%_50%)] transition-all duration-200 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/Arif_Ur_Rahman.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[hsl(222_45%_15%)] text-white font-semibold shadow-lg transition-all duration-200 hover:bg-[hsl(222_45%_22%)]"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </Link>
                <Link
                  href={resolveHref("#contact")}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-[hsl(28_55%_75%)] bg-[hsl(40_60%_98%)] text-[hsl(222_40%_15%)] font-semibold transition-all duration-200 hover:border-[hsl(24_90%_55%)] hover:text-[hsl(24_95%_42%)]"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
