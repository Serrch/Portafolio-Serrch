import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

export const proyectosObj: CardProyectoTypes[] = [
  {
    title: "Street Fighter API",
    status: "Terminado",
    description:
      "Proyecto de backend desarrollado con Express, enfocado en administrar información sobre los personajes de la saga Street Fighter, " +
      "así como sus diferentes versiones a lo largo de cada edición.",
    img: "/assets/img-proyectos/personales/sf-api/sf-logo.png",
    techStack: ["Javascript", "NodeJS", "Express", "MySQL"],
    githubLink: "https://github.com/Serrch/StreetFighterAPI",
    pageLink: "",
    detailPage: "/proyectos/personales/street-fighter-api/",
  },
  {
    title: "Arcade Tester",
    status: "Terminado",
    description:
      "Proyecto enfocado en probar la conexión de controles arcade construidos con Arduino o placas Raspberry.",
    img: "/assets/img-proyectos/personales/arcade/arcade-layout.png",
    techStack: [".NET"],
    githubLink: "https://github.com/Serrch/Arcade-tester",
    pageLink: "",
    detailPage: "",
  },
  {
    title: "Marvel API",
    status: "Remake en proceso",
    description:
      "Proyecto de frontend creado para consumir la Marvel API. Esta versión utiliza HTML, CSS y JavaScript básicos para realizar peticiones y mostrar datos de los personajes y cómics.",
    img: "/assets/img-proyectos/personales/marvel-api/marvel-api-layout.png",
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Serrch/MarvelAPI",
    pageLink: "https://serrch.github.io/MarvelAPI",
    detailPage: "",
  },
];

export const proyectosPro: CardProyectoTypes[] = [
  {
    title: "API Condusef Refactorización",
    status: "Terminado",
    description:
      "Proyecto realizado durante mi estancia en Radical Software, consistió en una refactorización de una API que actúa como intermediario con la API del gobierno encargada de Redeco y Reune.",
    img: "/assets/img-proyectos/profesionales/api-condusef-refactor/api-condusef.jpg",
    techStack: [".NET", "MSQL", "Swagger"],
    detailPage: "/proyectos/profesionales/api-condusef-refactor/",
  },
  {
    title: "API Condusef Nueva UI",
    status: "Terminado",
    description:
      "Proyecto de frontend creado para consumir la API Condusef previamente refactorizada, migrando el proyecto de Blazor a una interfaz moderna hecha con Next.js y React.",
    img: "/assets/img-proyectos/profesionales/api-condusef-ui/api-condusef-ui.jpg",
    techStack: ["React", "NextJS", "Typescript", "NodeJS"],
    detailPage: "/proyectos/profesionales/api-condusef-ui/",
  },
];
