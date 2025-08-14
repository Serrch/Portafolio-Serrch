"use client";
import CardExperiencia from "./card-experiencia";
import CardExperiencia2 from "./card-experiencia2";
import { experienciaCards } from "./experiencia-obj";
export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="md:min-h-screen snap-start flex items-center justify-center md:py-40 pt-8 border-t"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold text-start">Experiencia</h2>
        <div className="flex flex-col md:grid md:grid-cols-1 md:w-6xl gap-2 md:gap-6 p-4">
          {experienciaCards.map((experiencia, index) => (
            <div key={index}>
              <CardExperiencia2 CardProps={experiencia} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
