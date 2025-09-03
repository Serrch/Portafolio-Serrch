"use client";
import Image from "next/image";
import GithubButton from "../github-button";
import DownloadCVButton from "../download-cv-button";
import CopyButton from "../copy-button";
import LinkedinButton from "../linkedin-button";
import MiStack from "./mi-stack";

export default function SobreMi() {
  return (
    <section
      id="1"
      className="md:min-h-screen snap-start flex items-center justify-center"
    >
      <div className="grid grid-cols-3 gap-6 max-w-6xl">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src="/assets/img-portafolio/yo.jpg"
            alt="Mi foto"
            width={180}
            height={180}
            className="rounded-lg object-cover h-auto w-auto scale-100 md:scale-120 xl:scale-140"
            priority
          />
        </div>

        <div className="col-span-2 flex flex-col gap-1 md:gap-4">
          <h1 className="text-4xl font-bold">Sobre mí</h1>
          <p className="text-justify text-sm md:text-xl md:pb-2 p-2">
            Hola, mi nombre es{" "}
            <strong className="underline">Perez Rivas Sergio E.</strong> Soy
            Ingeniero en Software y Desarrollador Fullstack apasionado por crear
            soluciones tecnológicas eficientes y fáciles de mantener.
            <br />
            Me especializo en desarrollar aplicaciones limpias y escalables,
            aplicando los principios de Clean Code y SOLID para garantizar
            calidad y sostenibilidad en cada proyecto.
            <br />
            Disfruto trabajando en proyectos que integren un backend robusto y
            bien estructurado con interfaces frontend atractivas, responsivas y
            fáciles de usar, ofreciendo así experiencias completas y funcionales
            para los usuarios.
          </p>
          <MiStack />
          <div>
            <p className="text-md md:text-xl font-bold mb-1 pt-2">Contacto</p>
            <div className="grid grid-cols-2 gap-2 md:flex md:gap-2">
              <GithubButton />
              <LinkedinButton />
              <CopyButton />
            </div>
            <div>
              <p className="text-md md:text-xl font-bold mb-1 mt-2">
                Descargar currículum
              </p>
              <div className="flex">
                <DownloadCVButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
