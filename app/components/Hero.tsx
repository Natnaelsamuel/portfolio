"use client";
import Particles from "@/components/backgrounds/Particles/Particles";
import AnimatedText from "@/components/TextAnimations/AnimatedText/AnimatedText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { theme, resolvedTheme } = useTheme();

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
    </div>
  );
};

export default Hero;
