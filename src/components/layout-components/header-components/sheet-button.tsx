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
import { sections } from "@/routes/routes";
import useActiveSection from "@/components/intersection-observer";
import { usePathname } from "next/navigation";
import { ScrollLink } from "@/components/ui/scroll-links";

export default function SheetButton() {
  const pathname = usePathname();
  const sectionIds = pathname === "/" ? sections.map((s) => s.id) : [];

  const activeSection = useActiveSection(sectionIds);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">Navegación</SheetTitle>
          <SheetDescription className="sr-only">
            Menú lateral con enlaces de navegación del portafolio.
          </SheetDescription>
        </SheetHeader>
        <ul className="space-y-3 px-4">
          {sections.map((section) => (
            <li key={section.id}>
              <ScrollLink
                href={section.link}
                className={`transition duration-300 ease-in-out hover:text-emerald-600 hover:dark:text-emerald-400 hover:scale-105 hover:underline text-lg ${
                  pathname === "/" && activeSection === section.id
                    ? "text-emerald-600 dark:text-emerald-400 font-bold underline"
                    : ""
                }`}
              >
                {section.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
