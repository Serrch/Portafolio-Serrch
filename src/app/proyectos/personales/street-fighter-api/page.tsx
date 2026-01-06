"use client";
import Image from "next/image";
import ChooseIcon from "@/components/section-components/experiencia-components/choose-icon-function";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import LabelTerminado from "@/components/proyectos-components/label-terminado";
import GithubButton from "@/components/section-components/github-button";
import ImagenZoom from "@/components/image-zoom";

export default function StreetFighterDetail() {
  const rutaImagenes: string = "/assets/img-proyectos/personales/sf-api/";
  const arrTech: TechOptions[] = ["NodeJS", "Express", "MySQL", "Postman"];
  const arrImagenes: string[] = [
    rutaImagenes + "sf-api-image-1.png",
    rutaImagenes + "sf-api-json-1.png",
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Street Fighter API</h1>

      <div className="flex flex-wrap gap-2 items-start justify-between mb-6">
        <LabelTerminado />
        <p>
          <strong className="text-sm dark:text-zinc-400">
            Abril 2024 - Mayo 2025
          </strong>
        </p>
      </div>

      <p className="text-lg text-justify leading-relaxed mb-8">
        La <strong>Street Fighter API</strong> es un proyecto de{" "}
        <em>Back End</em> que almacena información sobre las diferentes
        versiones de los personajes de la saga a través de los juegos. El
        proyecto surge de mi interés en los videojuegos de pelea y de la
        ausencia de APIs similares que recopilen información no solo de un
        personaje, sino de todas sus versiones.
      </p>

      <div className="flex justify-center">
        <div className="relative h-80 w-[400px] mb-10 rounded-xl overflow-hidden shadow-lg flex justify-center items-center">
          <Image
            src={rutaImagenes + "sf-logo.png"}
            alt="Street Fighter API - Logo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-contain rounded-xl"
          />
        </div>
      </div>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          ¿Qué hice en el proyecto?
        </h3>

        <div>
          <strong className="text-lg">Descripción</strong>
          <p className="text-lg text-justify leading-relaxed mb-8">
            Me enfoqué en estructurar la información de los personajes en una
            base de datos con dos entidades principales:{" "}
            <strong>fighters</strong> y <strong>games</strong>. A partir de
            estas, diseñé una tabla intermedia (
            <strong>fighter_versions</strong>) que permitió normalizar la base
            de datos y facilitar consultas con otras tablas complementarias.
          </p>
        </div>

        <div>
          <strong className="text-lg">Actividades</strong>
          <ul className="my-3 ml-6 list-disc [&>li]:mt-1">
            <li>
              Creé la base de datos con las tablas:{" "}
              <em>
                fighters, games, fighter_versions, fighter_images, fighter_moves
              </em>
              .
            </li>
            <li>
              Implementé el ORM <strong>Sequelize</strong> para la gestión de
              datos y optimización de consultas.
            </li>
            <li>
              Apliqué el modelo <strong>MVC</strong> para estructurar el flujo
              de las peticiones HTTP.
            </li>
            <li>
              Diseñé un sistema de gestión de archivos que permite servir
              imágenes directamente desde el servidor de la API.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Contexto
        </h3>
        <strong className="text-lg">¿Qué es Street Fighter?</strong>
        <p className="text-lg text-justify leading-relaxed mb-4">
          Es una saga de videojuegos de lucha en 2D con personajes icónicos como
          Ryu, Ken, Chun-Li y Guile. La franquicia se consolidó como referente
          del género al introducir innovaciones y complejizar las mecánicas de
          juego.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Tecnologías utilizadas
        </h3>
        <ul
          className="flex flex-wrap gap-3 justify-center md:justify-start"
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
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0 mb-2">
          Repositorio
        </h3>
        <div className="flex flex-wrap gap-2">
          <GithubButton
            link={"https://github.com/Serrch/StreetFighterAPI"}
            size="lg"
          ></GithubButton>
        </div>
      </section>
      <section className="mb-10 ">
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
