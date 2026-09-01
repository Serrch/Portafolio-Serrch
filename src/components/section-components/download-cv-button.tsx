"use client";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";

export default function DownloadCVButton({
  variant = "outline",
  size = "sm",
}: {
  variant?: "default" | "outline";
  size?: "sm" | "default" | "lg";
}) {
  const locale = useLocale();
  const t = ui[locale];

  return (
    <a
      href={t.cv.href}
      download={t.cv.nombre}
      onClick={() => window.umami?.track("descarga-cv", { idioma: locale })}
    >
      <Button variant={variant} size={size} className="cursor-pointer">
        <FiDownload /> {t.botones.descargarCV}
      </Button>
    </a>
  );
}
