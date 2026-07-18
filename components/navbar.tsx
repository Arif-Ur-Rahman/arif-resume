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
type Featured = { href: string; title: string; subtitle: string };
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
              "relative flex items-center justify-between rounded-full border border-border bg-card/85 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-6",
              scrolled
                ? "shadow-[0_10px_35px_-12px_hsl(24_30%_10%/0.28)]"
                : "shadow-[0_6px_25px_-14px_hsl(24_30%_10%/0.18)]"
            )}
          >
            {/* Brand */}
            <a
              href="#hero"
              className="font-display relative z-50 text-2xl font-semibold lowercase tracking-tight text-foreground"
            >
              arif<span className="italic text-primary">.dev</span>
            </a>

            {/* Desktop nav — centered */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
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
                        "nav-link text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors",
                        active ? "active text-primary" : "text-foreground/75 hover:text-primary"
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
                      "flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      active || open ? "text-primary" : "text-foreground/75 hover:text-primary"
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
                  initial={{ opacity: 0, y: 12, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.985 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  onMouseEnter={() => handleGroupEnter(activeGroup.label)}
                  onMouseLeave={handleGroupLeave}
                  className="absolute left-0 right-0 top-full z-40 hidden pt-3 md:block"
                >
                  <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-popover p-6 shadow-2xl shadow-black/15">
                    {/* Ambient corner washes */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-amber-500/10 blur-[70px]" />

                    {/* Panel header — eyebrow + star */}
                    <div className="relative mb-4 flex items-center justify-between">
                      <span className="eyebrow text-[11px]">{activeGroup.label}</span>
                      <motion.span
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
                        className="font-display italic text-primary"
                      >
                        ✦
                      </motion.span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                      className="rule mb-5 origin-left"
                    />

                    <div className="relative flex items-stretch justify-between gap-8">
                      {/* Left — numbered editorial link rows */}
                      <div
                        className={cn(
                          "grid flex-1 content-start gap-1.5",
                          (activeGroup.items?.length ?? 0) > 4 ? "grid-cols-2" : "grid-cols-1"
                        )}
                      >
                        {activeGroup.items!.map((item, i) => {
                          const Icon = item.icon;
                          const itemActive = item.href.startsWith("#")
                            ? isHome && activeSection === item.href.substring(1)
                            : pathname.startsWith(item.href);
                          return (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -14 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 + i * 0.07 }}
                            >
                              <Link
                                href={resolveHref(item.href)}
                                onClick={() => setOpenGroup(null)}
                                className={cn(
                                  "group/item flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-all duration-200 hover:border-border hover:bg-secondary/70",
                                  itemActive
                                    ? "border-border bg-secondary/70"
                                    : "border-transparent"
                                )}
                              >
                                <span className="index-number w-6 shrink-0 opacity-70 transition-opacity group-hover/item:opacity-100">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                {Icon && (
                                  <span
                                    className={cn(
                                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-card text-primary transition-all duration-200 group-hover/item:border-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground",
                                      itemActive ? "border-primary" : "border-border"
                                    )}
                                  >
                                    <Icon className="h-[18px] w-[18px]" />
                                  </span>
                                )}
                                <span className="min-w-0 flex-1">
                                  <span
                                    className={cn(
                                      "font-display block text-lg font-medium leading-tight",
                                      itemActive ? "text-primary" : "text-foreground"
                                    )}
                                  >
                                    {item.label}
                                  </span>
                                  {item.desc && (
                                    <span className="mt-1 block text-xs text-muted-foreground">
                                      {item.desc}
                                    </span>
                                  )}
                                </span>
                                <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Right — featured cards, inverted ink blocks */}
                      {activeGroup.featured && activeGroup.featured.length > 0 && (
                        <div className="flex gap-3 border-l border-border pl-6">
                          {activeGroup.featured.map((f, i) => (
                            <motion.div
                              key={f.href + f.title}
                              initial={{ opacity: 0, y: 16 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, ease: "easeOut", delay: 0.16 + i * 0.08 }}
                            >
                              <Link
                                href={resolveHref(f.href)}
                                download={f.href.endsWith(".pdf") || undefined}
                                onClick={() => setOpenGroup(null)}
                                className="group/feat relative flex h-[172px] w-[224px] flex-col justify-between overflow-hidden rounded-2xl bg-foreground p-5 text-background transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                              >
                                {/* Decorative oversized serif star */}
                                <span className="font-display pointer-events-none absolute -bottom-8 -right-3 text-[7rem] italic leading-none text-background/10 transition-transform duration-500 group-hover/feat:rotate-12">
                                  ✦
                                </span>
                                <span className="relative z-10 flex items-center justify-between">
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
                                    Featured
                                  </span>
                                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/25 transition-transform duration-300 group-hover/feat:rotate-45">
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                  </span>
                                </span>
                                <span className="relative z-10">
                                  <span className="font-display block text-xl font-semibold italic leading-tight">
                                    {f.title}
                                  </span>
                                  <span className="mt-1 block text-xs opacity-75">
                                    {f.subtitle}
                                  </span>
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop right */}
            <div className="hidden items-center gap-2.5 md:flex">
              <ThemeToggle />
              <Link
                href="/Arif_Ur_Rahman.pdf"
                download
                className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Resume
              </Link>
              <Link
                href={resolveHref("#contact")}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Contact
              </Link>
            </div>

            {/* Mobile right */}
            <div className="relative z-50 flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
                className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
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
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            {/* Warm background decorations */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />
            </div>

            {/* Header row */}
            <div className="relative flex items-center justify-between border-b border-border/60 px-6 pb-4 pt-5">
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl font-semibold lowercase tracking-tight"
              >
                arif<span className="italic text-primary">.dev</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium transition-all duration-200 hover:border-primary hover:text-primary"
              >
                <X size={18} />
                <span>Close</span>
              </button>
            </div>

            {/* Nav groups — editorial accordion */}
            <div className="relative flex-1 overflow-y-auto px-6 py-6">
              {/* Menu eyebrow + rule */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-3 flex items-center justify-between"
              >
                <span className="eyebrow text-[11px]">Menu</span>
                <span className="font-display italic text-primary">✦</span>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="rule origin-left"
              />

              <nav>
                {navGroups.map((group, i) => {
                  const index = String(i + 1).padStart(2, "0");

                  // Simple link group
                  if (group.href) {
                    const active = isHome && activeSection === group.href.substring(1);
                    return (
                      <motion.div
                        key={group.label}
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.12 + i * 0.06 }}
                      >
                        <Link
                          href={resolveHref(group.href)}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-5 border-b border-border/50 py-5"
                        >
                          <span className="index-number">{index}</span>
                          <span
                            className={cn(
                              "font-display text-3xl font-medium tracking-tight transition-colors",
                              active ? "italic text-primary" : "text-foreground/80"
                            )}
                          >
                            {group.label}
                          </span>
                          <ArrowUpRight
                            className={cn(
                              "ml-auto h-5 w-5 transition-colors",
                              active ? "text-primary" : "text-muted-foreground/50"
                            )}
                          />
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
                      transition={{ duration: 0.3, delay: 0.12 + i * 0.06 }}
                      className="border-b border-border/50"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileGroup(expanded ? null : group.label)
                        }
                        className="flex w-full items-center gap-5 py-5"
                      >
                        <span className="index-number">{index}</span>
                        <span
                          className={cn(
                            "font-display text-3xl font-medium tracking-tight transition-colors",
                            isGroupActive(group) || expanded
                              ? "italic text-primary"
                              : "text-foreground/80"
                          )}
                        >
                          {group.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "ml-auto h-5 w-5 transition-transform duration-300",
                            expanded ? "rotate-180 text-primary" : "text-muted-foreground"
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 pb-5">
                              {/* Sub-item cards — same rows as the desktop mega-menu */}
                              {group.items!.map((item, j) => {
                                const Icon = item.icon;
                                const itemActive = item.href.startsWith("#")
                                  ? isHome && activeSection === item.href.substring(1)
                                  : pathname.startsWith(item.href);
                                return (
                                  <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 + j * 0.06 }}
                                  >
                                    <Link
                                      href={resolveHref(item.href)}
                                      onClick={() => setIsOpen(false)}
                                      className={cn(
                                        "flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-colors",
                                        itemActive
                                          ? "border-border bg-secondary/70"
                                          : "border-border/60 bg-card/60"
                                      )}
                                    >
                                      {Icon && (
                                        <span
                                          className={cn(
                                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-card text-primary",
                                            itemActive ? "border-primary" : "border-border"
                                          )}
                                        >
                                          <Icon className="h-[18px] w-[18px]" />
                                        </span>
                                      )}
                                      <span className="min-w-0 flex-1">
                                        <span
                                          className={cn(
                                            "font-display block text-lg font-medium leading-tight",
                                            itemActive ? "text-primary" : "text-foreground"
                                          )}
                                        >
                                          {item.label}
                                        </span>
                                        {item.desc && (
                                          <span className="mt-0.5 block text-xs text-muted-foreground">
                                            {item.desc}
                                          </span>
                                        )}
                                      </span>
                                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/70" />
                                    </Link>
                                  </motion.div>
                                );
                              })}

                              {/* Featured card — inverted ink block */}
                              {group.featured?.map((f) => (
                                <motion.div
                                  key={f.href + f.title}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.16 }}
                                >
                                  <Link
                                    href={resolveHref(f.href)}
                                    download={f.href.endsWith(".pdf") || undefined}
                                    onClick={() => setIsOpen(false)}
                                    className="relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-foreground p-5 text-background"
                                  >
                                    <span className="font-display pointer-events-none absolute -bottom-9 -right-2 text-[6rem] italic leading-none text-background/10">
                                      ✦
                                    </span>
                                    <span className="relative z-10 min-w-0">
                                      <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
                                        Featured
                                      </span>
                                      <span className="font-display mt-1 block text-xl font-semibold italic leading-tight">
                                        {f.title}
                                      </span>
                                      <span className="mt-0.5 block text-xs opacity-75">
                                        {f.subtitle}
                                      </span>
                                    </span>
                                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background/25">
                                      <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
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
              className="relative space-y-5 border-t border-border/60 px-8 pb-10 pt-6"
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
                    className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
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
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 font-semibold text-background transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </Link>
                <Link
                  href={resolveHref("#contact")}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card py-3.5 font-semibold transition-all duration-200 hover:border-primary hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
