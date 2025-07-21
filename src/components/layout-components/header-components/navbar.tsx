"use client";
import { sections } from "@/routes/routes";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex justify-start md:justify-center items-center">
      <nav>
        <ul className="flex gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={section.link}
                className={`transition duration-300 ease-in-out hover:text-emerald-600 hover:dark:text-emerald-400 hover:scale-105 hover:underline text-lg`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
