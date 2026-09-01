import { ui } from "@/i18n/ui";

/** Los ids son ancla, ruta y valor de analitica: nunca se traducen. */
export type SectionId = keyof (typeof ui)["es"]["nav"];

// Constantes de módulo: pasarlas al observer como literales nuevas en cada
// render reiniciaba su efecto en cada render.
export const sectionIds: SectionId[] = [
  "sobre-mi",
  "experiencia",
  "proyectos",
  "educacion",
  "stack",
  "contacto",
];
export const noSectionIds: string[] = [];
