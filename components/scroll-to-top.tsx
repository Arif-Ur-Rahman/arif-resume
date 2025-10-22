"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-20 left-6 z-40 md:bottom-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="relative h-10 w-10 rounded-full bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary md:h-12 md:w-12"
            aria-label="Scroll to top"
          >
            <span className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
            <ArrowUp className="h-4 w-4 text-primary-foreground md:h-5 md:w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}