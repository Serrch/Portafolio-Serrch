export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const isLocale = (v: string | undefined): v is Locale =>
  locales.includes(v as Locale);

/** Texto que existe en los dos idiomas, colocado junto al dato que describe. */
export type I18nText = Record<Locale, string>;

/**
 * "Abril 2026" / "April 2026" a partir de "2026-04". Intl da el nombre del mes
 * en cada idioma; la mayuscula la pone el diseno, no el idioma (en espanol los
 * meses van en minuscula, pero aqui son etiquetas sueltas).
 */
export function formatMonth(iso: string, locale: Locale) {
  const [year, month] = iso.split("-").map(Number);
  const nombre = new Intl.DateTimeFormat(locale, {
    month: "long",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
  return `${nombre[0].toUpperCase()}${nombre.slice(1)} ${year}`;
}
