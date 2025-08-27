export type CardType = CardTypes[];

export type CardTypes = {
  title: string;
  img: string;
  description: string;
  cargo: string;
  stDate: string;
  endDate: string;
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
  | "Gitlab";
