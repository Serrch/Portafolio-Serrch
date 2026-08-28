import Image from "next/image";
import Pill from "@/components/ui/pill";
import { CardTypes } from "@/types/sobre-mi-types/card-types";

// Igualar el alto no sirve: un wordmark horizontal ocupa mucha mas superficie
// que un logo cuadrado. Se iguala el area, que es lo que el ojo compara.
const AREA = 6400;

const medidas = (ratio: number) => {
  const height = Math.round(Math.sqrt(AREA / ratio));
  return { width: Math.round(height * ratio), height };
};

export default function ExperienciaList({
  experiencias,
}: {
  experiencias: CardTypes[];
}) {
  return (
    <ol className="divide-y divide-border">
      {experiencias.map((exp) => {
        const actual = exp.endDate === "Actualidad";
        return (
          <li
            key={exp.title}
            className="grid gap-5 py-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10"
          >
            <div>
              <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full ${
                    actual ? "bg-brand" : "bg-muted-foreground/50"
                  }`}
                />
                {exp.stDate}
                {exp.endDate}
              </p>
              <div className="mt-4 flex h-20 w-full max-w-52 items-center">
                <Image
                  src={exp.img}
                  alt={exp.title}
                  {...medidas(exp.logoRatio)}
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight">{exp.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {exp.cargo}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <Pill key={tech} tech={tech} />
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
