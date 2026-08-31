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

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        Control de acceso biométrico para gimnasios. La API resuelve el registro
        de socios, el reconocimiento del rostro y la asistencia en tiempo real,
        y sirve a dos clientes: una app móvil en Expo y una de escritorio en
        PySide6.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {TECHS.map((tech) => (
          <Pill key={tech} tech={tech} />
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-center rounded-xl border border-border bg-card p-10">
        <Image
          src="/assets/img-proyectos/profesionales/face-recognition.png"
          alt="Face Recognition API"
          width={240}
          height={240}
          className="object-contain"
        />
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
