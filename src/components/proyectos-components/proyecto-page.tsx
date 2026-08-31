import { ReactNode } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Pill from "@/components/ui/pill";
import GithubButton from "@/components/section-components/github-button";
import ImagenZoom from "@/components/image-zoom";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import { CardProyectoTypes } from "@/types/proyectos-types/proyectos-types";

/**
 * Piezas compartidas por las paginas de detalle de proyecto. Cada pagina solo
 * aporta su contenido; el estilo vive aqui para que no se separen con el tiempo.
 */

/** Cabecera completa: volver, estado, titulo, meta, entrada, stack y repo. */
export function ProyectoHeader({
  titulo,
  estado,
  meta,
  lead,
  techs,
  github,
}: {
  titulo: string;
  estado: CardProyectoTypes["status"];
  /** Empresa y/o fechas, en una linea. */
  meta: string;
  lead: ReactNode;
  techs: TechOptions[];
  github?: string;
}) {
  return (
    <>
      <Link
        href="/#proyectos"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <FiArrowLeft aria-hidden />
        Proyectos
      </Link>

      <p className="mt-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${
            estado === "Terminado" ? "bg-brand" : "bg-amber-400"
          }`}
        />
        {estado}
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        {titulo}
      </h1>

      <p className="mt-2 font-mono text-xs text-muted-foreground">{meta}</p>

      <div className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {lead}
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {techs.map((tech) => (
          <Pill key={tech} tech={tech} />
        ))}
      </ul>

      {github && (
        <div className="mt-6">
          <GithubButton link={github} />
        </div>
      )}
    </>
  );
}

/** Seccion con antetitulo y linea, el ritmo que usa toda la pagina. */
export function Seccion({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
        {titulo}
      </h2>
      <div className="mt-3 h-px bg-border" />
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** Lista de actividades: el punto de la marca en vez de una vineta. */
export function Puntos({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-muted-foreground">
          <span
            aria-hidden
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Par titulo + texto, para los bloques de contexto. */
export function Dato({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 first:mt-0">
      <h3 className="font-bold tracking-tight">{titulo}</h3>
      <div className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

/** Tarjetas cortas en rejilla, para describir piezas de una arquitectura. */
export function Tarjetas({
  items,
}: {
  items: { nombre: string; stack: string; texto: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((c) => (
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
  );
}

// Todas las capturas ocupan la misma caja y la rellenan recortando lo que
// sobra: es lo unico que las deja parejas teniendo resoluciones distintas.
// Este es el unico valor que hay que tocar si el recorte molesta.
const PROPORCION = "aspect-[16/9]";

/** Capturas con pie opcional, todas del mismo tamano. */
export function Galeria({
  imagenes,
}: {
  imagenes: {
    src: string;
    alt: string;
    ancho: number;
    alto: number;
    pie?: string;
  }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {imagenes.map((img) => (
        <figure key={img.src}>
          <div className={`${PROPORCION} overflow-hidden rounded-xl`}>
            <ImagenZoom
              src={img.src}
              alt={img.alt}
              ancho={img.ancho}
              alto={img.alto}
            />
          </div>
          {img.pie && (
            <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {img.pie}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
