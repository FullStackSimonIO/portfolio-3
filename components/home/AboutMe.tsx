import React from "react";

const AboutMe = () => {
  return (
    <div>
      <section className="bg-primary">
        <div className="grid gap-8 py-8 px-4 mx-auto max-w-screen-xl sm:gap-16 lg:gap-20 md:grid-cols-2 lg:py-16 md:px-6">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400 mb-8">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-4xl">
              My Tech Stack:
            </h2>
            <p className="font-light lg:text-xl text-white/80">
              I always use the latest technologies to build my projects. Here is
              a small overview.
            </p>
          </div>
          <div className="grid text-xl grid-cols-2 gap-8 text-white/80 sm:gap-12 sm:grid-cols-3 ">
            <p className="flex items-center justify-between hover:text-accent">
              NextJS
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              ReactJS
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              TailwindCSS
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              ThreeJS
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              Framer Motion
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              Shadcn-UI
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              Aceternity-UI
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              PostgreSQL
            </p>
            <p className="flex items-center justify-between hover:text-accent">
              Prisma
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
