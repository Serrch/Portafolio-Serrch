import { ImageResponse } from "next/og";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { content } from "@/i18n/content";

// `alt` es un export estatico, asi que no puede variar por idioma: se queda en
// espanol. El texto pintado dentro de la imagen si cambia.
export const alt = content[defaultLocale].og.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  ".NET",
  "Python",
  "PostgreSQL",
];

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = content[isLocale(locale) ? locale : defaultLocale].og;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1b1b25",
          color: "#f8f3f4",
          padding: "80px",
          borderBottom: "16px solid #10b981",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#34d399" }}>
          {t.antetitulo}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 700,
            marginTop: 16,
            lineHeight: 1.1,
          }}
        >
          Sergio Pérez Rivas
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            marginTop: 12,
            color: "#c9c4c6",
          }}
        >
          {t.subtitulo}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 48 }}>
          {STACK.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                fontSize: 28,
                padding: "10px 24px",
                borderRadius: 999,
                border: "2px solid #3f3f52",
                color: "#e5e1e2",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
