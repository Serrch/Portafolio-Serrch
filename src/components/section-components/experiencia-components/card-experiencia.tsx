"use client";
import Image from "next/image";
import { CardTypes } from "@/types/sobre-mi-types/card-types";
import ChooseIcon from "./choose-icon-function";
export default function CardExperiencia({
  CardProps,
}: {
  CardProps: CardTypes;
}) {
  return (
    <div className="flex-col border border-zinc-700 rounded-2xl shadow-md ">
      <div className="border-b  mb-2 p-2 md:p-4 grid grid-cols-2 justify-center items-center ">
        <div className="justify-center items-center">
          {CardProps.img ? (
            <Image
              src={`${CardProps.img}`}
              alt={`imagen ${CardProps.title}`}
              width={40}
              height={40}
              className="md:scale-105 md:ml-2"
            ></Image>
          ) : (
            <h2 className="text-xl md:text-2xl"> {CardProps.title}</h2>
          )}
        </div>
        <div className="">
          <h3 className="text-end text-sm">{CardProps.date}</h3>
        </div>
      </div>
      <div className="p-4">
        <p>
          <strong>Cargo: {CardProps.cargo}</strong>
        </p>
        <p className="text-justify text-sm md:text-xl">
          {CardProps.description}
        </p>
      </div>
      <div className="border-t mt-2 p-2 gap-2 items-center">
        <p className="text-sm md:text-xl mb-1">Tecnologias empleadas</p>
        <div className="ml-1 flex gap-1">
          {CardProps.techStack.map((tech, index) => (
            <div key={index}>{ChooseIcon(tech)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
