import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Dato,
  Galeria,
  ProyectoHeader,
  Puntos,
  Seccion,
} from "@/components/proyectos-components/proyecto-page";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import { isLocale } from "@/i18n/config";
import { content } from "@/i18n/content";

const SLUG = "street-fighter-api";
const TECHS: TechOptions[] = ["NodeJS", "Express", "MySQL", "Postman"];
const RUTA = "/assets/img-proyectos/personales/sf-api/";
const IMAGENES = [
  { src: RUTA + "sf-api-image-1.png", ancho: 1920, alto: 1080 },
  { src: RUTA + "sf-api-json-1.png", ancho: 1489, alto: 1004 },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? content[locale].proyectos[SLUG].meta : {};
}

export default async function StreetFighterDetail({
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
        github="https://github.com/Serrch/StreetFighterAPI"
        lead={t.lead}
      />

      <div className="mt-10">
        <Galeria
          imagenes={IMAGENES.map((img, i) => ({ ...img, ...t.galeria[i] }))}
        />
      </div>

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
