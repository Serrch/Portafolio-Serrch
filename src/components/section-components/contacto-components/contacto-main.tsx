import ContactGrid from "./contact-grid";
import DownloadCVButton from "../download-cv-button";
import { Button } from "@/components/ui/button";
import { CORREO } from "@/lib/site";
import { Locale } from "@/i18n/config";
import { content } from "@/i18n/content";
import { ui } from "@/i18n/ui";

export default function Contacto({ locale }: { locale: Locale }) {
  const t = content[locale].contacto;
  const chrome = ui[locale];

  return (
    <section id="contacto" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
                06 — {chrome.secciones.contacto.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                {t.titulo}
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">{t.texto}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={`mailto:${CORREO}`}>{chrome.botones.enviarCorreo}</a>
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
