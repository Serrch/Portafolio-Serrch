"use client";
import { proyectosObj, proyectosPro } from "./proyectos-obj";
import CarrouselProyectos from "./carrousel-proyectos";
export default function Proyectos() {
  return (
    <section
      id="3"
      className="min-h-screen snap-start flex flex-col items-center justify-start pt-8 md:pt-30 md:pb-10 border-t
  md:max-h-screen md:overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-gray-400 md:scrollbar-track-transparent md:scrollbar-thumb-rounded-full"
    >
      <div className="grid grid-cols-1 gap-4 max-w-6xl w-full px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-start">
            Proyectos profesionales
          </h2>
          <CarrouselProyectos arrProyectos={proyectosPro} />
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-4xl font-bold text-start">
            Proyectos personales
          </h2>
          <CarrouselProyectos arrProyectos={proyectosObj} />
        </div>
        <p className="md:hidden text-center text-sm md:text-xl md:pb-2">
          Desliza a la derecha para ver más.
        </p>
      </div>
    </section>
  );
}
