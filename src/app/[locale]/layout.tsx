import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout-components/header-components/header";
import "../globals.css";
import { outfit, jetbrainsMono } from "../fonts";
import { Toaster } from "sonner";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import { isLocale, locales } from "@/i18n/config";
import { content } from "@/i18n/content";

// Solo /es y /en existen: cualquier otro primer segmento es un 404, no una
// pagina generada al vuelo.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = content[locale].meta;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: "%s | Sergio Pérez Rivas" },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Sergio Enrique Pérez Rivas", url: SITE_URL }],
    creator: "Sergio Enrique Pérez Rivas",
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: `${SITE_URL}/${locale}`,
      siteName: meta.siteName,
      title: meta.title,
      description: meta.short,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.short,
    },
    icons: {
      icon: "/icon.svg",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
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
