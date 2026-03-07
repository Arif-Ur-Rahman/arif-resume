"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { FaGithub as Github, FaFacebook as FacebookIcon } from "react-icons/fa";
import Link from "next/link";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "arifurrahman.it.doc@gmail.com",
    link: "mailto:arifurrahman.it.doc@gmail.com",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    value: "+880 168 072 8065",
    link: "tel:+8801680728065",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    value: "Dhaka, Bangladesh",
    link: null,
    colorClass: "text-rose-400",
    bgClass: "bg-rose-500/10 border-rose-500/20",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Availability",
    value: "Mon – Fri, 9 AM – 6 PM BST",
    link: null,
    colorClass: "text-violet-400",
    bgClass: "bg-violet-500/10 border-violet-500/20",
  },
];

const socialLinks = [
  {
    href: "https://github.com/Arif-Ur-Rahman",
    label: "GitHub",
    icon: <Github className="h-5 w-5" />,
    colorClass: "hover:bg-gray-500/20 hover:text-gray-300 hover:border-gray-500/40",
  },
  {
    href: "https://www.linkedin.com/in/arif-ur-rahman-swe/",
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    colorClass: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/40",
  },
  {
    href: "https://www.facebook.com/absent.arif.5",
    label: "Facebook",
    icon: <FacebookIcon className="h-5 w-5" />,
    colorClass: "hover:bg-blue-600/20 hover:text-blue-500 hover:border-blue-600/40",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-muted-foreground">
            I&apos;d love to hear from you — reach out via email, phone, or any of my
            social channels.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="group gradient-border bg-card rounded-2xl p-5 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/8">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border ${info.bgClass} ${info.colorClass} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                  {info.title}
                </p>
                {info.link ? (
                  <Link
                    href={info.link}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 break-all"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <p className="text-sm font-medium text-foreground">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-card to-violet-500/8 p-10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Follow me on social media or send me a message directly — I&apos;m always
              open to interesting opportunities.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-secondary/60 text-muted-foreground border border-border transition-all duration-200 text-sm font-medium ${social.colorClass}`}
                >
                  {social.icon}
                  {social.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-sm mb-3">Or email me directly</p>
              <a
                href="mailto:arifurrahman.it.doc@gmail.com"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 transition-all"
              >
                <Mail className="h-4 w-4" />
                arifurrahman.it.doc@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
