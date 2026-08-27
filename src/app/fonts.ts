import { Outfit, JetBrains_Mono } from "next/font/google";

// Outfit variable: los titulos del rediseno necesitan 600/700, no solo 400.
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Mono para etiquetas, fechas y pastillas. --font-mono apuntaba a una variable
// de Geist que nunca se importo, asi que hasta ahora caia a la fuente del sistema.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
