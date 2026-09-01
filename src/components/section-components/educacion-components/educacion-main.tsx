import SectionHeading from "@/components/ui/section-heading";
import EducationCards from "./education-cards";
import { educacionObj } from "./education-obj";
import { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export default function Educacion({ locale }: { locale: Locale }) {
  const t = ui[locale].secciones.educacion;

  return (
    <section id="educacion" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="04" eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {educacionObj.map((item) => (
            <EducationCards
              key={item.title.es}
              educationInfo={item}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
