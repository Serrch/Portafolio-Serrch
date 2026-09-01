import SectionHeading from "@/components/ui/section-heading";
import { experienciaCards } from "./experiencia-obj";
import ExperienciaList from "./experiencia-list";
import { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export default function Experiencia({ locale }: { locale: Locale }) {
  const t = ui[locale].secciones.experiencia;

  return (
    <section id="experiencia" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t.eyebrow}
          title={t.title}
          meta={`${experienciaCards.length} ${t.meta}`}
        />
        <ExperienciaList experiencias={experienciaCards} locale={locale} />
      </div>
    </section>
  );
}
