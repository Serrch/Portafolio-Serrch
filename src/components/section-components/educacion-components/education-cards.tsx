import { SlGraduation, SlCheck, SlExclamation, SlBadge } from "react-icons/sl";
import { EducationCardType } from "@/types/education-types/education-types";
import Image from "next/image";
export default function EducationCards({
  educationInfo,
}: {
  educationInfo: EducationCardType;
}) {
  return (
    <div
      className={
        educationInfo.certificationLink
          ? "flex flex-col justify-around rounded-2xl hover:bg-accent hover:scale-105 transition cursor-pointer"
          : "flex flex-col justify-around"
      }
    >
      <div className="grid grid-cols-5 gap-2 border dark:border-zinc-700   shadow-md rounded-xl p-2 md:p-4">
        <div className="col-span-1 flex items-center justify-center">
          {educationInfo.img ? (
            <img
              src={educationInfo.img}
              width={1000}
              height={800}
              alt="imagen-certificado"
            />
          ) : educationInfo.certificationLink ? (
            <SlBadge className="w-12 h-auto" />
          ) : (
            <SlGraduation className="w-12 h-auto" />
          )}
        </div>
        <div className="col-span-3 flex flex-col gap-2 ">
          <h2 className="text-xl md:text-2xl font-bold">
            {educationInfo.title}
          </h2>
          <p className="text-sm md:text-base dark:text-zinc-300 text-justify">
            {educationInfo.description}
          </p>

          <p className="text-sm dark:text-zinc-400">
            {educationInfo.endDate
              ? `${educationInfo.stDate} - ${educationInfo.endDate}`
              : educationInfo.stDate}
          </p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          {educationInfo.status ? (
            <SlCheck className="w-12 h-auto text-emerald-600 dark:text-emerald-400" />
          ) : (
            <SlExclamation className="w-12 h-auto text-amber-400 dark:text-amber-300 " />
          )}
        </div>
      </div>
    </div>
  );
}
