import { languageObj, frameworkObj, databaseObj, otrosObj } from "./tech-obj";
import TechCards from "./tech-cards";
export default function Stack() {
  return (
    <section
      id="5"
      className="min-h-screen 
    snap-start 
    flex flex-col items-center 
    pt-8 md:pt-30 md:pb-10 border-t

    md:max-h-screen md:overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-gray-400 md:scrollbar-track-transparent md:scrollbar-thumb-rounded-full"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full px-4">
        <h1 className="text-4xl font-bold text-start mb-2">Tech Stack</h1>
        <div className="grid  gap-4 ms-5">
          <div className="flex flex-col gap-4 pb-5 border-b">
            <h2 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Lenguajes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languageObj.map((language, index) => (
                <div key={index}>
                  <TechCards techObj={language}></TechCards>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-5 border-b">
            <h2 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Frameworks y librerías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {frameworkObj.map((framework, index) => (
                <div key={index}>
                  <TechCards techObj={framework}></TechCards>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-5 border-b">
            <h2 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Base de Datos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {databaseObj.map((database, index) => (
                <div key={index}>
                  <TechCards techObj={database}></TechCards>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="scroll-m-20  pb-2 text-3xl  tracking-tight first:mt-0">
              Otros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otrosObj.map((otro, index) => (
                <div key={index}>
                  <TechCards techObj={otro}></TechCards>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
