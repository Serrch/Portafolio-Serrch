"use client";
import { useState } from "react";
import { SlGraduation, SlCheck, SlExclamation, SlBadge } from "react-icons/sl";
import { EducationCardType } from "@/types/education-types/education-types";
import { Button } from "@/components/ui/button";

export default function EducationCards({
  educationInfo,
}: {
  educationInfo: EducationCardType;
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => setExpanded((prev) => !prev);

  return (
    <div className="grid grid-cols-5 gap-2 border dark:border-zinc-700 shadow-md rounded-xl p-2 md:p-4">
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
        <h2 className="text-xl md:text-2xl font-bold">{educationInfo.title}</h2>

        <p
          className={`text-sm md:text-base dark:text-zinc-300 text-justify transition-all ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {educationInfo.description}
        </p>

        {educationInfo.description.length > 120 && (
          <button
            onClick={toggleDescription}
            className="text-xs text-blue-500 dark:text-blue-400 hover:underline self-start"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </button>
        )}

        <div className="grid grid-cols-1 justify-center gap-2 md:flex md:items-center md:justify-between mt-2">
          <p className="text-sm dark:text-zinc-400 text-center md:text-start">
            {educationInfo.endDate
              ? `${educationInfo.stDate} - ${educationInfo.endDate}`
              : educationInfo.stDate}
          </p>

          {educationInfo.certificationLink && (
            <Button asChild variant="outline" size="sm">
              <a
                href={educationInfo.certificationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver certificado
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-center">
        {educationInfo.status ? (
          <SlCheck className="w-12 h-auto text-emerald-600 dark:text-emerald-400" />
        ) : (
          <SlExclamation className="w-12 h-auto text-amber-400 dark:text-amber-300 " />
        )}
      </div>
    </div>
  );
}
