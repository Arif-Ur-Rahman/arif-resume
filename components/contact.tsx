"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, ArrowUpRight } from "lucide-react";
import { FaGithub as Github, FaFacebook as FacebookIcon } from "react-icons/fa";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { EASE, Reveal } from "@/components/motion-primitives";

const contactInfo = [
  {
    icon: <Phone className="h-4 w-4" />,
    title: "Phone",
    value: "+880 168 072 8065",
    link: "tel:+8801680728065",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    title: "Location",
    value: "Dhaka, Bangladesh",
    link: null,
  },
  {
    icon: <Clock className="h-4 w-4" />,
    title: "Availability",
    value: "Mon – Fri, 9 AM – 6 PM BST",
    link: null,
  },
];

const socialLinks = [
  {
    href: "https://github.com/Arif-Ur-Rahman",
    label: "GitHub",
    icon: <Github className="h-4 w-4" />,
  },
  {
    href: "https://www.linkedin.com/in/arif-ur-rahman-swe/",
    label: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    href: "https://www.facebook.com/absent.arif.5",
    label: "Facebook",
    icon: <FacebookIcon className="h-4 w-4" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient wash */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title={
            <>
              Have an idea?
              <br />
              Let&apos;s <span className="accent-word">build it</span> together.
            </>
          }
          description="I'd love to hear from you — reach out via email, phone, or any of my social channels."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* ── Left: giant email + socials ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            >
              Say hello
            </motion.p>
            <Reveal delay={0.2}>
              <a
                href="mailto:arifurrahman.it.doc@gmail.com"
                className="link-underline group inline-flex flex-wrap items-baseline gap-2 break-all pb-1 font-display text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-primary sm:text-3xl md:text-4xl"
              >
                arifurrahman.it.doc@gmail.com
                <motion.span
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
                  className="inline-flex shrink-0 self-center"
                >
                  <ArrowUpRight className="h-6 w-6 text-primary transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </motion.span>
              </a>
            </Reveal>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.4 }}
              className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground"
            >
              Whether it&apos;s a product idea, a role you&apos;re hiring for, or just a
              question about frontend — my inbox is always open. I usually reply within
              a day.
            </motion.p>

            {/* Socials — springy staggered pops */}
            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -3 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {social.icon}
                    {social.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: contact info rows ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.1 }}
                className="flex items-center gap-5 border-b border-border py-6 first:border-t"
              >
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.25 + i * 0.1 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary"
                >
                  {info.icon}
                </motion.span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {info.title}
                  </p>
                  {info.link ? (
                    <Link
                      href={info.link}
                      className="mt-0.5 block truncate text-base font-medium transition-colors hover:text-primary"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <p className="mt-0.5 text-base font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.5 }}
              className="mt-8 flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <p className="text-sm text-foreground/80">
                Currently <span className="font-semibold">open to opportunities</span> —
                full-time roles &amp; freelance projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
