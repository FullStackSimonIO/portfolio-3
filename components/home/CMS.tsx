"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg",
  "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg",
  "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-light.svg",
];

const CMS = () => {
  return (
    <section className="bg-primary py-12">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Carousel className="w-full max-w-xs md:max-w-md mx-auto">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-transparent">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      src={src}
                      alt={`CMS Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="mt-8 md:mt-0">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-accent">
            Need a CMS for your website?
          </h2>
          <p className="mb-6 font-light text-white/80 md:text-lg">
            Get a custom{" "}
            <span className="text-accent">Content Management System</span>{" "}
            integration for your website and manage your content easily with
            your team. Our solution provides a seamless experience for content
            creators and developers alike.
          </p>
          <Button className="w-full md:w-auto">Live Example here</Button>
        </div>
      </div>
    </section>
  );
};

export default CMS;
