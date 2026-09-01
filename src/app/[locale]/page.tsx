import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import SobreMi from "@/components/section-components/sobre-mi-components/sobre-mi-main";
import Proyectos from "@/components/section-components/proyectos-components/proyectos-main";
import Experiencia from "@/components/section-components/experiencia-components/experiencia-main";
import Stack from "@/components/section-components/stack-components/stack-main";
import Educacion from "@/components/section-components/educacion-components/educacion-main";
import Contacto from "@/components/section-components/contacto-components/contacto-main";
import SectionTracker from "@/components/section-components/section-tracker";
import Hero from "@/components/section-components/hero-main";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="flex flex-col gap-16">
      <SectionTracker />
      <Hero locale={locale} />
      <SobreMi locale={locale} />
      <Experiencia locale={locale} />
      <Proyectos locale={locale} />
      <Educacion locale={locale} />
      <Stack locale={locale} />
      <Contacto locale={locale} />
    </div>
  );
}
