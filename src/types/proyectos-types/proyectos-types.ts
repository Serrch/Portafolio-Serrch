import { TechOptions } from "../sobre-mi-types/card-types";

export type CardProyectoTypes = {
  title: string;
  status: "En proceso" | "Terminado" | "Remake en proceso";
  description: string;
  img: string;
  techStack: TechOptions[];
  githubLink: string;
  pageLink?: string;
};
