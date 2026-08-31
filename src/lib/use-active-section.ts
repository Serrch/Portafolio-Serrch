"use client";
import { useEffect, useState } from "react";

// Línea de corte: justo debajo del header fijo (64px) más un poco de holgura.
// La sección activa es la última cuyo borde superior ya pasó esta línea.
const LINEA = 96;

export default function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const calcular = () => {
      // Al final de la página la última sección nunca alcanza la línea, así
      // que se marca directamente.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      let actual: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= LINEA) actual = id;
      }
      setActiveSection(actual);
    };

    calcular();
    window.addEventListener("scroll", calcular, { passive: true });
    window.addEventListener("resize", calcular);
    return () => {
      window.removeEventListener("scroll", calcular);
      window.removeEventListener("resize", calcular);
    };
  }, [sectionIds]);

  return activeSection;
}
