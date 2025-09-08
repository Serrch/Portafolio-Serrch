import { TechStackTypes } from "@/types/tech-stack-types/tech-stack-types";

export const languageObj: TechStackTypes[] = [
  {
    name: "Javascript",
    shortDesc: "Desarrollo web",
    desc: "Suelo usar Javascript para el desarrollo de páginas sencillas y en conjunción con ExpressJS para el desarrollo de APIs.",
    color: "text-yellow-400 dark:text-yellow-300",
    hoverColor: "group-hover:text-yellow-400 dark:group-hover:text-yellow-300",
    type: "lenguaje",
  },
  {
    name: "Typescript",
    shortDesc: "Desarrollo web",
    desc: "Utilizo Typescript para el desarrollo web más exigente, profesional y escalable, con ayuda de NextJS y React.",
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    type: "lenguaje",
  },
  {
    name: "C#",
    shortDesc: "Desarrollo Back End",
    desc: "Suelo utilizar C# cuando necesito un desarrollo de proyectos más estructurado (implementación de interfaces, clases abstractas, etc.) o cuando requiero mayor conexión con el hardware.",
    color: "text-purple-500 dark:text-purple-400",
    hoverColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    type: "lenguaje",
  },
];

export const frameworkObj: TechStackTypes[] = [
  {
    name: "NextJS",
    shortDesc: "Desarrollo web",
    desc: "NextJS es mi herramienta principal para diseñar páginas que requieren un manejo profesional, ya que agrega muchas funcionalidades útiles a la librería de React, así como el tipado fuerte de Typescript.",
    color: "",
    hoverColor: "group-hover:text-stone-950 dark:group-hover:text-stone-300",
    type: "framework",
  },
  {
    name: "React",
    shortDesc: "Desarrollo web",
    desc: "React me ayuda a desarrollar mis páginas web de una manera más rápida gracias a sus múltiples herramientas, pero sobre todo por el manejo de componentes tan sencillo con el que cuenta. Me gusta implementarlo con NextJS para trabajarlo como un framework completo.",
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-sky-500 dark:group-hover:text-sky-400",
    type: "framework",
  },
  {
    name: ".NET",
    shortDesc: "Desarrollo Back End",
    desc: "Uso .NET y ASP.NET cuando necesito que mis aplicaciones de Back End cuenten con una estructura profesional y más orientada al ámbito organizacional, por su facilidad al trabajar con el modelo MVC.",
    color: "text-purple-500 dark:text-purple-400",
    hoverColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    type: "framework",
  },

  {
    name: "Express",
    shortDesc: "Desarrollo Back End",
    desc: "Suelo utilizar Express para la elaboración de APIs, aplicaciones y servidores con requerimientos sencillos y de rápida implementación, en conjunción con MySQL.",
    color: "text-emerald-400 dark:text-emerald-300",
    hoverColor:
      "group-hover:text-emerald-400 dark:group-hover:text-emerald-300",
    type: "framework",
  },
];

export const databaseObj: TechStackTypes[] = [
  {
    name: "MSQL",
    shortDesc: "Motor de base de datos",
    desc: "Microsoft SQL lo utilizo en conjunto con .NET, ya que se integra bastante bien con dicho entorno y me permite trabajar con .NET sin tantas complicaciones. Además, aquí integro procedimientos almacenados, triggers, etc.",
    color: "text-red-600 dark:text-red-500",
    hoverColor: "group-hover:text-red-600 dark:group-hover:text-red-500",
    type: "otro",
  },
];

export const otrosObj: TechStackTypes[] = [
  {
    name: "NodeJS",
    shortDesc: "Entorno de ejecución",
    desc: "Utilizo NodeJS cuando requiero trabajar con NextJS, pero principalmente con ExpressJS en el desarrollo de proyectos rápidos.",
    color: "text-emerald-400 dark:text-emerald-300",
    hoverColor:
      "group-hover:text-emerald-400 dark:group-hover:text-emerald-300",
    type: "otro",
  },
  {
    name: "Github",
    shortDesc: "Control de versiones",
    desc: "Es mi principal herramienta de control de versiones; la utilizo para gestionar los cambios en mis proyectos personales.",
    color: "",
    hoverColor: "group-hover:text-stone-950 dark:group-hover:text-stone-300",
    type: "otro",
  },
  {
    name: "Tailwind",
    shortDesc: "Framework de CSS",
    desc: "Tailwind es mi framework de clases de bajo nivel preferido, ya que me permite una gran personalización en mis páginas, además de que se integra fácilmente con distintas librerías de componentes.",
    color: "text-sky-500 dark:text-sky-400",
    hoverColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    type: "otro",
  },
  {
    name: "Postman",
    shortDesc: "Gestion de API's",
    desc: "Utilizo frecuentemente Postman para probar las respuestas de mis API's cuando ThuderClient no es suficiente. Me ayuda mucho la gestion de entornos de valores ademas de las distintas colecciones que se pueden guardar.",
    color: "text-orange-500 dark:text-orange-400",
    hoverColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
    type: "otro",
  },
];
