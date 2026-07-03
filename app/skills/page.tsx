"use client";

import { useTheme } from "next-themes";
import Particles from "@/components/backgrounds/Particles/Particles";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  category: string;
  color: string;
  darkColor?: string;
};

const coreSkills: Skill[] = [
  { name: "TypeScript", category: "Frontend", color: "#3178C6" },
  { name: "Next.js", category: "Frontend", color: "#111827", darkColor: "#f9fafb" },
  { name: "React", category: "Frontend", color: "#61DAFB" },
  { name: "Python", category: "Backend", color: "#3776AB" },
  { name: "Django", category: "Backend", color: "#092E20" },
  { name: "FastAPI", category: "Backend", color: "#009688" },
  { name: "Express.js", category: "Backend", color: "#111827", darkColor: "#f9fafb" },
  { name: "SQL", category: "Database", color: "#336791" },
  { name: "Docker", category: "DevOps", color: "#2496ED" },
  { name: "GitHub", category: "Tools", color: "#181717", darkColor: "#f9fafb" },
  { name: "Figma", category: "Design", color: "#F24E1E" },
];

const otherSkills = ["C++", "Java", "PHP"];

function SkillCard({ skill, isDark }: { skill: Skill; isDark: boolean }) {
  const accent = isDark && skill.darkColor ? skill.darkColor : skill.color;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md dark:border-gray-700/70 dark:bg-gray-900/50 dark:hover:border-emerald-800/60">
      <div
        className="absolute inset-y-0 left-0 w-1 rounded-l-2xl opacity-80 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: accent }}
      />
      <div className="pl-3">
        <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {skill.category}
        </p>
        <p className="font-display text-lg font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {skill.name}
        </p>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const { theme, resolvedTheme } = useTheme();
  const effectiveTheme = resolvedTheme ?? theme ?? "light";
  const isDark = effectiveTheme === "dark";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="absolute inset-0 z-0">
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-32">
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">
            Tech Stack
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Skills &amp; Tools
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                Technologies I use to design, build, and ship reliable full-stack
                products — from interfaces to APIs, databases, and deployment.
              </p>
            </div>
            <Badge
              variant="outline"
              className="w-fit rounded-full border-gray-300 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.18em] text-gray-600 dark:border-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
            >
              {coreSkills.length} core skills
            </Badge>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">
                Primary Stack
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                What I Work With Daily
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Frontend frameworks, backend services, data, tooling, and design.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {coreSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} isDark={isDark} />
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-gray-200/80 bg-white/92 p-8 shadow-lg backdrop-blur-sm dark:border-gray-700/70 dark:bg-gray-800/92 sm:p-10">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">
                  Additional Experience
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Also Familiar With
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Languages I have used in academic work and earlier projects.
                </p>
              </div>
              <Badge
                variant="outline"
                className="w-fit rounded-full border-gray-300 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.18em] text-gray-600 dark:border-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
              >
                {otherSkills.length} languages
              </Badge>
            </div>

            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-200 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
