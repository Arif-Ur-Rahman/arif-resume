"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background text-foreground relative"
    // "pt-52 pb-20 md:pt-52 md:pb-32 hero-gradient
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="pt-32 pb-20 md:pt-52 md:pb-32 hero-gradien">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="block">Hi, I'm</span>
                <span className="text-primary block mt-2">
                  {/* Jr. Software Engineer */}
                  Backend Developer
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl">
                I've been focusing on developing RESTful APIs, backend services, and learning Go's powerful features like concurrency and memory efficiency. I'm eager to contribute to impactful backend systems and continue growing backend engineer.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="group">
                  <a href="#contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>

              <div className="flex gap-4 relative z-20">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://github.com/gowaliullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://linkedin.com/in/engwaliullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="mailto:waliullah9099@gmail.com"
                    className="p-3 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="Email Me"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img
                    // src="https://i.ibb.co.com/KjPsGzsp/Whats-App-Image-2025-09-21-at-9-25-01-PM.jpg"
                    src="https://i.ibb.co.com/3mjLPnwC/Whats-App-Image-2025-09-21-at-9-24-56-PM.jpg"
                    // src="https://i.ibb.co.com/B5mxRb7z/waliullah.jpg"
                    // src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 p-5">
                <div className="bg-secondary/80 text-secondary-foreground px-7 py-2.5 rounded-full text-sm font-medium border border-transparent hover:animate-border-animation">
                  {/* Backend Developer */}
                  Jr. Software Engineer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}