export type CardType = CardTypes[];

export type CardTypes = {
  title: string;
  img: string;
  description: string;
  cargo: string;
  stDate: string;
  endDate: string;
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
