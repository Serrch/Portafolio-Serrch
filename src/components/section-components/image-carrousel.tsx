"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ImageDialog from "../image-dialog";
export default function ImageCarrousel({
  arrImagenes,
}: {
  arrImagenes: string[];
}) {
  return (
    <Carousel className="p-5">
      <CarouselContent className="w-full">
        {arrImagenes.map((imagen, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2">
            <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
              <ImageDialog name={`Captura ${index + 1}`} image={imagen}>
                <Image
                  src={imagen}
                  alt={`captura-${index}`}
                  fill
                  className="object-cover"
                />
              </ImageDialog>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
