"use client";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./config";

/** El idioma vive en el primer segmento de la ruta: /es/... o /en/... */
export function useLocale(): Locale {
  const seg = usePathname().split("/")[1];
  return isLocale(seg) ? seg : defaultLocale;
}
