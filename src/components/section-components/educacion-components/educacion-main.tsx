import SectionHeading from "@/components/ui/section-heading";
import EducationCards from "./education-cards";
import { educacionObj } from "./education-obj";

export default function Educacion() {
  return (
    <section id="educacion" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="04" eyebrow="Formación" title="Educación" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {educacionObj.map((item) => (
            <EducationCards key={item.title} educationInfo={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
