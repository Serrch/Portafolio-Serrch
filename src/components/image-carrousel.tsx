"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImagenZoom from "./image-zoom";
export default function ImageCarrousel({
  arrImagenes,
  alt,
}: {
  arrImagenes: string[];
  alt: string;
}) {
  return (
    <Carousel className="p-5 ">
      <CarouselContent className="">
        {arrImagenes.map((imagen, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2">
            <ImagenZoom src={imagen} alt={`Captura-${alt}-${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
