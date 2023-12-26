"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export const Presentation = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      className="relative w-3/5"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="relative h-screen">
        <CarouselItem className="relative">
          <Image
            className="object-cover"
            fill={true}
            src="/photo.png"
            alt="1"
          />
        </CarouselItem>
        <CarouselItem className="relative">
          <Image
            className="object-cover"
            fill={true}
            src="/photo.png"
            alt="1"
          />
        </CarouselItem>
        <CarouselItem className="relative">
          <Image
            className="object-cover"
            fill={true}
            src="/photo.png"
            alt="1"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute my-auto left-8" />
      <CarouselNext className="absolute my-auto right-8" />
    </Carousel>
  );
};
