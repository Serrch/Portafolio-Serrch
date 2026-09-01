"use client";
import Image from "next/image";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";
import GithubButton from "../github-button";
import RedirectButton from "../redirect-button";
import Pill from "@/components/ui/pill";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";

export default function CardProyectos2({
  proyectoObj,
  horizontal = false,
}: {
  proyectoObj: CardProyectoTypes;
  horizontal?: boolean;
}) {
  const locale = useLocale();
  const t = ui[locale];
  const terminado = proyectoObj.status === "done";
  // Las rutas internas se guardan sin idioma; el enlace lo lleva al actual.
  const destino = proyectoObj.detailPage.startsWith("http")
    ? proyectoObj.detailPage
    : `/${locale}${proyectoObj.detailPage}`;

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
        alt={`${t.secciones.proyectos.captura} ${proyectoObj.title[locale]}`}
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
        {t.estado[proyectoObj.status]}
      </p>

      <h3 className="mt-3 text-xl font-bold tracking-tight">
        {proyectoObj.title[locale]}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {proyectoObj.description[locale]}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {proyectoObj.techStack.map((tech) => (
          <Pill key={tech} tech={tech} />
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-5 pt-5">
        {proyectoObj.detailPage ? (
          <RedirectButton
            link={destino}
            onClick={() =>
              window.umami?.track("ver-proyecto", {
                proyecto: proyectoObj.title.es,
              })
            }
          />
        ) : (
          <span className="text-sm text-muted-foreground">
            {t.secciones.proyectos.enDesarrollo}
          </span>
        )}
        {proyectoObj.githubLink && (
          <GithubButton
            link={proyectoObj.githubLink}
            variant="link"
            onClick={() =>
              window.umami?.track("ver-github", { proyecto: proyectoObj.title.es })
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
