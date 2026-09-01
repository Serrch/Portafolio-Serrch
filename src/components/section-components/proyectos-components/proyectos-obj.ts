import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

export const proyectosObj: CardProyectoTypes[] = [
  {
    title: { es: "Street Fighter API", en: "Street Fighter API" },
    status: "done",
    description: {
      es:
        "API REST para consultar los personajes de Street Fighter y sus variantes en cada edición de la saga. " +
        "Diseñé el modelo relacional en MySQL y expuse los endpoints con Node y Express.",
      en:
        "REST API to look up the Street Fighter characters and their variants in every entry of the series. " +
        "I designed the relational model in MySQL and exposed the endpoints with Node and Express.",
    },
    img: "/assets/img-proyectos/personales/sf-api/sf-logo.png",
    techStack: ["Javascript", "NodeJS", "Express", "MySQL"],
    githubLink: "https://github.com/Serrch/StreetFighterAPI",
    detailPage: "/proyectos/personales/street-fighter-api",
  },
  {
    title: { es: "Arcade Tester", en: "Arcade Tester" },
    status: "done",
    description: {
      es:
        "Herramienta de escritorio en .NET para validar controles arcade armados con Arduino o Raspberry. " +
        "Lee la entrada de cada botón y muestra en pantalla si la conexión responde, sin abrir un juego para probarlo.",
      en:
        "Desktop tool in .NET to validate arcade controllers built with Arduino or Raspberry. " +
        "It reads the input of each button and shows on screen whether the connection responds, without opening a game to test it.",
    },
    img: "/assets/img-proyectos/personales/arcade/arcade-layout.png",
    techStack: [".NET", "Arduino"],
    githubLink: "https://github.com/Serrch/Arcade-tester",
    detailPage: "/proyectos/personales/arcade-tester",
  },
];

export const proyectosPro: CardProyectoTypes[] = [
  {
    title: { es: "Vitalify", en: "Vitalify" },
    status: "done",
    description: {
      es:
        "Plataforma de gestión de gimnasios en producción. Desarrollé los módulos de alta y baja de socios, turnos de empleados, " +
        "autenticación y control de pagos, con Next.js y TypeScript sobre Supabase.",
      en:
        "Gym management platform running in production. I built the member sign-up and removal, staff shifts, " +
        "authentication and payment control modules, with Next.js and TypeScript on top of Supabase.",
    },
    img: "/assets/img-proyectos/profesionales/vitalify.png",
    techStack: ["Typescript", "NextJS", "Supabase"],
    detailPage: "https://www.vitalify.app",
  },
  {
    title: { es: "Face Recognition API", en: "Face Recognition API" },
    status: "done",
    description: {
      es:
        "API de control de acceso biométrico para gimnasios, construida con FastAPI y PostgreSQL. " +
        "Resuelve el registro de socios, el reconocimiento facial y la asistencia en tiempo real para un cliente móvil en Expo y uno de escritorio en PySide6.",
      en:
        "Biometric access control API for gyms, built with FastAPI and PostgreSQL. " +
        "It handles member registration, face recognition and real-time attendance for an Expo mobile client and a PySide6 desktop one.",
    },
    img: "/assets/img-proyectos/profesionales/face-recognition/1.png",
    techStack: ["Expo", "Python", "FastAPI", "PostgreSQL", "Supabase"],
    detailPage: "/proyectos/profesionales/face-recognition-api",
  },
  {
    title: { es: "API Condusef Refactorización", en: "Condusef API Refactor" },
    status: "done",
    description: {
      es:
        "Refactoricé en Radical Software la API .NET que actúa como intermediaria con los servicios de gobierno de Redeco y Reune. " +
        "Reestructuré el proyecto sobre SQL Server, documenté los endpoints en Swagger y validé cada uno con Postman.",
      en:
        "At Radical Software I refactored the .NET API that acts as a middleman with the Redeco and Reune government services. " +
        "I restructured the project on SQL Server, documented the endpoints in Swagger and validated each one with Postman.",
    },
    img: "/assets/img-proyectos/profesionales/condusef-logo.png",
    techStack: [".NET", "MSQL", "Postman", "Swagger"],
    detailPage: "/proyectos/profesionales/api-condusef-refactor",
  },
  {
    title: { es: "API Condusef Nueva UI", en: "Condusef API New UI" },
    status: "done",
    description: {
      es:
        "Migré de Blazor a Next.js la interfaz que consume la API Condusef refactorizada. " +
        "Reconstruí las vistas con React y TypeScript, conservando la integración con los endpoints ya existentes.",
      en:
        "I migrated the interface that consumes the refactored Condusef API from Blazor to Next.js. " +
        "I rebuilt the views with React and TypeScript, keeping the integration with the existing endpoints.",
    },
    img: "/assets/img-proyectos/profesionales/condusef-logo.png",
    techStack: ["React", "NextJS", "Typescript", "NodeJS"],
    detailPage: "/proyectos/profesionales/api-condusef-ui",
  },
];
