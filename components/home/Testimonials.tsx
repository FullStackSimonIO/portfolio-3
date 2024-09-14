"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center relative overflow-hidden">
      <h1 className="text-3xl font-bold mb-8">Customers Feedback:</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    description:
      "I am so happy with the design of my new website. It is exactly what I wanted. I will definitely be coming back for more projects.",
    name: "Maria Zillinger",
    title: "High Quality Website for my Yoga Business",
  },
];
