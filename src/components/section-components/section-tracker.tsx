"use client";
import { useEffect } from "react";

const SECCIONES: Record<string, string> = {
  "1": "Sobre Mi",
  "2": "Experiencia",
  "3": "Proyectos",
  "4": "Educacion",
  "5": "Stack",
  "6": "Contacto",
};

export default function SectionTracker() {
  useEffect(() => {
    const vistas = new Set<string>();
    // El proxy borra la IP real, así que Umami geolocaliza mal. La zona horaria
    // la da el navegador sin red ni permisos, y ningún adblocker la toca.
    let zona = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          // Sin umami cargado no marcamos la sección: se reintenta al siguiente scroll.
          if (!entry.isIntersecting || vistas.has(id) || !window.umami) continue;
          vistas.add(id);
          window.umami.track("ver-seccion", {
            seccion: SECCIONES[id],
            ...(zona && { zona }), // solo en el primer evento de cada carga
          });
          zona = "";
        }
      },
      // Banda central del viewport: funciona igual si la sección es más
      // alta que la pantalla (en móvil no son min-h-screen).
      { rootMargin: "-40% 0px -40% 0px" }
    );

    for (const id of Object.keys(SECCIONES)) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
