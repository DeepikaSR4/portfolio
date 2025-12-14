"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function CtaSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8 sm:space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight text-balance px-4">
          Let's build something beautiful.
        </h2>

        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto px-12 sm:px-16 py-6 sm:py-8 text-base sm:text-lg rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 font-medium"
        >
          <Link href="mailto:hello@example.com">Get in Touch</Link>
        </Button>
      </motion.div>
    </section>
  )
}
