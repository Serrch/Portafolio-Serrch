import { CardType } from "@/types/sobre-mi-types/card-types";

export const experienciaCards: CardType = [
  {
    title: "Radical Software",
    img: "/assets/img-experiencia/2023-logo-leyenda.svg",
    description:
      "Durante este periodo me dediqué a la refactorización de una API utilizando ASP.NET, Swagger y SQL. " +
      "Con ayuda de los principios SOLID y Clean Code, me enfoqué en corregir la lógica, rehaciendo clases, dividiendo responsabilidades y aplicando una estructura limpia de controladores, accesos a datos, interfaces y servicios. " +
      "También propuse la estandarización en los formatos de respuesta.",
    cargo: "Practicante",
    stDate: "Diciembre 2024",
    endDate: "Marzo 2025",
    techStack: [".NET", "Swagger", "MSQL"],
  },
  {
    title: "Radical Software",
    img: "/assets/img-experiencia/2023-logo-leyenda.svg",
    description:
      "Tras finalizar la refactorización del backend, se me asignó la tarea de migrar un proyecto de Blazor a React con NextJS. " +
      "Me enfoqué en la creación de formularios dinámicos para cada endpoint desarrollado en la API. " +
      "El objetivo fue construir una página amigable para el usuario y fácilmente escalable para los desarrolladores del equipo.",
    cargo: "Practicante",
    stDate: "Marzo 2025",
    endDate: "Junio 2025",
    techStack: ["Javascript", "Typescript", "NextJS", "React", "Tailwind"],
  },
];
