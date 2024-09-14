import React from "react";
import { FlipWords } from "../ui/flip-words";
import { FeaturesCard } from "./FeaturesCard";
import { Button } from "../ui/button";
import { MailCheck } from "lucide-react";

const words = ["powerful", "scalable", "beautiful", "modern"];
const cards = [
  {
    number: "01",
    text: "Planning",
    description:
      "I will plan your project from the beginning until finish. We will talk about your ideas and make them real by using the latest technologies",
  },
  {
    number: "02",
    text: "Building",
    description:
      "After planning, I will start building your project as discussed previously. You will be granted with regular updates and previews",
  },
  {
    number: "03",
    text: "Marketing",
    description:
      "Last but not least, if you are interested in using professional marketing, we can discuss this as well. I will help you to reach your audience",
  },
];

export function Features() {
  return (
    <div className="h-auto flex flex-col items-center justify-center px-4 py-32">
      <div className="text-4xl font-normal text-white text-center">
        The most
        <FlipWords className="inline-block" words={words} />
        <br />
        webapps are built with NextJS
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8 text-center">
        {cards.map((card, index) => (
          <FeaturesCard key={index} {...card} />
        ))}
      </div>
      <Button className="flex flex-row uppercase mt-12 gap-4">
        <p className="">Book your free appointment</p>
        <MailCheck />
      </Button>
    </div>
  );
}
