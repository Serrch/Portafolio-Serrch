"use client";
import Image from "next/image";
import { CardTypes } from "@/types/sobre-mi-types/card-types";
import ChooseIcon from "./choose-icon-function";
export default function CardExperiencia2({
  CardProps,
}: {
  CardProps: CardTypes;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl p-4 shadow-md border dark:border-zinc-700">
      <div className="col-span-1 flex items-center justify-center">
        <div className="relative w-40 h-20 md:w-70 md:h-60 flex items-center justify-center">
          <Image
            src={CardProps.img}
            alt={`imagen ${CardProps.title}`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 96px, 160px"
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-around md:gap-4">
        <div className="mb-2">
          <div className="md:flex gap-2 items-center md:justify-between">
            <h3 className="text-2xl font-bold">{CardProps.title}</h3>
          </div>
          <p className="text-sm dark:text-zinc-400">
            <strong> Cargo: {CardProps.cargo} </strong>
          </p>
        </div>
        <p className="text-sm md:text-base dark:text-zinc-300 mb-2 text-justify">
          {CardProps.description}
        </p>
        <div className="grid grid-cols-1 md:flex  gap-2 justify-center md:justify-start">
          <p className="text-center md:text-end">Tecnologias:</p>
          <div className="flex gap-2 justify-center md:justify-start">
            {CardProps.techStack.map((tech, index) => (
              <div key={index}>
                <ChooseIcon name={tech}></ChooseIcon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
