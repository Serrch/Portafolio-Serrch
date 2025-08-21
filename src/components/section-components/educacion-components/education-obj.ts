import { EducationCardType } from "@/types/education-types/education-types";

export const educationObj: EducationCardType[] = [
  {
    title: "Ingeniería en Software - UES",
    status: false,
    description:
      "Título universitario de la carrera Ingeniería en Software. Durante el transcurso de la carrera aprendí los conceptos básicos de programación, " +
      "desarrollo y arquitectura de software, además de un poco de electrónica con Arduino. \nTítulo en trámite.",
    stDate: "Agosto 2021",
    endDate: "Mayo 2025",
    img: "https://ues.mx/Docs/conocenos/identidad_UES/LogoUesVinoFondoTransparente.png?0.13975010473019678",
  },
  {
    title: "Certificación Scrimba - JavaScript",
    status: true,
    description:
      "Durante el curso aprendí en profundidad los conceptos fundamentales del lenguaje JavaScript para desarrollar páginas " +
      "de manera profesional. \nCertificación obtenida al completar el curso.",
    stDate: "Julio 2024",
    certificationLink:
      "https://www.coursera.org/account/accomplishments/verify/5RYVLCV97Y3M",
  },
];
