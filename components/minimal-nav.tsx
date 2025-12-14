"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function MinimalNav() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-light tracking-tight hover:text-primary transition-colors">
          Portfolio
        </Link>

        <div className="flex gap-8 text-sm font-light">
          <Link href="#projects" className="hover:text-primary transition-colors">
            Work
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
