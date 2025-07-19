import ScrollFloat from "@/components/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/TextAnimations/ScrollReveal/ScrollReveal";
import React from "react";

const About = () => {
  return (
    <div className="h-full text-black dark:text-white text-center max-h-screen mx-auto py-10">
      {/* <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Hey there! I'm Natnael Samuel, a full-stack developer and a soon-to-be
            4th-year Computer Science student at Hawassa University. I build modern,
            scalable web applications from front to back — turning ideas into clean,
            functional, and responsive user experiences. My expertise spans both
            frontend and backend development. I work with tools like React, Next.js,
            Tailwind CSS, and TypeScript on the frontend, and Node.js, Express,
            Prisma, and MySQL on the backend. I also have a strong eye for UI/UX
            design, ensuring that everything I build is not only functional but
            intuitive and user-friendly. I love solving problems, learning new
            technologies, and collaborating with others. Whether I’m building solo
            or working as part of a team, I take pride in writing clean,
            maintainable code that delivers real value. I'm currently open to
            opportunities that allow me to grow, contribute, and make meaningful
            impact through technology.
          </ScrollReveal> */}
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="font-light text-black text-sm sm:text-xl"
        containerClassName="rounded-lg max-w-xl mx-auto px-4 py-16"
      >
        Hey there! I'm Natnael Samuel, a full-stack developer and a soon-to-be
        4th-year Computer Science student at Hawassa University. I build modern,
        scalable web applications from front to back — turning ideas into clean,
        functional, and responsive user experiences. My expertise spans both
        frontend and backend development. I work with tools like React, Next.js,
        Tailwind CSS, and TypeScript on the frontend, and Node.js, Express,
        Prisma, and MySQL on the backend. I also have a strong eye for UI/UX
        design, ensuring that everything I build is not only functional but
        intuitive and user-friendly. I love solving problems, learning new
        technologies, and collaborating with others. Whether I’m building solo
        or working as part of a team, I take pride in writing clean,
        maintainable code that delivers real value. I'm currently open to
        opportunities that allow me to grow, contribute, and make meaningful
        impact through technology.
      </ScrollFloat>
    </div>
  );
};

export default About;
