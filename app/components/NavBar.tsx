"use client";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white text-black rounded-full shadow-black shadow-xl w-3xl sm:w-4/6 fixed z-[51] top-8 mx-auto left-0 right-0 dark:bg-black dark:shadow-white dark:shadow-md dark:text-white">
      <div>Logo</div>
      <div>Home</div>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
