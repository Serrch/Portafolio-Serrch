import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

export const proyectosObj: CardProyectoTypes[] = [
  {
    title: "Street Fighter API",
    status: "Terminado",
    description:
      "Proyecto de backend desarrollado con Express, enfocado en administrar información sobre los personajes de la saga Street Fighter, " +
      "así como sus diferentes versiones a lo largo de cada edición.",
    img: "/assets/img-proyectos/sf-api/sf-logo.png",
    techStack: ["Javascript", "NodeJS", "Express", "MySQL"],
    githubLink: "https://github.com/Serrch/StreetFighterAPI",
    pageLink: "",
  },
  {
    title: "Arcade Tester",
    status: "Terminado",
    description:
      "Pequeño proyecto enfocado en probar la conexión de controles arcade construidos con Arduino o placas Raspberry.",
    img: "/assets/img-proyectos/arcade/arcade-layout.png",
    techStack: [".NET"],
    githubLink: "https://github.com/Serrch/Arcade-tester",
    pageLink: "",
  },
  {
    title: "Marvel API",
    status: "Remake en proceso",
    description:
      "Proyecto de frontend creado para consumir la Marvel API. Esta versión utiliza HTML, CSS y JavaScript básicos para realizar peticiones y mostrar datos de los personajes y cómics.",
    img: "/assets/img-proyectos/marvel-api/marvel-api-layout.png",
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Serrch/MarvelAPI",
    pageLink: "https://serrch.github.io/MarvelAPI",
  },
];
