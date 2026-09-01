import { CardType } from "@/types/sobre-mi-types/card-types";

export const experienciaCards: CardType = [
  {
    title: "Velarizon",
    img: "/assets/img-experiencia/velarizon-logo.png",
    logoRatio: 526 / 437,
    description: {
      es: "Desarrollo de plataformas web y aplicaciones multiplataforma con TypeScript y React, con despliegue en entornos cloud (Vercel, Supabase). Diseño e implementación de APIs REST con Python (FastAPI), gestión de bases de datos PostgreSQL y colaboración en equipo con Git bajo metodología ágil.",
      en: "Development of web platforms and cross-platform applications with TypeScript and React, deployed to cloud environments (Vercel, Supabase). Design and implementation of REST APIs with Python (FastAPI), PostgreSQL database management and team collaboration with Git under an agile methodology.",
    },
    cargo: { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    start: "2026-04",
    end: null,
    techStack: [
      "Typescript",
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Docker",
    ],
  },
  {
    title: "Construplan",
    img: "/assets/img-experiencia/construplan-logo.svg",
    logoRatio: 345.18 / 193.88,
    description: {
      es: "Desarrollo y mantenimiento del ERP principal de la empresa. Construcción de nuevos módulos y vistas, integración de APIs REST, corrección de bugs, atención a incidentes y soporte a usuarios internos. Documentación de cambios técnicos y procedimientos operativos.",
      en: "Development and maintenance of the company's main ERP. Building new modules and views, integrating REST APIs, fixing bugs, handling incidents and supporting internal users. Documentation of technical changes and operational procedures.",
    },
    cargo: { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    start: "2025-10",
    end: "2026-04",
    techStack: [".NET", "Javascript", "MSQL"],
  },
  {
    title: "Radical Software",
    img: "/assets/img-experiencia/logo-leyenda-radical.svg",
    logoRatio: 320 / 100,
    description: {
      es: "Desarrollo frontend y backend para sistemas financieros (SOFOMES). Refactorización de API REST con ASP.NET aplicando Clean Code y SOLID, migración de interfaz de Blazor a Next.js con React, e implementación de pruebas unitarias para aseguramiento de calidad.",
      en: "Frontend and backend development for financial systems (SOFOMES). REST API refactor with ASP.NET applying Clean Code and SOLID, migration of the interface from Blazor to Next.js with React, and implementation of unit tests for quality assurance.",
    },
    cargo: { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    start: "2024-12",
    end: "2025-09",
    techStack: ["Typescript", "React", "NextJS", ".NET", "MSQL"],
  },
];
