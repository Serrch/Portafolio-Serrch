"use client";
import { experienciaCards } from "./experiencia-obj";
import TimelineContainer from "./experiencia-timeline/timeline-container";
export default function Experiencia() {
  return (
    <section
      id="2"
      className="md:min-h-screen snap-start flex items-center justify-center md:py-40 pt-8 border-t"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-start mb-2">Experiencia</h2>
        <div className="">
          <TimelineContainer
            experienciaInfo={experienciaCards}
          ></TimelineContainer>
        </div>
      </div>
    </section>
  );
}
