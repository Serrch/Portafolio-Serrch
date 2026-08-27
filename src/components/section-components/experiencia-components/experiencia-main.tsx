import SectionHeading from "@/components/ui/section-heading";
import { experienciaCards } from "./experiencia-obj";
import ExperienciaList from "./experiencia-list";

export default function Experiencia() {
  return (
    <section id="experiencia" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Trayectoria"
          title="Experiencia"
          meta={`${experienciaCards.length} puestos`}
        />
        <ExperienciaList experiencias={experienciaCards} />
      </div>
    </section>
  );
}
