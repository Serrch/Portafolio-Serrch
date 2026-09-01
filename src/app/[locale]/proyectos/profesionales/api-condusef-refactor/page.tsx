import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Dato,
  ProyectoHeader,
  Puntos,
  Seccion,
} from "@/components/proyectos-components/proyecto-page";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import { isLocale } from "@/i18n/config";
import { content } from "@/i18n/content";

const SLUG = "api-condusef-refactor";
const TECHS: TechOptions[] = [".NET", "Swagger", "MSQL", "Postman"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? content[locale].proyectos[SLUG].meta : {};
}

export default async function ApiCondusefRefactor({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = content[locale].proyectos[SLUG];
  const d = content[locale].detalle;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <ProyectoHeader
        locale={locale}
        titulo={t.titulo}
        estado="done"
        meta={t.cabecera}
        techs={TECHS}
        lead={t.lead}
      />

      <Seccion titulo={d.miTrabajo}>
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          {t.trabajo}
        </p>
        <div className="mt-6">
          <Puntos items={t.puntos} />
        </div>
      </Seccion>

      <Seccion titulo={d.contexto}>
        {t.contexto.map((bloque) => (
          <Dato key={bloque.titulo} titulo={bloque.titulo}>
            {bloque.texto}
          </Dato>
        ))}
      </Seccion>
    </main>
  );
}
