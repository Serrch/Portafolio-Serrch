import { TechStackTypes } from "@/types/tech-stack-types/tech-stack-types";

export const languageObj: TechStackTypes[] = [
  {
    name: "Typescript",
    shortDesc: "Desarrollo web",
    desc: "Mi lenguaje principal para desarrollo web profesional. Lo uso con Next.js y React para construir aplicaciones escalables con tipado fuerte y mejor mantenibilidad.",
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    type: "lenguaje",
  },
  {
    name: "Javascript",
    shortDesc: "Desarrollo web",
    desc: "Lenguaje base para el desarrollo web. Lo utilizo tanto en frontend con React como en backend con Node.js y Express.",
    color: "text-yellow-400 dark:text-yellow-300",
    hoverColor: "group-hover:text-yellow-400 dark:group-hover:text-yellow-300",
    type: "lenguaje",
  },
  {
    name: "C#",
    shortDesc: "Desarrollo Back End",
    desc: "Lo utilizo con ASP.NET para el desarrollo de APIs REST estructuradas y orientadas al ambito empresarial, aplicando principios SOLID y Clean Code.",
    color: "text-purple-500 dark:text-purple-400",
    hoverColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    type: "lenguaje",
  },
  {
    name: "Python",
    shortDesc: "Backend y scripting",
    desc: "Lo utilizo con FastAPI para el desarrollo de APIs REST de alto rendimiento y con PySide6 para aplicaciones de escritorio. Tambien lo uso para scripting y automatizacion.",
    color: "text-yellow-500 dark:text-yellow-400",
    hoverColor: "group-hover:text-yellow-500 dark:group-hover:text-yellow-400",
    type: "lenguaje",
  },
];

export const frameworkObj: TechStackTypes[] = [
  {
    name: "NextJS",
    shortDesc: "Desarrollo web",
    desc: "Mi framework principal para aplicaciones web con React. Utilizo el App Router para arquitecturas modernas con Server Components, rutas dinamicas y despliegue optimizado en Vercel.",
    color: "",
    hoverColor: "group-hover:text-stone-950 dark:group-hover:text-stone-300",
    type: "framework",
  },
  {
    name: "React",
    shortDesc: "Desarrollo web",
    desc: "Libreria principal para el desarrollo de interfaces de usuario. La uso con TypeScript para construir componentes reutilizables, manejar estado y consumir APIs REST.",
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-sky-500 dark:group-hover:text-sky-400",
    type: "framework",
  },
  {
    name: ".NET",
    shortDesc: "Desarrollo Back End",
    desc: "Uso ASP.NET para el desarrollo de APIs REST y aplicaciones backend en entornos empresariales, aplicando Clean Code, SOLID y arquitectura MVC.",
    color: "text-purple-500 dark:text-purple-400",
    hoverColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    type: "framework",
  },
  {
    name: "FastAPI",
    shortDesc: "Desarrollo Back End",
    desc: "Framework de Python que uso para construir APIs REST de alto rendimiento. Permite desarrollar backends escalables con tipado automatico, documentacion integrada y despliegue en entornos cloud.",
    color: "text-teal-500 dark:text-teal-400",
    hoverColor: "group-hover:text-teal-500 dark:group-hover:text-teal-400",
    type: "framework",
  },
  {
    name: "Express",
    shortDesc: "Desarrollo Back End",
    desc: "Lo utilizo para la elaboracion de APIs y servidores con Node.js cuando necesito una solucion rapida y flexible.",
    color: "text-emerald-400 dark:text-emerald-300",
    hoverColor: "group-hover:text-emerald-400 dark:group-hover:text-emerald-300",
    type: "framework",
  },
];

export const databaseObj: TechStackTypes[] = [
  {
    name: "PostgreSQL",
    shortDesc: "Base de datos relacional",
    desc: "Mi motor de base de datos principal para proyectos modernos. Lo uso con Supabase para despliegues serverless y directamente con FastAPI o Next.js para aplicaciones que requieren integridad relacional.",
    color: "text-blue-400 dark:text-blue-300",
    hoverColor: "group-hover:text-blue-400 dark:group-hover:text-blue-300",
    type: "otro",
  },
  {
    name: "MSQL",
    shortDesc: "SQL Server",
    desc: "Lo utilizo en entornos empresariales con ASP.NET. Manejo stored procedures, triggers y optimizacion de consultas para sistemas ERP y plataformas financieras.",
    color: "text-red-600 dark:text-red-500",
    hoverColor: "group-hover:text-red-600 dark:group-hover:text-red-500",
    type: "otro",
  },
  {
    name: "Supabase",
    shortDesc: "Backend as a Service",
    desc: "Plataforma cloud que uso como backend serverless con PostgreSQL. Ideal para despliegues rapidos con autenticacion, almacenamiento y base de datos integrados.",
    color: "text-emerald-500 dark:text-emerald-400",
    hoverColor: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
    type: "otro",
  },
];

export const otrosObj: TechStackTypes[] = [
  {
    name: "Docker",
    shortDesc: "Contenedores",
    desc: "Lo uso para contenerizar aplicaciones y garantizar entornos consistentes entre desarrollo y produccion. Facilita los despliegues y la gestion de dependencias en proyectos con multiples servicios.",
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-sky-500 dark:group-hover:text-sky-400",
    type: "otro",
  },
  {
    name: "Github",
    shortDesc: "Control de versiones",
    desc: "Herramienta principal de control de versiones. Trabajo con branching, pull requests y revision de codigo en equipos colaborativos.",
    color: "",
    hoverColor: "group-hover:text-stone-950 dark:group-hover:text-stone-300",
    type: "otro",
  },
  {
    name: "NodeJS",
    shortDesc: "Entorno de ejecucion",
    desc: "Entorno de ejecucion de JavaScript que uso principalmente con Next.js y Express para el desarrollo de servidores y APIs.",
    color: "text-emerald-400 dark:text-emerald-300",
    hoverColor: "group-hover:text-emerald-400 dark:group-hover:text-emerald-300",
    type: "otro",
  },
  {
    name: "Tailwind",
    shortDesc: "Framework de CSS",
    desc: "Mi framework de estilos preferido. Me permite construir interfaces responsivas y personalizadas de forma rapida, integrandose bien con React y Next.js.",
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    type: "otro",
  },
  {
    name: "Postman",
    shortDesc: "Gestion de APIs",
    desc: "Lo uso para probar y documentar APIs REST, gestionar colecciones y trabajar con distintos entornos de variables durante el desarrollo.",
    color: "text-orange-500 dark:text-orange-400",
    hoverColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
    type: "otro",
  },
];
