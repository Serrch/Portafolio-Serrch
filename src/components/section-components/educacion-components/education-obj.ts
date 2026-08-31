import { EducationCardType } from "@/types/education-types/education-types";

// Una sola lista: el tipo lo dice la etiqueta de la tarjeta, no el array.
export const educacionObj: EducationCardType[] = [
  {
    kind: "Título",
    title: "Ingeniería en Software",
    institution: "Universidad Estatal de Sonora",
    description:
      "Fundamentos de programación, desarrollo y arquitectura de software, con introducción a la electrónica con Arduino.",
    stDate: "Agosto 2021",
    endDate: "Mayo 2025",
  },
  {
    kind: "Certificación",
    title: "JavaScript",
    institution: "Scrimba",
    description:
      "Conceptos fundamentales del lenguaje JavaScript aplicados al desarrollo profesional de páginas web.",
    stDate: "Julio 2024",
    certificationLink:
      "https://www.coursera.org/account/accomplishments/verify/5RYVLCV97Y3M",
  },
  {
    kind: "Curso",
    title: "Principios SOLID",
    institution: "Radical Software",
    description:
      "Aplicación de los principios SOLID en los proyectos desarrollados durante mi estancia en la empresa.",
    stDate: "Diciembre 2024",
    endDate: "Enero 2025",
  },
];
