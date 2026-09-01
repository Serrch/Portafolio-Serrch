import SectionHeading from "@/components/ui/section-heading";
import { experienciaCards } from "../experiencia-components/experiencia-obj";
import { educacionObj } from "../educacion-components/education-obj";
import { formatMonth, Locale } from "@/i18n/config";
import { content } from "@/i18n/content";
import { ui } from "@/i18n/ui";

export default function SobreMi({ locale }: { locale: Locale }) {
  const t = content[locale].sobreMi;
  const seccion = ui[locale].secciones.sobreMi;

  // Se derivan del mismo dato que pintan las otras secciones para que no se
  // desincronicen al actualizar el CV.
  const primerPuesto = experienciaCards.at(-1);
  const desde = primerPuesto && formatMonth(primerPuesto.start, locale);
  const formacion = educacionObj.find((e) => e.kind === "degree")?.title[locale];

  const RESUMEN = [
    {
      label: t.resumen.experiencia,
      // En espanol los meses van en minuscula dentro de la frase; en ingles no.
      value:
        desde &&
        `${t.resumen.desde} ${locale === "es" ? desde.toLowerCase() : desde}`,
    },
    { label: t.resumen.enfoque, value: t.resumen.enfoqueValor },
    { label: t.resumen.formacion, value: formacion },
  ];

  return (
    <section id="sobre-mi" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow={seccion.eyebrow}
          title={seccion.title}
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-12">
          <div className="space-y-4 text-muted-foreground md:text-lg md:leading-relaxed">
            {t.parrafos.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>

          <dl className="h-fit space-y-6 rounded-xl border border-border bg-card p-6">
            {RESUMEN.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1.5 font-medium leading-snug">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
