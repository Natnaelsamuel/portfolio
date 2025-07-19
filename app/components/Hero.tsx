// "use client";
// import Particles from "@/components/backgrounds/Particles/Particles";
// import FuzzyText from "@/components/TextAnimations/FuzzyText/FuzzyText";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
// import { ArrowRight } from "lucide-react";

// const Hero = () => {
//   const { theme } = useTheme();
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         {/* <DotGrid
//           dotSize={2}
//           gap={24}
//           baseColor="#aaa"
//           activeColor="#5227FF"
//           proximity={120}
//           shockRadius={250}
//           shockStrength={5}
//           resistance={750}
//           returnDuration={1.5}
//         /> */}
//         <Particles
//           particleColors={["#ffffff", "#ffffff"]}
//           particleCount={500}
//           particleSpread={10}
//           speed={0.5}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>

//       <div className="relative z-50 flex flex-col gap-1 items-center justify-center h-full text-black dark:text-white text-center">
//         <h1 className="text-5xl mb-4 dark:text-white">
//           Hi,
//           <FuzzyText
//             baseIntensity={0.2}
//             hoverIntensity={0.1}
//             enableHover={true}
//             fontSize={"3.5rem"}
//             color={theme === "dark" ? "#fff" : "#000"}
//             fontWeight={500}
//           >
//             I&apos;m Natnael Samuel
//           </FuzzyText>
//         </h1>
//         <p className="text-xl mb-3">Full-Stack Developer | UI Enthusiast</p>
//         <Button variant="default">About me <ArrowRight/></Button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import Particles from "@/components/backgrounds/Particles/Particles";
import FuzzyText from "@/components/TextAnimations/FuzzyText/FuzzyText";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ArrowRight } from "lucide-react";
import { useWindowSize } from 'react-use';

const Hero = () => {
  const { theme } = useTheme();
  const { width } = useWindowSize();

  // Calculate responsive font size
  const getFontSize = () => {
    if (width < 640) return "2.3rem";    // mobile
    if (width < 768) return "3rem";  // sm
    if (width < 1024) return "3.5rem";   // md
    return "3.5rem";                   // lg
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
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

      <div className="relative z-50 flex flex-col gap-1 items-center justify-center h-full text-black dark:text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 dark:text-white">
          Hi,
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.1}
            enableHover={true}
            fontSize={getFontSize()}
            color={theme === "dark" ? "#fff" : "#000"}
            fontWeight={500}
          >
            I&apos;m Natnael Samuel
          </FuzzyText>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-3">
          Full-Stack Developer | UI Enthusiast
        </p>
        <Button variant="default" className="text-sm sm:text-base">
          About me <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
        </Button>
      </div>
    </div>
  );
};

export default Hero;