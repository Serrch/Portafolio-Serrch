"use client";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiSwagger,
  SiTailwindcss,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

export default function ChooseIcon(name: string) {
  switch (name) {
    case "Javascript":
      return <SiJavascript className="text-yellow-400 w-6 h-6" />;

    case "Typescript":
      return <SiTypescript className="text-blue-500 w-6 h-6" />;

    case "NodeJS":
      return <SiNodedotjs className="text-green-500 w-6 h-6" />;

    case "NextJS":
      return <SiNextdotjs className="dark:text-white w-6 h-6" />;

    case "React":
      return <SiReact className="text-blue-500 w-6 h-6" />;

    case ".NET":
      return <SiDotnet className="text-purple-500 w-6 h-6" />;

    case "MSQL":
      return <DiMsqlServer className="text-orange-500 w-6 h-6" />;

    case "Swagger":
      return <SiSwagger className="text-green-500 w-6 h-6" />;

    case "Tailwind":
      return <SiTailwindcss className="text-blue-500 w-6 h-6" />;

    default:
      return <p>{`${name}`}</p>;
  }
}
