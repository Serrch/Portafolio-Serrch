"use client";
import Navbar from "./navbar";
import Logo from "./logo";
import SheetButton from "./sheet-button";
import LanguageToggle from "./language-toggle";
import { Button } from "@/components/ui/button";
import { ScrollLink } from "@/components/ui/scroll-links";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";

export default function Header() {
  const locale = useLocale();

  return (
    // Al abrir un modal, Radix bloquea el scroll con un margin-right en <body>
    // del ancho de la barra. El header es fixed y no lo hereda, asi que se
    // desalineaba del resto: aqui se descuenta lo mismo (0 sin modal abierto).
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md pr-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <ScrollLink href={`/${locale}#contacto`}>
              {ui[locale].header.contactar}
            </ScrollLink>
          </Button>
          <div className="md:hidden">
            <SheetButton />
          </div>
        </div>
      </div>
    </header>
  );
}
