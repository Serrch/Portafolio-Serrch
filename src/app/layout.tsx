import type { Metadata } from "next";
import Header from "@/components/layout-components/header-components/header";
import "./globals.css";
import { outfit, jetbrainsMono } from "./fonts";
import { Toaster } from "sonner";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sergio Pérez Rivas | Desarrollador Fullstack",
    template: "%s | Sergio Pérez Rivas",
  },
  description:
    "Ingeniero en Software y Desarrollador Fullstack. Construyo plataformas web y APIs con TypeScript, React, Next.js, .NET, Python y PostgreSQL. Portafolio, experiencia y CV.",
  keywords: [
    "Sergio Pérez Rivas",
    "Desarrollador Fullstack",
    "Ingeniero en Software",
    "TypeScript",
    "React",
    "Next.js",
    ".NET",
    "PostgreSQL",
    "FastAPI",
  ],
  authors: [{ name: "Sergio Enrique Pérez Rivas", url: SITE_URL }],
  creator: "Sergio Enrique Pérez Rivas",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Sergio Pérez Rivas — Desarrollador Fullstack",
    title: "Sergio Pérez Rivas | Desarrollador Fullstack",
    description:
      "Ingeniero en Software y Desarrollador Fullstack. TypeScript, React, Next.js, .NET, Python y PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Pérez Rivas | Desarrollador Fullstack",
    description:
      "Ingeniero en Software y Desarrollador Fullstack. TypeScript, React, Next.js, .NET, Python y PostgreSQL.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head />
      <body className="font-sans antialiased">
        <main>
          <Header />
          <div className="pt-16 pb-16">
            {children}
            <Toaster position="top-center" className="bg-background" />
          </div>
        </main>
        <Script
          src="/umami/script.js"
          data-website-id="b76579dc-b129-491c-a0dd-5e1b6745057f"
          data-host-url="/umami"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
