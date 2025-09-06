import ChooseIcon from "@/components/section-components/experiencia-components/choose-icon-function";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import LogoCondusef from "../../../../../public/assets/img-proyectos/profesionales/api-condusef-ui/logo-condusef";
import LabelTerminado from "@/components/proyectos-components/label-terminado";
import ImagenZoom from "@/components/image-zoom";
export default function ApiCondusefRefactor() {
  const rutaImagenes: string =
    "/assets/img-proyectos/profesionales/api-condusef-refactor/";
  const arrTech: TechOptions[] = [".NET", "Swagger", "MSQL", "Postman"];
  const arrImagenes: string[] = [
    rutaImagenes + "api-condusef.jpg",
    rutaImagenes + "api-condusef-ui-2.jpg",
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        API CONDUSEF - Refactorización
      </h1>

      <div className="flex flex-wrap gap-2 items-start justify-between mb-6">
        <LabelTerminado />
        <p>
          <strong className="text-sm dark:text-zinc-400">
            Diciembre 2024 - Marzo 2025
          </strong>
        </p>
      </div>

      <p className="text-lg text-justify leading-relaxed mb-8">
        El proyecto <strong>API CONDUSEF Refactor</strong> consiste en una
        aplicación backend desarrollada con <strong>.NET</strong>,{" "}
        <strong>Swagger</strong> y <strong>MSQL</strong>. Se trata de una API
        propia de <em>Radical Software</em> que actúa como intermediario entre
        las instituciones financieras y la API oficial de CONDUSEF proporcionada
        por el Gobierno. Surge de la necesidad de ofrecer a los usuarios un
        medio más amigable para gestionar localmente diversos trámites de los
        sistemas <strong>REDECO</strong> y <strong>REUNE</strong>.
      </p>

      <div className="flex justify-center">
        <div className="relative w-6xl h-80 mb-10 rounded-xl overflow-hidden shadow-lg flex justify-center items-center bg-white">
          <LogoCondusef />
        </div>
      </div>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          ¿Cuál fue mi trabajo?
        </h3>

        <div>
          <strong className="text-lg">Descripción</strong>
          <p className="text-lg text-justify leading-relaxed mb-8">
            Mi trabajo consistió en la refactorización de distintos módulos
            responsables de las operaciones CRUD de la API, tanto a nivel local
            como en la comunicación con la API del Gobierno.
          </p>
        </div>

        <div>
          <strong className="text-lg">Actividades</strong>
          <ul className="my-3 ml-6 list-disc [&>li]:mt-1">
            <li>
              Refactoricé el flujo completo de la aplicación, incluyendo
              controladores, servicios y capa de acceso a datos.
            </li>
            <li>
              Diseñé interfaces para las clases clave, aplicando principios de
              arquitectura <strong>SOLID</strong>.
            </li>
            <li>
              Implementé el ORM <strong>Dapper</strong> para optimizar la
              gestión de datos y mejorar el rendimiento en consultas.
            </li>
            <li>
              Desarrollé <em>Stored Procedures</em> para estandarizar y
              simplificar las operaciones de acceso a base de datos.
            </li>
            <li>
              Definí un formato unificado de respuestas para asegurar la
              consistencia en la comunicación de la API.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Contexto
        </h3>
        <strong className="text-lg">¿Qué es CONDUSEF?</strong>
        <p className="text-lg text-justify leading-relaxed mb-4">
          Es una institución del Gobierno de México encargada de proteger y
          defender los derechos de los usuarios de servicios financieros, como
          bancos, aseguradoras, Afores, entre otros.
        </p>
        <strong className="text-lg">¿Qué es la API CONDUSEF?</strong>
        <p className="text-lg text-justify leading-relaxed mb-4">
          La <strong>API CONDUSEF</strong> es una interfaz que permite a las
          instituciones financieras intercambiar datos de forma segura con la
          entidad. Opera principalmente con dos sistemas:
        </p>
        <ul className="ml-6 list-disc [&>li]:mt-1">
          <li>
            <p>
              <strong>REDECO:</strong> Recepción de quejas.
            </p>
          </li>
          <li>
            <p>
              <strong>REUNE:</strong> Recepción de trámites como aclaraciones,
              reclamaciones y consultas.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Tecnologías utilizadas
        </h3>
        <ul
          className="flex flex-wrap gap-3"
          aria-label="Lista de tecnologías utilizadas en el proyecto"
        >
          {arrTech.map((tech) => (
            <li
              key={tech}
              className="px-4 py-2 rounded-2xl border dark:border-zinc-700 bg-accent shadow-md flex flex-col gap-1 items-center justify-center"
            >
              <ChooseIcon name={tech} />
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Galería
        </h3>
        <div className="flex flex-wrap gap-6 justify-start">
          {arrImagenes.map((imagen, index) => (
            <div key={index} className="relative w-80 h-64">
              <ImagenZoom
                src={imagen}
                alt={`Arcade-Tester-Captura ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
