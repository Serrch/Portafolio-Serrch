import SectionHeading from "@/components/ui/section-heading";
import { experienciaCards } from "../experiencia-components/experiencia-obj";
import { titulosObj } from "../educacion-components/education-obj";

// Se derivan del mismo dato que pintan las otras secciones para que no se
// desincronicen al actualizar el CV.
const desde = experienciaCards.at(-1)?.stDate.replace(/\s*-\s*$/, "");
const formacion = titulosObj[0]?.title;

const RESUMEN = [
  { label: "Experiencia", value: `Desde ${desde?.toLowerCase()}` },
  {
    label: "Enfoque",
    value: "Plataformas empresariales, APIs REST, apps multiplataforma",
  },
  { label: "Formación", value: formacion },
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" eyebrow="Perfil" title="Sobre mí" />

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-12">
          <div className="space-y-4 text-muted-foreground md:text-lg md:leading-relaxed">
            <p>
              Soy Ingeniero en Software y Desarrollador Fullstack con
              experiencia profesional en desarrollo web, plataformas
              empresariales y aplicaciones multiplataforma.
            </p>
            <p>
              Me especializo en construir soluciones escalables con TypeScript,
              React, Next.js y PostgreSQL, integrando backends robustos con
              interfaces funcionales y bien estructuradas. Aplico principios de
              Clean Code y SOLID para garantizar calidad y mantenibilidad en
              cada proyecto.
            </p>
            <p>
              He trabajado en entornos de mejora continua, soporte de
              plataformas ERP, sistemas financieros y aplicaciones con
              despliegue en entornos cloud como Vercel y Supabase.
            </p>
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
