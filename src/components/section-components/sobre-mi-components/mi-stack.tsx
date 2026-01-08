import ChooseIcon from "../experiencia-components/choose-icon-function";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
export default function MiStack() {
  const stack: TechOptions[] = [
    ".NET",
    "Javascript",
    "Typescript",
    "NextJS",
    "React",
    "MSQL",
  ];

  return (
    <div className="border rounded-2xl p-2 shadow-md dark:bg-accent dark:border-zinc-600 border-zinc-300 max-w-fit ">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-1">
        Mi stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <ChooseIcon key={index} name={tech} size="sm"></ChooseIcon>
        ))}
      </div>
    </div>
  );
}
