import ChooseIcon from "@/components/section-components/experiencia-components/choose-icon-function";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import LogoCondusef from "../../../../../public/assets/img-proyectos/profesionales/api-condusef-ui/logo-condusef";
import LabelTerminado from "@/components/proyectos-components/label-terminado";
// import ImagenZoom from "@/components/image-zoom";
export default function ApiCondusefUi() {
  const arrTech: TechOptions[] = ["React", "NextJS", "Typescript", "NodeJS"];

  // const rutaImagenes: string =
  //   "/assets/img-proyectos/profesionales/api-condusef-ui/";
  // const arrImagenes: string[] = [
  //   rutaImagenes + "api-condusef-ui-3.jpg",
  //   rutaImagenes + "api-condusef-ui-2.jpg",
  // ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">API CONDUSEF - Nueva UI</h1>

      <div className="flex gap-2 items-start justify-between mb-6">
        <LabelTerminado />
        <p>
          <strong className="text-sm dark:text-zinc-400">
            Marzo 2025 - Junio 2025
          </strong>
        </p>
      </div>

      <p className="text-lg text-justify leading-relaxed mb-8">
        El proyecto <strong>API CONDUSEF UI</strong> consiste en una aplicación
        frontend desarrollada con <strong>Next.js</strong>,{" "}
        <strong>React</strong>y <strong>TypeScript</strong>. Su objetivo es
        consumir la API previamente refactorizada de CONDUSEF y presentar la
        información a través de tablas y formularios dinámicos, que representan
        los distintos trámites que los usuarios pueden realizar en la plataforma
        oficial.
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
            Mis actividades consistieron en establecer la base técnica del
            proyecto, diseñando las estructuras principales que se utilizarían
            durante el desarrollo. Esto incluyó desde el layout principal hasta
            la integración con el backend, así como el diseño de formularios e
            inputs dinámicos.
          </p>
        </div>

        <div>
          <strong className="text-lg">Actividades</strong>
          <ul className="my-3 ml-6 list-disc [&>li]:mt-1">
            <li>Configurar el enrutado de las secciones REDECO y REUNE.</li>
            <li>Diseñar las tablas correspondientes a cada tipo de trámite.</li>
            <li>Crear formularios dinámicos adaptados al trámite.</li>
            <li>Diseñar inputs personalizados para cada caso.</li>
            <li>
              Implementar una función para identificar el tipo de trámite y
              mostrar la tabla e inputs correspondientes.
            </li>
            <li>
              Desarrollar los DTOs necesarios para transformar los formularios
              en objetos válidos para la API.
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
              <strong>REDECO:</strong> Recepción de quejas
            </p>
          </li>
          <li>
            <p>
              <strong>REUNE: </strong>Recepción de trámites como aclaraciones,
              reclamaciones y consultas
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
              className="px-4 py-2 rounded-2xl border dark:border-zinc-700 shadow-md flex flex-col gap-1 items-center justify-center"
            >
              <ChooseIcon name={tech} />
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* <section className="mb-10">
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
      </section> */}
    </main>
  );
}
