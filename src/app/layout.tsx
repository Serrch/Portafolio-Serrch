import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout-components/header-components/header";
import "./globals.css";
import { outfit } from "./fonts";
import { Toaster } from "sonner";
import Script from "next/script";

// Cambia esto por tu dominio real cuando lo tengas (afecta OG, canonical y sitemap).
export const SITE_URL = "https://portafolio-serrch.vercel.app";

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
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="text-foreground">
            <Header />
            <div className="pt-30 pb-10 px-4 sm:px-8 md:px-20 lg:px-30">
              {children}
              <Toaster position="top-center" className="bg-background" />
            </div>
          </main>
        </ThemeProvider>
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
