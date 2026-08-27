"use client";
import { experienciaCards } from "./experiencia-obj";
import TimelineContainer from "./experiencia-timeline/timeline-container";
export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="flex flex-col items-center justify-start pt-8 md:pt-12 md:pb-10 border-t scroll-mt-28"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-start mb-2">Experiencia</h2>
        <div className="">
          <TimelineContainer experienciaInfo={experienciaCards} />
        </div>
      </div>
    </section>
  );
}
