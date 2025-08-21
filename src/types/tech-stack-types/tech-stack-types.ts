import { TechOptions } from "../sobre-mi-types/card-types";
export type TechStackTypes = {
  name: TechOptions;
  shortDesc: string;
  desc: string;
  color: string;
  hoverColor: string;
  type: "lenguaje" | "framework" | "otro";
};
