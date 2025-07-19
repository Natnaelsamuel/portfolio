"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-3 bg-background text-foreground rounded-full shadow-xl w-[90%] sm:w-4/6 md:w-3/5 lg:w-2/5 fixed z-[52] top-4 left-1/2 -translate-x-1/2 dark:shadow-secondary">
        <div className="font-bold">Logo</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/"><Button variant="link">Home</Button></Link>
          <Link href="/about"><Button variant="link">About</Button></Link>
          <Link href="/skills"><Button variant="link">Skills</Button></Link>
          <Button variant="link">Contact</Button>
          <ModeToggle />
        </div>
        
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="rounded-b-lg pt-16 z-[52]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-4">
                <SheetClose asChild>
                  <Link href='/'>
                    <Button variant="ghost" className="w-full justify-start">Home</Button>
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link href='/about'>
                    <Button variant="ghost" className="w-full justify-start">About</Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href='/skills'>
                    <Button variant="ghost" className="w-full justify-start">Skills</Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Button variant="ghost" className="w-full justify-start">Contact</Button>
                </SheetClose>
                
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <span>Theme</span>
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default NavBar;