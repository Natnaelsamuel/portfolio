"use client";
import { useState, useRef, useEffect } from "react";
import Particles from "@/components/backgrounds/Particles/Particles";
import AnimatedText from "@/components/TextAnimations/AnimatedText/AnimatedText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

function FidgetSpinner() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6 text-emerald-500 dark:text-emerald-400"
    >
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <g>
          <line x1="16" y1="16" x2="16" y2="6" />
          <circle cx="16" cy="5" r="3.5" fill="currentColor" stroke="none" />
        </g>
        <g transform="rotate(120 16 16)">
          <line x1="16" y1="16" x2="16" y2="6" />
          <circle cx="16" cy="5" r="3.5" fill="currentColor" stroke="none" />
        </g>
        <g transform="rotate(240 16 16)">
          <line x1="16" y1="16" x2="16" y2="6" />
          <circle cx="16" cy="5" r="3.5" fill="currentColor" stroke="none" />
        </g>
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

const Hero = () => {
  const { theme, resolvedTheme } = useTheme();
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

  const effectiveTheme = resolvedTheme ?? theme ?? "light";
  const isDark = effectiveTheme === "dark";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Particles
          particleColors={isDark ? ["#ffffff", "#ffffff"] : ["#cbd5e1", "#94a3b8"]}
          particleCount={isDark ? 500 : 760}
          particleSpread={10}
          speed={0.42}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={!isDark}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-4xl">
          <AnimatedText delay={200} className="mb-5 block">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-gray-500 dark:text-gray-400">
              Full-Stack Developer
            </p>
          </AnimatedText>

          <AnimatedText delay={500} className="block">
            <h1
              className="font-display font-semibold leading-[0.94] tracking-tight text-gray-900 dark:text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 5.25rem)" }}
            >
              Natnael Samuel
              <span className="mt-2 block text-balance text-[0.45em] font-medium leading-[1.2] tracking-normal text-gray-600 dark:text-gray-300 sm:text-[0.42em]">
                Building
                <span className="text-emerald-gradient"> modern digital products</span>
                {" "}that feel thoughtful, inviting, and genuinely useful.
              </span>
            </h1>
          </AnimatedText>

          <AnimatedText delay={900} className="mt-6 block">
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
              I help startups, teams, and founders turn ideas into responsive
              web experiences with clean design, thoughtful interactions, and
              maintainable code.
            </p>
          </AnimatedText>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AnimatedText delay={1200}>
              <Link href="/projects">
                <Button
                  variant="default"
                  size="lg"
                  className="pointer-events-auto rounded-full bg-emerald-gradient px-8 py-3 text-sm font-medium text-white shadow-emerald transition-all duration-300 hover-emerald font-display"
                >
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </AnimatedText>

            <AnimatedText delay={1350}>
              <a href="mailto:natisami901@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="pointer-events-auto rounded-full border-gray-300 bg-white/80 px-8 py-3 text-sm font-medium text-gray-800 transition-all duration-300 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-200 dark:hover:bg-gray-800/70 font-display"
                >
                  Let&apos;s talk
                </Button>
              </a>
            </AnimatedText>
          </div>

          <AnimatedText delay={1550} className="mt-10 block">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              <span>Design-minded development</span>
              <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500" />
              <span>Based in Ethiopia</span>
              <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500" />
              <span>Open to meaningful collaborations</span>
            </div>
          </AnimatedText>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 group">
        <div ref={socialRef} className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-lg group-hover:bg-emerald-500/20 transition-all duration-300 scale-125"></div>

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

          <button
            onClick={() => setSocialOpen((s) => !s)}
            aria-expanded={socialOpen}
            aria-label="Toggle social links"
            className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-emerald-500 dark:border-gray-700 dark:bg-gray-800"
          >
            <FidgetSpinner />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
