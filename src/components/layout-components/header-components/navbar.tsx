"use client";
import { sections, sectionIds, noSectionIds } from "@/routes/routes";
import { ScrollLink } from "@/components/ui/scroll-links";
import useActiveSection from "@/lib/use-active-section";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const activeSection = useActiveSection(
    pathname === "/" ? sectionIds : noSectionIds
  );

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
        {sections.map((section) => (
          <li key={section.id}>
            <ScrollLink
              href={section.link}
              className={`text-sm transition-colors ${
                activeSection === section.id
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
