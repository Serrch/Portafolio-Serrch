"use client";
import CardExperiencia from "./card-experiencia";
import { experienciaCards } from "./experiencia-obj";
export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="md:min-h-screen snap-start flex items-center justify-center pt-8 border-t"
    >
      <div className="grid grid-cols-1 gap-2  max-w-6xl">
        <div>
          <h1 className="text-4xl font-bold text-start">Experiencia</h1>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-1 md:w-5xl gap-2 md:gap-4 p-4  ">
          {experienciaCards.map((experiencia, index) => (
            <div key={index}>
              <CardExperiencia CardProps={experiencia} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
