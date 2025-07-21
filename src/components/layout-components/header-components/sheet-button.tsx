import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { sections } from "@/routes/routes";

export default function SheetButton() {
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
        </SheetHeader>
        <ul className="space-y-3 px-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={section.link}
                className="transition duration-300 ease-in-out hover:text-emerald-600 hover:dark:text-emerald-400 hover:scale-105 hover:underline text-md"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
