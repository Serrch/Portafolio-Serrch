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

type size = "sm" | "md" | "lg";

export default function ChooseIcon({
  name,
  size,
}: {
  name: TechOptions;
  size?: size;
}) {
  const sizeMap = {
    sm: "w-6 h-6 md:w-8 md:h-8",
    md: "w-10 h-10 md:w-12 md:h-12",
    lg: "w-12 h-12 md:w-16 md:h-16",
  } as const;

  let classSize: string = `${size ? sizeMap[size] : sizeMap["sm"]}`;

  const iconMap: Record<TechOptions, React.ReactNode> = {
    Javascript: <SiJavascript className={`${classSize} text-yellow-400`} />,
    HTML: <SiHtml5 className={`${classSize} text-orange-400`} />,
    CSS: <SiCss3 className={`${classSize} text-blue-400`} />,
    Angular: <SiAngular className={`${classSize} text-red-500`} />,
    Typescript: <SiTypescript className={`${classSize} text-blue-500`} />,
    NodeJS: <SiNodedotjs className={`${classSize} text-green-500`} />,
    NextJS: (
      <SiNextdotjs className={`${classSize} text-black dark:text-white`} />
    ),
    React: <SiReact className={`${classSize} text-cyan-400`} />,
    ".NET": <SiDotnet className={`${classSize} text-purple-500`} />,
    MSQL: <DiMsqlServer className={`${classSize} text-red-500`} />,
    Swagger: <SiSwagger className={`${classSize} text-green-500`} />,
    Tailwind: <SiTailwindcss className={`${classSize} text-sky-400`} />,
    MySQL: <SiMysql className={`${classSize} text-blue-300`} />,
    Express: (
      <SiExpress className={`${classSize} text-gray-300 dark:text-white`} />
    ),
    Github: <SiGithub className={`${classSize} text-black dark:text-white`} />,
    "C#": <TbBrandCSharp className={`${classSize} text-purple-500`} />,
    Gitlab: <SiGitlab className={`${classSize} text-orange-500`} />,
    Postman: <SiPostman className={`${classSize} text-orange-400`} />,
    Arduino: (
      <SiArduino className={`${classSize} text-blue-500 dark:text-blue-300`} />
    ),
  };

  return iconMap[name] ?? <p>{name}</p>;
}
