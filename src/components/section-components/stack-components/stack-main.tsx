import SectionHeading from "@/components/ui/section-heading";
import { languageObj, frameworkObj, databaseObj, otrosObj } from "./tech-obj";
import Pill from "@/components/ui/pill";

const CATEGORIAS = [
  { label: "Lenguajes", techs: languageObj },
  { label: "Frameworks y librerías", techs: frameworkObj },
  { label: "Bases de datos", techs: databaseObj },
  { label: "Herramientas y entorno", techs: otrosObj },
];

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="05" eyebrow="Herramientas" title="Tech stack" />

        <div className="mt-4 divide-y divide-border">
          {CATEGORIAS.map((categoria) => (
            <div
              key={categoria.label}
              className="grid gap-3 py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start md:gap-8"
            >
              <h3 className="font-semibold">{categoria.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {categoria.techs.map((tech) => (
                  <Pill key={tech.name} tech={tech.name} interactive />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Toca cualquier tecnología para ver cómo la uso.
        </p>
      </div>
    </section>
  );
}
