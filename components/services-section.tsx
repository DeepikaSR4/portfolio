"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "UX Design",
    description:
      "Crafting intuitive, user-centered digital experiences through research, wireframing, prototyping, and iterative design processes.",
  },
  {
    title: "Web Development",
    description:
      "Building modern, responsive, and performant web applications with clean code and attention to detail using the latest technologies.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-12 sm:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group p-8 sm:p-12 border border-border/50 rounded-2xl sm:rounded-3xl bg-background/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 group-hover:text-gradient transition-all">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
