"use client";
import { sectionIds, noSectionIds } from "@/routes/routes";
import { ScrollLink } from "@/components/ui/scroll-links";
import useActiveSection from "@/lib/use-active-section";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = ui[locale];

  const activeSection = useActiveSection(
    pathname === `/${locale}` ? sectionIds : noSectionIds
  );

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
        {sectionIds.map((id) => (
          <li key={id}>
            <ScrollLink
              href={`/${locale}#${id}`}
              className={`text-sm transition-colors ${
                activeSection === id
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav[id]}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
