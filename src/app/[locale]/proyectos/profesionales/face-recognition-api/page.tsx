import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Galeria,
  ProyectoHeader,
  Puntos,
  Seccion,
  Tarjetas,
} from "@/components/proyectos-components/proyecto-page";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import { isLocale } from "@/i18n/config";
import { content } from "@/i18n/content";

const SLUG = "face-recognition-api";
const TECHS: TechOptions[] = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Expo",
];
const RUTA = "/assets/img-proyectos/profesionales/face-recognition/";
const IMAGENES = [
  { src: RUTA + "2.png", ancho: 887, alto: 503 },
  { src: RUTA + "1.png", ancho: 886, alto: 500 },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? content[locale].proyectos[SLUG].meta : {};
}

export default async function FaceRecognitionApi({
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

      <div className="mt-10">
        <Galeria
          imagenes={IMAGENES.map((img, i) => ({ ...img, ...t.galeria[i] }))}
        />
      </div>

      <Seccion titulo={d.miTrabajo}>
        <Puntos items={t.puntos} />
      </Seccion>

      <Seccion titulo={d.arquitectura}>
        <Tarjetas items={t.arquitectura} />
      </Seccion>
    </main>
  );
}
