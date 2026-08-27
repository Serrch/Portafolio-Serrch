import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

export const proyectosObj: CardProyectoTypes[] = [
  {
    title: "Street Fighter API",
    status: "Terminado",
    description:
      "API REST para consultar los personajes de Street Fighter y sus variantes en cada edición de la saga. " +
      "Diseñé el modelo relacional en MySQL y expuse los endpoints con Node y Express.",
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
      "Herramienta de escritorio en .NET para validar controles arcade armados con Arduino o Raspberry. " +
      "Lee la entrada de cada botón y muestra en pantalla si la conexión responde, sin abrir un juego para probarlo.",
    img: "/assets/img-proyectos/personales/arcade/arcade-layout.png",
    techStack: [".NET", "Arduino"],
    githubLink: "https://github.com/Serrch/Arcade-tester",
    pageLink: "",
    detailPage: "/proyectos/personales/arcade-tester/",
  },
];

export const proyectosPro: CardProyectoTypes[] = [
  {
    title: "Vitalify App (Plataforma de Gestión de Gimnasios)",
    status: "Terminado",
    description:
      "Plataforma de gestión de gimnasios en producción. Desarrollé los módulos de alta y baja de socios, turnos de empleados, " +
      "autenticación y control de pagos, con Next.js y TypeScript sobre Supabase.",
    img: "/assets/img-proyectos/profesionales/vitalify.png",
    techStack: ["Typescript", "NextJS", "Supabase"],
    detailPage: "https://www.vitalify.app",
  },
  {
    title: "Sistema de Reconocimiento Facial",
    status: "En proceso",
    description:
      "Control de acceso biométrico para gimnasios. Desarrollo la app móvil en React Native (Expo) y la de escritorio en PySide6 " +
      "contra una API en FastAPI y PostgreSQL: registro de socios, asistencia en tiempo real y operación online/offline.",
    img: "/assets/img-proyectos/profesionales/face-recognition.png",
    techStack: ["Expo", "Python", "FastAPI", "PostgreSQL", "Supabase"],
    detailPage: "",
  },
  {
    title: "API Condusef Refactorización",
    status: "Terminado",
    description:
      "Refactoricé en Radical Software la API .NET que actúa como intermediaria con los servicios de gobierno de Redeco y Reune. " +
      "Reestructuré el proyecto sobre SQL Server, documenté los endpoints en Swagger y validé cada uno con Postman.",
    img: "/assets/img-proyectos/profesionales/condusef-logo.png",
    techStack: [".NET", "MSQL", "Postman", "Swagger"],
    detailPage: "/proyectos/profesionales/api-condusef-refactor/",
  },
  {
    title: "API Condusef Nueva UI",
    status: "Terminado",
    description:
      "Migré de Blazor a Next.js la interfaz que consume la API Condusef refactorizada. " +
      "Reconstruí las vistas con React y TypeScript, conservando la integración con los endpoints ya existentes.",
    img: "/assets/img-proyectos/profesionales/condusef-logo.png",
    techStack: ["React", "NextJS", "Typescript", "NodeJS"],
    detailPage: "/proyectos/profesionales/api-condusef-ui/",
  },
];
