"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ArrowRight, Mail, Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

function isNavItemActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed left-1/2 top-4 z-[52] flex w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border border-gray-200/20 bg-background/80 px-6 py-3 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 dark:border-gray-800/20",
        isScrolled ? "bg-background/95 shadow-xl" : "bg-background/80",
      )}
    >
      <Link href="/" className="group">
        <span className="font-display text-3xl font-bold tracking-tight text-emerald-500 transition-colors duration-200 group-hover:text-emerald-600">
          N
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => {
          const isActive = isNavItemActive(item.href, pathname);

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-emerald-gradient transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Button>
            </Link>
          );
        })}
        <div className="ml-2 border-l border-gray-200 pl-2 dark:border-gray-700">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center gap-1 md:hidden">
        <ModeToggle />
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="h-9 w-9 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full flex-col border-gray-200/60 bg-white p-0 shadow-2xl dark:border-gray-800/60 dark:bg-gray-950 sm:max-w-sm [&>button]:hidden"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex items-center justify-between border-b border-gray-200/80 px-6 py-5 dark:border-gray-800/80">
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Natnael Samuel
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                  Portfolio
                </p>
              </div>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close menu"
                  className="h-9 w-9 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = isNavItemActive(item.href, pathname);

                  return (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "group flex items-center justify-between rounded-2xl border px-4 py-4 transition-all duration-300",
                            isActive
                              ? "border-emerald-200/80 bg-emerald-50/90 dark:border-emerald-800/60 dark:bg-emerald-900/20"
                              : "border-transparent hover:border-gray-200/80 hover:bg-gray-50/90 dark:hover:border-gray-800/80 dark:hover:bg-gray-900/50",
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={cn(
                                "font-mono text-xs tabular-nums tracking-wider",
                                isActive
                                  ? "text-emerald-600 dark:text-emerald-400"
                                  : "text-gray-400 dark:text-gray-500",
                              )}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={cn(
                                "font-display text-base font-medium tracking-tight transition-colors",
                                isActive
                                  ? "text-emerald-700 dark:text-emerald-300"
                                  : "text-gray-800 group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white",
                              )}
                            >
                              {item.label}
                            </span>
                          </div>
                          <ArrowRight
                            className={cn(
                              "h-4 w-4 transition-all duration-300",
                              isActive
                                ? "translate-x-0 text-emerald-500 opacity-100"
                                : "-translate-x-1 text-gray-300 opacity-0 group-hover:translate-x-0 group-hover:text-emerald-500 group-hover:opacity-100 dark:text-gray-600",
                            )}
                          />
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-gray-200/80 px-6 py-5 dark:border-gray-800/80">
              <SheetClose asChild>
                <a
                  href="mailto:natisami901@gmail.com"
                  className="mb-4 flex items-center justify-center gap-2 rounded-full bg-emerald-gradient px-5 py-3 text-sm font-medium text-white shadow-emerald transition-all duration-300 hover-emerald font-display"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </SheetClose>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                Based in Addis Ababa, Ethiopia
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
