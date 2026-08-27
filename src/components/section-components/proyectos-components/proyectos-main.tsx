"use client";
import { proyectosObj, proyectosPro } from "./proyectos-obj";
import GridProyectos from "./grid-proyectos";
export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="flex flex-col items-center justify-start pt-8 md:pt-12 md:pb-10 border-t scroll-mt-28"
    >
      <div className="grid grid-cols-1 gap-4 max-w-6xl w-full px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-start">
            Proyectos profesionales
          </h2>
          <GridProyectos arrProyectos={proyectosPro} />
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-4xl font-bold text-start">
            Proyectos personales
          </h2>
          <GridProyectos arrProyectos={proyectosObj} />
        </div>
      </div>
    </section>
  );
}
