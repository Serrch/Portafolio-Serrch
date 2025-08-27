import { EducationCardType } from "@/types/education-types/education-types";
import { SlBadge, SlGraduation } from "react-icons/sl";
import EducationCards from "./education-cards";
export default function TimelineSection({
  educationInfo,
}: {
  educationInfo: EducationCardType;
}) {
  return (
    <li className="mb-2 ms-2 md:ms-6 p-2">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-emerald-900">
        {educationInfo.certificationLink ? (
          <SlBadge className="w-4 h-4 text-emerald-800 dark:text-emerald-300" />
        ) : (
          <SlGraduation className="w-4 h-4 text-emerald-800 dark:text-emerald-300" />
        )}
      </span>
      <p className="mb-1">{educationInfo.stDate}</p>
      <EducationCards educationInfo={educationInfo}></EducationCards>
    </li>
  );
}
