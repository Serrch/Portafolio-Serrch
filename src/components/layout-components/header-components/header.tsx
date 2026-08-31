"use client";
import Navbar from "./navbar";
import Logo from "./logo";
import SheetButton from "./sheet-button";
import { Button } from "@/components/ui/button";
import { ScrollLink } from "@/components/ui/scroll-links";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <ScrollLink href="/#contacto">Contactar</ScrollLink>
          </Button>
          <div className="md:hidden">
            <SheetButton />
          </div>
        </div>
      </div>
    </header>
  );
}
