import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

export const proyectosObj: CardProyectoTypes[] = [
  {
    title: "Street Fighter API",
    status: "Terminado",
    description:
      "Proyecto de backend desarrollado con Express, enfocado en administrar informacion sobre los personajes de la saga Street Fighter, " +
      "asi como sus diferentes versiones a lo largo de cada edicion.",
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
      "Proyecto enfocado en probar la conexion de controles arcade construidos con Arduino o placas Raspberry.",
    img: "/assets/img-proyectos/personales/arcade/arcade-layout.png",
    techStack: [".NET", "Arduino"],
    githubLink: "https://github.com/Serrch/Arcade-tester",
    pageLink: "",
    detailPage: "/proyectos/personales/arcade-tester/",
  },
];

export const proyectosPro: CardProyectoTypes[] = [
  {
    title: "Vitalify App (Plataforma de Gestion de Gimnasios)",
    status: "Terminado",
    description:
      "Aplicacion web de gestion de gimnasios. Incluye modulos de alta y baja de miembros, gestion de turnos de empleados, sistema de login y control de pagos.",
    img: "/assets/img-proyectos/profesionales/vitalify.png",
    techStack: ["Typescript", "NextJS", "Supabase"],
    detailPage: "https://www.vitalify.app",
  },
  {
    title: "Agroeasy (Plataforma de Gestion Agricola)",
    status: "Terminado",
    description:
      "Sistema de trazabilidad para gestion de campos de cultivo, pallets y flujo de exportacion de alimentos. Incluye control de inventario, seguimiento de productos y logica transaccional de exportacion.",
    img: "/assets/img-proyectos/profesionales/agroeasy.png",
    techStack: [
      "Typescript",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Docker",
    ],
    detailPage: "https://www.agroeasy.com.mx",
  },
  {
    title: "Sistema de Reconocimiento Facial",
    status: "En proceso",
    description:
      "Plataforma multiplataforma para control de acceso biometrico en gimnasios. App movil con React Native (Expo) y version de escritorio con PySide6. Incluye registro de socios, control de asistencia en tiempo real y soporte online/offline.",
    img: "/assets/img-proyectos/profesionales/face-recognition.png",
    techStack: ["Expo", "Python", "FastAPI", "PostgreSQL", "Supabase"],
    detailPage: "",
  },
  {
    title: "API Condusef Refactorizacion",
    status: "Terminado",
    description:
      "Proyecto realizado durante mi estancia en Radical Software, consistio en una refactorizacion de una API que actua como intermediario con la API del gobierno encargada de Redeco y Reune.",
    img: "/assets/img-proyectos/profesionales/condusef-logo.png",
    techStack: [".NET", "MSQL", "Postman", "Swagger"],
    detailPage: "/proyectos/profesionales/api-condusef-refactor/",
  },
  {
    title: "API Condusef Nueva UI",
    status: "Terminado",
    description:
      "Proyecto de frontend creado para consumir la API Condusef previamente refactorizada, migrando el proyecto de Blazor a una interfaz moderna hecha con Next.js y React.",
    img: "/assets/img-proyectos/profesionales/condusef-logo.png",
    techStack: ["React", "NextJS", "Typescript", "NodeJS"],
    detailPage: "/proyectos/profesionales/api-condusef-ui/",
  },
];
