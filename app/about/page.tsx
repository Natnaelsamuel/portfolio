"use client";
import Particles from "@/components/backgrounds/Particles/Particles";
import TypewriterText from "@/components/TextAnimations/TypewriterText/TypewriterText";
import { ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative pt-32 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3">
              About <span className="text-emerald-gradient">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get to know the person behind the code
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
        {/* Main About Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-gradient rounded-xl flex items-center justify-center shadow-emerald">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white font-display">
              Hello, I&apos;m Natnael Samuel
            </h2>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              <TypewriterText
                text="I'm a passionate full-stack developer who loves turning ideas into clean, functional, and responsive web applications. With expertise spanning both frontend and backend development, I build modern, scalable solutions from concept to deployment."
                speed={30}
                delay={1000}
                className="block mb-4"
              />

              <TypewriterText
                text="My journey in web development started with a curiosity about how websites work, and it quickly evolved into a deep passion for creating digital experiences that make a difference. I believe in writing clean, maintainable code that not only works but is also a joy to work with."
                speed={30}
                delay={4000}
                className="block mb-4"
              />

              <TypewriterText
                text="When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always excited about the next challenge and the opportunity to learn something new."
                speed={30}
                delay={7000}
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
