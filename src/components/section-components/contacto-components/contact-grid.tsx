"use client";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { CORREO, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const ENLACES = [
  { label: "Correo", texto: CORREO, href: `mailto:${CORREO}`, evento: "contacto-correo" },
  { label: "GitHub", texto: "github.com/Serrch", href: GITHUB_URL, evento: "contacto-github" },
  { label: "LinkedIn", texto: "in/serrrch", href: LINKEDIN_URL, evento: "contacto-linkedin" },
];

export default function ContactGrid() {
  const [copiado, setCopiado] = useState(false);

  async function copiarCorreo() {
    await navigator.clipboard.writeText(CORREO);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <dl className="divide-y divide-border">
      {ENLACES.map((enlace) => (
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
            {enlace.label === "Correo" && (
              // mailto: no hace nada si el visitante no tiene cliente de correo
              // configurado, que en escritorio es lo comun.
              <button
                type="button"
                onClick={copiarCorreo}
                aria-label={copiado ? "Correo copiado" : "Copiar correo"}
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
