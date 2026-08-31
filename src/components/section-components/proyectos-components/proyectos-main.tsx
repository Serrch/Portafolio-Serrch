"use client";
import { proyectosObj, proyectosPro } from "./proyectos-obj";
import GridProyectos from "./grid-proyectos";
import SectionHeading from "@/components/ui/section-heading";
export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="flex flex-col items-center justify-start pt-8 md:pt-12 md:pb-10 border-t scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Trabajo"
          title="Proyectos profesionales"
          meta={`${proyectosPro.length} proyectos`}
        />
        <div className="mt-8">
          <GridProyectos arrProyectos={proyectosPro} />
        </div>
        <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Proyectos personales
        </h3>
        <div className="mt-6">
          <GridProyectos arrProyectos={proyectosObj} horizontal />
        </div>
      </div>
    </section>
  );
}
