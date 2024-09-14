import React from "react";
import { FlipWords } from "../ui/flip-words";

export function Features() {
  const words = ["powerful", "scalable", "beautiful", "modern"];

  return (
    <div className="h-[30vh] flex items-center justify-center px-4">
      <div className="text-4xl font-normal text-white text-center">
        The most
        <FlipWords className="inline-block" words={words} /> <br />
        webapps built with NextJS
      </div>
    </div>
  );
}
