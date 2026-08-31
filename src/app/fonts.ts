import localFont from "next/font/local";

// Fuentes servidas desde el repo, no desde Google. next/font/google las baja
// en tiempo de compilacion, asi que sin red el build cae a la fuente del
// sistema. Son los mismos woff2 del subconjunto latin que servia Google.

// Variable: los titulos del rediseno necesitan 600/700, no solo 400.
export const outfit = localFont({
  src: "../fonts/outfit-latin.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-outfit",
  display: "swap",
});

// Mono para etiquetas, fechas y pastillas.
export const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  style: "normal",
  variable: "--font-jetbrains",
  display: "swap",
  // El ajuste automatico usa metricas de Arial: en una mono desalinea todo.
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});
