"use client";
import Image from "next/image";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";
import GithubButton from "../github-button";
import RedirectButton from "../redirect-button";
import Pill from "@/components/ui/pill";
import { techLabel } from "@/lib/tech-label";

export default function CardProyectos2({
  proyectoObj,
  horizontal = false,
}: {
  proyectoObj: CardProyectoTypes;
  horizontal?: boolean;
}) {
  const terminado = proyectoObj.status === "Terminado";

  const media = (
    <div
      className={
        horizontal
          ? "relative border-r border-border"
          : "relative aspect-[16/10] w-full border-b border-border"
      }
    >
      <Image
        src={proyectoObj.img}
        alt={`Captura de ${proyectoObj.title}`}
        fill
        sizes={
          horizontal
            ? "192px"
            : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
        }
        className="object-cover"
      />
    </div>
  );

  const cuerpo = (
    <div className="flex flex-1 flex-col p-5">
      <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${
            terminado ? "bg-brand" : "bg-amber-400"
          }`}
        />
        {proyectoObj.status}
      </p>

      <h3 className="mt-3 text-xl font-bold tracking-tight">
        {proyectoObj.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {proyectoObj.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {proyectoObj.techStack.map((tech) => (
          <Pill key={tech}>{techLabel(tech)}</Pill>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-5 pt-5">
        {proyectoObj.detailPage ? (
          <RedirectButton
            link={proyectoObj.detailPage}
            onClick={() =>
              window.umami?.track("ver-proyecto", {
                proyecto: proyectoObj.title,
              })
            }
          />
        ) : (
          <span className="text-sm text-muted-foreground">En desarrollo</span>
        )}
        {proyectoObj.githubLink && (
          <GithubButton
            link={proyectoObj.githubLink}
            variant="link"
            onClick={() =>
              window.umami?.track("ver-github", { proyecto: proyectoObj.title })
            }
          />
        )}
      </div>
    </div>
  );

  return horizontal ? (
    <article className="grid grid-cols-[8rem_minmax(0,1fr)] overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-[12rem_minmax(0,1fr)]">
      {media}
      {cuerpo}
    </article>
  ) : (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      {media}
      {cuerpo}
    </article>
  );
}
