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
      id="sobre-mi"
      className=" md:min-h-screen snap-start flex items-center justify-center"
    >
      <div className="grid grid-cols-3 gap-6 max-w-6xl">
        <div className=" col-span-1 flex justify-center items-center ">
          <Image
            src="/assets/img-portafolio/yo.jpg"
            alt="Mi foto"
            width={200}
            height={200}
            className="rounded-lg object-cover scale-100 md:scale-150 "
          />
        </div>

        <div className="col-span-2 flex flex-col gap-1 md:gap-4">
          <h1 className="text-4xl font-bold">Sobre mi</h1>
          <p className="text-justify text-sm md:text-xl md:border-b md:pb-2">
            Mi nombre es{" "}
            <strong className="underline">Perez Rivas Sergio E.</strong> soy un
            Ingeniero en software - Desarrollador fullstack.
            <br />
            Me enfoco en crear soluciones prácticas y limpias así como fáciles
            de entender y escalar con la ayuda de los principios de Clean Code y
            SOLID.
            <br />
            Me gusta trabajar en proyectos que involucren la creacion de un
            backend robusto y bien diseñado para poder consumirlo a traves de
            una interfaz atractiva, responsiva y amigable desde el frontend.
          </p>
          <MiStack />
          <div>
            <p className="text-md md:text-xl font-bold mb-1 pt-2 md:border-t">
              Contacto
            </p>
            <div className="grid grid-cols-2 gap-2  md:flex md:gap-2 ">
              <GithubButton />
              <LinkedinButton />
              <CopyButton />
            </div>
            <div>
              <p className="text-md md:text-xl font-bold mb-1 mt-2">
                Descargar curriculum
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
