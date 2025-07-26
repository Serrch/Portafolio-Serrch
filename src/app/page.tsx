import SobreMi from "@/components/section-components/sobre-mi-components/sobre-mi-main";
import Proyectos from "@/components/section-components/proyectos-components/proyectos-main";
import Experiencia from "@/components/section-components/experiencia-components/experiencia-main";
export default function Home() {
  return (
    <div className="bg-background flex flex-col gap-12 ">
      <SobreMi></SobreMi>
      <Experiencia></Experiencia>
      <Proyectos></Proyectos>
    </div>
  );
}
