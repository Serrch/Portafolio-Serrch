import EducationCards from "./education-cards";
import { cursosObj, certificacionesObj, titulosObj } from "./education-obj";

export default function Educacion() {
  return (
    <section
      id="educacion"
      className="min-h-screen 
    snap-start 
    flex flex-col items-center 
    pt-8 md:pt-30 md:pb-10 border-t

    md:max-h-screen md:overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-gray-400 md:scrollbar-track-transparent md:scrollbar-thumb-rounded-full"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-start">Educacion</h2>
        <div className="grid  gap-4 ms-5">
          <div className="flex flex-col gap-4 pb-5 border-b">
            <h3 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Titulos
            </h3>
            {titulosObj.map((titulo, index) => (
              <div key={index}>
                <EducationCards educationInfo={titulo}></EducationCards>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pb-5 border-b">
            <h3 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Certificaciones
            </h3>
            {certificacionesObj.map((certificacion, index) => (
              <div key={index}>
                <EducationCards educationInfo={certificacion}></EducationCards>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pb-5">
            <h3 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Cursos
            </h3>
            {cursosObj.map((curso, index) => (
              <div key={index}>
                <EducationCards educationInfo={curso}></EducationCards>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
