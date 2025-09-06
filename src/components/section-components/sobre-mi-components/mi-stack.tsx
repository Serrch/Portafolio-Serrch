import ChooseIcon from "../experiencia-components/choose-icon-function";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
export default function MiStack() {
  const stack: TechOptions[] = [
    "Javascript",
    "Typescript",
    "NodeJS",
    "NextJS",
    "React",
    ".NET",
    "MSQL",
  ];

  return (
    <div className="border rounded-2xl p-2 shadow-md dark:bg-accent dark:border-zinc-600 border-zinc-300 md:max-w-min">
      <p className="text-md md:text-xl font-bold mb-1">Mi stack </p>
      <div className="flex gap-2">
        {stack.map((tech, index) => (
          <div key={index}>
            <ChooseIcon name={tech}></ChooseIcon>
          </div>
        ))}
      </div>
    </div>
  );
}
