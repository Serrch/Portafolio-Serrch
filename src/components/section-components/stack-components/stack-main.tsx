import SectionHeading from "@/components/ui/section-heading";
import { languageObj, frameworkObj, databaseObj, otrosObj } from "./tech-obj";
import Pill from "@/components/ui/pill";
import { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export default function Stack({ locale }: { locale: Locale }) {
  const t = ui[locale].secciones.stack;
  const categorias = [
    { label: t.lenguajes, techs: languageObj },
    { label: t.frameworks, techs: frameworkObj },
    { label: t.bases, techs: databaseObj },
    { label: t.otros, techs: otrosObj },
  ];

  return (
    <section id="stack" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="05" eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-4 divide-y divide-border">
          {categorias.map((categoria) => (
            <div
              key={categoria.label}
              className="grid gap-3 py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start md:gap-8"
            >
              <h3 className="font-semibold">{categoria.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {categoria.techs.map((tech) => (
                  <Pill key={tech.name} tech={tech.name} interactive />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{t.hint}</p>
      </div>
    </section>
  );
}
