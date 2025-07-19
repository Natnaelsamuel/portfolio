// "use client";
// import DecryptedText from "@/components/TextAnimations/DecryptedText/DecryptedText";
// import React from "react";

// const page = () => {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
//         <h2>About Me</h2>
//       <DecryptedText
//         text="Hey there! I'm Natnael Samuel, a full-stack developer and a soon-to-be
//             4th-year Computer Science student at Hawassa University. I build modern,
//             scalable web applications from front to back — turning ideas into clean,
//             functional, and responsive user experiences. My expertise spans both
//             frontend and backend development. I work with tools like React, Next.js,
//             Tailwind CSS, and TypeScript on the frontend, and Node.js, Express,
//             Prisma, and MySQL on the backend. I also have a strong eye for UI/UX
//             design, ensuring that everything I build is not only functional but
//             intuitive and user-friendly. I love solving problems, learning new
//             technologies, and collaborating with others. Whether I’m building solo
//             or working as part of a team, I take pride in writing clean,
//             maintainable code that delivers real value. I'm currently open to
//             opportunities that allow me to grow, contribute, and make meaningful
//             impact through technology."
//         speed={100}
//         maxIterations={10}
//         characters="7#3nQ9!xLp*K$vA5%mZ8&"
//         className="revealed"
//         animateOn="view"
//         parentClassName="all-letters"
//         encryptedClassName="encrypted"
//         revealDirection="end"
//       />
//     </div>
//   );
// };

"use client";
import Particles from "@/components/backgrounds/Particles/Particles";
import DecryptedText from "@/components/TextAnimations/DecryptedText/DecryptedText";

const page = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-black p-4 sm:p-8">
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
      <div className="w-full max-w-2xl bg-white dark:bg-black shadow-md dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] p-6 sm:p-8 z-51">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>

        <div className="prose prose-gray dark:prose-invert max-w-none text-justify">
          <DecryptedText
            text="Hey there! I'm Natnael Samuel, a full-stack developer. I build modern, scalable web applications from front to back turning ideas into clean, functional, and responsive user experiences. My expertise spans both frontend and backend development. I also have a strong eye for UI/UX design, ensuring that everything I build is not only functional but intuitive and user-friendly. I love solving problems, learning new technologies, and collaborating with others. Whether I'm building solo or working as part of a team, I take pride in writing clean, maintainable code that delivers real value. If there's an idea worth building, I'm all for it."
            speed={100}
            maxIterations={10}
            characters="7#3nQ9!xLp*K$vA5%mZ8&"
            className="revealed monospace"
            animateOn="view"
            parentClassName="all-letters"
            encryptedClassName="encrypted opacity-70"
            revealDirection="end"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
