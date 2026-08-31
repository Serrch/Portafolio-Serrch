import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Pill from "@/components/ui/pill";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

export const metadata: Metadata = {
  title: "Face Recognition API",
  description:
    "API de control de acceso biométrico para gimnasios con FastAPI y PostgreSQL: registro de socios, reconocimiento facial y asistencia en tiempo real.",
};

const TECHS: TechOptions[] = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Expo",
];

const TRABAJO = [
  "Diseñé el modelo relacional en PostgreSQL para socios, membresías y registros de asistencia.",
  "Construí la API con FastAPI: alta y baja de socios, alta de rostros y consulta de asistencia.",
  "Integré el reconocimiento facial: la API recibe la captura, obtiene el vector del rostro y lo compara contra los socios registrados.",
  "Expuse el registro de asistencia en tiempo real para que ambos clientes reflejen el acceso al momento.",
  "Documenté los endpoints y validé cada uno antes de conectarlos con los clientes.",
];

const CAPTURAS = [
  {
    src: "/assets/img-proyectos/profesionales/face-recognition/2.png",
    alt: "Pantalla de check-in en la puerta del gimnasio con el rostro detectado",
    pie: "Check-in en puerta: la cámara detecta el rostro y confirma el acceso sin que el socio tenga que hacer nada más.",
  },
  {
    src: "/assets/img-proyectos/profesionales/face-recognition/1.png",
    alt: "Ficha del socio con su ciclo de membresía y el calendario de visitas del mes",
    pie: "Ficha del socio tras el acceso: estado de la membresía, próximo pago y calendario de visitas del mes.",
  },
];

const CLIENTES = [
  {
    nombre: "API",
    stack: "FastAPI · PostgreSQL",
    texto:
      "Núcleo del sistema. Concentra el modelo de datos, el reconocimiento facial y las reglas de acceso; los dos clientes solo consumen sus endpoints.",
  },
  {
    nombre: "App móvil",
    stack: "React Native (Expo)",
    texto:
      "Captura el rostro desde la cámara del teléfono y consulta la asistencia. Pensada para el personal que se mueve dentro del gimnasio.",
  },
  {
    nombre: "Escritorio",
    stack: "PySide6",
    texto:
      "Puesto fijo en recepción: registra socios, toma la foto de alta y controla el acceso durante la operación diaria.",
  },
];

export default function FaceRecognitionApi() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/#proyectos"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <FiArrowLeft aria-hidden />
        Proyectos
      </Link>

      <p className="mt-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
        Terminado
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        Face Recognition API
      </h1>

      <p className="mt-2 font-mono text-xs text-muted-foreground">
        Velarizon · Abril 2026 — Julio 2026
      </p>

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        Control de acceso biométrico. Solución completa que abarca desde el
        registro de nuevos clientes en el gimnasio hasta la gestión de
        membresías y accesos mediante modelos de reconocimiento facial. La API,
        construida con FastAPI y PostgreSQL, es el núcleo del sistema: sirve
        tanto a la app móvil en Expo como a la de escritorio en PySide6.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {TECHS.map((tech) => (
          <Pill key={tech} tech={tech} />
        ))}
      </ul>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {CAPTURAS.map((cap) => (
          <figure key={cap.src}>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src={cap.src}
                alt={cap.alt}
                width={886}
                height={500}
                sizes="(max-width: 768px) 100vw, 560px"
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {cap.pie}
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
          Mi trabajo
        </h2>
        <div className="mt-3 h-px bg-border" />
        <ul className="mt-6 space-y-3">
          {TRABAJO.map((item) => (
            <li
              key={item}
              className="flex gap-3 leading-relaxed text-muted-foreground"
            >
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
          Arquitectura
        </h2>
        <div className="mt-3 h-px bg-border" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {CLIENTES.map((c) => (
            <article
              key={c.nombre}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="text-lg font-bold tracking-tight">{c.nombre}</h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {c.stack}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.texto}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
