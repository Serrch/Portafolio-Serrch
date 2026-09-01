import { proyectosObj, proyectosPro } from "./proyectos-obj";
import GridProyectos from "./grid-proyectos";
import SectionHeading from "@/components/ui/section-heading";
import { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export default function Proyectos({ locale }: { locale: Locale }) {
  const t = ui[locale].secciones.proyectos;

  return (
    <section
      id="proyectos"
      className="flex flex-col items-center justify-start pt-8 md:pt-12 md:pb-10 border-t scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow={t.eyebrow}
          title={t.title}
          meta={`${proyectosPro.length} ${t.meta}`}
        />
        <div className="mt-8">
          <GridProyectos arrProyectos={proyectosPro} />
        </div>
        <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {t.personales}
        </h3>
        <div className="mt-6">
          <GridProyectos arrProyectos={proyectosObj} horizontal />
        </div>
      </div>
    </section>
  );
}
