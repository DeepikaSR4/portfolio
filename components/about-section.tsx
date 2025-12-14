"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">About</h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed font-light text-base sm:text-lg">
              <p>
                I'm a UX & Web designer who blends clarity, aesthetics, and modern web tools to create meaningful
                digital experiences.
              </p>
              <p>
                My background in project management helps me deliver structured, smooth workflows — ensuring every
                project is thoughtfully planned and expertly executed.
              </p>
              <p>I believe great design is invisible, intuitive, and always puts the user first.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden order-1 md:order-2"
          >
            <Image src="/professional-designer-portrait-minimal.jpg" alt="Profile" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
