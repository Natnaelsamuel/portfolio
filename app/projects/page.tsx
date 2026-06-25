"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lock } from "lucide-react";
import Particles from "@/components/backgrounds/Particles/Particles";

const projects = [
  {
    id: 1,
    title: "Figa LLC",
    description:
      "A caregiver platform connecting families with trusted caregivers through a clear, service-focused web experience.",
    technologies: ["Next.js", "PostgreSQL"],
    githubUrl: "https://github.com/DEVS-INT/FIGA.git",
    liveUrl: "https://figa-seven.vercel.app",
    label: "Featured",
    image: "/projects/figa-llc.png",
    featured: true,
  },
  {
    id: 2,
    title: "BTTS",
    description:
      "A bus ticketing and tracking system built for trip discovery, booking flows, and travel management across a modern interface.",
    technologies: ["React", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/Natnaelsamuel/BTTS.git",
    liveUrl: "",
    label: "Backend",
    image: "/projects/btts.png",
    featured: true,
  },
  {
    id: 3,
    title: "Game Hub",
    description:
      "A responsive game discovery app for browsing titles, filtering genres, and exploring ratings in a polished dark interface.",
    technologies: ["React"],
    githubUrl: "https://github.com/Natnaelsamuel/Game-Hub.git",
    liveUrl: "https://game-hub-alpha-pearl.vercel.app",
    label: "Frontend",
    image: "/projects/gamehub.png",
    featured: false,
  },
  {
    id: 4,
    title: "SMS",
    description:
      "A school management system built as my final-year university project for Ethiopian high schools, focused on structured academic workflows and role-based access.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "https://front-end-q87h.vercel.app/",
    label: "Private Code",
    image: "/projects/sms.png",
    featured: false,
  },
];

export default function Projects() {
  const { theme, resolvedTheme } = useTheme();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const effectiveTheme = resolvedTheme ?? theme ?? "light";
  const isDark = effectiveTheme === "dark";

  return (
    <div className="min-h-screen bg-background">
      {/* Particles Background */}
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-32">
        <div className="mb-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">
                Selected Work
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                A small selection of work that reflects how I design and build
                products.
              </p>
            </div>
            <Badge
              variant="outline"
              className="hidden rounded-full border-gray-300 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.18em] text-gray-600 dark:border-gray-700 dark:bg-gray-900/30 dark:text-gray-300 sm:inline-flex"
            >
              4 projects
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden rounded-[28px] border border-gray-200/80 bg-white/92 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-700/70 dark:bg-gray-800/92"
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/80">
                        {project.technologies.join(" • ")}
                      </p>
                      <div className="text-4xl font-semibold tracking-tight">
                        {project.title}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-white backdrop-blur">
                      {project.label}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-700/70 dark:text-gray-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-emerald-600 px-5 hover:bg-emerald-700"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live demo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled
                        className="rounded-full px-5"
                      >
                        Live demo unavailable
                      </Button>
                    )}

                    {project.githubUrl ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full px-5"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Source code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled
                        className="rounded-full px-5"
                      >
                        <Lock className="mr-2 h-4 w-4" />
                        Private repository
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">
              Additional Work
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              More Work
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Additional projects that show range across interface work and
              backend-heavy systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden rounded-[28px] border border-gray-200/80 bg-white/92 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700/70 dark:bg-gray-800/92"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/75">
                        {project.label}
                      </p>
                      <div className="text-2xl font-semibold">{project.title}</div>
                    </div>
                    <Badge className="rounded-full border border-white/20 bg-white/15 text-white backdrop-blur">
                      {project.technologies.length} stack
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-700/70 dark:text-gray-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </a>
                      </Button>
                    ) : null}

                    {project.githubUrl ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled className="rounded-full">
                        <Lock className="mr-2 h-3.5 w-3.5" />
                        Private
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
