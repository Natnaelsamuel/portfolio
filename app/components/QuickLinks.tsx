"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  Download,
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

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Natnaelsamuel",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/natnael-samuel-a321bb336/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/Natnael_sam",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nat_t_x/",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:natisami901@gmail.com",
    label: "Email",
  },
];

const QuickLinks = () => {
  const pathname = usePathname();
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

  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div ref={socialRef} className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-lg scale-125 transition-all duration-300 group-hover:bg-emerald-500/20" />

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
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="relative group/social"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:scale-105 hover:border-emerald-500 dark:border-gray-700 dark:bg-gray-800">
                  <Icon className="h-5 w-5 text-gray-700 transition-colors duration-200 group-hover/social:text-emerald-500 dark:text-gray-300" />
                </div>
              </a>
            ))}

            <a
              href="/Natnael-Samuel-Resume.pdf"
              download="Natnael-Samuel-Resume.pdf"
              aria-label="Download CV"
              className="relative group/social"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:scale-105 hover:border-emerald-500 dark:border-gray-700 dark:bg-gray-800">
                <Download className="h-5 w-5 text-gray-700 transition-colors duration-200 group-hover/social:text-emerald-500 dark:text-gray-300" />
              </div>
            </a>
          </div>
        </div>

        <button
          onClick={() => setSocialOpen((s) => !s)}
          aria-expanded={socialOpen}
          aria-label="Toggle quick links"
          className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-emerald-500 dark:border-gray-700 dark:bg-gray-800"
        >
          <FidgetSpinner />
        </button>
      </div>
    </div>
  );
};

export default QuickLinks;
