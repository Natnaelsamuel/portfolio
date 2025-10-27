"use client";
import Particles from "@/components/backgrounds/Particles/Particles";
import AnimatedText from "@/components/TextAnimations/AnimatedText/AnimatedText";
import { ArrowLeft, Code2, Palette, Server, Database } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const SkillsPage = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
    "Tanstack Query",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "REST APIs",
    "PHP",
    "Java",
    "Git",
    "C++",
  ];

  const designSkills = [
    "Figma",
    "UI/UX Design",
    "Responsive Design",
    "Wireframing",
    "Prototyping",
  ];

  const [visibleSkills, setVisibleSkills] = useState({
    frontend: [] as string[],
    backend: [] as string[],
    design: [] as string[],
  });

  useEffect(() => {
    // Animate frontend skills
    const frontendTimer = setTimeout(() => {
      frontendSkills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => ({
            ...prev,
            frontend: [...prev.frontend, skill],
          }));
        }, index * 100);
      });
    }, 500);

    // Animate backend skills
    const backendTimer = setTimeout(() => {
      backendSkills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => ({
            ...prev,
            backend: [...prev.backend, skill],
          }));
        }, index * 100);
      });
    }, 1500);

    // Animate design skills
    const designTimer = setTimeout(() => {
      designSkills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => ({
            ...prev,
            design: [...prev.design, skill],
          }));
        }, index * 100);
      });
    }, 2500);

    return () => {
      clearTimeout(frontendTimer);
      clearTimeout(backendTimer);
      clearTimeout(designTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative pt-32 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3">
              My <span className="text-emerald-gradient">Skills</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </div>
      </div>

      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12">
        {/* Skills Grid */}
        <div className="space-y-6">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-gradient rounded-lg flex items-center justify-center shadow-emerald">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-display">
                Frontend Development
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {visibleSkills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all duration-300 transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-gradient rounded-lg flex items-center justify-center shadow-emerald">
                <Server className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-display">
                Backend Development
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {visibleSkills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all duration-300 transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-gradient rounded-lg flex items-center justify-center shadow-emerald">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-display">
                Design & Tools
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {visibleSkills.design.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all duration-300 transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 font-display">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Technology evolves rapidly, and so do I. I&apos;m constantly
              exploring new frameworks, tools, and best practices to stay
              current and deliver the best solutions for every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
