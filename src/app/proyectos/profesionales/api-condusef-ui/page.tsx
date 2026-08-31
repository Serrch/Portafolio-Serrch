import type { Metadata } from "next";
import {
  Dato,
  ProyectoHeader,
  Puntos,
  Seccion,
} from "@/components/proyectos-components/proyecto-page";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

export const metadata: Metadata = {
  title: "API Condusef — Nueva UI",
  description:
    "Migración de Blazor a Next.js de la interfaz que consume la API Condusef: tablas y formularios dinámicos para los trámites de REDECO y REUNE.",
};

const TECHS: TechOptions[] = ["React", "NextJS", "Typescript", "NodeJS"];

export default function ApiCondusefUi() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <ProyectoHeader
        titulo="API Condusef — Nueva UI"
        estado="Terminado"
        meta="Radical Software · Marzo 2025 — Junio 2025"
        techs={TECHS}
        lead={
          <p>
            Aplicación frontend en Next.js, React y TypeScript que consume la
            API de CONDUSEF ya refactorizada. Presenta la información en tablas
            y formularios dinámicos, uno por cada trámite que los usuarios
            pueden realizar en la plataforma oficial.
          </p>
        }
      />

      <Seccion titulo="Mi trabajo">
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Establecí la base técnica del proyecto: las estructuras principales
          que se usarían durante el desarrollo, desde el layout hasta la
          integración con el backend y el diseño de formularios e inputs
          dinámicos.
        </p>
        <div className="mt-6">
          <Puntos
            items={[
              "Configuré el enrutado de las secciones REDECO y REUNE.",
              "Diseñé las tablas correspondientes a cada tipo de trámite.",
              "Creé formularios dinámicos adaptados al trámite, con inputs personalizados para cada caso.",
              "Implementé la función que identifica el tipo de trámite y muestra la tabla y los inputs que le tocan.",
              "Desarrollé los DTOs para transformar los formularios en objetos válidos para la API.",
            ]}
          />
        </div>
      </Seccion>

      <Seccion titulo="Contexto">
        <Dato titulo="¿Qué es CONDUSEF?">
          <p>
            Es una institución del Gobierno de México encargada de proteger y
            defender los derechos de los usuarios de servicios financieros, como
            bancos, aseguradoras o Afores.
          </p>
        </Dato>
        <Dato titulo="¿Qué es la API CONDUSEF?">
          <p>
            Una interfaz que permite a las instituciones financieras
            intercambiar datos de forma segura con la entidad. Opera con dos
            sistemas: <strong>REDECO</strong>, recepción de quejas, y{" "}
            <strong>REUNE</strong>, recepción de trámites como aclaraciones,
            reclamaciones y consultas.
          </p>
        </Dato>
      </Seccion>
    </main>
  );
}
