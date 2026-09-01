import { I18nText } from "@/i18n/config";
import { TechOptions } from "../sobre-mi-types/card-types";

export type CardProyectoTypes = {
  /** El espanol es el nombre canonico: es el que ya viaja en la analitica. */
  title: I18nText;
  /** Clave, no etiqueta: la etiqueta visible sale del diccionario. */
  status: "done" | "in-progress" | "remake";
  description: I18nText;
  img: string;
  techStack: TechOptions[];
  githubLink?: string;
  /** Ruta interna sin prefijo de idioma, o URL externa completa. */
  detailPage: string;
};
