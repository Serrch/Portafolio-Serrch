"use client";
import Image from "next/image";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";
import GithubButton from "../github-button";
import NewPageButton from "../new-page-button";
import ChooseIcon from "../experiencia-components/choose-icon-function";
export default function CardProyectos2({
  proyectoObj,
}: {
  proyectoObj: CardProyectoTypes;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-4 shadow-md border dark:border-zinc-700 h-full">
      <div className="flex items-center justify-center overflow-hidden rounded-lg h-full">
        <Image
          src={proyectoObj.img}
          alt={`Imagen-${proyectoObj.title}`}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-around h-full">
        <div className="mb-2 f">
          <h2 className="text-2xl font-bold">{proyectoObj.title}</h2>
          <p className="text-sm dark:text-zinc-400">{proyectoObj.status}</p>
        </div>

        <p className="text-sm md:text-base dark:text-zinc-300 mb-4 text-justify">
          {proyectoObj.description}
        </p>

        <div className="flex flex-col gap-3 md:grid grid-cols-2 justify-between items-center md:items-start">
          <div className="flex gap-2 ">
            <GithubButton link={proyectoObj.githubLink} />
            {proyectoObj.pageLink ? (
              <NewPageButton link={proyectoObj.pageLink} />
            ) : (
              <div></div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 justify-end">
            <div className="flex justify-center md:justify-end">
              <p>Tecnologias: </p>
            </div>

            <div className="flex gap-2 justify-center md:justify-center ">
              {proyectoObj.techStack.map((tech, index) => (
                <div key={index}>{ChooseIcon(tech)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
