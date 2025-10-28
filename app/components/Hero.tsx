"use client";
import { useState, useRef, useEffect } from "react";
import Particles from "@/components/backgrounds/Particles/Particles";
import AnimatedText from "@/components/TextAnimations/AnimatedText/AnimatedText";
import TypewriterText from "@/components/TextAnimations/TypewriterText/TypewriterText";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { useWindowSize } from "react-use";

const Hero = () => {
  const { theme } = useTheme();
  const { width } = useWindowSize();

  // Socials panel open state for mobile (toggled on click)
  const [socialOpen, setSocialOpen] = useState(false);
  const socialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (!socialRef.current) return;
      const target = e.target as Node;
      if (socialRef.current && !socialRef.current.contains(target)) {
        setSocialOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  const getFontSize = () => {
    if (width < 640) return "2.5rem";
    if (width < 768) return "3.2rem";
    if (width < 1024) return "4rem";
    return "4.5rem";
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Particles with lower z-index and pointer-events-auto */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content with higher z-index but allows pointer events through */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pointer-events-none">
        <div className="pointer-events-auto max-w-5xl mx-auto">
          {/* Greeting */}
          <div className="mb-8">
            <AnimatedText
              delay={200}
              className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 tracking-wide font-display"
            >
              Hello, I&apos;m
            </AnimatedText>
          </div>

          {/* Main Name */}
          <div className="mb-8">
            <h1
              className="font-display font-bold text-gray-900 dark:text-white leading-tight"
              style={{ fontSize: getFontSize() }}
            >
              <AnimatedText delay={600} className="block">
                Natnael Samuel
              </AnimatedText>
            </h1>
          </div>

          {/* Professional Title */}
          <div className="mb-8">
            <AnimatedText delay={1000} className="block mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-emerald-gradient tracking-wide font-display">
                Full-Stack Developer
              </h2>
            </AnimatedText>

            <AnimatedText delay={1200} className="block">
              <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
                <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
                <span className="text-lg sm:text-xl font-light font-display">
                  UI Enthusiast
                </span>
                <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse animation-delay-1000" />
              </div>
            </AnimatedText>
          </div>

          {/* Description */}
          <div className="mb-8">
            <AnimatedText delay={1400} className="block">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-tight max-w-3xl mx-auto font-sans">
                Crafting digital experiences with clean code and beautiful
                design
              </p>
            </AnimatedText>
          </div>

          {/* Typewriter Effect for Additional Text */}
          <div className="mb-8">
            <AnimatedText delay={1600} className="block">
              <div className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-mono">
                <TypewriterText
                  text="Available for freelance projects and collaborations"
                  speed={50}
                  delay={2000}
                  className="font-mono"
                />
              </div>
            </AnimatedText>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <AnimatedText delay={1800}>
              <Link href="/projects">
                <Button
                  variant="default"
                  size="lg"
                  className="group bg-emerald-gradient hover-emerald text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-emerald-lg pointer-events-auto font-display text-lg"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </AnimatedText>

            <AnimatedText delay={2000}>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-gray-300 dark:border-gray-600 hover-emerald-border text-gray-700 dark:text-gray-300 hover-emerald-text font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 pointer-events-auto font-display text-lg"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
                Download CV
              </Button>
            </AnimatedText>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Floating Social Hub */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <div ref={socialRef} className="relative">
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-lg group-hover:bg-emerald-500/20 transition-all duration-300 scale-125"></div>

          {/* Expanded Social Icons */}
          <div
            className={
              `absolute bottom-0 right-0 mb-16 transition-all duration-300 transform ` +
              (socialOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-2 pointer-events-none") +
              " group-hover:opacity-100 group-hover:translate-y-0"
            }
          >
            <div className="flex flex-col gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/Natnaelsamuel"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all duration-200 transform hover:scale-105">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover/social:text-emerald-500 transition-colors duration-200" />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/natnael-samuel-a321bb336/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all duration-200 transform hover:scale-105">
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover/social:text-emerald-500 transition-colors duration-200" />
                </div>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/Natnael_sam"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all duration-200 transform hover:scale-105">
                  <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover/social:text-emerald-500 transition-colors duration-200" />
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:natisami901@gmail.com"
                className="relative group/social"
              >
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all duration-200 transform hover:scale-105">
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover/social:text-emerald-500 transition-colors duration-200" />
                </div>
              </a>
            </div>
          </div>

          {/* Main Clean Button */}
          <button
            onClick={() => setSocialOpen((s) => !s)}
            aria-expanded={socialOpen}
            aria-label="Toggle social links"
            className="relative w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105 group-hover:rotate-6"
          >
            {/* Simple Grid Pattern */}
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm group-hover:bg-emerald-500 transition-colors duration-200"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm group-hover:bg-emerald-500 transition-colors duration-200 animation-delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm group-hover:bg-emerald-500 transition-colors duration-200 animation-delay-200"></div>
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm group-hover:bg-emerald-500 transition-colors duration-200 animation-delay-300"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
