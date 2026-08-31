import type { Metadata } from "next";
import {
  Galeria,
  ProyectoHeader,
  Puntos,
  Seccion,
  Tarjetas,
} from "@/components/proyectos-components/proyecto-page";
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

export default function FaceRecognitionApi() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <ProyectoHeader
        titulo="Face Recognition API"
        estado="Terminado"
        meta="Velarizon · Abril 2026 — Julio 2026"
        techs={TECHS}
        lead={
          <p>
            Control de acceso biométrico. Solución completa que abarca desde el
            registro de nuevos clientes en el gimnasio hasta la gestión de
            membresías y accesos mediante modelos de reconocimiento facial. La
            API, construida con FastAPI y PostgreSQL, es el núcleo del sistema:
            sirve tanto a la app móvil en Expo como a la de escritorio en
            PySide6.
          </p>
        }
      />

      <div className="mt-10">
        <Galeria
          imagenes={[
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
          ]}
        />
      </div>

      <Seccion titulo="Mi trabajo">
        <Puntos
          items={[
            "Diseñé el modelo relacional en PostgreSQL para socios, membresías y registros de asistencia.",
            "Construí la API con FastAPI: alta y baja de socios, alta de rostros y consulta de asistencia.",
            "Integré el reconocimiento facial: la API recibe la captura, obtiene el vector del rostro y lo compara contra los socios registrados.",
            "Expuse el registro de asistencia en tiempo real para que ambos clientes reflejen el acceso al momento.",
            "Documenté los endpoints y validé cada uno antes de conectarlos con los clientes.",
          ]}
        />
      </Seccion>

      <Seccion titulo="Arquitectura">
        <Tarjetas
          items={[
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
          ]}
        />
      </Seccion>
    </main>
  );
}
