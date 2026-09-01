"use client";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { CORREO, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";

export default function ContactGrid() {
  const t = ui[useLocale()];
  const [copiado, setCopiado] = useState(false);

  const enlaces = [
    {
      label: t.secciones.contacto.correo,
      texto: CORREO,
      href: `mailto:${CORREO}`,
      evento: "contacto-correo",
      esCorreo: true,
    },
    {
      label: "GitHub",
      texto: "github.com/Serrch",
      href: GITHUB_URL,
      evento: "contacto-github",
      esCorreo: false,
    },
    {
      label: "LinkedIn",
      texto: "in/serrrch",
      href: LINKEDIN_URL,
      evento: "contacto-linkedin",
      esCorreo: false,
    },
  ];

  async function copiarCorreo() {
    await navigator.clipboard.writeText(CORREO);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <dl className="divide-y divide-border">
      {enlaces.map((enlace) => (
        <div
          key={enlace.label}
          className="flex items-center justify-between gap-4 py-4"
        >
          <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {enlace.label}
          </dt>
          <dd className="flex items-center gap-2">
            <a
              href={enlace.href}
              {...(enlace.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => window.umami?.track(enlace.evento)}
              className="rounded-sm text-sm font-medium break-all transition-colors hover:text-brand"
            >
              {enlace.texto}
            </a>
            {enlace.esCorreo && (
              // mailto: no hace nada si el visitante no tiene cliente de correo
              // configurado, que en escritorio es lo comun.
              <button
                type="button"
                onClick={copiarCorreo}
                aria-label={copiado ? t.contacto.copiado : t.contacto.copiar}
                className="shrink-0 cursor-pointer rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {copiado ? <FiCheck className="text-brand" /> : <FiCopy />}
              </button>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
