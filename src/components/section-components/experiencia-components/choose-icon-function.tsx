"use client";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiAngular,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiSwagger,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiArduino,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

const iconMap: Record<TechOptions, React.ReactNode> = {
  Javascript: <SiJavascript className="text-yellow-400 w-6 h-6" />,
  HTML: <SiHtml5 className="text-orange-400 w-6 h-6" />,
  CSS: <SiCss3 className="text-blue-400 w-6 h-6" />,
  Angular: <SiAngular className="text-red-400 w-6 h-6" />,
  Typescript: <SiTypescript className="text-blue-500 w-6 h-6" />,
  NodeJS: <SiNodedotjs className="text-green-500 w-6 h-6" />,
  NextJS: <SiNextdotjs className="dark:text-white w-6 h-6" />,
  React: <SiReact className="text-blue-500 w-6 h-6" />,
  ".NET": <SiDotnet className="text-purple-500 w-6 h-6" />,
  MSQL: <DiMsqlServer className="text-orange-500 w-6 h-6" />,
  Swagger: <SiSwagger className="text-green-500 w-6 h-6" />,
  Tailwind: <SiTailwindcss className="text-blue-500 w-6 h-6" />,
  MySQL: <SiMysql className="text-blue-300 w-6 h-6" />,
  Express: <SiExpress className="text-green-500 w-6 h-6" />,
  Github: <SiGithub className="dark:text-white w-6 h-6" />,
  "C#": <TbBrandCSharp className="text-purple-500 w-6 h-6" />,
  Gitlab: <SiGitlab className="text-orange-500 w-6 h-6" />,
  Postman: <SiPostman className="text-orange-500 w-6 h-6" />,
  Arduino: <SiArduino className="text-blue-500 dark:text-blue-300 w-6 h-6" />,
};

export default function ChooseIcon({ name }: { name: TechOptions }) {
  return iconMap[name] ?? <p>{name}</p>;
}
