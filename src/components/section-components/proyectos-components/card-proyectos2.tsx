"use client";
import Image from "next/image";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";
import GithubButton from "../github-button";
import NewPageButton from "../new-page-button";
import ChooseIcon from "../experiencia-components/choose-icon-function";
import RedirectButton from "../redirect-button";

export default function CardProyectos2({
  proyectoObj,
}: {
  proyectoObj: CardProyectoTypes;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-4 shadow-md border dark:border-zinc-700 h-full">
      <div className="flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={proyectoObj.img}
          alt={`Imagen-${proyectoObj.title}`}
          width={600}
          height={600}
          className="w-full h-60 object-cover"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="mb-2">
          <h2 className="text-2xl font-bold">{proyectoObj.title}</h2>
          <p className="text-sm dark:text-zinc-400">{proyectoObj.status}</p>
        </div>

        <p className="text-sm md:text-base dark:text-zinc-300 text-justify">
          {proyectoObj.description}
        </p>

        <div className="flex flex-col items-start justify-center flex-1 gap-4 mt-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <RedirectButton link={proyectoObj.detailPage} texto="Ver más" />
            {proyectoObj.githubLink && (
              <GithubButton link={proyectoObj.githubLink} />
            )}
            {proyectoObj.pageLink && (
              <NewPageButton link={proyectoObj.pageLink} />
            )}
          </div>
          <div className="w-full">
            <p className="font-medium mb-2 text-start">Tecnologías:</p>
            <div className="flex flex-wrap gap-2 justify-start">
              {proyectoObj.techStack.map((tech, index) => (
                <div key={index}>
                  <ChooseIcon name={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
