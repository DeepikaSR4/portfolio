"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function EditorialHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20 gradient-blur">
      {/* Floating blur elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-[48px] sm:text-[60px] md:text-[84px] lg:text-[132px] font-light leading-[0.95] tracking-tight mb-6 sm:mb-8">
            <span className="block text-balance">I design</span>
            <span className="block text-balance">& build</span>
            <span className="block text-gradient text-balance">digital experiences.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 font-light tracking-wide px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          UX Design • Web Development
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto px-8 sm:px-12 py-6 text-base rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 font-medium"
          >
            <Link href="#projects">View Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 sm:px-12 py-6 text-base rounded-full border-2 border-muted-foreground/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 font-medium bg-transparent"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
