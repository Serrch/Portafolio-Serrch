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
      className="md:min-h-screen flex  snap-start items-center justify-center"
    >
      <div className="flex flex-col max-w-6xl">
        <h1 className="sr-only">Bienvenido a mi portafolio</h1>
        <h2 className="text-4xl font-bold text-center -mb-12 md:mb-0 md:text-start md:ms-4 ">
          Sobre mi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
          <div className="md:col-span-1 flex justify-center items-center ">
            <Image
              src="/assets/img-portafolio/yo.jpg"
              alt="Mi foto"
              width={180}
              height={180}
              className="scale-60 md:scale-120 xl:scale-140 rounded-full md:rounded-lg object-cover h-auto w-auto"
              priority
            />
          </div>

          <div className="md:col-span-2 flex flex-col md:gap-4">
            <p className="text-justify text-md md:text-xl md:pb-2 p-2 -mt-12 mb-2 md:mb-0 md:mt-5  ">
              Hola, mi nombre es{" "}
              <strong className="underline">Perez Rivas Sergio E.</strong> Soy
              Ingeniero en Software y Desarrollador Fullstack con experiencia
              profesional en desarrollo web, plataformas empresariales y
              aplicaciones multiplataforma.
              <br />
              Me especializo en construir soluciones escalables con TypeScript,
              React, Next.js y PostgreSQL, integrando backends robustos con
              interfaces funcionales y bien estructuradas. Aplico principios de
              Clean Code y SOLID para garantizar calidad y mantenibilidad en
              cada proyecto.
              <br />
              He trabajado en entornos de mejora continua, soporte de
              plataformas ERP, sistemas financieros y aplicaciones con
              despliegue en entornos cloud como Vercel y Supabase.
            </p>
            <div className="flex justify-center md:justify-start">
              <MiStack />
            </div>
            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-1 mt-2">
                Contacto
              </h3>
              <div className="grid grid-cols-2 gap-2 md:flex md:gap-2 mb-5 md:mb-0">
                <GithubButton
                  onClick={() => window.umami?.track("contacto-github")}
                />
                <LinkedinButton
                  onClick={() => window.umami?.track("contacto-linkedin")}
                />
                <CopyButton />
              </div>
              <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-1 mt-2">
                  Descargar curriculum
                </h3>
                <div className="flex">
                  <DownloadCVButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
