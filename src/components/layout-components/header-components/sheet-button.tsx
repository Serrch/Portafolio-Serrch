"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { sectionIds, noSectionIds } from "@/routes/routes";
import useActiveSection from "@/lib/use-active-section";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";
import { usePathname } from "next/navigation";
import { ScrollLink } from "@/components/ui/scroll-links";

export default function SheetButton() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = ui[locale];
  const enHome = pathname === `/${locale}`;
  const activeSection = useActiveSection(enHome ? sectionIds : noSectionIds);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">{t.header.menu}</SheetTitle>
          <SheetDescription className="sr-only">
            {t.header.menuDesc}
          </SheetDescription>
        </SheetHeader>
        <ul className="space-y-3 px-4">
          {sectionIds.map((id) => (
            <li key={id}>
              <ScrollLink
                href={`/${locale}#${id}`}
                className={`transition duration-300 ease-in-out hover:text-emerald-600 hover:dark:text-emerald-400 hover:scale-105 hover:underline text-lg ${
                  enHome && activeSection === id
                    ? "text-emerald-600 dark:text-emerald-400 font-bold underline"
                    : ""
                }`}
              >
                {t.nav[id]}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
