"use client";
import ContactGrid from "./contact-grid";
import SectionHeading from "@/components/ui/section-heading";
export default function Contacto() {
  return (
    <section
      id="contacto"
      className="flex items-center justify-center pt-8 border-t scroll-mt-20"
    >
      <div className="flex flex-col gap-4 max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <SectionHeading index="06" eyebrow="Contacto" title="Contacto" />

        <ContactGrid />
      </div>
    </section>
  );
}
