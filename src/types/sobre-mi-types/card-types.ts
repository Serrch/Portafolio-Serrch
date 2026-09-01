import { I18nText } from "@/i18n/config";

export type CardType = CardTypes[];

export type CardTypes = {
  title: string;
  img: string;
  description: I18nText;
  cargo: I18nText;
  /** "AAAA-MM": el idioma decide como se escribe el mes, no el dato. */
  start: string;
  /** null = puesto actual. */
  end: string | null;
  /** Proporción ancho/alto del logo, para normalizar su área en pantalla. */
  logoRatio: number;
  techStack: TechOptions[];
};

export type TechOptions =
  | "HTML"
  | "CSS"
  | "Javascript"
  | "Typescript"
  | "NodeJS"
  | "NextJS"
  | ".NET"
  | "MSQL"
  | "MySQL"
  | "Angular"
  | "Express"
  | "React"
  | "Swagger"
  | "Tailwind"
  | "Github"
  | "C#"
  | "Gitlab"
  | "Postman"
  | "Arduino"
  | "PostgreSQL"
  | "Python"
  | "FastAPI"
  | "Supabase"
  | "Docker"
  | "Expo";
