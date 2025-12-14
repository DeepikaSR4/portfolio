"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    description:
      "A complete UX overhaul of a major retail platform, focusing on conversion optimization and user experience enhancement.",
    role: "UX Design • Web Development",
    image: "/modern-ecommerce-interface-design.jpg",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "Intuitive financial management platform with real-time data visualization and responsive design.",
    role: "Interface Design • Development",
    image: "/financial-dashboard-clean-modern.jpg",
  },
  {
    id: 3,
    title: "Healthcare Portal",
    description: "Patient-centered healthcare platform emphasizing accessibility and seamless appointment management.",
    role: "UX Design • Prototyping",
    image: "/healthcare-patient-portal.png",
  },
]

export function EditorialProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <>
      <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-12 sm:mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.h2>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 sm:gap-8 lg:gap-12 items-center`}
              >
                <motion.div
                  className="w-full lg:w-2/3 relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="aspect-[3/2] relative overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-2">{project.title}</h3>
                      <p className="text-xs sm:text-sm font-light">{project.role}</p>
                    </div>
                  </div>
                </motion.div>

                <div className="w-full lg:w-1/3 space-y-4 sm:space-y-6 px-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm sm:text-base">
                    {project.description}
                  </p>
                  <p className="text-xs sm:text-sm text-primary font-light tracking-wide">{project.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lightbox */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-muted rounded-full transition-colors"
            onClick={() => setSelectedProject(null)}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {projects.find((p) => p.id === selectedProject) && (
              <div className="space-y-6 sm:space-y-8">
                <div className="aspect-video relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src={projects.find((p) => p.id === selectedProject)!.image || "/placeholder.svg"}
                    alt={projects.find((p) => p.id === selectedProject)!.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4 px-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light">
                    {projects.find((p) => p.id === selectedProject)!.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary font-light tracking-wide">
                    {projects.find((p) => p.id === selectedProject)!.role}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                    {projects.find((p) => p.id === selectedProject)!.description}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
