import { I18nText } from "@/i18n/config";

export type EducationCardType = {
  /** Clave, no etiqueta: la etiqueta visible sale del diccionario. */
  kind: "degree" | "certification" | "course";
  title: I18nText;
  institution: string;
  description: I18nText;
  start: string;
  end?: string;
  certificationLink?: string;
};
