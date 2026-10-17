"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import { EASE, Magnetic, VIEWPORT } from "@/components/motion-primitives";
import { useDhakaTime } from "@/lib/use-local-time";

const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/Arif-Ur-Rahman", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:arifurrahman.it.doc@gmail.com", icon: Mail, label: "Email" },
];

const WORDMARK = "Arif Ur Rahman";

export default function Footer() {
  const year = new Date().getFullYear();
  const time = useDhakaTime();

  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 pt-16 md:pt-24">
      {/* Glow pooling under the wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[30%] left-1/2 h-[60%] w-[90%] -translate-x-1/2"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.16), transparent)" }}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="eyebrow">What&apos;s next?</span>
            <p className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
              Let&apos;s make something <span className="accent-word">remarkable.</span>
            </p>
            <Magnetic className="mt-8">
              <a href="#contact" className="btn btn-gradient btn-shine group">
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </Magnetic>
          </motion.div>

          {/* Navigate */}
          <motion.nav
            aria-label="Footer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <span className="eyebrow">Navigate</span>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="bg-signature mr-0 h-px w-0 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <span className="eyebrow">Connect</span>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="icon-btn"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <span className="eyebrow">Local time</span>
              <p className="mt-3 font-mono text-lg tabular-nums" suppressHydrationWarning>
                {time ?? "--:--:-- --"} <span className="text-sm text-muted-foreground">Dhaka</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Giant wordmark — letters rise in, lift on hover */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          aria-label={WORDMARK}
          className="mt-20 select-none overflow-hidden whitespace-nowrap text-center text-[clamp(2.5rem,13.6vw,12.5rem)] font-semibold leading-[0.85] tracking-[-0.06em] md:mt-28"
        >
          {WORDMARK.split("").map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="inline-block"
              variants={{
                hidden: { y: "105%" },
                visible: { y: "0%", transition: { duration: 1, ease: EASE, delay: i * 0.035 } },
              }}
            >
              <span className="inline-block bg-gradient-to-b from-foreground via-foreground/70 to-foreground/[0.04] bg-clip-text pb-[0.08em] text-transparent transition-transform duration-500 ease-out hover:-translate-y-[0.08em]">
                {ch === " " ? " " : ch}
              </span>
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-7 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} <span className="font-medium text-foreground/80">Arif Ur Rahman</span>. All rights
            reserved.
          </p>
          <p className="text-center">
            Designed &amp; built with Next.js, Tailwind CSS &amp; a little{" "}
            <span className="font-display text-sm italic text-primary">stardust</span>.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-2 font-medium transition-colors hover:text-foreground"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/60">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
