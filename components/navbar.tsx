"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { Linkedin, Mail } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#hero", label: "Home", number: "01" },
  { href: "#experience", label: "Experience", number: "02" },
  { href: "#skills", label: "Skills", number: "03" },
  { href: "#projects", label: "Projects", number: "04" },
  { href: "#services", label: "Services", number: "05" },
  { href: "/tuitions", label: "Tuitions", number: "06" },
  { href: "#contact", label: "Contact", number: "07" },
];

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.substring(1));
      const current = sections.find((section) => {
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

  return (
    <header>
      {/* ── Top bar ── */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/10 py-3"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <a href="#hero" className="text-xl font-bold tracking-tight group z-50 relative">
              <span className="gradient-text">Arif</span>
              <span className="text-foreground/60 group-hover:text-foreground transition-colors duration-200">.dev</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  className={cn(
                    "nav-link px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5",
                    isHome && activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground",
                    !isHome && pathname.startsWith(link.href) && !link.href.startsWith("#") ? "text-primary" : ""
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 rounded-full px-5"
              >
                <Link href="/Arif_Ur_Rahman.pdf" download>Resume</Link>
              </Button>
            </div>

            {/* Mobile right */}
            <div className="flex md:hidden items-center gap-2 z-50 relative">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-secondary/60 hover:bg-secondary hover:border-primary/40 transition-all duration-200 text-sm font-medium"
              >
                <Menu size={18} />
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
            className="fixed inset-0 z-[60] md:hidden flex flex-col"
            style={{ background: "hsl(224 71% 4% / 0.97)" }}
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-500/8 rounded-full blur-[100px]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:36px_36px]" />
            </div>

            {/* Header row */}
            <div className="relative flex items-center justify-between px-6 pt-5 pb-4 border-b border-border/30">
              <a href="#hero" onClick={() => setIsOpen(false)} className="text-xl font-bold">
                <span className="gradient-text">Arif</span>
                <span className="text-foreground/60">.dev</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-secondary/60 hover:bg-secondary transition-all duration-200 text-sm font-medium"
              >
                <X size={18} />
                <span>Close</span>
              </button>
            </div>

            {/* Nav links — centered, full height */}
            <div className="relative flex-1 flex flex-col justify-center px-8">
              <nav className="space-y-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      href={resolveHref(link.href)}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center gap-4 py-4 border-b border-border/20 transition-all duration-200",
                        (isHome && activeSection === link.href.substring(1)) ||
                        (!isHome && !link.href.startsWith("#") && pathname.startsWith(link.href))
                          ? "text-primary"
                          : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      <span className="text-xs font-mono text-primary/40 group-hover:text-primary/70 transition-colors w-6">
                        {link.number}
                      </span>
                      <span className="text-3xl font-bold tracking-tight">{link.label}</span>
                      {isHome && activeSection === link.href.substring(1) && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.45 }}
              className="relative px-8 pb-10 pt-6 border-t border-border/30 space-y-5"
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
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/60 hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary transition-all duration-200 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                ))}
              </div>

              {/* Resume button */}
              <Link
                href="/Arif_Ur_Rahman.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
