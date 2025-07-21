import { sections } from "@/routes/routes";
export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="h-screen snap-start flex items-center justify-center "
    >
      <h1 className="text-4xl font-bold">{sections[2].title}</h1>
    </section>
  );
}
