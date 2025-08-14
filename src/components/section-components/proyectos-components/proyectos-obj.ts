import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";
export const proyectosObj: CardProyectoTypes[] = [
  {
    title: "Street Fighter API",
    status: "Terminado",
    description:
      "Proyecto de Backend, se trata de una api hecha con express enfocada en administrar informacion acerca de los personajes de la saga Street Fighter asi como sus diferentes versiones a lo largo de cada edicion.",
    img: "/assets/img-proyectos/sf-api/sf-logo.png",
    techStack: ["Javascript", "NodeJS", "Express", "MySQL"],
    githubLink: "https://github.com/Serrch/StreetFighterAPI",
    pageLink: "",
  },
  {
    title: "Arcade Tester",
    status: "Terminado",
    description:
      "Pequeño proyecto enfocado a probar las conexiones de controles arcade hechos con arduino o tarjetas Raspberry",
    img: "/assets/img-proyectos/arcade/arcade-layout.png",
    techStack: [".NET"],
    githubLink: "https://github.com/Serrch/Arcade-tester",
    pageLink: "",
  },
  {
    title: "Marvel Api",
    status: "Remake en proceso",
    description:
      "Proyecto de frontend hecho para consumir la MarvelApi, esta version del proyecto usa HTML, CSS Y Javascript basicos para realizar peticiones y mostrar datos de los personajes y comics.",
    img: "/assets/img-proyectos/marvel-api/marvel-api-layout.png",
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Serrch/MarvelAPI",
    pageLink: "https://serrch.github.io/MarvelAPI",
  },
];
