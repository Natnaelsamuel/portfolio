"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Toggle directly between light and dark. Use effective theme when mounted
  const handleClick = () => {
    const current = mounted
      ? resolvedTheme ?? theme ?? "light"
      : theme ?? "light";
    setTheme(current === "dark" ? "light" : "dark");
  };

  // Avoid hydration mismatches: don't render client-only resolvedTheme-dependent
  // attributes/classes until after mount. Render generic labels on server.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // resolvedTheme gives the actual applied theme (light|dark) when theme === 'system'
  const effective = mounted ? resolvedTheme ?? theme ?? "light" : undefined;

  // Only color and subtle glow — remove ring classes so no green box appears
  const sunGlow =
    mounted && effective === "light"
      ? "text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.18)]"
      : "";
  const moonGlow =
    mounted && effective === "dark"
      ? "text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.18)]"
      : "";

  // Use generic labels until mounted to avoid server/client mismatch
  const aria = mounted
    ? `Toggle theme (current: ${theme ?? "system"})`
    : "Toggle theme";
  const title = mounted
    ? `Theme: ${theme ?? "system"} — click to change`
    : "Toggle theme";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={aria}
      title={title}
      className="relative inline-flex items-center justify-center w-9 h-9 p-0 bg-transparent border-0 rounded-none focus:outline-none cursor-pointer hover:cursor-pointer"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 ${sunGlow}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 ${moonGlow}`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
