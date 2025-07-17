"use client";
import DotGrid from "@/components/backgrounds/DotGrid/DotGrid";
import Particles from "@/components/backgrounds/Particles/Particles";
import RippleGrid from "@/components/backgrounds/RippleGrid/RippleGrid";
import Squares from "@/components/backgrounds/Squares/Squares";
import FuzzyText from "@/components/TextAnimations/FuzzyText/FuzzyText";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <DotGrid
          dotSize={2}
          gap={24}
          baseColor="#aaa"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        /> */}
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-50 flex flex-col gap-1 items-center justify-center h-full text-black dark:text-white text-center">
        <h1 className="text-5xl font-bold mb-4 dark:text-white">
          Hi,
          <FuzzyText
            baseIntensity={0.4}
            hoverIntensity={0.1}
            enableHover={true}
            fontSize={"3.7rem"}
            color={theme === "dark" ? "#fff" : "#000"}
            fontWeight={700}
          >
            I'm Natnael Samuel
          </FuzzyText>
        </h1>
        <p className="text-xl mb-3">Full-Stack Developer | UI Enthusiast</p>
        <Button variant="default">About me</Button>
      </div>
    </div>
  );
};

export default Hero;
