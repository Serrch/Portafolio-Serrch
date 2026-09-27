"use client";
import { useEffect } from "react";

const SECCIONES: Record<string, string> = {
  "sobre-mi": "Sobre Mi",
  experiencia: "Experiencia",
  proyectos: "Proyectos",
  educacion: "Educacion",
  stack: "Stack",
  contacto: "Contacto",
};
export default function SectionTracker() {
  useEffect(() => {
    const vistas = new Set<string>();
    // El proxy borra la IP real, así que Umami geolocaliza mal. La zona horaria
    // la da el navegador sin red ni permisos, y ningún adblocker la toca.
    let zona = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let actual = "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) actual = SECCIONES[id];
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
      // alta que la pantalla (ya ninguna mide una pantalla).
      { rootMargin: "-40% 0px -40% 0px" }
    );

    for (const id of Object.keys(SECCIONES)) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // Umami mide la duración entre eventos, no el tiempo en la página. Al
    // ocultar la pestaña (cerrarla, cambiar de pestaña) mandamos los segundos
    // desde la carga; el script usa keepalive, así que llega aunque se cierre.
    // Se repite en cada cambio de pestaña: el último evento es el que cuenta.
    const salir = () => {
      if (document.visibilityState !== "hidden") return;
      window.umami?.track("salida", {
        segundos: Math.round(performance.now() / 1000),
        ...(actual && { seccion: actual }),
      });
    };
    document.addEventListener("visibilitychange", salir);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", salir);
    };
  }, []);

  return null;
}
