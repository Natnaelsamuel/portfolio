"use client";

import { useTheme } from "next-themes";
import Particles from "@/components/backgrounds/Particles/Particles";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const contactRows = [
  {
    icon: Mail,
    label: "Email",
    value: "natisami901@gmail.com",
    href: "mailto:natisami901@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 941264520",
    href: "tel:+251941264520",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Natnaelsamuel" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/natnael-samuel-a321bb336/",
  },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/Natnael_sam" },
];

export default function Contact() {
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

      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-32">
        <div className="rounded-[28px] border border-gray-200/80 bg-white/92 p-8 shadow-lg backdrop-blur-sm dark:border-gray-700/70 dark:bg-gray-800/92 sm:p-10">
          <div className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">
              Contact
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
              Open to collaborations, freelance work, and thoughtful project
              conversations. The best way to reach me is by email.
            </p>
          </div>

          <div className="divide-y divide-gray-200/80 dark:divide-gray-700/70">
            {contactRows.map(({ icon: Icon, label, value, href }) => {
              const row = (
                <div className="group flex items-center justify-between gap-6 py-5">
                  <div className="flex items-center gap-4">
                    <Icon className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
                        {label}
                      </p>
                      <p className="mt-1 font-display text-base font-medium text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 sm:text-lg">
                        {value}
                      </p>
                    </div>
                  </div>
                  {href ? (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500 dark:text-gray-600 dark:group-hover:text-emerald-400" />
                  ) : null}
                </div>
              );

              return href ? (
                <a key={label} href={href} className="block">
                  {row}
                </a>
              ) : (
                <div key={label}>{row}</div>
              );
            })}
          </div>

          <div className="mt-10 border-t border-gray-200/80 pt-8 dark:border-gray-700/70">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
              Social
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/60 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-gray-700/70 dark:bg-gray-900/30 dark:text-gray-300 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-300"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-gray-200/80 pt-8 sm:flex-row dark:border-gray-700/70">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-emerald-gradient px-8 font-display text-white shadow-emerald hover-emerald"
            >
              <a href="mailto:natisami901@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send an email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-gray-300 bg-white/80 px-8 font-display text-gray-800 dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-200"
            >
              <Link href="/projects" className="flex items-center gap-2">
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Prefer to learn more first?{" "}
          <Link
            href="/about"
            className="font-medium text-gray-700 underline-offset-4 transition-colors hover:text-emerald-600 hover:underline dark:text-gray-300 dark:hover:text-emerald-400"
          >
            Read about me
          </Link>
        </p>
      </div>
    </div>
  );
}
