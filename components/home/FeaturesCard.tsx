import React from "react";
import { EvervaultCard } from "@/components/ui/everfault-card";

export function FeaturesCard({
  number,
  text,
  description,
}: {
  number: string;
  text: string;
  description: string;
}) {
  return (
    <div className="flex flex-col  max-w-sm mx-auto p-4 relative h-[30rem]">
      <EvervaultCard
        number={number}
        text={text}
        className="flex items-center justify-center"
      />

      <h2 className=" text-white/60 mt-4 text-sm font-light">{description}</h2>
    </div>
  );
}
