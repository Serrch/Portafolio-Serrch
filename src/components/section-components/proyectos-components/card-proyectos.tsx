"use client";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";
import ChooseIcon from "../experiencia-components/choose-icon-function";
import Image from "next/image";
import GithubButton from "../github-button";
import NewPageButton from "../new-page-button";
export default function CardProyectos({
  proyectoObj,
}: {
  proyectoObj: CardProyectoTypes;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl p-4 shadow-md border dark:border-zinc-700">
      <div className="col-span-1 flex items-center justify-center">
        <Image
          src={proyectoObj.img}
          alt={`Imagen-${proyectoObj.title}`}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-around">
        <div className="mb-2">
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
