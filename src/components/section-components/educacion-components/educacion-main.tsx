"use client";
import EducationCards from "./education-cards";
import { cursosObj, certificacionesObj, titulosObj } from "./education-obj";

export default function Educacion() {
  return (
    <section
      id="4"
      className="min-h-screen 
    snap-start 
    flex flex-col items-center 
    pt-8 md:pt-30 md:pb-10 border-t
    md:max-h-screen md:overflow-y-auto no-scrollbar"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-start">Educación </h2>
        <div className="grid  gap-4 ms-5">
          <div className="flex flex-col gap-4 pb-5 border-b items-center">
            <h3 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Titulos
            </h3>
            {titulosObj.map((titulo, index) => (
              <EducationCards
                key={index}
                educationInfo={titulo}
              ></EducationCards>
            ))}
          </div>
          <div className="flex flex-col gap-4 pb-5 border-b items-center">
            <h3 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Certificaciones
            </h3>
            {certificacionesObj.map((certificacion, index) => (
              <EducationCards
                key={index}
                educationInfo={certificacion}
              ></EducationCards>
            ))}
          </div>
          <div className="flex flex-col gap-4 pb-5 items-center">
            <h3 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Cursos
            </h3>
            {cursosObj.map((curso, index) => (
              <EducationCards
                key={index}
                educationInfo={curso}
              ></EducationCards>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
