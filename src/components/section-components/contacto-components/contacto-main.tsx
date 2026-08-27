import ContactGrid from "./contact-grid";
import DownloadCVButton from "../download-cv-button";
import { Button } from "@/components/ui/button";
import { CORREO } from "@/lib/site";

export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
                06 — Contacto
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                ¿Trabajamos juntos?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Estoy abierto a oportunidades como Desarrollador Fullstack.
                Escríbeme y te respondo a la brevedad.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={`mailto:${CORREO}`}>Enviar correo</a>
                </Button>
                <DownloadCVButton size="lg" />
              </div>
            </div>

            <ContactGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
