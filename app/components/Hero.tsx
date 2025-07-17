"use client";
import DotGrid from "@/components/backgrounds/DotGrid/DotGrid";
import RippleGrid from "@/components/backgrounds/RippleGrid/RippleGrid";
import Squares from "@/components/backgrounds/Squares/Squares";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DotGrid
            dotSize={2}
            gap={24}
            baseColor="#aaa"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
      </div>

      <div className="relative z-50 flex flex-col items-center justify-center h-full text-black dark:text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Natnael Samuel</h1>
        <p className="text-xl">Full-Stack Developer | UI Enthusiast</p>
      </div>
    </div>
  );
};

export default Hero;
