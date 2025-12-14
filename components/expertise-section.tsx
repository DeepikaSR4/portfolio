"use client"

import { motion } from "framer-motion"

const expertise = [
  "UX Design",
  "Interface Design",
  "Web Development",
  "UX Writing",
  "Prototyping",
  "Design Systems",
  "Frontend Development",
  "Interaction Design",
]

export function ExpertiseSection() {
  return (
    <section className="py-24 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 md:gap-4 justify-center items-center"
        >
          {expertise.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-muted/50 backdrop-blur-sm border border-border/50 rounded-full text-sm md:text-base font-light tracking-wide hover:bg-muted transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
