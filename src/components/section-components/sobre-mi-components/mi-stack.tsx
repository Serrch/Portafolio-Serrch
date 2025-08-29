import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiDotnet,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
export default function MiStack() {
  return (
    <div className="border rounded-2xl p-2 shadow-md dark:bg-emerald-950 md:max-w-min">
      <p className="text-md md:text-xl font-bold mb-1">Mi stack </p>
      <div className="flex gap-2">
        <SiJavascript className="text-yellow-400 w-8 h-8" />
        <SiTypescript className="text-blue-500 w-8 h-8" />
        <SiNodedotjs className="text-green-500 w-8 h-8" />
        <SiNextdotjs className="dark:text-white w-8 h-8" />
        <SiReact className="text-blue-500 w-8 h-8" />
        <SiDotnet className="text-purple-500 w-8 h-8" />
        <DiMsqlServer className="text-orange-500 w-8 h-8" />
      </div>
    </div>
  );
}
