import type { Metadata } from "next";
import {
  Dato,
  Galeria,
  ProyectoHeader,
  Puntos,
  Seccion,
} from "@/components/proyectos-components/proyecto-page";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

export const metadata: Metadata = {
  title: "Street Fighter API",
  description:
    "API REST en Node y Express que recopila las versiones de cada personaje de Street Fighter a lo largo de la saga.",
};

const TECHS: TechOptions[] = ["NodeJS", "Express", "MySQL", "Postman"];
const RUTA = "/assets/img-proyectos/personales/sf-api/";

export default function StreetFighterDetail() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <ProyectoHeader
        titulo="Street Fighter API"
        estado="Terminado"
        meta="Proyecto personal · Abril 2024 — Mayo 2025"
        techs={TECHS}
        github="https://github.com/Serrch/StreetFighterAPI"
        lead={
          <p>
            API REST que almacena las distintas versiones de los personajes de
            Street Fighter a lo largo de los juegos de la saga. Surge de mi
            interés en los videojuegos de pelea y de que no existía una API que
            recopilara no solo el personaje, sino todas sus versiones.
          </p>
        }
      />

      <div className="mt-10">
        <Galeria
          imagenes={[
            {
              src: RUTA + "sf-api-image-1.png",
              ancho: 1920,
              alto: 1080,
              alt: "Vista de la documentación de la Street Fighter API",
              pie: "Documentación de la API.",
            },
            {
              src: RUTA + "sf-api-json-1.png",
              ancho: 1489,
              alto: 1004,
              alt: "Respuesta JSON de un endpoint de la Street Fighter API",
              pie: "Respuesta de un endpoint con las versiones de un personaje.",
            },
          ]}
        />
      </div>

      <Seccion titulo="Mi trabajo">
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Estructuré la información de los personajes en una base de datos con
          dos entidades principales, <strong>fighters</strong> y{" "}
          <strong>games</strong>. A partir de ellas diseñé la tabla intermedia{" "}
          <strong>fighter_versions</strong>, que normaliza la base y facilita
          las consultas con las tablas complementarias.
        </p>
        <div className="mt-6">
          <Puntos
            items={[
              "Creé la base de datos con las tablas fighters, games, fighter_versions, fighter_images y fighter_moves.",
              "Implementé el ORM Sequelize para la gestión de datos y la optimización de consultas.",
              "Apliqué el modelo MVC para estructurar el flujo de las peticiones HTTP.",
              "Diseñé un sistema de gestión de archivos que sirve las imágenes directamente desde el servidor de la API.",
            ]}
          />
        </div>
      </Seccion>

      <Seccion titulo="Contexto">
        <Dato titulo="¿Qué es Street Fighter?">
          <p>
            Una saga de videojuegos de lucha en 2D con personajes como Ryu, Ken,
            Chun-Li o Guile. Se consolidó como referente del género al
            introducir buena parte de las mecánicas que hoy lo definen.
          </p>
        </Dato>
      </Seccion>
    </main>
  );
}
