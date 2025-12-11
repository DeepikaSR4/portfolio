"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"


export function HeroSection() {
  const greetings = [
  "Hello", 
  "مرحبا",
  "你好",       
  "こんにちは"   ,   
  "Bonjour",     
  "Hallo",       
  "Hola",        
  "नमस्ते",   
  "നമസ്ക്കാരം",  
  "வணக்கம்"
]
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prev => {
        const currentIndex = greetings.indexOf(prev)
        const nextIndex = (currentIndex + 1) % greetings.length
        return greetings[nextIndex]
      })
    }, 2000) // change greeting every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-14 sm:pt-16"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
        Fix the UX. Keep the users.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"> I help growing products improve their most critical flows — onboarding, checkout, and retention. Through UX audits and actionable fixes, I make experiences smoother, faster, and harder to quit.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 w-full sm:w-auto text-base font-medium"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
           Let’s Fix Your UX Leaks
          </Button>
        </div>
      </div>
    </section>
  )
}
