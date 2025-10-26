"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Particles from "@/components/backgrounds/Particles/Particles";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts and interactive maps.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-demo.netlify.app",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations and dark mode support.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://natnael-portfolio.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Chat Application",
    description:
      "Real-time chat application with user authentication and file sharing capabilities.",
    technologies: ["React", "Socket.io", "Express", "JWT", "Multer"],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-demo.herokuapp.com",
    featured: false,
  },
  {
    id: 6,
    title: "Blog CMS",
    description:
      "A content management system for blogs with markdown support and SEO optimization.",
    technologies: ["Next.js", "MDX", "Sanity", "Vercel", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/blog-cms",
    liveUrl: "https://blog-cms-demo.vercel.app",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3">
              My <span className="text-emerald-gradient">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of my recent work showcasing full-stack development
              skills, modern technologies, and creative problem-solving.
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12">
        {/* Featured Projects */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-40 bg-emerald-gradient-light flex items-center justify-center">
                    <div className="text-white text-3xl font-bold opacity-80">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-32 bg-emerald-gradient-light flex items-center justify-center">
                    <div className="text-white text-2xl font-bold opacity-80">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
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
