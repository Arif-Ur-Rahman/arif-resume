"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, FacebookIcon } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "arifurrahman.it.doc@gmail.com",
      link: "mailto:arifurrahman.it.doc@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+8801680728065",
      link: "tel:+8801680728065",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: null,
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Working Hours",
      value: "Mon - Fri: 9AM - 6PM",
      link: null,
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Arif-Ur-Rahman",
      label: "GitHub",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/arif-ur-rahman-swe/",
      label: "LinkedIn",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/absent.arif.5",
      label: "Facebook",
      svg: <FacebookIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            I’d love to hear from you! Feel free to reach out via email, phone,
            or any of my social channels.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, i) => (
            <Card
              key={i}
              className="hover:shadow-md transition-shadow duration-300 border-border"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{info.title}</h4>
                  {info.link ? (
                    <Link
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      {info.value}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
          <div className="flex justify-center gap-5 flex-wrap">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-300"
              >
                {social.svg}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
