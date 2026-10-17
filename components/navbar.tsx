"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { GameToggle } from "@/components/game-toggle";
import { EASE, useIntroDelay } from "@/components/motion-primitives";
import { useDhakaTime } from "@/lib/use-local-time";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "https://ssc-solutions.vercel.app/", label: "Studies" },
];

const mobileItems: NavItem[] = [{ href: "#hero", label: "Home" }, ...navItems, { href: "#contact", label: "Contact" }];

const sectionIds = ["hero", "skills", "experience", "projects", "services", "contact"];

const socials = [
  { href: "https://github.com/Arif-Ur-Rahman", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:arifurrahman.it.doc@gmail.com", icon: Mail, label: "Email" },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#hero"
      onClick={onClick}
      className="group relative z-10 flex items-center gap-2.5"
      aria-label="Arif Ur Rahman — home"
    >
      <span className="bg-signature relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl font-display text-lg italic text-[#0b0b10] shadow-[0_6px_20px_-6px_hsl(var(--primary)/0.8)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
        ar
      </span>
      <span className="text-lg font-semibold tracking-tight">
        arif<span className="font-display text-xl font-normal italic text-primary">.dev</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const intro = useIntroDelay();
  const time = useDhakaTime();

  const resolveHref = (href: string) => (href.startsWith("#") && !isHome ? `/${href}` : href);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  // Glass on scroll; tuck away while scrolling down, return on scroll up
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 600 && y > prev + 4);
    if (y < prev - 4) setHidden(false);
  });

  // Active section: the one crossing the upper third of the viewport
  useEffect(() => {
    const update = () => {
      const probe = window.innerHeight * 0.35;
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom >= probe;
      });
      if (current) setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Lock body scroll without layout shift; close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const isActive = (href: string) => isHome && href.startsWith("#") && active === href.substring(1);

  return (
    <header>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden && !isOpen ? "-120%" : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: hidden ? 0 : intro ? intro + 0.1 : 0 }}
        // Above the mobile overlay while it's open, so the trigger stays clickable
        className={cn("fixed inset-x-0 top-0", isOpen ? "z-[80]" : "z-50")}
      >
        <div className="container">
          <div
            className={cn(
              "mt-3 flex items-center justify-between rounded-full border py-2 pl-3 pr-2 transition-all duration-500 md:mt-4",
              scrolled && !isOpen
                ? "glass shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)]"
                : "border-transparent bg-transparent"
            )}
          >
            <Logo onClick={() => setIsOpen(false)} />

            {/* Desktop nav — sliding hover pill + active dot */}
            <nav
              aria-label="Primary"
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full p-1 transition-all duration-500 lg:flex",
                scrolled ? "border border-transparent" : "glass"
              )}
            >
              {navItems.map((item) => {
                const activeItem = isActive(item.href);
                const external = isExternal(item.href);
                return (
                  <a
                    key={item.label}
                    href={resolveHref(item.href)}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    onMouseEnter={() => setHovered(item.label)}
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                      activeItem ? "text-foreground" : "text-foreground/65 hover:text-foreground"
                    )}
                  >
                    {hovered === item.label && (
                      <motion.span
                        layoutId="nav-hover"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-foreground/[0.07]"
                      />
                    )}
                    <span className="relative">{item.label}</span>
                    {external && <ArrowUpRight className="relative h-3.5 w-3.5 opacity-60" />}
                    {activeItem && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="bg-signature absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full shadow-[0_0_10px_hsl(var(--primary))]"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right cluster */}
            <div className="relative z-10 flex items-center gap-2">
              <GameToggle />
              <ThemeToggle />
              <a
                href="/Arif_Ur_Rahman.pdf"
                download
                className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground xl:inline-flex"
              >
                <Download className="h-4 w-4" />
                Résumé
              </a>
              <a
                href={resolveHref("#contact")}
                className="btn btn-ink btn-shine group hidden px-5 py-2.5 lg:inline-flex"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>

              {/* Mobile menu trigger — two bars morph into an X */}
              <button
                type="button"
                onClick={() => setIsOpen((o) => !o)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="relative z-[70] flex h-10 items-center gap-2.5 rounded-full bg-foreground pl-4 pr-3.5 text-sm font-semibold text-background lg:hidden"
              >
                <span>{isOpen ? "Close" : "Menu"}</span>
                <span className="relative flex h-3 w-4 flex-col justify-between">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="block h-[1.5px] w-full rounded-full bg-current"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="block h-[1.5px] w-full rounded-full bg-current"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Full-screen mobile menu — circular reveal from the trigger ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "circle(0% at 88% 36px)" }}
            animate={{ clipPath: "circle(150% at 88% 36px)" }}
            exit={{ clipPath: "circle(0% at 88% 36px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background lg:hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute -right-32 -top-32 h-96 w-96"
                style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.25), transparent)" }}
              />
              <div
                className="absolute -bottom-40 -left-32 h-96 w-96"
                style={{ background: "radial-gradient(closest-side, hsl(var(--iris) / 0.22), transparent)" }}
              />
              <div className="bg-grid mask-radial absolute inset-0 opacity-40" />
            </div>

            <nav aria-label="Mobile" className="container relative flex-1 pb-6 pt-28">
              {mobileItems.map((item, i) => {
                const activeItem = isActive(item.href);
                const external = isExternal(item.href);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.25 + i * 0.05 }}
                    className="border-b border-foreground/10"
                  >
                    <a
                      href={resolveHref(item.href)}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-5 py-4"
                    >
                      <span className="index-number w-6">{String(i + 1).padStart(2, "0")}</span>
                      <span
                        className={cn(
                          "text-4xl font-semibold tracking-[-0.04em] transition-colors sm:text-5xl",
                          activeItem ? "text-gradient" : "text-foreground/85 group-hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "ml-auto h-6 w-6 transition-all duration-300 group-hover:rotate-45",
                          activeItem ? "text-primary" : "text-muted-foreground/60"
                        )}
                      />
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.6 }}
              className="container relative space-y-5 pb-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {socials.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      onClick={() => setIsOpen(false)}
                      className="icon-btn"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <span className="font-mono text-xs tabular-nums text-muted-foreground" suppressHydrationWarning>
                  {time ?? "--:--"} · Dhaka
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/Arif_Ur_Rahman.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost w-full"
                >
                  <Download className="h-4 w-4" />
                  Résumé
                </a>
                <a
                  href={resolveHref("#contact")}
                  onClick={() => setIsOpen(false)}
                  className="btn btn-gradient w-full"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
