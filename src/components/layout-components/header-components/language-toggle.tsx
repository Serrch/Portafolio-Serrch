"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";

export default function LanguageToggle() {
  const pathname = usePathname();
  const locale = useLocale();
  const otro = locale === "es" ? "en" : "es";
  const t = ui[locale].header;

  // La misma pagina en el otro idioma: solo cambia el primer segmento. Es un
  // enlace real para que el buscador encuentre la version alterna.
  const segmentos = pathname.split("/");
  segmentos[1] = otro;

  return (
    <Button asChild variant="outline" size="sm">
      <Link
        href={segmentos.join("/")}
        hrefLang={otro}
        aria-label={t.cambiarIdioma}
        className="cursor-pointer"
      >
        <Languages aria-hidden /> {t.otroIdioma}
      </Link>
    </Button>
  );
}
