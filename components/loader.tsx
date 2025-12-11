"use client";

import { useState, useEffect } from "react";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const texts = [
    "नमस्ते",
    "നമസ്ക്കാരം",
    "வணக்கம்",
    "Hello",
    "你好",
    "こんにちは",
    "Bonjour",
  ];

  const [index, setIndex] = useState(0);
  const [blastOut, setBlastOut] = useState(false);

  useEffect(() => {
    if (index < texts.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 400);
      return () => clearTimeout(timer);
    } else {
      // trigger blast animation
      const blastTimer = setTimeout(() => {
        setBlastOut(true);
      }, 600);
      return () => clearTimeout(blastTimer);
    }
  }, [index]);

  useEffect(() => {
    if (blastOut) {
      const finishTimer = setTimeout(() => {
        onFinish();
      }, 50); // wait for blast animation to finish
      return () => clearTimeout(finishTimer);
    }
  }, [blastOut, onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-blue-700 z-50 transform transition-transform duration-100 ease-out ${
        blastOut ? "scale-[3] opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <p className="text-5xl font-bold text-white transition-opacity duration-500">
        {texts[index]}
      </p>
    </div>
  );
};

export default Loader;
