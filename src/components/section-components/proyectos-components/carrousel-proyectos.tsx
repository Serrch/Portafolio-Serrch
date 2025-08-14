import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProyectos2 from "./card-proyectos2";
import { proyectosObj } from "./proyectos-obj";

export default function CarrouselProyectos() {
  return (
    <Carousel className="">
      <CarouselContent className="w-full">
        {proyectosObj.map((proyecto, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2">
            <CardProyectos2 proyectoObj={proyecto} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
