import { sections } from "@/routes/routes";
export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="h-screen snap-start flex items-center justify-center "
    >
      <h1 className="text-4xl font-bold">{sections[1].title}</h1>
    </section>
  );
}
