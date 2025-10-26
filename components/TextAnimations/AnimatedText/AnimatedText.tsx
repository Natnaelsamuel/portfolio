"use client";
import { useState, useEffect } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  duration = 1000,
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-${duration} ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </span>
  );
};

export default AnimatedText;


