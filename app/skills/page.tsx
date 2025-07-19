"use client";
import Particles from "@/components/backgrounds/Particles/Particles";
import { motion } from "framer-motion";
import { Code, Cpu, Database, GitFork, Palette, Server } from "lucide-react";
import React from "react";

type SkillCategory =
  | "Vanilla"
  | "Frameworks"
  | "Styling"
  | "State Management"
  | "UI & Animations"
  | "Tooling"
  | "UI/UX"
  | "Languages & Runtimes"
  | "Database & ORM"
  | "APIs"
  | "Others";

const SkillsPage = () => {
  const skills = {
    frontend: {
      Vanilla: ["HTML", "CSS", "JavaScript"],
      Frameworks: ["React.js", "Next.js"],
      Styling: [
        "Tailwind",
        "Bootstrap",
        "ShadCN UI",
        "Chakra UI",
        "Daisy UI",
        "CSS Modules",
      ],
      "State Management": ["Zustand", "Tanstack Query"],
      "UI & Animations": ["Framer Motion"],
      Tooling: ["TypeScript"],
      "UI/UX": ["Figma"],
    },
    backend: {
      "Languages & Runtimes": ["Node.js", "TypeScript", "PHP"],
      Frameworks: ["Express.js"],
      "Database & ORM": ["MySQL", "PostgreSQL", "Prisma"],
      APIs: ["REST"],
      Others: ["Java", "JavaFX", "Git", "C++"],
    },
  };

  const categoryIcons: Record<SkillCategory, React.ReactNode> = {
    Vanilla: <Code className="h-4 w-4" />,
    Frameworks: <GitFork className="h-4 w-4" />,
    Styling: <Palette className="h-4 w-4" />,
    "State Management": <Cpu className="h-4 w-4" />,
    "UI & Animations": <Palette className="h-4 w-4" />,
    Tooling: <Cpu className="h-4 w-4" />,
    "UI/UX": <Palette className="h-4 w-4" />,
    "Languages & Runtimes": <Code className="h-4 w-4" />,
    "Database & ORM": <Database className="h-4 w-4" />,
    APIs: <Server className="h-4 w-4" />,
    Others: <Cpu className="h-4 w-4" />,
  };

  return (
    <div className="min-h-screen w-full bg-background pt-30 pb-12 px-4 sm:px-8">
      <div className="absolute inset-0 z-0">
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
      <div className="max-w-6xl mx-auto z-51">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12"
        >
          Technical Skills
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-black p-5 sm:p-6 shadow-sm dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] z-51"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-">
                <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Frontend Development
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {(
                Object.entries(skills.frontend) as [SkillCategory, string[]][]
              ).map(([category, items]) => (
                <div key={`frontend-${category}`}>
                  <div className="flex items-center gap-2 mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-muted-foreground">
                    {categoryIcons[category]}
                    <span>{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-black p-5 sm:p-6 shadow-sm dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] z-51"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/50">
                <Server className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Backend Development
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {(
                Object.entries(skills.backend) as [SkillCategory, string[]][]
              ).map(([category, items]) => (
                <div key={`backend-${category}`}>
                  <div className="flex items-center gap-2 mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-muted-foreground">
                    {categoryIcons[category]}
                    <span>{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
