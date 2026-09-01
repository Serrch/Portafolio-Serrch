"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";

export default function RedirectButton({
  link,
  texto,
  onClick,
}: {
  link: string;
  texto?: string;
  onClick?: () => void;
}) {
  const t = ui[useLocale()].botones;
  // Los proyectos con sitio publicado apuntan fuera del portafolio: abrirlos en
  // la misma pestana deja al visitante sin camino de vuelta.
  const esExterno = link.startsWith("http");

  const contenido = (
    <>
      {texto ?? (esExterno ? t.visitarSitio : t.verProyecto)}
      {esExterno ? <FiExternalLink /> : <FiArrowRight />}
    </>
  );

  if (esExterno) {
    return (
      <Button asChild variant="link" size="sm" className="h-auto px-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {contenido}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant="link" size="sm" className="h-auto px-0">
      <Link href={link} onClick={onClick}>
        {contenido}
      </Link>
    </Button>
  );
}
