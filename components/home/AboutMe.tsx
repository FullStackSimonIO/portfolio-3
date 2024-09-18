import React from "react";
import { Button } from "../ui/button";
import { LinkPreview } from "../ui/link-preview";
import { Link } from "lucide-react";

const AboutMe = () => {
  return (
    <div>
      <section className="bg-primary">
        <div className="grid gap-8 py-8 px-4 mx-auto max-w-screen-xl sm:gap-16 lg:gap-20 md:grid-cols-2 lg:py-16 md:px-6">
          <div className="text-white sm:text-lg  mb-8">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-4xl">
              My Tech Stack:
            </h2>
            <p className="font-light lg:text-xl text-white/80">
              I always use the latest technologies to build my projects. Here is
              a small overview.
            </p>
            <div className="flex items-center justify-center pt-8">
              <Button>More about my Tech Stack & Skills</Button>
            </div>
          </div>
          <div className="grid text-xl grid-cols-2 gap-8 text-white/80 sm:gap-12 sm:grid-cols-3 ">
            <LinkPreview url="https://nextjs.org">
              <p className="flex items-center justify-between hover:text-accent">
                NextJS
              </p>
            </LinkPreview>
            <LinkPreview url="https://reactjs.org">
              <p className="flex items-center justify-between hover:text-accent">
                ReactJS
              </p>
            </LinkPreview>
            <LinkPreview url="https://tailwindcss.com">
              <p className="flex items-center justify-between hover:text-accent">
                TailwindCSS
              </p>
            </LinkPreview>
            <LinkPreview url="https://threejs.org">
              <p className="flex items-center justify-between hover:text-accent">
                ThreeJS
              </p>
            </LinkPreview>
            <LinkPreview url="https://framer.com">
              <p className="flex items-center justify-between hover:text-accent">
                Framer Motion
              </p>
            </LinkPreview>
            <LinkPreview url="https://ui.shadcn.com">
              <p className="flex items-center justify-between hover:text-accent">
                Shadcn-UI
              </p>
            </LinkPreview>
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
