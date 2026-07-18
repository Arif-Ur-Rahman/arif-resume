"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { EASE, DrawRule } from "@/components/motion-primitives";

const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/Arif-Ur-Rahman", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:arifurrahman.it.doc@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 pb-8 pt-14">
        {/* Big serif wordmark */}
        <div className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <a
              href="#hero"
              className="font-display text-5xl font-semibold lowercase tracking-tight text-foreground sm:text-6xl"
            >
              arif<span className="italic text-primary">.dev</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Frontend Software Engineer — Dhaka, Bangladesh
            </p>
          </motion.div>

          {/* Social icons — springy pops */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ href, icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nav links — staggered fade */}
        <nav className="mb-10 flex flex-wrap items-center gap-x-7 gap-y-3">
          {footerLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.15 + i * 0.06 }}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <DrawRule delay={0.2} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-muted-foreground sm:flex-row"
        >
          <p>
            &copy; {year}{" "}
            <span className="font-medium text-foreground/70">Arif Ur Rahman</span>. All
            rights reserved.
          </p>
          <p>
            Designed &amp; built with Next.js, Tailwind CSS &amp; a little{" "}
            <span className="font-display italic text-primary">amber</span>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
