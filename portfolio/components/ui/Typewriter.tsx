"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function Typewriter({ text, delay = 0, speed = 50, className = "", onComplete }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (onComplete) {
        onComplete();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, speed, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className={showCursor ? "opacity-100" : "opacity-0"}>▊</span>
      )}
    </span>
  );
}
