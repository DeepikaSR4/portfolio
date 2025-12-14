"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Loader from "@/components/loader"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const hasSeenLoader = localStorage.getItem("hasSeenLoader")

    if (hasSeenLoader) {
      // Skip loader on return visits
      setLoading(false)
    } else {
      // Show loader only on first visit, then mark as seen
      const timer = setTimeout(() => {
        setLoading(false)
        localStorage.setItem("hasSeenLoader", "true")
      }, 2000) // Reduced from ~2.8s to 2s

      return () => clearTimeout(timer)
    }
  }, [])

  // Prevent hydration mismatch
  if (!isMounted) {
    return <>{children}</>
  }

  return <>{loading ? <Loader onFinish={() => setLoading(false)} /> : children}</>
}
