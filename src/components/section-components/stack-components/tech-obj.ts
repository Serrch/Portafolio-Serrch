import { TechStackTypes } from "@/types/tech-stack-types/tech-stack-types";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

export const languageObj: TechStackTypes[] = [
  {
    name: "Typescript",
    desc: {
      es: "Mi lenguaje principal para desarrollo web profesional. Lo uso con Next.js y React para construir aplicaciones escalables con tipado fuerte y mejor mantenibilidad.",
      en: "My main language for professional web development. I use it with Next.js and React to build scalable applications with strong typing and better maintainability.",
    },
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    type: "lenguaje",
  },
  {
    name: "Javascript",
    desc: {
      es: "Lenguaje base para el desarrollo web. Lo utilizo tanto en frontend con React como en backend con Node.js y Express.",
      en: "The base language of web development. I use it both on the frontend with React and on the backend with Node.js and Express.",
    },
    color: "text-yellow-400 dark:text-yellow-300",
    hoverColor: "group-hover:text-yellow-400 dark:group-hover:text-yellow-300",
    type: "lenguaje",
  },
  {
    name: "C#",
    desc: {
      es: "Lo utilizo con ASP.NET para el desarrollo de APIs REST estructuradas y orientadas al ambito empresarial, aplicando principios SOLID y Clean Code.",
      en: "I use it with ASP.NET to develop structured, enterprise-oriented REST APIs, applying SOLID principles and Clean Code.",
    },
    color: "text-purple-500 dark:text-purple-400",
    hoverColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    type: "lenguaje",
  },
  {
    name: "Python",
    desc: {
      es: "Lo utilizo con FastAPI para el desarrollo de APIs REST de alto rendimiento y con PySide6 para aplicaciones de escritorio. Tambien lo uso para scripting y automatizacion.",
      en: "I use it with FastAPI to develop high-performance REST APIs and with PySide6 for desktop applications. I also use it for scripting and automation.",
    },
    color: "text-yellow-500 dark:text-yellow-400",
    hoverColor: "group-hover:text-yellow-500 dark:group-hover:text-yellow-400",
    type: "lenguaje",
  },
];

export const frameworkObj: TechStackTypes[] = [
  {
    name: "NextJS",
    desc: {
      es: "Mi framework principal para aplicaciones web con React. Utilizo el App Router para arquitecturas modernas con Server Components, rutas dinámicas y despliegue optimizado en Vercel.",
      en: "My main framework for web applications with React. I use the App Router for modern architectures with Server Components, dynamic routes and optimized deployment on Vercel.",
    },
    color: "",
    hoverColor: "group-hover:text-stone-950 dark:group-hover:text-stone-300",
    type: "framework",
  },
  {
    name: "React",
    desc: {
      es: "Librería principal para el desarrollo de interfaces de usuario. La uso con TypeScript para construir componentes reutilizables, manejar estado y consumir APIs REST.",
      en: "My main library for building user interfaces. I use it with TypeScript to build reusable components, manage state and consume REST APIs.",
    },
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-sky-500 dark:group-hover:text-sky-400",
    type: "framework",
  },
  {
    name: ".NET",
    desc: {
      es: "Uso ASP.NET para el desarrollo de APIs REST y aplicaciones backend en entornos empresariales, aplicando Clean Code, SOLID y arquitectura MVC.",
      en: "I use ASP.NET to develop REST APIs and backend applications in enterprise environments, applying Clean Code, SOLID and MVC architecture.",
    },
    color: "text-purple-500 dark:text-purple-400",
    hoverColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    type: "framework",
  },
  {
    name: "FastAPI",
    desc: {
      es: "Framework de Python que uso para construir APIs REST de alto rendimiento. Permite desarrollar backends escalables con tipado automático, documentación integrada y despliegue en entornos cloud.",
      en: "A Python framework I use to build high-performance REST APIs. It allows scalable backends with automatic typing, built-in documentation and cloud deployment.",
    },
    color: "text-teal-500 dark:text-teal-400",
    hoverColor: "group-hover:text-teal-500 dark:group-hover:text-teal-400",
    type: "framework",
  },
  {
    name: "Express",
    desc: {
      es: "Lo utilizo para la elaboración de APIs y servidores con Node.js cuando necesito una solución rápida y flexible.",
      en: "I use it to build APIs and servers with Node.js when I need a quick and flexible solution.",
    },
    color: "text-emerald-400 dark:text-emerald-300",
    hoverColor: "group-hover:text-emerald-400 dark:group-hover:text-emerald-300",
    type: "framework",
  },
];

