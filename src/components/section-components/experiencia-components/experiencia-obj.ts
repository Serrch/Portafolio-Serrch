import { CardType } from "@/types/sobre-mi-types/card-types";
export const experienciaCards: CardType = [
  {
    title: "Radical Software",
    img: "/assets/img-experiencia/2023-logo-leyenda.svg",
    description:
      "Durante este periodo me dedique a la refactorizacion de un API utilizando ASP.NET, Swagger y SQL" +
      " en donde con ayuda de los principios SOLID y Clean Code me enfoque en corregir la logica, rehaciendo clases y aplicando una estructura de controladores, clases e interfaces limpias " +
      " en los distintos endpoints asi tambien propuse la estandarizacion en los formatos de respuesta.",
    cargo: "Interno",
    date: "Diciembre 2024 - Enero 2025",
    techStack: [".NET", "Swagger", "MSQL"],
  },
  {
    title: "Radical Software",
    img: "/assets/img-experiencia/2023-logo-leyenda.svg",
    description:
      "Terminando la refactorizacion del backend, se me asigno la tarea de llevar a cabo una migracion de un proyecto de Blazor a React con NextJS" +
      " Aqui me enfoque en la creacion de formularios dinamicos para cada endpoint desarrollado en la API" +
      " el objetivo era hacer una pagina amigable con el usuario y escalable facilmente para los desarrolladores del equipo.",
    cargo: "Interno",
    date: "Enero 2025 - Junio 2025",
    techStack: ["Javascript", "Typescript", "NextJS", "React", "Tailwind"],
  },
];
