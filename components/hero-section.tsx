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
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
          {currentGreeting}
          <span className="text-primary block mt-2">I am Deepika</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          I'm exploring the world of project management at{" "}
          <a href="https://appmaker.xyz" className="underline hover:text-primary transition-colors">
            Appmakers.xyz
          </a>{" "}
          while nurturing my curiosity for UX—crafting digital experiences that connect with people❤️
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 w-full sm:w-auto text-base font-medium"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto text-base font-medium"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
