import CardProyectos2 from "./card-proyectos2";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

// Misma firma que CarrouselProyectos: cambiar de uno a otro es cambiar el import.
export default function GridProyectos({
  arrProyectos,
}: {
  arrProyectos: CardProyectoTypes[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {arrProyectos.map((proyecto) => (
        <CardProyectos2 key={proyecto.title} proyectoObj={proyecto} />
      ))}
    </div>
  );
}
