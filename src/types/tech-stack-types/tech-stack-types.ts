import { I18nText } from "@/i18n/config";
import { TechOptions } from "../sobre-mi-types/card-types";

export type TechStackTypes = {
  name: TechOptions;
  desc: I18nText;
  color: string;
  hoverColor: string;
  type: "lenguaje" | "framework" | "otro";
};
