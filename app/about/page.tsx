"use client";
import { useState } from "react";
import Particles from "@/components/backgrounds/Particles/Particles";
import TypewriterText from "@/components/TextAnimations/TypewriterText/TypewriterText";

const About = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">

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
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-32">
        <div className="rounded-[28px] border border-gray-200/80 bg-white/92 p-8 shadow-lg backdrop-blur-sm dark:border-gray-700/70 dark:bg-gray-800/92 sm:p-10">
          <div className="mb-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">
              About Me
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
              Hello, I&apos;m Natnael Samuel
            </h2> 
          </div>

          <div className="space-y-6 text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg font-sans">
            <p>
              <TypewriterText
                text="A Computer Science graduate from Hawassa University and a passionate full-stack developer."
                speed={22}
                delay={300}
                className="block"
                onComplete={() => setShowSecond(true)}
              />
            </p>

            {showSecond && (
              <p>
                <TypewriterText
                  text="I enjoy building clean, responsive, and user-focused web applications that turn ideas into real, functional products. My journey into software development started with curiosity about how websites work, and over time it grew into a strong passion for creating meaningful digital experiences."
                  speed={16}
                  delay={250}
                  className="block"
                  onComplete={() => setShowThird(true)}
                />
              </p>
            )}

            {showThird && (
              <p>
                <TypewriterText
                  text="I work comfortably across both frontend and backend development, and I enjoy the process of taking a project from concept to deployment. I care about writing code that is not only functional, but also clean, maintainable, and easy to build on in the future."
                  speed={16}
                  delay={250}
                  className="block"
                  onComplete={() => setShowFourth(true)}
                />
              </p>
            )}

            {showFourth && (
              <p>
                <TypewriterText
                  text="Outside of development, I spend time exploring new technologies, improving my skills, and working on personal projects. I'm always open to learning new things, solving real-world problems, and collaborating on impactful ideas."
                  speed={16}
                  delay={250}
                  className="block"
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
