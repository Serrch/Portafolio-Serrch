import { NavbarLinksType } from "@/types/header-types";

export const sections: NavbarLinksType = [
  { id: "sobre-mi", title: "Sobre mí", link: "/#sobre-mi" },
  { id: "experiencia", title: "Experiencia", link: "/#experiencia" },
  { id: "proyectos", title: "Proyectos", link: "/#proyectos" },
  { id: "educacion", title: "Educación", link: "/#educacion" },
  { id: "stack", title: "Stack", link: "/#stack" },
  { id: "contacto", title: "Contacto", link: "/#contacto" },
];

// Constantes de módulo: pasarlas al observer como literales nuevas en cada
// render reiniciaba su efecto en cada render.
export const sectionIds = sections.map((s) => s.id);
export const noSectionIds: string[] = [];
