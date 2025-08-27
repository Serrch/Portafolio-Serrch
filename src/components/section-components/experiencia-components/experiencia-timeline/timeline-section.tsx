import { MdOutlineWorkOutline } from "react-icons/md";
import { CardTypes } from "@/types/sobre-mi-types/card-types";
import CardExperiencia2 from "../card-experiencia2";
export default function TimelineSection({
  experienciaInfo,
}: {
  experienciaInfo: CardTypes;
}) {
  return (
    <li className="mb-2 ms-2 md:ms-6 p-2">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-emerald-900">
        <MdOutlineWorkOutline className="w-4 h-4 text-emerald-800 dark:text-emerald-300" />
      </span>
      <p className="mb-1 ms-2 md:ms-1">
        {experienciaInfo.stDate} - {experienciaInfo.endDate}
      </p>
      <CardExperiencia2 CardProps={experienciaInfo}></CardExperiencia2>
    </li>
  );
}
