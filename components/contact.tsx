"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Copy, Check } from "lucide-react";
import { FaGithub as Github, FaFacebookF as Facebook, FaLinkedinIn as Linkedin } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import SpotlightCard from "@/components/spotlight-card";
import { EASE, Magnetic, VIEWPORT } from "@/components/motion-primitives";

const EMAIL = "arifurrahman.it.doc@gmail.com";

const contactInfo = [
  { icon: Phone, title: "Phone", value: "+880 168 072 8065", link: "tel:+8801680728065" },
  { icon: MapPin, title: "Location", value: "Dhaka, Bangladesh", link: null },
  { icon: Clock, title: "Availability", value: "Mon – Fri, 9 AM – 6 PM BST", link: null },
];

const socialLinks = [
  { href: "https://github.com/Arif-Ur-Rahman", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/arif-ur-rahman-swe/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.facebook.com/absent.arif.5", label: "Facebook", icon: Facebook },
];

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 40, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: VIEWPORT,
    transition: { duration: 0.8, ease: EASE, delay },
  };
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="relative pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="container">
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

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
          {/* ── Email hero card ── */}
          <motion.div {...rise(0)}>
            <SpotlightCard className="flex h-full min-h-[380px] flex-col justify-between overflow-hidden p-7 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full opacity-60"
                style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.3), transparent)" }}
              />
              <div className="relative">
                <span className="eyebrow">
                  <span className="bg-signature h-1.5 w-1.5 rounded-full" />
                  Say hello
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[clamp(1.1rem,4.4vw,2.4rem)] font-semibold leading-tight tracking-[-0.04em]"
                >
                  <span className="link-underline break-all pb-1">{EMAIL}</span>
                  <span className="bg-signature flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#0b0b10] transition-transform duration-500 group-hover:rotate-45 md:h-11 md:w-11">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </a>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  Whether it&apos;s a product idea, a role you&apos;re hiring for, or just a question
                  about frontend — my inbox is always open. I usually reply within a day.
                </p>
              </div>

              <div className="relative mt-10 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a href={`mailto:${EMAIL}`} className="btn btn-ink btn-shine group">
                    <Mail className="h-4 w-4" />
                    Send an email
                  </a>
                </Magnetic>
                <button type="button" onClick={copyEmail} className="btn btn-ghost min-w-[9.5rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "copied" : "copy"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-500" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copy email
                        </>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Details column ── */}
          <div className="flex flex-col gap-5">
            <motion.div {...rise(0.1)}>
              <SpotlightCard className="p-2">
                {contactInfo.map(({ icon: Icon, title, value, link }) => {
                  const body = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.04] text-primary transition-colors duration-300 group-hover/row:border-primary/40">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {title}
                        </span>
                        <span className="mt-0.5 block truncate text-[15px] font-medium">{value}</span>
                      </span>
                      {link && (
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-primary" />
                      )}
                    </>
                  );
                  const cls =
                    "group/row flex items-center gap-4 rounded-[1.25rem] px-4 py-3.5 transition-colors duration-300 hover:bg-foreground/[0.04]";
                  return link ? (
                    <a key={title} href={link} className={cls}>
                      {body}
                    </a>
                  ) : (
                    <div key={title} className={cls}>
                      {body}
                    </div>
                  );
                })}
              </SpotlightCard>
            </motion.div>

            <motion.div {...rise(0.2)}>
              <SpotlightCard className="p-6">
                <span className="eyebrow">Elsewhere</span>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/s flex items-center justify-between gap-2 rounded-2xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover/s:text-foreground" />
                        {label}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover/s:rotate-45 group-hover/s:text-primary" />
                    </a>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div {...rise(0.3)}>
              <div className="flex items-center gap-4 rounded-[1.75rem] border border-emerald-500/25 bg-emerald-500/[0.07] px-6 py-5">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <p className="text-sm leading-relaxed text-foreground/85">
                  Currently <span className="font-semibold">open to opportunities</span> — full-time
                  roles &amp; freelance projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
