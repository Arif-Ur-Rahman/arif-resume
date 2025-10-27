"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = links.map((link) => link.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      // className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
    >
      <div className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-transparent",
        scrolled ? "bg-background/90 md:backdrop-blur-md md:shadow-sm" : ""
      )}>

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight transition-colors">
            <span className="text-primary">Arif Ur Rahman</span>
            {/* <span>Dev</span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link text-sm font-medium transition-colors hover:text-primary",
                  activeSection === link.href.substring(1) && "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="ml-4 relative overflow-hidden group">
              <Link href="/Arif_Ur_Rahman.pdf" download>
                <span className="relative z-10">Resume</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">zz
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-[250px] bg-background shadow-lg p-6 z-50 md:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <Link href="#hero" className="text-lg font-semibold">
                <span className="text-primary">Arif Ur Rahman</span>
              </Link>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    activeSection === link.href.substring(1) && "text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-6 w-full">
                <Link href="/Arif_Ur_Rahman.pdf" download onClick={() => setIsOpen(false)}>
                  Resume
                </Link>
              </Button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
      </div>
    </header>
  )
}
