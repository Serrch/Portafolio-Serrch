"use client";
import ContactGrid from "./contact-grid";
export default function Contacto() {
  return (
    <section
      id="6"
      className="md:min-h-[calc(100vh_-_7rem)] flex items-center justify-center pt-8 border-t snap-start scroll-mt-28"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-start">Contacto</h2>

        <ContactGrid />
      </div>
    </section>
  );
}
