"use client";
import { sections } from "@/routes/routes";
import { ScrollLink } from "@/components/ui/scroll-links";
export default function Navbar() {
  return (
    <div className="hidden md:flex justify-start md:justify-center items-center">
      <nav>
        <ul className="flex gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <ScrollLink
                href={section.link}
                className="transition duration-300 ease-in-out hover:text-emerald-600 hover:dark:text-emerald-400 hover:scale-105 hover:underline text-lg"
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
