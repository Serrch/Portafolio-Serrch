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
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

const sizeMap = {
  sm: "w-6 h-6 md:w-8 md:h-8",
  md: "w-10 h-10 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
} as const;

type SizeKey = keyof typeof sizeMap;

type ChooseIconStackProps = {
  name: TechOptions;
  color: string;
  hoverColor: string;
  size?: SizeKey;
  originalColor?: boolean;
};

export default function ChooseIconStack({
  name,
  color,
  hoverColor,
  size = "md",
  originalColor,
}: ChooseIconStackProps) {
  const clases = originalColor
    ? `${sizeMap[size]} ${color}`
    : `${sizeMap[size]} text-emerald-700 dark:text-emerald-500 transition duration-200 ease-in-out transition-colors ${hoverColor}`;

  const iconMap: Record<TechOptions, React.ReactNode> = {
    Javascript: <SiJavascript className={clases} />,
    HTML: <SiHtml5 className={clases} />,
    CSS: <SiCss3 className={clases} />,
    Angular: <SiAngular className={clases} />,
    Typescript: <SiTypescript className={clases} />,
    NodeJS: <SiNodedotjs className={clases} />,
    NextJS: <SiNextdotjs className={clases} />,
    React: <SiReact className={clases} />,
    ".NET": <SiDotnet className={clases} />,
    MSQL: <DiMsqlServer className={clases} />,
    Swagger: <SiSwagger className={clases} />,
    Tailwind: <SiTailwindcss className={clases} />,
    MySQL: <SiMysql className={clases} />,
    Express: <SiExpress className={clases} />,
    Github: <SiGithub className={clases} />,
    "C#": <TbBrandCSharp className={clases} />,
    Gitlab: <SiGitlab className={clases} />,
    Postman: <SiPostman className={clases} />,
    Arduino: <SiArduino className={clases} />,
  };

  return iconMap[name] ?? <p>{name}</p>;
}
