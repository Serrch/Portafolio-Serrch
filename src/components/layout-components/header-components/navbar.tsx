"use client";
import { sections } from "@/routes/routes";
import { ScrollLink } from "@/components/ui/scroll-links";
import useActiveSection from "@/components/intersection-observer";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const sectionIds = sections.map((seccion) => seccion.id);
  const activeSection = pathname === "/" ? useActiveSection(sectionIds) : null;

  return (
    <div className="hidden md:flex justify-start md:justify-center items-center">
      <nav>
        <ul className="flex gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <ScrollLink
                href={section.link}
                className={`transition duration-300 ease-in-out hover:text-emerald-600 hover:dark:text-emerald-400 hover:scale-105 hover:underline text-lg ${
                  activeSection === section.id
                    ? "text-emerald-600 dark:text-emerald-400 font-bold underline"
                    : ""
                }`}
              >
                {section.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
