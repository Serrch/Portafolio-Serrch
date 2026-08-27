export type EducationCardType = {
  kind: "Título" | "Certificación" | "Curso";
  title: string;
  institution: string;
  description: string;
  stDate: string;
  endDate?: string;
  certificationLink?: string;
};
