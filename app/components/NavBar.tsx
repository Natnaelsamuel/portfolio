"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`flex items-center justify-between
        bg-background/80 backdrop-blur-md text-foreground
        rounded-full shadow-lg border border-gray-200/20 dark:border-gray-800/20
        fixed top-4 z-[52] transition-all duration-300
        w-[calc(100%-2rem)] max-w-4xl
        left-1/2 -translate-x-1/2
        px-6 py-3
        ${
          isScrolled
            ? "shadow-xl bg-background/95"
            : "shadow-lg bg-background/80"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group">
          <span className="text-3xl font-bold text-emerald-500 group-hover:text-emerald-600 transition-colors duration-200 font-display tracking-tight">
            N
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-gradient group-hover:w-full transition-all duration-300"></span>
              </Button>
            </Link>
          ))}
          <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-700">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="rounded-b-lg pt-16 z-[52] bg-background/95 backdrop-blur-md border-gray-200/20 dark:border-gray-800/20"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
