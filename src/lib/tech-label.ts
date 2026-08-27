import { TechOptions } from "@/types/sobre-mi-types/card-types";

// Los nombres del modelo son claves internas; estas son las grafias que usa
// cada proyecto. Solo se listan las que difieren.
const LABELS: Partial<Record<TechOptions, string>> = {
  Typescript: "TypeScript",
  Javascript: "JavaScript",
  NextJS: "Next.js",
  NodeJS: "Node.js",
  MSQL: "SQL Server",
  Github: "GitHub",
  Gitlab: "GitLab",
};

export const techLabel = (tech: TechOptions) => LABELS[tech] ?? tech;
