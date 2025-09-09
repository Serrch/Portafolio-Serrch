"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProyectos2 from "./card-proyectos2";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

export default function CarrouselProyectos({
  arrProyectos,
}: {
  arrProyectos: CardProyectoTypes[];
}) {
  return (
    <Carousel className="p-5 ">
      <CarouselContent className="w-full">
        {arrProyectos.map((arrProyectos, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2">
            <CardProyectos2 proyectoObj={arrProyectos} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`${arrProyectos.length > 2 ? "" : "md:hidden"}`}
      />
      <CarouselNext
        className={`${arrProyectos.length > 2 ? "" : "md:hidden"}`}
      />
    </Carousel>
  );
}
