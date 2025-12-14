"use client"

import { useState, useEffect } from "react"

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const texts = ["नमस्ते", "നമസ്ക്കാരം", "வணக்கம்", "Hello", "你好", "こんにちは", "Bonjour"]

  const [index, setIndex] = useState(0)
  const [blastOut, setBlastOut] = useState(false)

  useEffect(() => {
    if (index < texts.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 300) // Reduced from 400ms
      return () => clearTimeout(timer)
    } else {
      const blastTimer = setTimeout(() => {
        setBlastOut(true)
      }, 400) // Reduced from 600ms
      return () => clearTimeout(blastTimer)
    }
  }, [index])

  useEffect(() => {
    if (blastOut) {
      const finishTimer = setTimeout(() => {
        onFinish()
      }, 200) // Reduced from 50ms for smoother fade
      return () => clearTimeout(finishTimer)
    }
  }, [blastOut, onFinish])

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary z-50 transform transition-all duration-300 ease-out ${
        blastOut ? "scale-[4] opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <div
          className={`absolute w-24 h-24 border-2 border-white/20 rounded-full transition-all duration-300 ${
            blastOut ? "scale-[3] opacity-0" : "scale-100 opacity-100"
          }`}
        ></div>
        <div
          className={`absolute w-16 h-16 border-2 border-white/40 rounded-full transition-all duration-300 animate-pulse ${
            blastOut ? "scale-[2] opacity-0" : "scale-100 opacity-100"
          }`}
        ></div>

        <p
          className={`text-6xl md:text-7xl font-bold text-white drop-shadow-lg transition-all duration-300 relative z-10 ${
            blastOut ? "scale-150 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {texts[index]}
        </p>
      </div>
    </div>
  )
}

export default Loader
