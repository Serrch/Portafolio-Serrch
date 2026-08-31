import type { Metadata } from "next";
import {
  Dato,
  ProyectoHeader,
  Puntos,
  Seccion,
} from "@/components/proyectos-components/proyecto-page";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

export const metadata: Metadata = {
  title: "API Condusef — Refactorización",
  description:
    "Refactorización de la API .NET que comunica a las instituciones financieras con los sistemas REDECO y REUNE de CONDUSEF.",
};

const TECHS: TechOptions[] = [".NET", "Swagger", "MSQL", "Postman"];

export default function ApiCondusefRefactor() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <ProyectoHeader
        titulo="API Condusef — Refactorización"
        estado="Terminado"
        meta="Radical Software · Diciembre 2024 — Marzo 2025"
        techs={TECHS}
        lead={
          <p>
            API propia de Radical Software que actúa como intermediaria entre
            las instituciones financieras y la API oficial de CONDUSEF. Nace de
            la necesidad de ofrecer un medio más amigable para gestionar
            localmente los trámites de REDECO y REUNE.
          </p>
        }
      />

      <Seccion titulo="Mi trabajo">
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Refactoricé los distintos módulos responsables de las operaciones CRUD
          de la API, tanto a nivel local como en la comunicación con la API del
          Gobierno.
        </p>
        <div className="mt-6">
          <Puntos
            items={[
              "Refactoricé el flujo completo de la aplicación: controladores, servicios y capa de acceso a datos.",
              "Diseñé interfaces para las clases clave, aplicando principios SOLID.",
              "Implementé el ORM Dapper para optimizar la gestión de datos y el rendimiento en consultas.",
              "Desarrollé stored procedures para estandarizar las operaciones de acceso a base de datos.",
              "Definí un formato unificado de respuestas para asegurar la consistencia de la API.",
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
