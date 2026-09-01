import CardProyectos2 from "./card-proyectos2";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

// Misma firma que CarrouselProyectos: cambiar de uno a otro es cambiar el import.
export default function GridProyectos({
  arrProyectos,
  horizontal = false,
}: {
  arrProyectos: CardProyectoTypes[];
  horizontal?: boolean;
}) {
  return (
    <div
      className={`grid gap-5 ${
        horizontal ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {arrProyectos.map((proyecto) => (
        <CardProyectos2
          key={proyecto.title.es}
          proyectoObj={proyecto}
          horizontal={horizontal}
        />
      ))}
    </div>
  );
}