export const databaseObj: TechStackTypes[] = [
  {
    name: "PostgreSQL",
    desc: {
      es: "Mi motor de base de datos principal para proyectos modernos. Lo uso con Supabase para despliegues serverless y directamente con FastAPI o Next.js para aplicaciones que requieren integridad relacional.",
      en: "My main database engine for modern projects. I use it with Supabase for serverless deployments and directly with FastAPI or Next.js for applications that require relational integrity.",
    },
    color: "text-blue-400 dark:text-blue-300",
    hoverColor: "group-hover:text-blue-400 dark:group-hover:text-blue-300",
    type: "otro",
  },
  {
    name: "MSQL",
    desc: {
      es: "Lo utilizo en entornos empresariales con ASP.NET. Manejo stored procedures, triggers y optimización de consultas para sistemas ERP y plataformas financieras.",
      en: "I use it in enterprise environments with ASP.NET. I work with stored procedures, triggers and query optimization for ERP systems and financial platforms.",
    },
    color: "text-red-600 dark:text-red-500",
    hoverColor: "group-hover:text-red-600 dark:group-hover:text-red-500",
    type: "otro",
  },
  {
    name: "Supabase",
    desc: {
      es: "Plataforma cloud que uso como backend serverless con PostgreSQL. Ideal para despliegues rápidos con autenticación, almacenamiento y base de datos integrados.",
      en: "A cloud platform I use as a serverless backend with PostgreSQL. Ideal for fast deployments with built-in authentication, storage and database.",
    },
    color: "text-emerald-500 dark:text-emerald-400",
    hoverColor: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
    type: "otro",
  },
];

export const otrosObj: TechStackTypes[] = [
  {
    name: "Docker",
    desc: {
      es: "Lo uso para contenerizar aplicaciones y garantizar entornos consistentes entre desarrollo y producción. Facilita los despliegues y la gestión de dependencias en proyectos con múltiples servicios.",
      en: "I use it to containerize applications and keep environments consistent between development and production. It simplifies deployments and dependency management in projects with several services.",
    },
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-sky-500 dark:group-hover:text-sky-400",
    type: "otro",
  },
  {
    name: "Github",
    desc: {
      es: "Herramienta principal de control de versiones. Trabajo con branching, pull requests y revisión de código en equipos colaborativos.",
      en: "My main version control tool. I work with branching, pull requests and code review in collaborative teams.",
    },
    color: "",
    hoverColor: "group-hover:text-stone-950 dark:group-hover:text-stone-300",
    type: "otro",
  },
  {
    name: "NodeJS",
    desc: {
      es: "Entorno de ejecución de JavaScript que uso principalmente con Next.js y Express para el desarrollo de servidores y APIs.",
      en: "A JavaScript runtime I use mainly with Next.js and Express to develop servers and APIs.",
    },
    color: "text-emerald-400 dark:text-emerald-300",
    hoverColor: "group-hover:text-emerald-400 dark:group-hover:text-emerald-300",
    type: "otro",
  },
  {
    name: "Tailwind",
    desc: {
      es: "Mi framework de estilos preferido. Me permite construir interfaces responsivas y personalizadas de forma rápida, integrándose bien con React y Next.js.",
      en: "My favourite styling framework. It lets me build responsive, custom interfaces quickly and pairs well with React and Next.js.",
    },
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    type: "otro",
  },
  {
    name: "Postman",
    desc: {
      es: "Lo uso para probar y documentar APIs REST, gestionar colecciones y trabajar con distintos entornos de variables durante el desarrollo.",
      en: "I use it to test and document REST APIs, manage collections and work with different variable environments during development.",
    },
    color: "text-orange-500 dark:text-orange-400",
    hoverColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
    type: "otro",
  },
];

// Índice por nombre: lo usa la pastilla para pintar el icono con su color real
// y para abrir el modal cuando es interactiva.
export const TECHS: Partial<Record<TechOptions, TechStackTypes>> =
  Object.fromEntries(
    [...languageObj, ...frameworkObj, ...databaseObj, ...otrosObj].map(
      (tech) => [tech.name, tech],
    ),
  );
