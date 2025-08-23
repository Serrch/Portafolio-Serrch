import ContactGrid from "./contact-grid";
export default function Contacto() {
  return (
    <section
      id="contacto"
      className="md:min-h-screen snap-start flex items-center justify-center pt-8 md:pt-30 border-t"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-start">Contacto</h2>

        <ContactGrid />
      </div>
    </section>
  );
}
