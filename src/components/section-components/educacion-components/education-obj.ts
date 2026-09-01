import { EducationCardType } from "@/types/education-types/education-types";

// Una sola lista: el tipo lo dice la etiqueta de la tarjeta, no el array.
export const educacionObj: EducationCardType[] = [
  {
    kind: "degree",
    title: { es: "Ingeniería en Software", en: "Software Engineering" },
    institution: "Universidad Estatal de Sonora",
    description: {
      es: "Fundamentos de programación, desarrollo y arquitectura de software, con introducción a la electrónica con Arduino.",
      en: "Programming fundamentals, software development and architecture, with an introduction to electronics using Arduino.",
    },
    start: "2021-08",
    end: "2025-05",
  },
  {
    kind: "certification",
    title: { es: "JavaScript", en: "JavaScript" },
    institution: "Scrimba",
    description: {
      es: "Conceptos fundamentales del lenguaje JavaScript aplicados al desarrollo profesional de páginas web.",
      en: "Core concepts of the JavaScript language applied to professional web development.",
    },
    start: "2024-07",
    certificationLink:
      "https://www.coursera.org/account/accomplishments/verify/5RYVLCV97Y3M",
  },
  {
    kind: "course",
    title: { es: "Principios SOLID", en: "SOLID Principles" },
    institution: "Radical Software",
    description: {
      es: "Aplicación de los principios SOLID en los proyectos desarrollados durante mi estancia en la empresa.",
      en: "Application of the SOLID principles across the projects I worked on during my time at the company.",
    },
    start: "2024-12",
    end: "2025-01",
  },
];
