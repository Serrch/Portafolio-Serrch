import Image from "next/image";
import Link from "next/link";
import ChooseIcon from "@/components/section-components/experiencia-components/choose-icon-function";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import LogoCondusef from "../../../../../public/assets/img-proyectos/profesionales/api-condusef-ui/logo-condusef";
export default function ApiCondusefUi() {
  const arrTech: TechOptions[] = ["React", "NextJS", "Typescript", "NodeJS"];
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">API Condusef Nueva UI</h1>

      <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-200 text-green-800 mb-6">
        Terminado
      </span>

      <p className="text-lg leading-relaxed text-gray-300 mb-8">
        Proyecto de frontend creado para consumir la API Condusef previamente
        refactorizada, migrando el proyecto de Blazor a una interfaz moderna
        hecha con Next.js y React. Incluyó la implementación de componentes UI
        reutilizables, consumo de endpoints REST, autenticación y optimización
        de rendimiento.
      </p>
      <div className="flex justify-center">
        <div className="relative w-6xl h-80 mb-10 rounded-xl overflow-hidden shadow-lg flex justify-center items-center bg-white">
          <LogoCondusef></LogoCondusef>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tecnologías utilizadas</h2>
        <ul className="flex flex-wrap gap-3">
          {arrTech.map((tech) => (
            <li
              key={tech}
              className="px-4 py-2 rounded-2xl border dark:border-zinc-700  shadow-md flex flex-col gap-1 items-center justify-center"
            >
              <ChooseIcon name={tech}></ChooseIcon>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Galería</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/img-proyectos/profesionales/api-condusef-ui/api-condusef-ui-3.jpg"
              alt="Captura 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/img-proyectos/profesionales/api-condusef-ui/api-condusef-ui-4.jpg"
              alt="Captura 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="flex gap-4">
        <Link
          href="https://github.com/tu-repo"
          target="_blank"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          Ver código en GitHub
        </Link>
        <Link
          href="https://demo-del-proyecto.com"
          target="_blank"
          className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition"
        >
          Ver demo en vivo
        </Link>
      </div>
    </main>
  );
}
