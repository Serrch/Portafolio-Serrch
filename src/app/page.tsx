import SobreMi from "@/components/section-components/sobre-mi-components/sobre-mi-main";
import Proyectos from "@/components/section-components/proyectos-components/proyectos-main";
import Experiencia from "@/components/section-components/experiencia-components/experiencia-main";
import Stack from "@/components/section-components/stack-components/stack-main";
import Educacion from "@/components/section-components/educacion-components/educacion-main";
import Contacto from "@/components/section-components/contacto-components/contacto-main";
import SectionTracker from "@/components/section-components/section-tracker";
import Hero from "@/components/section-components/hero-main";
export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <SectionTracker />
      <Hero />
      <SobreMi></SobreMi>
      <Experiencia></Experiencia>
      <Proyectos></Proyectos>
      <Educacion></Educacion>
      <Stack></Stack>
      <Contacto></Contacto>
    </div>
  );
}
