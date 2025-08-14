import CardProyectos2 from "./card-proyectos2";
import { proyectosObj } from "./proyectos-obj";
import CarrouselProyectos from "./carrousel-proyectos";
export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="md:min-h-screen snap-start flex flex-col items-center justify-center pt-8  md:py-40  border-t"
    >
      <div className="grid grid-cols-1 gap-4 md:w-6xl justify-center ">
        <h2 className="text-4xl font-bold text-start">Proyectos</h2>
        <CarrouselProyectos />
        <p className="md:hidden text-center text-sm md:text-xl md:pb-2 justify-center">
          Desliza a la derecha para ver mas.
        </p>
      </div>
    </section>
  );
}
