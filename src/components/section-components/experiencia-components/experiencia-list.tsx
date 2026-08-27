import Image from "next/image";
import Pill from "@/components/ui/pill";
import { techLabel } from "@/lib/tech-label";
import { CardTypes } from "@/types/sobre-mi-types/card-types";

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
              <div className="relative mt-4 h-10 w-32">
                <Image
                  src={exp.img}
                  alt={exp.title}
                  fill
                  sizes="128px"
                  className="object-contain object-left"
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
                  <Pill key={tech}>{techLabel(tech)}</Pill>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
