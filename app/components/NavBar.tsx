'use client';
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white text-black border border-gray-500 rounded-full shadow-lg w-3xl fixed z-[51] top-8 mx-auto left-0 right-0 dark:bg-black dark:text-white dark:border-white">
      <div>Logo</div>
      <div>Links</div>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
